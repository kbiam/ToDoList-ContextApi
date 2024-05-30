import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/ToDoContext'

function ToDoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e)=>{
    e.preventDefault()
    if(!todo) return

    addTodo({todo, completed:false})
    setTodo("")

  }

  return (
    <form onSubmit={add} className='flex'>
      <input type="text" value = {todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Write your task' className='w-full border border-black/10 rounded-l-lg px-4 outline-none duration-75 bg-white/20 py-3 dark:text-white '  />
      <button type='submit' className='rounded-r-lg px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white shrink-0 dark:bg-gray-300  dark:text-[#252525]'>Add</button>

    </form>
  )
}

export default ToDoForm