import React from "react";
import { planets } from "../../planets";
import { useParams } from "react-router-dom";
import Shape from "../../assets/icons/Shape.png";

const PlanetInfo = ({ cont, href }) => {
  const params = useParams();

  const data = planets.find(
    (planet) => planet.name.toUpperCase() === params.planetName.toUpperCase()
  );

  console.log(data);

  return (
    <div className="w-[350px]  flex items-start justify-between flex-col gap-3">
      <h1 className="text-white text-6xl font-Antonio ml-[-1px]">
        {data.name.toUpperCase()}
      </h1>
      <p className="text-white font-Spartan text-base">{cont}</p>
      <a className="text-[#6d6b6b] flex flex-row gap-2" href={href}>
        Source : <span className=" underline text-white ">Wikipedia</span>
        <img src={Shape} alt="shape" className="w-[10px] h-[10px] mt-[10px]" />
      </a>
    </div>
  );
};

export default PlanetInfo;
