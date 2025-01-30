import React from "react";

const Select = ({ label, options, className, ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={`w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 ${className}`}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
