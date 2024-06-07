import { motion } from "framer-motion";

const conclusion = {
  title: "Plastic",
  divs: (
    <motion.div
        className="mt-5 rounded-xl z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div
          className="relative z-20 space-y-1 px-3 clear-left max-w-5xl"
        >
          <p className="text-cyan-950 text-sm font-bold font-custom text-wrap text-center py-5">
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
