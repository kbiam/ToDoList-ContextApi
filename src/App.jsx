import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './context/ToDoContext.js'
import ToDoForm from './components/ToDoForm.jsx'
import ToDoItem from './components/ToDoItem.jsx'
import { ThemeContextProvider } from './context/ThemeContext.js'
import Themebtn from './components/Themebtn.jsx'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos([...todos, {id : Date.now() , ...todo}])

  }
  const editTodo = (id,updatedTodo) => {
    const newTodos = [...todos];

    for (let i = 0 ; i < newTodos.length ; i++){
      if (newTodos[i].id === id){
        if(updatedTodo){
          newTodos[i] = { ...newTodos[i], todo: updatedTodo };
        }
        else{
        newTodos[i] = todos[i]
        }
      }
    } 
  setTodos(newTodos)  
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    for(let i = 0; i < newTodos.length ; i++){
      if(newTodos[i].id === id){
        if(newTodos[i].completed){
          newTodos[i] = { ...newTodos[i], completed: false };

        }
        else{
        newTodos[i] = { ...newTodos[i], completed: true };
        }
    }
  }
  setTodos(newTodos)
}

useEffect(() => {
const todos = JSON.parse(localStorage.getItem("todos"))
if(todos && todos.length){
  setTodos(todos)
}
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))

}, [todos])

//theme

const[mode,setMode] = useState("light")
const darkMode = () =>{
  setMode("dark")
}
const lightMode = ()=>{
  setMode("light")
}
useEffect(() => {
document.querySelector("html").classList.remove("dark","light")
document.querySelector("html").classList.add(mode)
}, [mode])


  return (
    <ThemeContextProvider value={{mode,darkMode,lightMode}}>
    <ToDoProvider value = {{todos, addTodo, deleteTodo, editTodo, toggleTodo}}>
  <div className="  min-h-screen py-4 font-mono text-gray-800 dark:bg-black dark:text-white">
                <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3">
                  <div className='flex justify-center items-center gap-8  mb-10'>
                  <h1 className="text-3xl font-bold text-center ">Manage Your Todos</h1>
                  <Themebtn/>
                  </div>


                    <div className="mb-4">
                      <ToDoForm/>
                      </div>
                      <div className='flex flex-col max-h-[530px] gap-y-3 overflow-auto  '>
                      {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                          <ToDoItem todo = {todo}/>
                        </div>
                      ))}
                      </div>
                </div>
                {/* <img src="../icons8-sunlight-50.png" alt="" className='absolute right-5 bottom-3 w-13'/> */}
    </div>

    </ToDoProvider>
    </ThemeContextProvider>
  )
}

export default App
