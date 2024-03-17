import "./App.css";
import { Header } from "./componets/Header";
import { Footer } from "./componets/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { ContactForm } from "./pages/Contact";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <div className="portfolio-app">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
