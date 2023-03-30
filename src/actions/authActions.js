import * as authApi from "../api/authRequests";

export const logIn = (formData) => async dispatch => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await authApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async dispatch => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await authApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};