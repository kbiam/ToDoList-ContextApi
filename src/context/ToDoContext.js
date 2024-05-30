import React from "react"
import { createContext } from "react"
import { useContext } from "react"


export const ToDoContext = createContext({
    todos : [{
        id:1,
        todo:'TOdo MSg',
        completed: false
    }],
    addTodo : (todo)=>{},
    editTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}

})

export const  useTodo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider