// import { motion } from "framer-motion";

// const harmToAnimals = {
//   title: "Plastic",
//   divs: (
//     <motion.div
//       id={"information_block"}
//       className="col-start-3 col-span-3 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div
//         id={"information_text"}
//         className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
//       >
//         <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3">
//           Schade aan de Dierenwereld
//         </h2>

//         <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap pt-3">
//           Plastic dat in de oceaan terechtkomt, is heel slecht voor de dieren
//           en planten die daar leven. Als dieren, zoals schildpadden,
//           zeevogels, vissen, plastic tegenkomen of inslikken, kunnen ze er erg
//           ziek van worden of zelfs doodgaan. Sommige dieren raken verstrikt in
//           plastic en kunnen niet meer bewegen.
//           <br />
//           <br />
//           <br />
//           <br />
//         </p>
//       </div>
//     </motion.div>
//   ),
// };

// export default harmToAnimals;

import BirdStuckInPlastic from "../../assets/101680273_ngm_0618_plastics_008_trim.jpg";

const harmToAnimals = {
  title: "Schade aan de Dierenwereld",
  subTitle: "Plastic dat in de oceaan terechtkomt, is heel slecht voor de dieren en planten die daar leven. Als dieren, zoals schildpadden, zeevogels, vissen, plastic tegenkomen of inslikken, kunnen ze er erg ziek van worden of zelfs doodgaan. Sommige dieren raken verstrikt in plastic en kunnen niet meer bewegen.",
  image: BirdStuckInPlastic,
  expandedText: (
    <div
      className="relative z-20 space-y-1 md:px-0 sm:px-3 clear-right"
    >
      <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap pt-3">
        Zelfs dieren op het land kunnen in de problemen komen door plastic.
        Grote dieren zoals olifanten, hyena's, zebra's en tijgers hebben
        soms plastic ingeslikt, wat heel gevaarlijk kan zijn. Het kan ervoor
        zorgen dat ze ziek worden of zelfs doodgaan. Ook heeft onderzoek
        aangetoond dat plastic schade kan veroorzaken aan de lever en cellen
        van dieren. Het kan ervoor zorgen dat sommige dieren minder eieren
        leggen, zoals oesters.
        <br />
        <br />
        Maar er zijn nog meer problemen met plastic. Plastic voorwerpen die
        in het water drijven, kunnen ook zorgen dat andere dieren op plekken
        komen waar ze niet thuishoren. Dit kan gevaarlijk zijn voor de plek
        waar de dieren leven en voor het eten dat ze nodig hebben.
        <br />
        <br />
      </p>
    </div>
  ),
};

export default harmToAnimals;
