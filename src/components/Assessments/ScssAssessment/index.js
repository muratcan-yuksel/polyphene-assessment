import React from "react";

export default function ScssAssessment() {
  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        1. Styling
      </h3>
      <div className="h-screen w-screen flex justify-center items-center ">
        <div className="box h-5/6 w-3/6 border flex flex-col">
          <div className="top h-2/6 bg-lilac flex flex-row border border-red-600">
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
          <div className="bottom h-4/6  flex flex-row w-full ">
            <div className="left border border-red-600 w-2/3 bg-green flex justify-end items-end text-lilac hover:text-green hover:bg-lilac hover:justify-center hover:items-center">
              <p>doe</p>
            </div>
            <div className="right border border-red-600 w-1/3 flex flex-col">
              <div className="h-2/4 bg-green text-lilac flex justify-end items-end hover:text-green hover:bg-lilac hover:justify-center hover:items-center ">
                <p>doe</p>
              </div>
              <div className="h-2/4 bg-lilac text-green flex justify-center items-center hover:justify-end hover:items-end hover:text-lilac hover:bg-green ">
                <p>john</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
