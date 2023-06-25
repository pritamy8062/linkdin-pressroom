import React from "react";
import logo from "../images/logo.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

export default function Follow() {
  return (
    <div>
      <div className="follow">
        <div className="divofimage">
          <img className="imageOfFollow" src={logo} alt="" />
          <h5 className="headingOfFollow">Follow us on linkedin</h5>
        </div>
        <div className="divofimage">
          <img className="imageOfFollow" src={twitter} alt="" />
          <h5 className="headingOfFollow">Follow us on twitter</h5>
        </div>
        <div className="divofimage">
          <img className="imageOfFollow" src={youtube} alt="" />
          <h5 className="headingOfFollow">Subscribe to our Youtube channel</h5>
        </div>
      </div>
    </div>
  );
}
