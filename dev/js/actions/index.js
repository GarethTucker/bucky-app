export const selectUser = (user) => {
    console.log('You clicked on: ', user.first);
    return{
        type: "USER_SELECTED",
        payload: user 
    }
};

export const addUser = (user) => {
    console.log('You added user: ', user.first);
    return{
        type: "ADD_USER",
        payload: user  
    }
};