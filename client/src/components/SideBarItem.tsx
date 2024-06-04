import { useContext } from 'react';

import { motion } from 'framer-motion';
import {
  NavLink,
  useNavigate,
} from 'react-router-dom';

import NavigationContext from '../context/NavigationContext';

type Params = {
  title: string;
  collapsed?: boolean;
  icon: React.ReactNode;
  index: number;
  link: string;
};

export default function SideBarItem(props: Params) {
  const { setActive } = useContext(NavigationContext);

  const navigate = useNavigate();

  return (
    <NavLink
      to={props.link}
      onClick={() => {
        setActive(props.index);
        navigate(props.link);
      }}
      className={({ isActive }) =>
        `space-x-4 flex items-center rounded-full font-bold p-2 cursor-pointer hover:underline-offset-2 ${
          isActive ? "bg-secondary text-black" : "text-white"
        }`
      }
    >
      <div>{props.icon}</div>
      {!props.collapsed && (
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {props.title}
        </motion.p>
      )}
    </NavLink>
  );
}
