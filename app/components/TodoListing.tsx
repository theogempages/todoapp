import React from "react";
import { useState, useCallback } from "react";
import { TodoType } from "~/types/todo";
import TodoItem from "./TodoItem";
import FilterTodo from "./FilterTodo";

function TodoListing({ filterTodos, deleteTodo, updateTodo, changeStatus, dataFilter }: any) {
    
  return (
    <>
      <main className="w-full">
        <FilterTodo {...{dataFilter}} />
        {filterTodos.length ? (
            <>
            <div className="w-full space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
            {filterTodos.map((todo: TodoType) => {
                return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} changeStatus={changeStatus}/>;
            })}
            </div>
            </>
        ): (
            <div className="text-4xl">Empty todo</div>
        )}
      </main>
    </>
  );
}

export default TodoListing;
