export const addToDo = (data) => {
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString() ,
            data:data
        }
    }
}

export const deleteToDo = () => {
    return{
        type: "DELETE_TODO"
    }
}

export const removeToDo = () => {
    return{
        type: "REMOVE_TODO"
    }
}