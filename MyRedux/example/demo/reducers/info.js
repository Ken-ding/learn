let initState={
    info:"瑾"
}
function info(state=initState,action) {
    switch(action.type){
        case "GET_INFO":
            return{
                ...state,
                info:"瑜"
            }
        default:
            return state;
    }
}

export default info;