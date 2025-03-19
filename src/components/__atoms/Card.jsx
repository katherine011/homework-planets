import React from "react";

const Card = ({ top, bottom }) => {
  return (
    <div className="w-[250px] h-[100px] p-[15px] outline-white outline-solid flex flex-col items-start justify-center gap-3.5">
      <p className="text-[#6f6b6b] font-Antonio tracking-wide">{top}</p>
      <h1 className="text-white font-Spartan">{bottom}</h1>
    </div>
  );
};

export default Card;
