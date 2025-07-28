import { useState, useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return message ? (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded shadow-md">
      {message}
    </div>
  ) : null;
}

export default Toast;
