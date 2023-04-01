const authReducer = (state = { authData: null, loading: false, error: false, errMsg: '' }, action) => {
    switch(action.type){
        case "AUTH_START":
            return {...state, loading: true, error: false, errMsg: ''}
        case "AUTH_SUCCESS":
            return {loading: false, error: false, authData: action.payload.data, errMsg: ''}
        case "AUTH_FAIL":
            return {...state, error: true, loading: false, errMsg: action.payload.errMsg }
        default:
            return state
    }
}

export default authReducer