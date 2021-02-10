import {
  LOG_IN_USER,
  LOG_OUT_USER,
  LOG_IN_USER_SUCCESS,
} from "../utils/reduxVariables";

export const setLoggedIn = () => (dispatch) => {
  dispatch({ type: LOG_IN_USER });
};

export const setLoggedOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT_USER });
  window.localStorage.removeItem("token");
};
