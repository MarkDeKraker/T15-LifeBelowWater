import { motion } from "framer-motion";

const BannerComp = ({ source, alt, children }: { source: string, alt: string, children?: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full z-20">
      <img
        className="h-full w-screen object-cover top-0 left-0 z-20"
        src={source}
        alt={alt}
      />
      {children && <motion.div className="absolute inset-0 flex items-center justify-center text-center text-white lg:text-8xl sm:text-7xl drop-shadow-2xl font-semibold font-custom mb-10 z-30"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1}}
      >
        {children}
      </motion.div>}
    </div>
  );
};

export default BannerComp;