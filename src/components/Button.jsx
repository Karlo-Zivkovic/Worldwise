function Button({ children }) {
  return (
    <button className="inline-block rounded-md bg-green-500 px-7 py-2 text-lg font-normal uppercase text-black">
      {children}
    </button>
  );
}

export default Button;
