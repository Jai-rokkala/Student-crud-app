import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDeleteModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    
    setTimeout(() => {
      onConfirm();
      setLoading(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Delete Student</h2>

        <p className="mb-6">
          Are you sure you want to delete this student?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;