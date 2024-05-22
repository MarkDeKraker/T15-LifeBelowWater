import { motion } from "framer-motion";

const harmToAnimalsContinued = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_2"}
        className="col-start-3 col-span-7 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          id={"information_text_2"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
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
      </motion.div>
  ),
};

export default harmToAnimalsContinued;
