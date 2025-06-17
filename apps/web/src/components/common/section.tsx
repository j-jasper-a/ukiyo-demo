type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col gap-4 py-4 lg:gap-8 lg:py-8 ${className}`}
    >
      {children}
    </section>
  );
}
