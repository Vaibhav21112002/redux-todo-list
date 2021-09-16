export const addTodo = (todo) => (dispatch) => {
    dispatch({type:"ADD", payload:todo})
}

export const deleteTodo = (todo) => (dispatch) => {
    dispatch({type:"DELETE", payload:todo})
}

export const clearTodo = () => (dispatch) => {
    dispatch({ type: "CLEAR" });
}