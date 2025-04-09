import React from "react";

const Modal = ({ title, children, show, onClose }) => {
  if (!show) return null; // Do not render the modal if `show` is false

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 1000 }}
    >
      <div className="p-6 bg-white rounded shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {/* Modal Body */}
        <div>{children}</div>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-black border rounded cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;