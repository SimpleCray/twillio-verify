import { MESSAGE_VARIANT } from '../../utils/constants';
import { MessageActionTypes } from './message.types';

export const showMessage = (message, variant = MESSAGE_VARIANT.ERROR ) => dispatch => {
    dispatch({ type: MessageActionTypes.SHOW_MESSAGE, payload: {message, variant} });
}

export const clearMessage = () => dispatch => {
    dispatch({ type: MessageActionTypes.CLEAR_MESSAGE });
}
