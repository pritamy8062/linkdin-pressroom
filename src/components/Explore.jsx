import React from "react";

import about from "../images/about.svg";
import data from "../images/data.svg";
import media from "../images/media.svg";
import journal from "../images/journal.svg";
import contact from "../images/contact.svg";

export default function Explore() {
  return (
    <div>
      <div className="box">
        <div>
          <h1 className="headingOfExplore">Explore our pressroom</h1>
        </div>

        <div className="flexbox">
          <div className="flex-item">
            <img src={about} alt="" />
            <h5 className="titleBelowIcon">About us</h5>
          </div>

          <div className="flex-item">
            <img src={data} alt="" />
            <h5 className="titleBelowIcon">Data and insights</h5>
          </div>

          <div className="flex-item">
            <img src={media} alt="" />
            <h5 className="titleBelowIcon">Media assets</h5>
          </div>

          <div className="flex-item">
            <img src={journal} alt="" />
            <h5 className="titleBelowIcon">LinkedIn for Journalists</h5>
          </div>

          <div className="flex-item">
            <img src={contact} alt="" />
            <h5 className="titleBelowIcon">Contact us</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
