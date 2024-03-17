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
            <Link to="/">Welcome</Link>
            <Link to="/about">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    );
}
export default Navbar;