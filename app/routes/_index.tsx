import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { useState, useMemo, useEffect } from 'react';

import {allTodos} from '~/datatodo';

export const loader = async () => {
  return json(allTodos);
};

import TodoListing from '~/components/TodoListing';
import NewToDo from '~/components/NewToDo';
import type { TodoType } from "~/types/todo";

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const [isNew, updateNew] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const createNew = () => {
    updateNew(!isNew);
  }
  const newTodo = (newTodoItem: TodoType) => {
    updateNew(!isNew);
    let baseID: number = todos.length + 1;
    const todoItem = {...newTodoItem, id: baseID};
    setTodos([...todos, todoItem]);
  }
  
  const deleteTodo = (id: number) => {
    console.log("delete todo item", id)
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (changedTodo: TodoType) => {
    setTodos(todos.map(todo =>{
        return (todo.id === changedTodo.id) ? {...todo, title: changedTodo.title, enddate: changedTodo.enddate} : {...todo}
    }))
  }
  const changeStatus = (id: number) => {
    setTodos(todos.map(todo =>{
        return (todo.id === id) ? {...todo, status: !todo.status} : {...todo}
    }))
  }

  const [filter, setFilter] = useState<string>('all')
  const [filterTodos, setFilterTodos] = useState<TodoType[]>(todos)

  const dataFilter = (val: string) => {
    setFilter(val);
  }

  useEffect(() => {
    handleFilterToDo()
  }, [filter, todos])

  const handleFilterToDo = () => {
    console.log("filter:", filter)
    if (filter === 'completed') {
      setFilterTodos(todos.filter(todo => todo.status === true));
    }else if (filter === 'progress') {
      setFilterTodos(todos.filter(todo => todo.status === false));
    }else {
      setFilterTodos(todos);
    }
  }
  
  return (
  <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	  <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl">
      {!isNew &&         
        <button
          type="button" onClick={createNew}
          className="mb-4 w-[160px] md:w-[150px] p-3 rounded border border-[#BDBDBD] outline-[#006BED]">
          Add new todo
      </button>
      }
      {isNew &&
        <NewToDo newTodo={newTodo} backToMain={createNew}/>
      }
      <TodoListing {...{filterTodos, deleteTodo, updateTodo, changeStatus, dataFilter}}/>
    </div></div>
  );
}
