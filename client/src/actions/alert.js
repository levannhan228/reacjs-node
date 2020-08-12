import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../actions/types.js';

export const setAlert = (name, msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { name, msg, alertType, id }
  });

  // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
  // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}