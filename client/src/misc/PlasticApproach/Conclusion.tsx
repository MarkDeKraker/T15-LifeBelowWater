import { motion } from "framer-motion";

import CleanOcean from "../../assets/Clean-Ocean-960x640.jpeg";

const conclusion = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_6"}
        className="col-start-2 col-span-9 h-['300px'] mt-10 bg-green-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <img
          className="col-start-2 col-span-9 z-20 relative"
          src={CleanOcean}
          alt={"Afbeelding van water met zonneschijn in de achtergrond"}
        />

        <div
          id={"information_text_6"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <p className="text-cyan-950 font-bold font-custom text-wrap text-center py-3">
            Het verminderen van plasticvervuiling is een belangrijke taak
            waarbij de hele wereld moet samenwerken, van individuele acties tot
            internationale samenwerking en technologische innovatie. De gevolgen
            van plasticvervuiling treffen de hele planeet en haar bewoners: het
            bedreigt de gezondheid van de oceanen, de dieren die erin leven, de
            veiligheid en kwaliteit van ons voedsel, onze gezondheid, toerisme
            aan de kust, en draagt bij aan klimaatverandering.
          </p>
        </div>
      </motion.div>
  ),
};

export default conclusion;
