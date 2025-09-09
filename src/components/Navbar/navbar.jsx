import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <h2 className="logo">CampusConnect</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;