import {createStore , combineReducers   } from "redux" ; 

import { counterReducer  } from "./Counter/reducer";
import { todosReducer } from "./Todo/reducer";

 const rootReducer = combineReducers({
     count : counterReducer ,
     todo : todosReducer
 })
//const init = {count : 0}
export const store = createStore(rootReducer) ; 

//export const store = createStore(todosReducer,{count : 0 , todo : []}) ; 

//store.dispatch(Add_Count(1));


//  why we use redux instead of context api // 

// 1) performance 
// 2) single source of Truth  // every thing is store in one place 
// 3) context api is not state management .. but it is  gobal 
// 4) Immuatable behaviour of redux means redux store are not change means i am inteiarly create new store again and again 
// 5)  