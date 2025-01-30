import React, { useState, useEffect } from "react";
import clsx from "clsx";

// Notification styles based on type
const notifyStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

const Notify = ({ message, type = "info", duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={clsx(
        "fixed top-5 right-5 px-4 py-2 rounded-lg shadow-md transition-transform animate-slideIn",
        notifyStyles[type]
      )}
    >
      {message}
    </div>
  );
};

export { Notify };
