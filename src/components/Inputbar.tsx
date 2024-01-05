import React, { useState } from "react";

type InputProps = {
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Inputbar({ setTodos }: InputProps) {
  const [input, setInput] = useState("");
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  function handleClick(
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    if (!input) return;
    if (e.type === "click") {
      setTodos((arr) => [...arr, input]);
      setInput("");

      return;
    } else if (e.type === "keydown") {
      if ((e as React.KeyboardEvent).code === "Enter") {
        setTodos((arr) => [...arr, input]);
        setInput("");
      }
    }
  }
  return (
    <div className="border-2 border-white h-[8rem] rounded-xl flex p-8 m-4 items-center max-sm:m-1 max-sm:p-5 max-sm:h-auto">
      <input
        className="flex-grow py-3 rounded-md px-3 "
        type="text"
        name="note"
        id="note"
        placeholder="Add your To-dos"
        value={input}
        onChange={handleInput}
        onKeyDown={handleClick}
      />
      <button
        onClick={handleClick}
        className="outline-dashed ml-4 p-2 text-white rounded-sm "
      >
        +
      </button>
    </div>
  );
}
