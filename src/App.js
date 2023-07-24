import Header from "./components/Header";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Database from "./pages/Database";
import ForSocialScientists from "./pages/ForSocialScientists";
import AlphaVader from "./pages/Publications/AlphaVader";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/database" element={<Database />} />
        <Route path="/forsocialscientists" element={<ForSocialScientists />} />
        <Route path="/alphavader" element={<AlphaVader />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
