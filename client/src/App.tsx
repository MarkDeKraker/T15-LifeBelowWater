import { useState } from "react";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Alert from "./components/common/Alert.tsx";
import Layout from "./components/Layout";
import { AlertProvider } from "./context/AlertContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import NavigationContext from "./context/NavigationContext";
import LoginPage from "./pages/Auth/LoginPage.tsx";
import LogoutPage from "./pages/Auth/LogoutPage.tsx";
import RegisterPage from "./pages/Auth/RegisterPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import JoinQuizPage from "./pages/JoinQuizPage.tsx";
import NotFound from "./pages/NotFound";
import PlasticApproachPage from "./pages/PlasticApproachPage.tsx";
import PlasticConsequencesPage from "./pages/PlasticConsequencesPage.tsx";
import PlasticProblemPage from "./pages/PlasticProblemPage.tsx";
import QuizBuilderPage from "./pages/QuizBuilderPage.tsx";
import QuizOverviewPage from "./pages/QuizOverviewPage.tsx";
import QuizPage from "./pages/QuizPage";
import QuizCompletedPage from "./pages/QuizCompletedPage.tsx";

const LayoutRoute = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const App = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <AuthProvider>
      <NavigationContext.Provider value={{ active, setActive }}>
        <AlertProvider>
          <Alert />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<JoinQuizPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="logout" element={<LogoutPage />} />
              <Route path="quiz/:slug" element={<QuizPage />} />
              <Route path="quiz/completed" element={<QuizCompletedPage />} />
              <Route element={<LayoutRoute />}>
                <Route path="home" element={<HomePage />} />
                <Route
                  path="plastic/probleem"
                  element={<PlasticProblemPage />}
                />
                <Route
                  path="plastic/gevolgen"
                  element={<PlasticConsequencesPage />}
                />
                <Route
                  path="plastic/aanpak"
                  element={<PlasticApproachPage />}
                />
                <Route path="quiz/overview" element={<QuizOverviewPage />} />
                <Route path="quiz/builder" element={<QuizBuilderPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AlertProvider>
      </NavigationContext.Provider>
    </AuthProvider>
  );
};

export default App;
