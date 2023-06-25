import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div>
          <ul className="footerul">
            <li>About</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Your California Privacy Choices</li>
            <li>User Agreement</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} LinkedIn Corporation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
