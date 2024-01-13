import React from "react";

export const TitleUnlined = ({sign, title}) => {
  return (
    <div>
      <div className="w-[251px] h-[42px] justify-start items-start inline-flex">
        <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">
          {sign}
        </div>
        <div className="text-white text-[32px] font-medium font-['Fira Code']">
          {title}
        </div>
      </div>
    </div>
  );
};
