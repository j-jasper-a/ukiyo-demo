type InfoCardProps = {
  children: React.ReactNode;
};

export function InfoCard({ children }: InfoCardProps) {
  return <div className="flex flex-row gap-4">{children}</div>;
}
