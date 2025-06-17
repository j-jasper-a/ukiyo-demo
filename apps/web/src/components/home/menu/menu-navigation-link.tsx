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
      className={`w-fit border-b-4 text-sm font-bold uppercase ${
        active ? "" : "border-transparent"
      }`}
    >
      <p>{text}</p>
    </button>
  );
}
