import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="logo">
        <h1 className="linked">Linked</h1>
        <Logo />
        <h3 className="pressword">Pressroom</h3>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/about">News</a>
          </li>
          <li>
            <a href="/contact">Media resources</a>
          </li>
          <li>
            <a href="/contact">LI for Journalists</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <button className="nav-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
