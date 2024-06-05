import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Layout from "../../components/Layout";
import { AnimationProvider } from "../../context/AnimationContext";
import LoginPage from "../Auth/LoginPage";
import LogoutPage from "../Auth/LogoutPage";
import RegisterPage from "../Auth/RegisterPage";
import HomePage from "../HomePage";
import JoinQuizPage from "../JoinQuizPage";
import NotFound from "../NotFound";
import PlasticApproachPage from "../PlasticApproachPage";
import PlasticConsequencesPage from "../PlasticConsequencesPage";
import PlasticProblemPage from "../PlasticProblemPage";
import QuizBuilderPage from "../QuizBuilderPage";
import QuizCompletedPage from "../QuizCompletedPage";
import QuizOverviewPage from "../QuizOverviewPage";
import QuizPage from "../QuizPage";
import QuizBuilderEditPage from "../QuizBuilderEditPage";

const LayoutRoute = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <>
      <AnimationProvider>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<JoinQuizPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="quiz/:slug" element={<QuizPage />} />
          <Route path="quiz/completed" element={<QuizCompletedPage />} />
          <Route element={<LayoutRoute />}>
            <Route path="home" element={<HomePage />} />
            <Route path="plastic/probleem" element={<PlasticProblemPage />} />
            <Route
              path="plastic/gevolgen"
              element={<PlasticConsequencesPage />}
            />
            <Route path="plastic/aanpak" element={<PlasticApproachPage />} />
            <Route path="quiz" element={<QuizOverviewPage />} />
            <Route path="quiz/builder" element={<QuizBuilderPage />} />
            <Route path="quiz/builder/edit" element={<QuizBuilderEditPage />} />
          </Route>
        </Routes>
      </AnimationProvider>
    </>
  );
}

export default RoutesWithAnimation;
