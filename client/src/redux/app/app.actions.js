import { API_BE } from '../../utils/commonAPI';
import { ENDPOINT_API } from '../../utils/endPointApi';
import { AppActionTypes } from './app.types';
import { showMessage } from '../message/message.actions';
import { MESSAGE_VARIANT } from '../../utils/constants';

export const getVerificationCode = (phone) => async (dispatch) => {
    try {
        dispatch(showMessage('Sending code, please wait!', MESSAGE_VARIANT.INFO));
        const response = await API_BE().get(`${ENDPOINT_API.VERIFY.GET_CODE}?to=${phone}`);
        dispatch(showMessage(response.data?.message, MESSAGE_VARIANT.SUCCESS));
        return dispatch({ type: AppActionTypes.CODE_SENT });
    } catch (error) {
        dispatch(showMessage(error?.response?.data?.message || error.message));
    }
};
