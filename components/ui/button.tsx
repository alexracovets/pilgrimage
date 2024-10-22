import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "px-[3.8rem] py-[1rem] w-auto",
  {
    variants: {
      variant: {
        default: "uppercase text-[2.4rem] bg-regal-orange rounded-[5rem]",
        destructive: "",
        outline: "uppercase border-[0.1rem] rounded-[5rem] text-[2.4rem]",
        outline_orange: "uppercase border-[0.1rem] rounded-[5rem] border-regal-orange text-[2.4rem]",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
