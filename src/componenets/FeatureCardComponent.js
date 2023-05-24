import React from "react";

function FeaturecardComponent({ featureIcon, featureName, fetureDescription }) {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <i
          className={`${featureIcon} text-center`}
          style={{ fontSize: "10rem" }}
        />
      </div>

      <h1 className="text-center fw-bold">{featureName}</h1>
      <p className="fs-3 text-center">{fetureDescription}</p>
    </div>
  );
}

export default FeaturecardComponent;
