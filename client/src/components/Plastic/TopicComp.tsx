import { Link, useLocation } from 'react-router-dom';

const TopicLink = ({ to, text }: { to: string, text: string }) => {
    const location = useLocation();
    const isCurrentPage = location.pathname === to;

    const bgColor = isCurrentPage ? "bg-blue-950" : "bg-cyan-950";
    const textColor = isCurrentPage ? "text-green-300" : "text-altYellow";

    return (
        <Link to={to} className="flex-1">
            <div
                className={`h-16 lg:px-28 sm:px-10 ${bgColor} md:rounded-full sm:rounded-lg mt-5 hover:bg-blue-950 hover:text-white grid place-items-center`}
            >
                <div
                    className={`text-center ${textColor} md:text-lg sm:text-sm font-semibold font-custom hover:text-white`}
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
        text: "Het probleem",
    },
    {
        to: "/plastic/gevolgen",
        text: "Gevolgen",
    },
    {
        to: "/plastic/aanpak",
        text: "Aanpak",
    },
];

const TopicComp = () => {
    return (
        <div className="flex space-x-4">
            {topicLinksConfig.map((linkConfig, index) => (
                <TopicLink
                    key={index}
                    to={linkConfig.to}
                    text={linkConfig.text}
                />
            ))}
        </div>
    );
};

export default TopicComp;
