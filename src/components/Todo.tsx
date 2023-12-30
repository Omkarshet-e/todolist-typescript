type Prop = {
  children: string;
};

export default function Todo({ children }: Prop) {
  return (
    <div className="flex gap-4 leading-none text-3xl text-white my-5 px-2 justify-start items-center">
      <input
        className="size-5"
        type="checkbox"
        name="option"
        id="option"
        // checked={checked}
      />
      <p className="">{children}</p>
    </div>
  );
}
