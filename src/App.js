import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Database from "./pages/Database";
import ForSocialScientists from "./pages/ForSocialScientists";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import CompliSent from "./pages/Publications/CompliSent";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/database" element={<Database />} />
        <Route path="/forsocialscientists" element={<ForSocialScientists />} />
        <Route path="/complisent" element={<CompliSent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;