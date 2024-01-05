import React from "react";
import img1 from "./Images/6.png";
function Demo() {
  return (
    <div>
      <div className="bg-stone-300 rounded-custom1 sm:rounded-bl-custom2 sm:rounded-tr-custom2 md:rounded-bl-custom3 md:rounded-tr-custom3 shadow-md p-4 m-4 sm:flex  ">
        {/* Card Title */}
        <div className="title_para sm:flex flex-col items-center justify-center sm:w-1/2">
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-800 mb-2  sm:m-2 text-center
          ">
            Card Title
          </div>
          <p className="text-stone-700 text-center m-6 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Card Image */}
        <img
          src={img1}
          alt="Card Image"
          className="w-full h-auto sm:w-1/2 "
        />
      </div>
    </div>
  );
}

export default Demo;
