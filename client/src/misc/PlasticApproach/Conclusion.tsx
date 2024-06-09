import { motion } from "framer-motion";
import CleanOcean from "../../assets/Clean-Ocean-960x640.jpeg";

const conclusion = {
  title: "Plastic",
  divs: (
    <motion.div
      className="mt-10 rounded-lg z-20"
      transition={{ duration: 1.0 }}
    >
      <div className="relative">
        <img
          className="rounded-lg w-full h-auto"
          src={CleanOcean}
          alt={"Afbeelding van water met zonneschijn in de achtergrond"}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeIn"}}
        >
          <p className="text-white text-lg font-bold font-custom text-center bg-black bg-opacity-50 p-3 rounded-lg">
            Het verminderen van plasticvervuiling is een belangrijke taak
            waarbij de hele wereld moet samenwerken, van individuele acties tot
            internationale samenwerking en technologische innovatie. De gevolgen
            van plasticvervuiling treffen de hele planeet en haar bewoners: het
            bedreigt de gezondheid van de oceanen, de dieren die erin leven, de
            veiligheid en kwaliteit van ons voedsel, onze gezondheid, toerisme
            aan de kust, en draagt bij aan klimaatverandering.
          </p>
        </motion.div>
      </div>
    </motion.div>
  ),
};

export default conclusion;
