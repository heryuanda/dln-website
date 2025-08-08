import { useLayoutEffect, type JSX, type ReactNode } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/header";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/layout/footer";
import { MessageCircle } from "lucide-react";

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
    <div className="min-h-screen relative">
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
      <Link
        to={`https://wa.me/08111450899`}
        target="_blank"
        className="fixed text-white cursor-pointer font-bold z-50 bottom-10 rounded-full right-6 w-14 h-14 flex items-center justify-center bg-primary-orange"
      >
        <MessageCircle size="32" />
      </Link>
    </div>
  );
}

export default App;
