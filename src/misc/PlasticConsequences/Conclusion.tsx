import { motion } from "framer-motion";

const conclusion = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_9"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-teal-100 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          id={"information_text_9"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-left"
        >
          <p className="text-cyan-950 text-sm font-bold font-custom text-wrap py-5">
            De problemen veroorzaakt door al deze plasticvervuiling in de zeeën
            zijn ernstig. Als er te veel plastic in de oceaan terechtkomt en de
            oceaan opwarmt, ontstaat er een probleem dat zichzelf verergert. Een
            opwarmende oceaan vol met plastic is een omgeving waar planten- en
            dierenleven lijden, minder koolstofdioxide wordt opgenomen en ons
            vermogen om klimaatverandering tegen te gaan verder wordt belemmerd.
            Dit maakt de situatie nog erger en er moet snel iets aan worden
            gedaan.
          </p>
        </div>
      </motion.div>
  ),
};

export default conclusion;
