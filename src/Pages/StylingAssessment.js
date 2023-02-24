import React from "react";

export default function StylingAssessment() {
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="box h-5/6 w-5/6 border flex flex-col">
        <div className="top h-2/6 bg-lilac flex flex-row">
          <div className="w-1/4 text-green  bg-lilac h-full flex justify-center items-center hover:justify-end hover:items-end hover:bg-green hover:text-lilac">
            <p className="">John</p>
          </div>
          <div className="w-2/4 text-lilac bg-green h-full flex justify-end items-end hover:justify-center hover:items-center hover:bg-lilac hover:text-green">
            <p className=" ">doe</p>
          </div>
          <div className="w-1/4 bg-lilac text-green h-full flex justify-center items-center hover:justify-end hover:items-end hover:bg-green hover:text-lilac">
            <p className=" ">John</p>
          </div>
        </div>
        <div className="bottom h-4/6">bot</div>
      </div>
    </div>
  );
}
