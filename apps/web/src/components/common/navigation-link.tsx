type NavigationLinkProps = {
  text: string;
  href: string;
};

export function NavigationLink({ text, href }: NavigationLinkProps) {
  return (
    <li>
      <a href={href}>
        <p className="hover:border-brand border-b-4 border-transparent text-sm transition-all duration-300">
          {text}
        </p>
      </a>
    </li>
  );
}
