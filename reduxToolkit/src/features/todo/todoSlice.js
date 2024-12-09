import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {                     //this is initial state
  todos: [{id:1 ,text: "Hello World"}]
}

//now we create slice

export const todoSlice = createSlice({      
  name: 'todo',
  initialState,                              //now store is incomplete without reducer so we introduce the reducer
  reducer: {
    addTodo: (state, action)=>{    //state me current state milti hai
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)

    },                                    //isme hamesha do cheez milegi state or action ,state give the situation of initial state
    removeTodo: (state, action)=>{
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }                //reducer me ata hai property or function
})

export const {addTodo, removeTodo}    = todoSlice.actions              //actions se value mil jayegi addtodo aur removetodo ki

