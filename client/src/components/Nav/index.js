import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const [MobileMenuActive, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!MobileMenuActive);
  };

 

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className={`flex-row ${MobileMenuActive ? "mobile-menu" : ""}`}>
          <li className="nav-links" style={{ float: "left", fontWeight: "bold" }}>
            <Link to="/">Opulence</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px", marginLeft: "10px" }}>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            |
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`flex-row ${MobileMenuActive ? "mobile-menu" : ""}`}>
          <li className="nav-links" >
            <Link to="/" style={{ fontWeight: "lighter" }}>Services</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            |
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            <Link to="/signup" style={{ fontWeight: "lighter" }}>About</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            |
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            <Link to="/login" style={{ fontWeight: "lighter" }}>Testimonials</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            |
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            <Link to="/signup" style={{ fontWeight: "lighter" }}>Signup</Link>
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            |
          </li>
          <li className="nav-links" style={{ float: "right", marginRight: "10px" }}>
            <Link to="/login" style={{ fontWeight: "lighter" }}>Login</Link>
          </li>
        </ul>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Opulence</Link>
      </h1>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`hamburger ${MobileMenuActive ? "active" : ""}`}></div>
      </div>
      <nav className={`mobile-menu ${MobileMenuActive ? "active" : ""}`}>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
