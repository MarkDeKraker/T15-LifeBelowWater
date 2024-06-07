// import { motion } from "framer-motion";

import OceanCleanup from "../../assets/TheOceanCleanup_October2nd_Press_Briefing_System001B-24.jpg.webp";
import RecyclingPlastic from "../../assets/72069-container-garbage-symbol-recycling-plastic-environmental-protection.png";

// const innovations = {
//   title: "Plastic",
//   divs: (
//     <motion.div
//       id={"information_block"}
//       className="col-start-2 col-span-9 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.0 }}
//     >
//       <div
//         id={"information_text"}
//         className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
//       >
//         <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3">
//           Innovatie
//         </h2>

//         <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
//           Het is moeilijk om plastic uit de oceaan te halen als het erin is
//           gekomen. Niet onmogelijk, maar wel moeilijk. Nieuwe technologieën
//           stellen ons in staat om grotere stukken afval uit de oceaan te
//           halen. Bedrijven werken aan het ontwikkelen van biologisch
//           afbreekbare alternatieven voor plastic en technologieën om
//           plasticafval op te ruimen, zoals{" "}
//           <a
//             href={"https://theoceancleanup.com/"}
//             className="underline text-cyan-700"
//           >
//             drijvende barrières en op afval gerichte schepen.
//           </a>
//           <img
//             className="inline-block ml-auto p-3 rounded-[40px]"
//             src={OceanCleanup}
//             alt={
//               "Afbeelding van een drijvende barrière die plastic uit de oceaan haalt"
//             }
//           />
//         </p>

//         <img
//           className="bg-black inline-block float-right h-60 ml-auto p-4 rounded-[40px]"
//           src={RecyclingPlastic}
//           alt={"Afbeelding van een recyclebakje vol met plastic flesjes"}
//         />

//         <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap p-3">
//           Kleine plastic voorwerpen en microplastics zijn bijna onmogelijk te
//           bereiken, vooral als ze diep in de oceaan zijn. Daarom hebben veel
//           wetenschappers en natuurbeschermers verklaard dat de beste oplossing
//           is om te voorkomen dat plastic afval überhaupt in rivieren en zeeën
//           terechtkomt.
//           <br />
//           <br />
//           Dit kan worden bereikt door verbetering van onze afvalbeheersystemen
//           en de invoering van recycling. Bovendien is het essentieel om het
//           ontwerp en het gebruik van wegwerpverpakkingen te heroverwegen en de
//           productie van onnodige eenmalige (single-use) plastic producten te
//           verminderen.
//           <br />
//           <br />
//           <br />
//           <br />
//         </p>
//       </div>
//     </motion.div>
//   ),
// };

// export default innovations;

const innovations = {
  title: "Innovatie",
  subTitle: " Het is moeilijk om plastic uit de oceaan te halen als het erin is gekomen. Niet onmogelijk, maar wel moeilijk. Nieuwe technologieën stellen ons in staat om grotere stukken afval uit de oceaan te halen. Bedrijven werken aan het ontwikkelen van biologisch afbreekbare alternatieven voor plastic en technologieën om plasticafval op te ruimen.",
  image: OceanCleanup,
  expandedText: (
    <div
      className="relative z-20 space-y-5 px-3 clear-right"
    >
      <br />

      <a
        href={"https://theoceancleanup.com/"}
        className="underline text-cyan-700"
      >
        Voor grote stukken plastic heb je drijvende barrières en op afval gerichte schepen.
      </a>



      <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap">
        Kleine plastic voorwerpen en microplastics zijn bijna onmogelijk te
        bereiken, vooral als ze diep in de oceaan zijn. Daarom hebben veel
        wetenschappers en natuurbeschermers verklaard dat de beste oplossing
        is om te voorkomen dat plastic afval überhaupt in rivieren en zeeën
        terechtkomt.
        <br />
        <img
          className="bg-black inline-block my-5 h-60 ml-auto p-4 rounded-[40px]"
          src={RecyclingPlastic}
          alt={"Afbeelding van een recyclebakje vol met plastic flesjes"}
        />
        <br />
        Dit kan worden bereikt door verbetering van onze afvalbeheersystemen
        en de invoering van recycling. Bovendien is het essentieel om het
        ontwerp en het gebruik van wegwerpverpakkingen te heroverwegen en de
        productie van onnodige eenmalige (single-use) plastic producten te
        verminderen.
        <br />
        <br />
        <br />
        <br />
      </p>
    </div>
  ),
};

export default innovations;