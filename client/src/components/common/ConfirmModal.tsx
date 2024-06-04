import { createPortal } from "react-dom";

import { QuizType } from "../../types/QuizType";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  quiz,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
  quiz: QuizType;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-35 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3>
          Weet je zeker dat je de quiz <strong>{quiz.title}</strong> wilt
          verwijderen?
        </h3>

        <div className="flex">{children}</div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded mr-2"
          >
            Annuleren
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Verwijderen
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
