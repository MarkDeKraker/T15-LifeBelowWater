import { Link } from "react-router-dom";

const TopicLink = ({ to, colStart, colEnd, bgColor, textColor, text }: { to: string, colStart: string, colEnd: string, bgColor: string, textColor: string, text: string }) => {
  return (
    <Link to={to} className={`colstart-${colStart} col-end-${colEnd} col-span-3 z-20`}>
      <div
        className={`w-full h-14 ${bgColor} hover:bg-blue-950 hover:text-white grid place-items-center border border-amber-200`}
      >
        <div
          className={`text-center ${textColor} text-lg font-semibold font-custom hover:text-white`}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

export default TopicLink;