import React from "react";
import logo from "../images/logo.png";

const Logo = () => {
  // const myStyle = {
  //   height: "30px",
  //   width: "30px",
  //   paddingTop: "20px",
  //   paddingBottom: "20px",
  // };
  return (
    <div>
      {/* <img src={logo} alt="Logo" style={myStyle} /> */}
      <img src={logo} alt="Logo" className="logoimage" />
    </div>
  );
};

export default Logo;
