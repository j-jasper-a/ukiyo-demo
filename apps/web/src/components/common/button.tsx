type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const buttonStyle = () => {
  const style =
    "relative border-[1px] border-light px-8 py-4 text-center text-sm font-bold uppercase text-light transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-0 before:w-full before:bg-brand before:transition-all before:duration-300 hover:border-brand hover:text-dark hover:before:h-full sm:w-fit";
  return style;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={buttonStyle()}>
      {children}
    </button>
  );
}
