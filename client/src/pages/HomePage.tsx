import { motion } from 'framer-motion';

import plasticsoep from '../assets/plasticsoep.jpg';
import ChapterCard from '../components/ChapterCard';
import H2 from '../components/typography/H2';
import { useAnimationContext } from '../context/AnimationContext';
import { useRequireAuth } from '../hooks/useRequireAuth';

function HomePage() {
  useRequireAuth();
  const { routeVariants } = useAnimationContext();
  return (
    <>
      <motion.div variants={routeVariants} initial="initial" animate="final">
        <H2 className="my-10 text-center">Onderwerpen</H2>
        <div className="space-y-10">
          <ChapterCard
            title="Plastic soep"
            subTitle="Water is essentieel voor het leven op aarde, zowel voor mensen als de natuur.
        Helaas wordt water bedreigd door plasticvervuiling, die ernstige schade aanricht aan zeeleven
        en onze omgeving."
            image={plasticsoep}
            To="/plastic/probleem"
            expandedText={
              <div>
                <ul className="space-y-2">
                  <li>
                    <strong>Plastic:</strong> materiaal gemaakt van fossiele
                    brandstoffen. Duurt honderden jaren voordat het afbreekt.
                  </li>
                  <li>
                    <strong>Verplaatsing:</strong> plastic kan direct in de
                    oceaan worden gegooid of indirect door rivieren, wind en
                    golven.
                  </li>
                  <li>
                    <strong>Microplastics:</strong> piepkleine stukjes plastic
                    die slecht zijn voor de gezondheid van allerlei organismen.
                  </li>
                  <li>
                    <strong>Schade van plastic:</strong> plasticvervuiling
                    brengt schade aan dieren, onze gezondheid, de economie en
                    het klimaat.
                  </li>
                  <li>
                    <strong>Klimaatverandering:</strong> klimaatverandering is
                    het langzaam warmer worden van de aarde door vervuiling,
                    waardoor het weer extremer wordt en dieren en mensen in de
                    problemen komen.
                  </li>
                  <li>
                    <strong>Broeikasgassen:</strong> gassen in de atmosfeer. Ze
                    laten de zonnestralen binnen, maar houden een deel van de
                    warmte vast, waardoor het warmer wordt op onze planeet.
                  </li>
                  <li>
                    <strong>Opruimacties:</strong> zwerfvuil opruimen in je
                    lokale gemeenschap.
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </motion.div>
    </>
  );
}
export default HomePage;
