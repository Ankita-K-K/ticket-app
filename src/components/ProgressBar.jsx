import React from "react";

const ProgressBar = () => {
  return (
    <div className="bg-gray-100 rounded-full h-2.5">
      <div
        className="bg-blue-500 rounded-full h-2.5"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
