import React from "react";

const Box = ({ number, text, onclick }) => {
  return (
    <div>
      <a className="text-white">
        <button
          onClick={onclick}
          className="w-[350px] h-[30px] flex items-center justify-start cursor-pointer gap-3.5 p-5 outline-white outline-solid "
        >
          <p className="text-[#6f6b6b] tracking-wide">{number}</p>
          {text}
        </button>
      </a>
    </div>
  );
};

export default Box;
