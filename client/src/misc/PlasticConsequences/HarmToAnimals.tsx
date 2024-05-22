import { motion } from "framer-motion";

const harmToAnimals = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block"}
        className="col-start-3 col-span-3 h-['300px'] mt-10 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          id={"information_text"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <h2 className="text-cyan-950 text-md font-bold font-custom text-wrap py-3">
            Schade aan de Dierenwereld
          </h2>

          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap pt-3">
            Plastic dat in de oceaan terechtkomt, is heel slecht voor de dieren
            en planten die daar leven. Als dieren, zoals schildpadden,
            zeevogels, vissen, plastic tegenkomen of inslikken, kunnen ze er erg
            ziek van worden of zelfs doodgaan. Sommige dieren raken verstrikt in
            plastic en kunnen niet meer bewegen.
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </motion.div>
  ),
};

export default harmToAnimals;
