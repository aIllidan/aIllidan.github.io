import { DIGIT_CLICK, SIGN_CLICK } from '../actions/types';
import math from 'mathjs';

const initialState = {
  text: '',
  isLongExpr: '',
  blockSigns: true,
  err: 'first calculation'

};

export default function (state = initialState, action) {

  switch (action.type) {

    case DIGIT_CLICK:
      const digit = action.digit.toString();
      if (state.text === '0') {
        return {
          ...state,
          text: digit,
          isLongExpr: '',
          blockSigns: false
        }
      }

      if(state.text.length > 15) {
        return {
          ...state,
          isLongExpr: 'long',
          text: state.text + digit,
          blockSigns: false
        }
      }

      return {
        ...state,
        text: state.text + digit,
        isLongExpr: '',
        blockSigns: false
      }

    case SIGN_CLICK:
      const expr = state.text.toString();
      const lastInputIsSign = /\W+/.test(expr[expr.length - 1]);
      const lastInputIsParan = expr[expr.length - 1] === ')';

      if (action.sign === 'DEL') {
        return {
          ...state,
          text: expr.slice(0, -1)
        }
      }

      if (action.sign === '=') {
        const lastInputIsDot = expr.indexOf('.') === expr.length - 1
        if (lastInputIsDot) {
          return {
            ...state
          }
        }

        try {
          if (expr.length > 15) {
            return {
              ...state,
              text: math.eval(expr).toExponential(6).toString(),
              isLongExpr: 'long',
              err: expr + ' ='
            }
          } else if (lastInputIsParan){
            return {
              ...state,
              text: math.eval(expr).toString(),
              
              err: expr + ' ='
            }
          } else {
            return {
              ...state,
              text: math.eval(expr).toString(),
              
              err: expr + ' ='
            }
          }
        } catch (err) {
          return {
            ...state,
            err: 'Bad expression!'
          }
        }
      }

      if (lastInputIsParan) {
        return{
          ...state,
          text: expr + action.sign,
          
          blockSigns: false
        }
      }

      if (lastInputIsSign
         && action.sign !== 'C' 
         && action.sign !== '=' 
         && action.sign !== '('
         ) {
        return {
          ...state,
        }
      }
      

     

      if (action.sign === 'C') {
        return {
          ...state,
          text: '',
          err: ''
        }
      }

      return {
        ...state,
        text: state.text + action.sign,
        
        blockSigns: true
      }

    default:
      return state;
  }
}