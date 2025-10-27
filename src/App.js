import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Data from "./pages/Data";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Sentibank from "./pages/Senitbank";
import MonitorGenerateVerify from "./pages/MonitorGenerateVerify";
import PETLP from "./pages/PETLP";
import InDefenceOfPostHocExplainability from "./pages/InDefenceOfPostHocExplainability";
import BeforeYouThinkMonitor from "./pages/BeforeYouThinkMonitor";
import RedditHarbor from "./pages/RedditHarbor";
import System15 from "./pages/System1.5";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/data" element={<Data />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/sentibank" element={<Sentibank />} />
            <Route path="/RedditHarbor" element={<RedditHarbor />} />
            <Route path="/System-1.5" element={<System15 />} />
            <Route
              path="/Before-You-Think-Monitor"
              element={<BeforeYouThinkMonitor />}
            />
            <Route path="/PELTP" element={<PETLP />} />
            <Route
              path="/In-Defence-of-Post-hoc-Explainability"
              element={<InDefenceOfPostHocExplainability />}
            />
            <Route
              path="/Monitor-Generate-Verify"
              element={<MonitorGenerateVerify />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
