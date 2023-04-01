const reducer = (state = { postsData: null, loading: false, error: false, errMsg: '' }, action) => {
    switch(action.type) {
        case "RETREIVING_START":
            return {...state, loading: true, error: false, errMsg: ''}
        case "RETRIEVING_SUCCESS":
            return {loading: false, errMsg: '', error: false, postsData: action.payload.data}
        case "RETRIEVING_FAIL":
            return {...state, errMsg: action.payload.errMsg, error: true, loading: false}
        case "UPLOADING_START":
                return {...state, errMsg: '', error: false, loading: true}
        case "UPLOADING_SUCCESS":
            return {loading: false, errMsg: '', error: false, postsData: [action.payload.data, state.postsData]}
        case "UPLOADING_FAIL":
            return {...state, errMsg: action.payload.errMsg, error: true, loading: false}
        default:
            return state
    }
}

export default reducer