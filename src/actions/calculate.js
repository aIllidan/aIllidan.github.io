import { DIGIT_CLICK, SIGN_CLICK } from './types';

export const digitClick = (digit) => {
    return {
        type: DIGIT_CLICK,
    digit

    }
}

export const signClick = (sign) => {
   return{ 
       type: SIGN_CLICK,
    sign
   }
}