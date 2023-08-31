import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <>
        <button
          ref={ref}
          {...props}
          disabled={disabled}
          className={cn(
            `
          w-auto
          rounded-md
          bg-pink-200
          border-transparent
          px-3
          py-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          text-white
          font-semibold
          hover:bg-pink-400
          transition
        `,
            className
          )}
        >
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
