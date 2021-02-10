import { axiosWithAuth } from "../utils/axiosWithAuth";
import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../reduxVariables";

export const fetchUser = (id) => (dispatch) => {
  return axiosWithAuth()
    .get(`http://localhost:3990/users/${id}`)
    .then((response) => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    });
};
