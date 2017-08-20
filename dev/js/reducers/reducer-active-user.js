export default function(state=null, action){
    switch(action.type){
        case "USER_SELECTED":
            return action.payload;
            break;
        case "DELETE_USER":
            return null;
            break;
    }
    return state;
}