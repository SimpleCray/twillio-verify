import { AppActionTypes } from './app.types';

const initialState = {
    test: 'test'
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case AppActionTypes.TEST_ACTION:
            return {
                ...state,
                user: 'test success',
            }
        
        default:
            return state;
    }
}

export default appReducer;