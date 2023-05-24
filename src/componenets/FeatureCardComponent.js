import React from "react";

function FeaturecardComponent({ featureIcon, featureName, fetureDescription }) {
  return (
    <div className="container my-5  rounded-5 p-1 shadow">
      <div className="d-flex justify-content-center">
        <i
          className={`${featureIcon} text-center`}
          style={{ fontSize: "10rem", color: "rgb(255 84 79)" }}
        />
      </div>

      <h1 className="text-center fw-bold">{featureName}</h1>
      <p
        className="fs-3  fw-bold text-center"
        style={{ color: "rgb(136 136 136)" }}
      >
        {fetureDescription}
      </p>
    </div>
  );
}

export default FeaturecardComponent;
