"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full select-none items-center cursor-pointer",
      'max-tablet:w-[33rem]',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn(
      'relative h-[.4rem] w-full grow bg-regal-white',
      'max-tablet:h-[.2rem]'
    )} />
    <SliderPrimitive.Thumb className={cn(
      'block w-[7.3rem] h-[.7rem] bg-regal-orange',
      'max-tablet:w-[4.1rem] max-tablet:h-[.35rem]'
    )} />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
