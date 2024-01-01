import React, { useState } from "react";

type Prop = {
  children: string;
};

export default function Todo({ children }: Prop) {
  const [checked, setChecked] = useState(false);

  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked((checked) => (e.target.checked = !checked));
  }
  return (
    <div className="flex gap-4 leading-none text-xl md:text-3xl text-white my-5 px-2 justify-start items-center">
      <input
        className="size-5 cursor-pointer"
        type="checkbox"
        name="option"
        id="option"
        checked={checked}
        onChange={handleClick}
      />
      <p className={`${checked ? "line-through" : ""}`}>{children}</p>
    </div>
  );
}
