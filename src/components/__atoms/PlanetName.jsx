import React from "react";
import { Link } from "react-router-dom";
import { planets } from "../../planets";

const PlanetName = () => {
  return (
    <div className="w-[100%] h-[100px] flex items-center justify-between border-b-indigo-500 p-[35px] ">
      <h1 className="font-Antonio font text-white font-normal text-2xl mb-[2px] ">
        THE PLANETS
      </h1>
      <div className="gap-[20px] text-white font-Antonio flex items-center justify-center flex-row tracking-widest ">
        {planets.map((planet) => {
          return (
            <h1 key={planet.name}>
              <Link to={`/planet/${planet.name.toUpperCase()}`}>
                {planet.name.toUpperCase()}
              </Link>
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetName;
