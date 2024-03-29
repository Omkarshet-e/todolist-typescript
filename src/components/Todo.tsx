import React, { useState } from "react";
import { TodoObject } from "../types";

type Prop = {
  children: React.ReactNode;
  todos: TodoObject[];
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
  todoStatus: boolean;
};

export default function Todo({ todos, setTodos, children, todoStatus }: Prop) {
  const [checked, setChecked] = useState(todoStatus);

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked((checked) => (e.target.checked = !checked));
    setTodos(
      todos.map((todo) => {
        if (todo.todo === children) todo.checked = !checked;
        return todo;
      })
    );
  }
  function handleRemoveTodo() {
    setTodos(todos.filter((todo) => todo.todo !== children));
  }
  return (
    <div className="flex gap-4 leading-none text-xl md:text-3xl text-white my-5 px-2 justify-between items-center ">
      <div className="flex items-center justify-start gap-4 leading-none">
        <input
          className="size-5 cursor-pointer grow-0 shrink-0"
          type="checkbox"
          name="option"
          id="option"
          checked={checked}
          onChange={handleClick}
        />
        <p
          className={` grow-[2]
         ${checked ? "line-through" : ""}`}
        >
          {children}
        </p>
      </div>
      <div className="btn-remove border-2 border-black p-3 pt-1 rounded-xl items-center">
        <button onClick={handleRemoveTodo} className="p-0 m-0">
          x
        </button>
      </div>
    </div>
  );
}
