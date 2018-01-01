export default function(state={ on: false }, action){

    switch(action.type){
        case "TOGGLE_DIAGNOSTIC":
            var user = action.payload;
            return {on: !state.on};
    }
    return state;
}
