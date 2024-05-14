import NavigationContext from "./context/NavigationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </NavigationContext.Provider>
  );
};

export default App;
