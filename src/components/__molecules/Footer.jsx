import React from "react";
import { planets } from "../../planets";
import { useParams } from "react-router-dom";
import Card from "../__atoms/card";

const Footer = () => {
  const params = useParams();

  const data = planets.find(
    (planet) => planet.name.toUpperCase() === params.planetName.toUpperCase()
  );

  console.log(data);

  return (
    <div>
      <div className="w-[100%] flex items-start justify-between flex-row p-[80px]">
        <Card top="ROTATION TIME" bottom={data.rotation} />
        <Card top="REVOLUTION TIME" bottom={data.revolution} />
        <Card top="RADIUS" bottom={data.radius} />
        <Card top="AVERAGE TEMP." bottom={data.temperature} />
      </div>
    </div>
  );
};

export default Footer;
