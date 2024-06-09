import { motion } from "framer-motion";
import React from "react";

type Params = {
  title?: string;
  subTitle?: React.ReactNode;
  subText?: React.ReactNode;
};

export default function ContentCardWithoutExpand(props: Params) {
  return (
    <motion.div
      className="max-w-full sm:max-w-5xl p-5 mx-auto bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col lg:flex-row space-x-0 sm:space-x-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="my-auto lg:mt-0 sm:mt-4">
          <motion.p
            className="text-xl sm:text-2xl font-custom text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}            
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {props.title}
          </motion.p>
          <motion.div
            className="items-center text-center text-gray-700 text-sm sm:text-base max-w-full font-custom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {props.subTitle}
          </motion.div>
          <motion.div
            className="text-gray-700 text-sm sm:text-base max-w-full font-custom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {props.subText}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
