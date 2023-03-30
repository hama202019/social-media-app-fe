const authReducer = (state = { authData: null, loading: false, error: false }, action) => {
    switch(action.type){
        case "AUTH_START":
            return {...state, loading: true, error: false}
        case "AUTH_SUCCESS":
            return {loading: false, error: false, authData: action.payload}
        case "AUTH_FAIL":
            return {...state, error: true, loading: false}
        default:
            return state
    }
}

export default authReducer