import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#9B1B1B] text-white hover:bg-[#7a1515] focus-visible:ring-[#9B1B1B]",
  secondary:
    "bg-white text-[#9B1B1B] border-2 border-[#9B1B1B] hover:bg-[#F8F1E9]",
  ghost: "bg-transparent text-[#1A1A2E] hover:bg-[#F8F1E9]",
  gold: "bg-[#C9A227] text-[#1A1A2E] hover:bg-[#b8911f] font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2 rounded-full font-medium
          transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
          ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
