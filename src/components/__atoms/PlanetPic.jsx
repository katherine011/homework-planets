import React from "react";

const PlanetPic = ({ img1, img2, img3 }) => {
  return (
    <div>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
    </div>
  );
};

export default PlanetPic;
