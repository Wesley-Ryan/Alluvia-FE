import { FETCH_USER_SUCCESS } from "../reduxVariables";

const initialUserState = {
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
  password: null,
  pinpoint: "",
  role: 0,
  subscriptions: [],
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        first_name: action.payload.first_name,
        id: action.payload.id,
        last_name: action.payload.last_name,
        role: action.payload.role,
        subscriptions: action.payload.subscriptions,
      };
    default:
      return state;
  }
};
