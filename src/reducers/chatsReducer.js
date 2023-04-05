const reducer = (state = [], action) => {
    switch(action.type){
        case "RETRIEVING_SUCCESS":
            return action.data
        default:
            return state
    }
}

export default reducer