import { TodoObject } from "../types";
import Todo from "./Todo";

type ListProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>;
  todos: TodoObject[];
};

function List({ todos, setTodos }: ListProps) {
  function handleClick() {
    setTodos([]);
  }

  return (
    <div className="border-2 border-white min-h-[calc(85%-40px)]  rounded-xl p-8 m-4 max-sm:m-1 max-sm:p-5 max-sm:mt-3">
      <div className="label text-white flex justify-between items-center px-2">
        <h1 className="md:text-5xl text-3xl font-semibold">List</h1>
        <button
          onClick={handleClick}
          className="text-xl border-2 border-black p-2 rounded-xl"
        >
          Clear
        </button>
      </div>
      <hr className="my-4 opacity-40" />

      {todos?.map((todo) => {
        return (
          <Todo
            todos={todos}
            todoStatus={todo.checked}
            setTodos={setTodos}
            key={todo.todo}
          >
            {todo.todo}
          </Todo>
        );
      })}
    </div>
  );
}

export default List;
