import React from 'react';

type QuizAnswerButtonProps = {
  disabled: boolean;
  answerText: string;
  isSelected: boolean;
  isCorrect: boolean;
  handleClick: () => void;
};

const QuizAnswerButton: React.FC<QuizAnswerButtonProps> = ({
  disabled,
  answerText,
  isSelected,
  isCorrect,
  handleClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={` font-custom p-5 text-white rounded-full text-left w-full active:scale-95 transform transition-transform   ${
        isSelected
          ? isCorrect
            ? "text-white bg-green-600 hover:bg-green/70  duration-200 ease-in-out  "
            : "text-white bg-red-600 hover:bg-red/70 transition duration-200 ease-in-out "
          : `text-white  bg-secondary transition duration-200 ease-in-out ${
              disabled ? "cursor-not-allowed" : "hover:bg-primary"
            } `
      }`}
      onClick={handleClick}
      type="button"
    >
      {answerText}
    </button>
  );
};

export default QuizAnswerButton;
