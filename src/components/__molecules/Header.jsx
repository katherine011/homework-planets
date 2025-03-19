import React from "react";
import PlanetName from "../__atoms/PlanetName";

const Header = () => {
  return (
    <>
      <div>
        <PlanetName />
      </div>
      <div className="w-[100%] h-[1px] bg-[#6d6b6b] "></div>
    </>
  );
};

export default Header;
