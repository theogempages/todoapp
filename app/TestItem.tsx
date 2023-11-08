// import { useState } from "react";

import { useTodoStore } from "~/store/zustand-store"

export default function Item (todo: any){
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  return (
    <>
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => toggleTodo(todo.id)}
      />
      {todo.done ? <s>{todo.title}</s> : todo.title}
    </li>
    </>
  )
}