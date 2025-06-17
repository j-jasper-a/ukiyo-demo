type HeadingTertiaryProps = {
  text: string;
};

export function HeadingTertiary({ text }: HeadingTertiaryProps) {
  return <h2 className="font-special text-5xl">{text}</h2>;
}
