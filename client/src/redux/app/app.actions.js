import { AppActionTypes } from './app.types';

export const testAction = (value) => dispatch => {
    dispatch({ type: AppActionTypes.TEST_ACTION, payload: value });
}
