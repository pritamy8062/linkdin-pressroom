import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ExternalResources from "./ExternalResources";

const ResourceBox = () => {
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <button className="btn " onClick={toggleBox}>
        {showBox ? "Show Less" : "Explore More Resources"}
        <FontAwesomeIcon icon={showBox ? faArrowUp : faArrowDown} />
      </button>
      {showBox && (
        <div className="boxofExternalResources">
          <ExternalResources />
        </div>
      )}
    </div>
  );
};

export default ResourceBox;
