import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import NavigationContext from "./context/NavigationContext";
import Plastic_2 from "./pages/PlasticContentPage_2.tsx";
import Plastic_3 from "./pages/PlasticContentPage_3.tsx";
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
            <Route path="/plastic/gevolgen" element={<Plastic_2 />} />
            <Route path="/plastic/aanpak" element={<Plastic_3 />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
