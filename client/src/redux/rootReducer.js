import { combineReducers } from 'redux';
import appReducer from './app/app.reducer';
import messageReducer from './message/message.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    message: messageReducer,
});

export default rootReducer
