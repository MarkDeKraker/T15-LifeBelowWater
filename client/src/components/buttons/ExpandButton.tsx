import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowDownIcon, ArrowUpIcon
} from "@heroicons/react/24/solid";

type Props = {
  children: React.ReactNode;
  expandedText: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "tertiary";
};

export function ExpandButton(props: Props) {
  const { expandedText } = props;
  const [collapsed, isCollapsed] = useState(false);

  const toggleCollapse = () => {
    isCollapsed(!collapsed);
  };

  return (
    <>
      <button
        onClick={toggleCollapse}
        className={`text-black hover:underline px-4 py-2 mt-5 rounded-full caption-top transition duration-200 ease-in-out focus:ring-opacity-50 inline-flex`}
      >
        {props.children}
        <motion.span
          animate={{ opacity: 1}}
          transition={{ duration: 0.4, ease: "easeInOut"}}
          className="ml-2 text-black"
        >
          {collapsed ? (
            <ArrowUpIcon className="inline-flex w-4 h-4" />
          ) : (
            <ArrowDownIcon className="inline-flex w-4 h-4" />
          )}
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: collapsed ? "auto" : 0, opacity: collapsed ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut"}}
        className="overflow-hidden"
      >
        <div className="mt-3 text-[#666] max-w-xl font-custom">{expandedText}</div>
      </motion.div>
    </>
  );
}