export const titleReducer = (state = "Hello world", actions) => {
    switch (actions.type){
        case "GET_TITLE":
            return actions.payload;
        default:
            return state;
    }
}