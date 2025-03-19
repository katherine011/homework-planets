import React, { useState } from "react";
import Box from "../__atoms/Box";

const Boxes = () => {
  return (
    <>
      <div className="w-[350px] h-[150px] flex items-start justify-between flex-col">
        <Box number="01" text="OVERVIEW" />
        <Box number="02" text=" Internal Structure" />
        <Box number="03" text="Surface Geology" />
      </div>
    </>
  );
};

export default Boxes;
