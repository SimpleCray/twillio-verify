import { MessageActionTypes } from './message.types';

const initialState = {
    message: '',
    variant: '',
    duration: 5000,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case MessageActionTypes.SHOW_MESSAGE:
            return {
                ...state,
                ...action.payload,
            }

        case MessageActionTypes.CLEAR_MESSAGE:
            return {
                ...initialState,
            }
        
        default:
            return state;
    }
}

export default messageReducer;