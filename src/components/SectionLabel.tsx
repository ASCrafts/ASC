export function SectionLabel({ children, num }: { children: React.ReactNode; num?: string }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
      {num && <span className="text-primary font-mono">{num}</span>}
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  );
}
