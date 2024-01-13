import React from "react";

const Fact = ({content}) => {
  return (
    <div>
      <div className="w-[350px] h-[37px] p-2 border border-gray-400 justify-start items-start gap-2.5 inline-flex">
        <div className="text-gray-400 text-base font-normal font-['Fira Code']">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Fact;
