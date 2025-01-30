import React from "react";
import clsx from "clsx";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
