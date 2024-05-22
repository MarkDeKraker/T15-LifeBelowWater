import { motion } from "framer-motion";

import PlasticCleanup from "../../assets/plastic-cleanup.jpg";

const cleanUp = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_3"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          id={"information_text_3"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap underline">
              Neem deel aan (of organiseer!) een opruimactie in de buurt
            </h3>
            <img
              className="p-3 rounded-[40px]"
              src={PlasticCleanup}
              alt={
                "Afbeelding van een groep kinderen die plastic uit water opruimen"
              }
            />
            Als je bij een zee of rivier woont, kun je je vrijwillig aanmelden
            om zwerfvuil op te ruimen in je lokale gemeenschap, waardoor je
            plastics uit de waterwegen verwijdert en voorkomt dat ze überhaupt
            in de oceaan terechtkomen. Er zijn veel organisaties waarbij je je
            kunt aansluiten, of je kunt het gewoon in het weekend doen met je
            vrienden en familie. Alle beetjes helpen!
          </p>
        </div>
      </motion.div>
  ),
};

export default cleanUp;
