import { LOG_USER_IN, LOG_USER_OUT } from "../reduxVariables";

export const setLoggedIn = () => (dispatch) => {
  dispatch({ type: LOG_USER_IN });
};

export const setLoggedOut = () => (dispatch) => {
  dispatch({ type: LOG_USER_OUT });
  window.localStorage.removeItem("token");
};
