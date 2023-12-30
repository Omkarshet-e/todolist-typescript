export default function Inputbar() {
  return (
    <div className="border-2 border-white h-[15%] rounded-xl flex p-8 m-4 items-center">
      <input
        className="flex-grow py-3 rounded-md px-3 "
        type="text"
        name="note"
        id="note"
        placeholder="Add your To-dos"
      />
      <button className="outline-dashed ml-4 p-2 text-white rounded-sm ">
        +
      </button>
    </div>
  );
}
