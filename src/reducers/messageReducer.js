const reducer = (state = '', action) => {
    switch(action.type){
        case "STORE_SOCKET":
            return {...state, socket: action.socket}
        default:
            return state
    }
}
export default reducer