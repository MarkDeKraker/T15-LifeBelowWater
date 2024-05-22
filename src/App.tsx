import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import NavigationContext from "./context/NavigationContext";
import PlasticConsequences from "./pages/PlasticConsequencesPage.tsx";
import PlasticApproach from "./pages/PlasticApproachPage.tsx";
import PlasticProblemPage from "./pages/PlasticProblemPage.tsx";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plastic/probleem" element={<PlasticProblemPage />} />
            <Route path="/plastic/gevolgen" element={<PlasticConsequences />} />
            <Route path="/plastic/aanpak" element={<PlasticApproach />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
