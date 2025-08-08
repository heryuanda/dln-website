import { useLayoutEffect, type JSX, type ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/header";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/layout/footer";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return <>{children}</>;
};

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:pt-[72px] pt-[56px]">
        <AnimatePresence mode="wait">
          <Wrapper>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route element={<About />} path="/about" />
              <Route element={<Services />} path="/services" />
              <Route element={<Contact />} path="/contact" />
            </Routes>
          </Wrapper>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
