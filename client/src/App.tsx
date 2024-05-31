import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import Layout from "./components/Layout";
import QuizPage from "./pages/QuizPage";
import NotFound from "./pages/NotFound";
import NavigationContext from "./context/NavigationContext";
import PlasticProblemPage from "./pages/PlasticProblemPage.tsx";
import PlasticConsequencesPage from "./pages/PlasticConsequencesPage.tsx";
import PlasticApproachPage from "./pages/PlasticApproachPage.tsx";
import QuizOverviewPage from "./pages/QuizOverviewPage.tsx";
import QuizLoginPage from "./pages/QuizLoginPage.tsx";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plastic/probleem" element={<PlasticProblemPage />} />
            <Route
              path="/plastic/gevolgen"
              element={<PlasticConsequencesPage />}
            />
            <Route path="/plastic/aanpak" element={<PlasticApproachPage />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />

            {/* quiz/:slug is de url waar de leerling een wachtwoord moet invullen om te daarna de quiz te kunnen beginnen, Deze krijgt hij/zij van de docent. De docent krijgt deze url na het aanmaken van de quiz*/}
            <Route path="/quiz/login/:slug" element={<QuizLoginPage />} />

            {/* quiz/login/:_id is waar de leerling naartoe wordt gestuurd als de wachtwoord correct is*/}
            <Route path="/quiz/:_id" element={<QuizPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
