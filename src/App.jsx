import "./App.css";
import { Header } from "./componets/Header";
import { Footer } from "./componets/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { ContactForm } from "./pages/Contact";

function App() {
  return (
    <div className="portfolio-app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
