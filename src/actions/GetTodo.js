export const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_FAILURE = 'GET_TODO_FAILURE';

export const GetTodo = () => {
    return {
        type: GET_TODO_REQUEST
    }
};

export const GetTodoSuccess = (payload) => {
    debugger
   return {
    type: GET_TODO_SUCCESS,
    payload: payload
}};
  
  export const GetTodoError = (payload) => ({
    type: GET_TODO_FAILURE,
    payload: {}
});