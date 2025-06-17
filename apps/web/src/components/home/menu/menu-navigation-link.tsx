type MenuNavigationLinkProps = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export function MenuNavigationLink({
  text,
  active,
  onClick,
}: MenuNavigationLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`w-fit cursor-pointer border-y-4 border-transparent text-sm font-bold uppercase ${
        active ? "border-b-dark" : ""
      }`}
    >
      <p>{text}</p>
    </button>
  );
}
