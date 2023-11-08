import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import create from "zustand";
import { immer } from "zustand/middleware/immer";

import { useTodoStore } from "~/store/zustand-store"
import Item from "~/TestItem";

export const loader = async () => {
  return json({ ok: true });
};

export default function Myapp() {
  const data = useLoaderData<typeof loader>();
  const todos = useTodoStore((state) => state.todos);
  // const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const addTodoHandle = useTodoStore((state) => state.addTodo('day la test'));

  return (
    <div className="App">
      <button type="button" onClick={addTodoHandle}>Add New</button>
      <ul>
        {Object.values(todos).map((todo) => (
          <Item {...todo}/>
        ))}
      </ul>
    </div>
  );
}