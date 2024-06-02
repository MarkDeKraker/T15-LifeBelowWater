import { BrowserRouter } from 'react-router-dom';

import Alert from './components/common/Alert.tsx';
import { AlertProvider } from './context/AlertContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import LocationProvider from './pages/Providers/LocationProvider.tsx';
import RoutesWithAnimation from './pages/routes/RoutesWithAnimation.tsx';

const App = () => {
  return (
    <AuthProvider>
      <AlertProvider>
        <Alert />
        <BrowserRouter>
          <LocationProvider>
            <RoutesWithAnimation></RoutesWithAnimation>
          </LocationProvider>
        </BrowserRouter>
      </AlertProvider>
    </AuthProvider>
  );
};

export default App;
