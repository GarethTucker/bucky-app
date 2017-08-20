export default function(state={}, action){
    console.log("reducer-user: ", action.type)
    switch(action.type){
        case "ADD_USER":
            var user = action.payload;
            return [...state, user];
        case "DELETE_USER":
            var user = action.payload; 
            return state.filter(function(el) {
                return el.id !== user.id;
            });  
    }
    return state;
}