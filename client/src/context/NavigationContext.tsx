import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

// Definieer een type voor je context
interface NavigationContextType {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

// Initialiseer de context met een standaardwaarde die voldoet aan het type
const NavigationContext = createContext<NavigationContextType>({
  active: 0,
  setActive: () => {}, // Dit is een tijdelijke placeholder
});

export default NavigationContext;
