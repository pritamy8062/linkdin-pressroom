import React from "react";

export default function ExternalResources() {
  return (
    <div>
      <div className="outerMostDivOfExternalResorces">
        <div className="outerBoxOfExternalResources">
          <div className="headingOfExternalResources">
            <h1>External Resources</h1>
          </div>

          <div className="innerBoxOfExternalResources">
            <div className="setOf4listItems">
              <li>Corporate Blog</li>
              <li>Engineering Blog</li>
              <li>Economic Graph</li>
              <li>LinkedIn</li>
            </div>

            <div className="setOf4listItems">
              <li>Learning Blog</li>
              <li>Marketing Solutions Blog (UK)</li>
              <li>Marketing Solutions Blog (US)</li>
              <li>Microsoft Pressroom</li>
            </div>

            <div className="setOf4listItems">
              <li>Microsoft Investor Relations</li>
              <li>Nonprofit Blog</li>
              <li>Sales Solutions Blog</li>
              <li>Talent Blog</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
