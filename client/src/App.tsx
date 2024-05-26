import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import QuizPage from "./pages/QuizPage";
import SlugValidation from "./components/Plastic/SlugValidation.tsx";
import NotFound from "./pages/NotFound";
import NavigationContext from "./context/NavigationContext";
import PlasticProblemPage from "./pages/PlasticProblemPage.tsx";
import PlasticConsequencesPage from "./pages/PlasticConsequencesPage.tsx";
import PlasticApproachPage from "./pages/PlasticApproachPage.tsx";
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
            {/* quiz/login/id is de url die de leerling krijgt om in te loggen */}
            <Route path="/quiz/login/:slug" element={<QuizLoginPage />} />
            {/* quiz/:slug is de url waar de leerling de quiz start*/}
            <Route path="/quiz/:_id" element={<QuizPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
