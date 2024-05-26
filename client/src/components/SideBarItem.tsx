import { useContext } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import NavigationContext from "../context/NavigationContext";

type Params = {
  title: string;
  collapsed?: boolean;
  icon: React.ReactNode;
  index: number;
  link: string;
};

export default function SideBarItem(props: Params) {
  const { active, setActive } = useContext(NavigationContext);

  const navigate = useNavigate();
  const onActive =
    active == props.index ? " bg-secondary text-black" : "text-light";

  return (
    <div
      onClick={() => {
        setActive(props.index);
        navigate(props.link);
      }}
      className={`space-x-4 flex bg rounded-full font-bold p-2 cursor-pointer hover:underline-offset-2 ${onActive}`}
    >
      <div>{props.icon}</div>
      {!props.collapsed ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={onActive}
        >
          {props.title}{" "}
        </motion.p>
      ) : null}
    </div>
  );
}
