import { DIGIT_CLICK, SIGN_CLICK } from '../actions/types';

const initialState = {
  text: '0',
  isCalculated: false,
  blockSigns: true,

};

export default function (state = initialState, action) {

  switch (action.type) {

    case DIGIT_CLICK:
      const digit = action.digit.toString();
        if(state.text === '0') {
          return{
            ...state,
            text: digit,
            isCalculated: false,
            blockSigns: false
          }
        }
      return {
        ...state,
        text: state.text + digit,
        isCalculated: false,
        blockSigns: false
      }

    case SIGN_CLICK:
      const expr = state.text.toString();
      const lastInputIsSign = /\W+/.test(expr[expr.length - 1]);
      const lastInputIsParan = expr[expr.length - 1] === ')';

     if (action.sign === 'DEL'){
       return {
         ...state,
         text: expr.slice(0,-1)
       }
     }
      
      if(lastInputIsSign && action.sign !== 'C'){
        return {
          ...state,
        }
      }

      if(action.sign === '(' && expr === '0'){
        
          return{
            ...state,
            text:action.sign
          }
        
      }
     

      if (action.sign === '=') {
        const lastInputIsDot = expr.indexOf('.') === expr.length - 1
        if (lastInputIsDot) {
          return {
            ...state
          }
        }

        if (lastInputIsParan){
          return{
            ...state,
            text: eval(expr),
            isCalculated: true
          }
        }
        if (state.blockSigns) {
          return {
            ...state
          }
        }
        

        return {
          ...state,
          text: eval(expr),
          isCalculated: true,
          blockSigns: false
        }
      }

      if (action.sign === 'C'){
        return {
          ...state,
          text: '0'
        }
      }


      return {
        ...state,
        text: state.text + action.sign,
        isCalculated: false,
        blockSigns: true
      }

      


    default:
      return state;
  }
}