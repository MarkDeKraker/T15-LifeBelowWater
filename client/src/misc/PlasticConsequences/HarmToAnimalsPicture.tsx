import { motion } from "framer-motion";

import BirdStuckInPlastic from "../../assets/101680273_ngm_0618_plastics_008_trim.jpg";

const harmToAnimalsPicture = {
  title: "Plastic",
  divs: (
    <motion.img
        className="lg:col-start-6 col-start-7 col-span-4 float-right h-96 inline-block ml-auto mt-10 rounded-[40px] z-20"
        src={BirdStuckInPlastic}
        alt={"Afbeelding van een vogel die vast zit in een plastic zakje"}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
  ),
};

export default harmToAnimalsPicture;
