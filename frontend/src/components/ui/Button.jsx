import React from "react";
import { cn } from "../../utils/cn";

const variants = {
  default: "bg-[var(--color-primary-blue)] hover:bg-[#0284c7] text-white shadow-lg hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] border border-transparent",
  outline: "border border-white/10 hover:bg-white/5 text-gray-200",
  ghost: "hover:bg-white/5 text-gray-300 hover:text-white",
  premium: "bg-white/5 border border-white/10 hover:border-[var(--color-primary-purple)]/50 text-gray-100 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md",
  danger: "bg-[var(--color-error)]/10 text-[var(--color-error)] hover:bg-[var(--color-error)]/20 border border-[var(--color-error)]/20",
};

const sizes = {
  sm: "h-8 px-3 text-xs rounded-lg",
  md: "h-10 px-4 py-2 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-2xl",
  icon: "h-10 w-10 flex justify-center items-center rounded-xl",
};

export const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-dark)] focus-visible:ring-[var(--color-primary-purple)] disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
