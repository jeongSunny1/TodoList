import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          {...props}
          className={cn(
            `
          w-[350px]
          rounded-md
          border-transparent
          px-3
          py-2
          text-black	
          border-solid border-2 border-pink-400
          font-semibold
          hover:border-solid border-2 border-pink-200
          transition
        `,
            className
          )}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
