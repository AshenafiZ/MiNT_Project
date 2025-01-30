import React from "react";
import clsx from "clsx";

const Checkbox = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        ref={ref}
        className={clsx(
          "w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-400",
          className
        )}
        {...props}
      />
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
});

Checkbox.displayName = "Checkbox";
export { Checkbox };
