let nextId = 4;
export const selectUser = (user) => {
    return{
        type: "USER_SELECTED",
        payload: user 
    }
};

export const addUser = (user) => {
    user.id = nextId++;
    return{
        type: "ADD_USER",
        payload: user  
    }
};

export const deleteUser = (user) => {
    console.log("deleteUser");
    return{
        type: "DELETE_USER",
        payload: user  
    }
};