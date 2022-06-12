import { ADD_COUNT } from "./action"; 
import { SUB_COUNT } from "./action";

export const counterReducer = (store = {count : 0} , {type , payload} )=>{
     console.log("store" , store)
    switch(type){
        case ADD_COUNT :
             return {...store , count : store.count + payload} ; 

        case SUB_COUNT :
            return {...store , count : store.count - payload} ;  
      default : 
         return store ; 
     }
     
}