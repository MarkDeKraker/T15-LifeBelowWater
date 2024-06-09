import { useState } from 'react';

import { motion } from 'framer-motion';

import { ArrowDownIcon } from '@heroicons/react/24/solid';

type Props = {
  children: React.ReactNode;
  expandedText: React.ReactNode;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  float?: "left" | "right";
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
        className={`float-${props.float} text-black hover:underline px-4 py-2 mt-5 rounded-full caption-top transition duration-200 ease-in-out focus:ring-opacity-50 inline-flex`}
      >
        {props.children}
        <motion.span
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="ml-2 text-black"
        >
          <motion.div animate={{ rotateZ: collapsed ? 180 : 0 }}>
            <ArrowDownIcon className="inline-flex w-4 h-4" />
          </motion.div>
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: collapsed ? "auto" : 0, opacity: collapsed ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="overflow-hidden lg:w-auto sm:w-full"
      >
        <div className="mt-3 max-w-full sm:max-w-xl font-custom text-sm sm:text-base rounded-lg">
          {expandedText}
        </div>
      </motion.div>
    </>
  );
}
