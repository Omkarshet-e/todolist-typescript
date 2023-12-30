import { Inputbar, List } from ".";

export default function Applayout() {
  return (
    <div className="md:w-3/4 w-full max-w-[1240px] m-10 md:mx-auto">
      <Inputbar />
      <List />
    </div>
  );
}
