import Todo from "./Todo";

function List() {
  return (
    <div className="border-2 border-white min-h-[calc(85%-40px)] max-h-fit rounded-xl p-8 m-4 ">
      <div className="label text-white flex justify-between items-center px-2">
        <h1 className="text-5xl font-semibold">List</h1>
        <button className="text-xl border-2 border-black p-2 rounded-xl">
          Clear
        </button>
      </div>
      <hr className="my-4 opacity-40" />

      <Todo>My name</Todo>
      <Todo>My name</Todo>
      <Todo>My name</Todo>
      <Todo>My name</Todo>
    </div>
  );
}

export default List;
