// import { motion } from "framer-motion";

import Climate from "../../assets/Climatechange.jpg";

// const climateEffect = {
//   title: "Plastic",
//   divs: (
//     <motion.div
//         id={"information_block_5"}
//         className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <div
//           id={"information_text_5"}
//           className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
//         >
//           <h2 className="text-cyan-950 text-xl font-bold font-custom text-wrap py-3 text-center">
//             Effect op klimaatverandering
//           </h2>

//           <img
//             className="mx-auto flex ml-auto px-3 rounded-[40px]"
//             src={Climate}
//             alt={"information_image"}
//           />

//           <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3 text-center">
//             Plasticvervuiling en klimaatverandering gaan hand in hand. Plastic
//             wordt gemaakt van fossiele brandstoffen. Het verwerken van fossiele
//             brandstoffen veroorzaakt uitstoot van{" "}
//             <strong>broeikasgassen</strong>, is één van de grootste bijdragers
//             aan de opwarming van de aarde.
//           </p>
//         </div>
//       </motion.div>
//   ),
// };

// export default climateEffect;

const climateEffect = {
  title: "Effect op klimaatverandering",
  subTitle: "Plasticvervuiling en klimaatverandering gaan hand in hand. Plastic wordt gemaakt van fossiele brandstoffen. Het verwerken van fossiele brandstoffen veroorzaakt uitstoot van broeikasgassen, is één van de grootste bijdragers aan de opwarming van de aarde.",
  image: Climate,
};

export default climateEffect;
