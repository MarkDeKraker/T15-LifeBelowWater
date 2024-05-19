import NavigationContext from "./context/NavigationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import Plastic_1 from "./PlasticContentPage_1.tsx";
import Plastic_2 from "./PlasticContentPage_2.tsx";
import Plastic_3 from "./PlasticContentPage_3.tsx";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plastic/1" element={<Plastic_1 />} />
            <Route path="/plastic/2" element={<Plastic_2 />} />
            <Route path="/plastic/3" element={<Plastic_3 />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
