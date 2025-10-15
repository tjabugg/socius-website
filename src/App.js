import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Data from "./pages/Data";
import About from "./pages/About";
import Documentation from "./pages/Documentation";
import Sentibank from "./pages/Senitbank";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/data" element={<Data />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/sentibank" element={<Sentibank />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
