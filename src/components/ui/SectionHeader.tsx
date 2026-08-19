interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 sm:mb-20 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {label && (
        <span className="mb-5 block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          {label}
        </span>
      )}
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
