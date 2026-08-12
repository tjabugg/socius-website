import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Data from "./pages/Data";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Sentibank from "./pages/data/Senitbank";
import MonitorGenerateVerify from "./pages/research/MonitorGenerateVerify";
import PETLP from "./pages/data/PETLP";
import InDefenceOfPostHocExplainability from "./pages/research/InDefenceOfPostHocExplainability";
import BeforeYouThinkMonitor from "./pages/research/BeforeYouThinkMonitor";
import RedditHarbor from "./pages/data/RedditHarbor";
import System15 from "./pages/research/System1.5";
import SmallFoundationModels from "./pages/research/SmallFoundationModels";
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
            <Route path="/data/sentibank" element={<Sentibank />} />
            <Route path="/data/redditharbor" element={<RedditHarbor />} />
            <Route path="/research/system-1.5" element={<System15 />} />
            <Route
              path="/research/small-foundation-models-of-human-cognition"
              element={<SmallFoundationModels />}
            />
            <Route
              path="/research/before-you-think-monitor"
              element={<BeforeYouThinkMonitor />}
            />
            <Route path="/data/peltp" element={<PETLP />} />

            <Route
              path="/research/in-defence-of-post-hoc-explainability"
              element={<InDefenceOfPostHocExplainability />}
            />

            <Route
              path="/research/monitor-generate-verify"
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
