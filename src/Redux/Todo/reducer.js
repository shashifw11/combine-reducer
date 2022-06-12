import { ADD_TODO } from "./action";
import { SUB_TODO } from "./action"; 


export const todosReducer = (store = {todo : []}, {type , payload} )=>{
    console.log("store" , store)
   switch(type){
       case ADD_TODO : 
           return {...store , todo : [...store.todo, payload ]}

       case SUB_TODO :
           return {...store , todo : [...store.todo, payload ]}  /// ...store preserve previous store data , ...store.todo means preserve previous todos data , payload means only add new todo
       
     default : 
        return store ; 
    }
    
}