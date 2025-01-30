import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

// Define button styles based on purpose
const buttonStyles = {
  default: "bg-gray-500 text-white hover:bg-gray-600",
  approve: "bg-green-500 text-white hover:bg-green-600",
  delete: "bg-red-500 text-white hover:bg-red-600",
  cancel: "bg-yellow-500 text-white hover:bg-yellow-600",
  info: "bg-blue-500 text-white hover:bg-blue-600",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

// Define button sizes
const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = React.forwardRef(
  ({ className, status = "default", size = "md", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
          buttonStyles[status], // Apply status-based styles
          sizeStyles[size], // Apply size-based styles
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
