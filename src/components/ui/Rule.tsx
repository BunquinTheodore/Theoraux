export default function Rule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px bg-black/10 dark:bg-white/10 ${className}`}
      style={{ marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}
    />
  );
}
