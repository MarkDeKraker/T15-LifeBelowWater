import { motion } from "framer-motion";

const increasedPollution = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_6"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          id={"information_text_6"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap pt-3 underline">
            Plasticvervuiling neemt toe
          </h3>

          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            Doordat we steeds meer plastic gebruiken, stijgt ook de vraag naar
            producten gemaakt van aardolie. Zelfs als we proberen minder
            fossiele brandstoffen te gebruiken in, bijvoorbeeld auto's en
            huizen, zal het gebruik van plastic alleen maar toenemen, als we op
            deze manier doorgaan. Het Centrum voor Internationaal Milieurecht
            (CIEL) denkt dat tegen 2050 plastic 20% van al het oliegebruik zal
            zijn.
          </p>
        </div>
      </motion.div>
  ),
};

export default increasedPollution;
