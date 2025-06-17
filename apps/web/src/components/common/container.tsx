type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  large?: boolean;
};

export function Container({ children, className, large }: ContainerProps) {
  return (
    <div
      className={`container mx-auto ${
        large ? "max-w-screen-2xl" : "max-w-screen-xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
