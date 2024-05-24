import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import NavigationContext from "./context/NavigationContext";
import PlasticProblemPage from "./pages/PlasticProblemPage.tsx";
import PlasticConsequencesPage from "./pages/PlasticConsequencesPage.tsx";
import PlasticApproachPage from "./pages/PlasticApproachPage.tsx";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plastic/probleem" element={<PlasticProblemPage />} />
            <Route path="/plastic/gevolgen" element={<PlasticConsequencesPage />} />
            <Route path="/plastic/aanpak" element={<PlasticApproachPage />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
