import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  AcademicCapIcon,
  ArrowLeftEndOnRectangleIcon,
  GlobeAltIcon,
} from "@heroicons/react/16/solid";

import CollapseButton from "./CollapseButton";
import CollapsedIcon from "./icons/CollapsedIcon";
import CollapseIcon from "./icons/CollapseIcon";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const [collapsed, isCollapsed] = useState(false);

  const toggleCollapse = () => {
    isCollapsed(!collapsed);
  };

  const sideBarVariants = {
    collapsed: {
      width: 70,
    },
    open: {
      width: 250,
    },
  };

  return (
    <motion.aside
      initial={{ width: 250 }}
      variants={sideBarVariants}
      animate={collapsed ? "collapsed" : "open"}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-4 space-y-4 bg-primary"
    >
      {!collapsed && (
        <h1 className="text-xl font-bold text-center cursor-pointer text-stone-50 font-custom">
          Aqua Academy
        </h1>
      )}

      <AnimatePresence>
        <div className="flex flex-col justify-between h-full bg-primary">
          <div className="first-item">
            <SideBarItem
              title="Onderwerpen"
              collapsed={collapsed}
              index={0}
              icon={<GlobeAltIcon className="w-6 h-6" />}
              link={"/"}
            />
            <SideBarItem
              title="Quizzes"
              collapsed={collapsed}
              index={1}
              icon={<AcademicCapIcon className="w-6 h-6" />}
              link={"/quiz/overview"}
            />
          </div>

          <div className="flex justify-between">
            {collapsed ? null : (
              <SideBarItem
                title="Uitloggen"
                index={3}
                icon={
                  <ArrowLeftEndOnRectangleIcon className="w-6 h-6 text-light" />
                }
                link={"/"}
              />
            )}

            <motion.div
              animate={{ rotateY: collapsed ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <CollapseButton
                icon={
                  !collapsed ? (
                    <CollapseIcon className="w-6 h-6 text-light" />
                  ) : (
                    <CollapsedIcon className="w-6 h-6 text-light" />
                  )
                }
                onClick={toggleCollapse}
              />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </motion.aside>
  );
}
