import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex font-medium items-center rounded-lg disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-white bg-blue-200  ",
        danger: "bg-danger text-white",
        base: "bg-base text-white hover:text-black",
        outline: "text-blue bg-transparent disabled:text-grey-300 hover:text-white hover:bg-blue",
        rounded: "text-white bg-purple rounded-xl",
      },
      size: {
        default: "px-3 py-2",
        sm: "h-7 px-2 text-sm",
        xs: "h-6 px-1.5 text-[12px]",
        lg: "w-full h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button className={buttonVariants({ variant, size, className })} ref={ref} disabled={isLoading} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
