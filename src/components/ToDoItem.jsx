import React from 'react'
import { useTodo } from '../context/ToDoContext.js'
import { useState,useEffect } from 'react'

function ToDoItem({ todo }) {
const [isTodoEditable, setisTodoEditable] = useState(false)
const [todoMsg, settodoMsg] = useState(todo.todo)
const {addTodo, editTodo, deleteTodo, toggleTodo, todos} = useTodo()

const updateTodo = ()=>{
  editTodo(todo.id, todoMsg)
  setisTodoEditable(false)
}
const completeTodo = ()=>{
  toggleTodo(todo.id)
}
  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3.5 py-2.5 gap-x-3 duration-300  text-black dark:text-gray-300 dark:bg-[#252525] ${
              todo.completed ? "bg-[#ffffff]" : "bg-[#ffffff]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={completeTodo}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg  ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => settodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 dark:bg-[#252525] dark:border-none"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      updateTodo();
                  } else setisTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 dark:bg-[#252525] dark:border-none"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default ToDoItem;
