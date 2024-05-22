import { motion } from "framer-motion";

const shareKnowledge = {
  title: "Plastic",
  divs: (
    <motion.div
        id={"information_block_5"}
        className="col-start-3 col-span-7 h-['300px'] mt-5 bg-zinc-300 rounded-lg border-4 border-black z-20"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          id={"information_text_5"}
          className="col-start-4 relative z-20 space-y-1 px-3 clear-right"
        >
          <p className="text-cyan-950 text-sm font-semibold font-custom text-wrap py-3">
            <h3 className="text-cyan-950 text-sm font-bold font-custom text-wrap pb-3 underline">
              Deel je kennis!
            </h3>
            Je hebt nu veel geleerd over de impact van plasticvervuiling op het
            milieu en de oceanen. Als jij ook verandering wilt zien, helpt het
            enorm om je kennis met vrienden en familie te delen. Hiermee worden
            steeds meer mensen bewust van het probleem en wordt er mee actie
            genomen om het probleem te bestrijden.
          </p>
        </div>
      </motion.div>
  ),
};

export default shareKnowledge;
