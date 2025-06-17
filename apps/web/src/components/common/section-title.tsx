type SectionTitleProps = {
  text: string;
};

export function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 mt-16 w-fit">
      <p className="font-special text-4xl opacity-50">{text}</p>
    </div>
  );
}
