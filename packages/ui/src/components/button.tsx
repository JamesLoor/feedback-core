export function Button({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <button className="outline-none border border-solid border-black rounded-md py-2 px-4 bg-transparent">
      {children}
    </button>
  );
}
