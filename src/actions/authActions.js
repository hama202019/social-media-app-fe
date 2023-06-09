export const sendAuthReq = () => ({
  type: "AUTH_START"
})

export const authSuccess = data => ({
  type: "AUTH_SUCCESS",
  payload: {
    data
  }
})

export const authFail = errMsg => ({
  type: "AUTH_FAIL",
  payload: {
    errMsg
  }
})

export const logout = () => ({
  type: "LOGOUT"
})