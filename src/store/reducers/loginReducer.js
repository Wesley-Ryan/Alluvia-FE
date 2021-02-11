import { LOG_USER_IN, LOG_USER_OUT } from "../reduxVariables";

const initialState = {
  loggedIn: false,
  id: 0,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_USER_IN:
      return {
        ...state,
        loggedIn: true,
        id: action.payload,
      };
    case LOG_USER_OUT:
      return {
        ...state,
        loggedIn: false,
        id: 0,
      };
    default:
      return state;
  }
};
