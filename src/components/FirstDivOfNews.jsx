import React from "react";

export default function FirstDivOfNews() {
  return (
    <div>
      <div className="firstDivOfNews">
        <h1 className="headingOfFirstDivOfNews">Explore the latest news</h1>

        <div className="categoryAndLink">
          <h3 className="chooseTopic">Choose topic: </h3>
          <ul className="allcategories">
            <li className="liOfFirstDivOfNews">Company news </li>
            <li className="liOfFirstDivOfNews">Product news </li>
            <li className="liOfFirstDivOfNews">Data and insights</li>
            <li className="liOfFirstDivOfNews">Business solutions</li>
          </ul>
        </div>

        <div className="categoryAndLink">
          <h3 className="chooseRegion">Choose region: </h3>
          <ul className="allcategories">
            <li className="liOfFirstDivOfNews">North America</li>
            <li className="liOfFirstDivOfNews"> Latin America</li>
            <li className="liOfFirstDivOfNews">Europe</li>
            <li className="liOfFirstDivOfNews"> Middle East</li>
            <li className="liOfFirstDivOfNews">Asia </li>
            <li className="liOfFirstDivOfNews">Australia</li>
            <li className="liOfFirstDivOfNews"> Africa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
