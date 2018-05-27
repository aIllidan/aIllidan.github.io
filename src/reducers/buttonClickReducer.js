import { DIGIT_CLICK, SIGN_CLICK } from '../actions/types';

const initialState = {
  text: '',
  isCalculated: false,
  blockSigns: true,
  err: 'first calculation'

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
      
      if(lastInputIsSign && action.sign !== 'C' && action.sign !== '='  && action.sign !== '('){
        return {
          ...state,
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
          if (lastInputIsParan){
          return{
            ...state,
            text: eval(expr),
            isCalculated: true,
            err: expr + ' ='
          }
        }
        }catch(err){
          return{
            ...state,
            err: 'Bad expression!'
          }
        }
        

       try{ return {
          ...state,
          text: eval(expr),
          isCalculated: true,
          blockSigns: false,
          err: expr + ' ='
        }
      } catch(err){
        return {
          ...state,
          err: 'Bad expression!'
        }
      }
    }

      if (action.sign === 'C'){
        return {
          ...state,
          text: '',
          err: ''
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