export const startRetrievine = () => ({
    type: "RETREIVING_START"
})

export const retreivingSuccess = data => ({
    type: "RETRIEVING_SUCCESS",
    payload: {
        data
    }
})

export const retreivingFail = errMsg => ({
    type: "RETRIEVING_FAIL",
    payload: {
        errMsg
    }
})