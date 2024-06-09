// import { motion } from "framer-motion";

// import SingleUsePlasticImage1024x675 from "../../assets/Single-Use-Plastics-1024x675.jpeg";

// const plasticProducts = {
//   title: "Plastic",
//   divs: (
//     <motion.div
//       className="mt-10 rounded-lg z-20 font-['Montserrat'] "
//       initial={{ opacity: 0, x: 100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 1.0 }}
//       viewport={{ once: true }}
//     >
//       <div className="relative z-20 space-y-1 px-3 clear-right">
//         <img
//           className="h-52 float-right inline-block ml-auto p-3 rounded-[40px]"
//           src={SingleUsePlasticImage1024x675}
//           alt={
//             "Afbeelding van dagelijkse plastic producten, zoals flesjes, bekers en rietjes."
//           }
//         />

//         <p className="text-cyan-950 text-sm font-semibold  text-wrap pt-3">
//           <strong>Plastic</strong>, gemaakt van fossiele brandstoffen, bestaat
//           pas iets meer dan honderd jaar, maar heeft ons leven volledig
//           veranderd. Je ziet plastic al over je heen:
//         </p>
//         <br />
//         <span className="text-cyan-950 text-xs font-semibold  space-y-0.5 float-left pb-3 pl-4 -indent-4 max-w-80">
//           <li>Plastic flessen voor water en frisdrank.</li>
//           <li>Plastic boodschappentassen.</li>
//           <li>
//             Plastic verpakkingen voor voedsel, zoals bakjes, folie en zakken.
//           </li>
//           <li>Plastic tandenborstels en tandpastatubes.</li>
//           <li>Plastic rietjes.</li>
//           <li>Plastic speelgoed.</li>
//           <li>Plastic wegwerp bestek.</li>
//         </span>
//       </div>
//     </motion.div>
//   ),
// };

// export default plasticProducts;

import SingleUsePlasticImage1024x675 from "../../assets/Single-Use-Plastics-1024x675.jpeg";

const plasticProducts = {
  title: "Plastic",
  subTitle: "Plastic, gemaakt van fossiele brandstoffen, bestaat pas iets meer dan honderd jaar, maar heeft ons leven volledig veranderd. Je ziet plastic al over je heen:",
  image: SingleUsePlasticImage1024x675,
  expandedText: (
    <div className="relative z-20 space-y-1 md:px-0 sm:px-3 clear-right">
      <ul className="text-cyan-950 text-xs font-semibold space-y-0.5 float-left pb-3 max-w-80">
        <li>Plastic flessen voor water en frisdrank.</li>
        <li>Plastic boodschappentassen.</li>
        <li>Plastic verpakkingen voor voedsel, zoals bakjes, folie en zakken.</li>
        <li>Plastic tandenborstels en tandpastatubes.</li>
        <li>Plastic rietjes.</li>
        <li>Plastic speelgoed.</li>
        <li>Plastic wegwerp bestek.</li>
      </ul>
    </div>
  ),
};

export default plasticProducts;


