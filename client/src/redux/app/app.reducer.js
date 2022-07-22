import { AppActionTypes } from './app.types';

const initialState = {
    codeSent: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case AppActionTypes.CODE_SENT:
            return {
                ...state,
                codeSent: true,
            }
        
        default:
            return state;
    }
}

export default appReducer;