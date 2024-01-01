import { useState } from "react";
import { Inputbar, List } from ".";

export default function Applayout() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="md:w-3/4 w-full max-w-[1240px] m-10 md:mx-auto">
      <Inputbar setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
