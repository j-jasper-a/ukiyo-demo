type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`flex flex-col gap-4 py-4 sm:gap-8 sm:py-8 ${className}`}
    >
      {children}
    </section>
  );
}
