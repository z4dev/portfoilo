import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Loader from "./components/Loader";

const LandingSection = lazy(() => import("./pages/LandingSection"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <MainContainer>
          <Routes>
            <Route index element={<LandingSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContainer>
      </Suspense>
    </div>
  );
}

export default App;