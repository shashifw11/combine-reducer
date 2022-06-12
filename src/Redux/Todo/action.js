
export const ADD_TODO = "ADD_TODO" ; 
export const SUB_TODO = "SUB_TODO"



export const addTodo = (todo)=>({type : ADD_TODO ,payload : todo })
export const subTodo = (todo)=>({type : SUB_TODO , payload : todo})
    