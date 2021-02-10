import { LOG_USER_IN, LOG_USER_OUT } from "../reduxVariables";

const initialState = {
  loggedIn: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case LOG_USER_OUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
