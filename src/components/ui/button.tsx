import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-3 whitespace-nowrap rounded-[31px] text-[16px] leading-4 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none font-family-mona",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffffff] text-[#15bac6] font-bold hover:bg-[#e1f9fb]",
        primary:
          "bg-[#15bac6] text-[#ffffff] font-bold hover:bg-[#0b9faa]",
        secondary:
          "bg-transparent text-[#16bac6] font-semibold border-[1.5px] border-[#16bac6] shadow-[0px_13px_26px_-8px_rgba(158,158,158,0.42)] hover:bg-[rgba(76,209,229,0.1)]",
        outline:
          "bg-transparent text-[#ffffff] font-semibold border-[1.5px] border-[#ffffff] shadow-[0px_13px_26px_-8px_rgba(158,158,158,0.42)] hover:bg-[rgba(255,255,255,0.15)]",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
