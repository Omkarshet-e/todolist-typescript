import { useEffect, useState } from "react";
import { Inputbar, List } from ".";
import { TodoObject } from "../types";

export default function Applayout() {
  const [todos, setTodos] = useState<TodoObject[]>(
    JSON.parse(localStorage.getItem("todosList")!) || []
  );

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="md:w-3/4 w-full max-w-[1240px] m-10 md:mx-auto max-sm:mx-2">
      <Inputbar setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
