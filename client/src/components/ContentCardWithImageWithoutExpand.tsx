import { motion } from "framer-motion";

type Params = {
  title?: string;
  subTitle: string;
  image: string;
};

export default function ContentCardWithImageWithoutExpand(props: Params) {
  return (
    <motion.div
      className="max-w-full sm:max-w-5xl p-5 mx-auto bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col lg:flex-row space-x-0 sm:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.img
          className="w-full lg:w-[389px] h-auto lg:h-full flex-shrink-0"
          src={props.image}
          alt="content image"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <div className="my-auto lg:mt-0 sm:mt-4">
          <motion.p
            className="text-xl sm:text-2xl font-custom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}            
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {props.title}
          </motion.p>
          <motion.p
            className="font-normal text-gray-700 mt-2 text-sm sm:text-base max-w-xl font-custom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}            
            transition={{ delay: 0.7, duration: 1 }}
          >
            {props.subTitle}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
