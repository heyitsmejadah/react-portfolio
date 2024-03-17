import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const styles = {
    navbarStyle: {
        background: "green",
        justifyContent: "flex-end",
    },
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="navbar">
            <span>Jadah Pierce</span>
            <Link to="/">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    );
}
export default Navbar;