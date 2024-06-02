import { AnimatePresence } from 'framer-motion';

function LocationProvider({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

export default LocationProvider;
