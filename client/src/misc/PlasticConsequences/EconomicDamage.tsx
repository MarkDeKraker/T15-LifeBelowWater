import { motion } from "framer-motion";

import PlasticEconomics from "../../assets/0df3b6-iStock-1151212399.jpg";

const economicDamage = {
  title: "Plastic",
  divs: (
    <motion.div
          id={"information_block_4"}
          className="col-start-3 p-40 bg-tertiary rounded-full z-20 relative overflow-hidden group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={PlasticEconomics}
            alt="Afbeelding van een veld gras vol met plastic afval, terwijl er luxe gebouwen in de achtergrond zijn."
          />

          <div
            id={"information_text_4"}
            className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="text-center text-white p-4">
              <h2 className="text-white text-2xl font-bold font-custom p-3">
                Economische schade
              </h2>
              <p className="text-white text-sm font-semibold font-custom p-3">
                De plasticvervuiling in de oceanen heeft negatieve gevolgen voor
                de visserij, het toerisme en andere industrieën die afhankelijk
                zijn van gezonde oceanen.
                <br />
                <br />
                Volgens onderzoek kosten de problemen met plastic in de oceaan
                elk jaar tussen de $6 en $19 miljard dollar. Deze kosten worden
                veroorzaakt door de impact op toerisme, visserij en
                schoonmaakacties die de overheid moet doen.
              </p>
            </div>
          </div>
        </motion.div>
  ),
};

export default economicDamage;
