import { motion } from "framer-motion";

import Microplastics from "../../assets/38068390.jpg";

const healthRisks = {
  title: "Plastic",
  divs: (
    <motion.div
          id={"information_block_3"}
          className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={Microplastics}
            alt="Afbeelding die toont hoe microplastic in voedsel beland"
          />

          <div
            id={"information_text_3"}
            className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="text-center text-white p-4">
              <h2 className="text-white text-2xl font-bold font-custom p-3">
                Gezondheidsrisico's
              </h2>
              <p className="text-white text-sm font-semibold font-custom p-3">
                Microplastics kunnen zich ophopen in de voedselketen en
                uiteindelijk ook in ons voedsel terechtkomen. Dit kan gevaarlijk
                zijn voor onze gezondheid.
                <br />
                <br />
                Plastic kan ziekte veroorzaken en problemen geven met onze
                groei, ons denken, onze voortplanting en ons afweersysteem. Ook
                kunnen er giftige stoffen op het plastic zitten die naar ons toe
                komen als we vis eten die in plastic vervuild water heeft
                gezwommen.
              </p>
            </div>
          </div>
        </motion.div>
  ),
};

export default healthRisks;
