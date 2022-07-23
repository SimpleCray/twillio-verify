import { AppActionTypes } from './app.types';

const initialState = {
    codeSent: false,
    phoneVerified: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case AppActionTypes.CODE_SENT:
            return {
                ...state,
                codeSent: true,
            }

        case AppActionTypes.PHONE_VERIFIED:
            return {
                ...state,
                phoneVerified: true,
            }

        case AppActionTypes.RESET_VERIFY:
            return {
                ...initialState,
            }
        
        default:
            return state;
    }
}

export default appReducer;