import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        ref={ref}
        className={clsx(
          "w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400",
          className
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";
export { Input };
