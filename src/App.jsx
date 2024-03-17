import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="portfolio-app">
            <Header />
            <BrowserRouter />
            <Footer />
        </div>
    );
}

export default App;