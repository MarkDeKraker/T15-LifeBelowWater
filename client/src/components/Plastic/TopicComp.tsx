import { Link, useLocation } from 'react-router-dom';

const TopicLink = ({ to, colStart, colEnd, text }: { to: string, colStart: string, colEnd: string, text: string }) => {
    const location = useLocation();
    const isCurrentPage = location.pathname === to;

    const bgColor = isCurrentPage ? "bg-blue-950" : "bg-cyan-950";
    const textColor = isCurrentPage ? "text-green-300" : "text-altYellow";

    return (
    <Link to={to} className={`col-start-${colStart} col-end-${colEnd} col-span-3 z-20`}>
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

const topicLinksConfig = [
    {
        to: "/plastic/probleem",
        colStart: "2",
        colEnd: "5",
        text: "Het probleem",
    },
    {
        to: "/plastic/gevolgen",
        colStart: "5",
        colEnd: "8",
        text: "Gevolgen",
    },
    {
        to: "/plastic/aanpak",
        colStart: "8",
        colEnd: "11",
        text: "Aanpak",
    },
];

const TopicComp = () => {
    return (
        <>
            {topicLinksConfig.map((linkConfig, index) => (
                <TopicLink
                    key={index}
                    to={linkConfig.to}
                    colStart={linkConfig.colStart}
                    colEnd={linkConfig.colEnd}
                    text={linkConfig.text}
                />
            ))}
        </>
    );
};

export default TopicComp;


// export default TopicLink;