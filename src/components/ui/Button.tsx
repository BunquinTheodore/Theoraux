import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "outline",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-200";

  const variants = {
    solid: "bg-black text-white hover:bg-accent dark:bg-white dark:text-black dark:hover:bg-accent dark:hover:text-white",
    outline:
      "border border-black/30 text-black hover:border-accent hover:bg-accent hover:text-white dark:border-white/35 dark:text-white dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const disabledStyles = disabled ? "opacity-50 pointer-events-none" : "";
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href) {
    if (disabled) {
      return <span className={classes}>{children}</span>;
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
