import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Database from "./pages/Database";
import Documentation from "./pages/Documentation";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Sentium from "./pages/Publications/Sentium";
import SentiBank from "./pages/Publications/SentiBank";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/database" element={<Database />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/research/sentium" element={<Sentium />} />
        <Route path="/sentibank" element={<SentiBank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
