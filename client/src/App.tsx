import NavigationContext from "./context/NavigationContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Layout from "./components/Layout";
import QuizOverviewPage from "./components/QuizOverviewPage";
import QuizPage from "./pages/QuizPage";
import QuizLoginPage from "./pages/QuizLoginPage";
import NotFound from "./pages/NotFound";

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ active, setActive }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/overview" element={<QuizOverviewPage />} />
            {/* quiz/login/id is de url die de leerling krijgt om in te loggen */}
            <Route path="/quiz/login/:_slug" element={<QuizLoginPage />} />
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
