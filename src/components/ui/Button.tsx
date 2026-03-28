import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg",
    secondary: "bg-dark text-white hover:bg-dark-light",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const disabledStyles = disabled ? "opacity-60 pointer-events-none" : "";
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href) {
    if (disabled) {
      return <span className={styles}>{children}</span>;
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
