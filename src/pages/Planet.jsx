import React from "react";
import PlanetInfo from "../components/__atoms/PlanetInfo";
import PlanetPic from "../components/__atoms/PlanetPic";
import Boxes from "../components/__molecules/Boxes";

const Planet = () => {
  return (
    <div className="w-[100%] flex items-center justify-between flex-row gap-[200px] mt-6 ">
      <PlanetPic />
      <div className="w-[100%] h-[420px] flex items-center justify-between flex-col ml-[400px]">
        <PlanetInfo />
        <Boxes />
      </div>
    </div>
  );
};

export default Planet;
