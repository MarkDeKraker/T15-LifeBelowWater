import React from "react";

type AnswerButtonProps = {
  disabled: boolean;
  answerText: string;
  isSelected: boolean;
  isCorrect: boolean;
  handleClick: () => void;
};

const AnswerButton: React.FC<AnswerButtonProps> = ({
  disabled,
  answerText,
  isSelected,
  isCorrect,
  handleClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-primary font-custom p-5 text-white rounded-full text-left w-full ${
        isSelected
          ? isCorrect
            ? "text-white bg-green-600 hover:bg-green/70 transition duration-200 ease-in-out"
            : "text-white bg-red-600 hover:bg-red/70 transition duration-200 ease-in-out"
          : "text-white hover:bg-primary/70 transition duration-200 ease-in-out"
      }`}
      onClick={handleClick}
    >
      {answerText}
    </button>
  );
};

export default AnswerButton;
