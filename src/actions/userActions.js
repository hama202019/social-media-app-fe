export const updatingStart = () => ({
    type: "UPDATING_START"
})

export const updatingSuccess = data => ({
    type: "UPDATING_SUCCESS",
    payload: {data}
})

export const updatingFail = errMsg => ({
    type: "UPDATING_FAIL",
    payload: {errMsg}
})