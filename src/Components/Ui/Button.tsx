import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "../Libs/Utils";
import { ButtonVariants } from "./ButtonVariants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, className }))}
        {...props}
      ></button>
    )
  }
);
Button.displayName = "button";
