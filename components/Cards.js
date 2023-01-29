import App from "@/pages/_app";
import React from "react";
import { AppContext } from "./context";
import Image from "next/image";
import { IoIosBed } from "react-icons/io";
import { FaBath, FaRuler } from "react-icons/fa";
import { data } from "../pages/index";
import Map from "./map";

const Cards = () => {
  // const { data } = React.useContext(AppContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-8">
      <div className="grid auto-cols-max gap-4 grid-cols-2">
        {data.map(
          (
            { _id, price, address, area, bedrooms, bathrooms, image },
            index
          ) => {
            return (
              <div
                key={_id}
                className={`grid grid-flow-row grid-rows-2 rounded-xl overflow-hidden bg-white drop-shadow-md card${
                  index + 1
                }`}
              >
                <div
                  className=" row-span-1 bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden drop-shadow-2xl"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* <img className="" src={image} alt="" /> */}
                </div>
                <div className="flex flex-col gap-3 sm:gap-1 md:gap-2 row-span-1 p-2 sm:p-1 md:p-4">
                  <h2 className="lg:text-xl font-bold ">$ {price}</h2>
                  <p className="text-xs lg:text-sm text-[#969696]">{address}</p>
                  <div className="flex gap-3">
                    <div className="flex gap-1 py-1 px-1 sm:py-1 sm:px-2 bg-[#F3F3F3] rounded-lg text-xs lg:text-sm font-bold">
                      <IoIosBed className="text-[#DF9034] icon" size={18} />{" "}
                      {bedrooms}
                    </div>
                    <div className="flex gap-1 py-1 px-1 sm:py-1 sm:px-2 bg-[#F3F3F3] rounded-lg text-xs lg:text-sm font-bold">
                      <FaBath className="text-[#468FD1] icon" size={18} />{" "}
                      {bathrooms}
                    </div>
                    <div className="flex gap-1 py-1 px-1 sm:py-1 sm:px-2 bg-[#F3F3F3] rounded-lg text-xs lg:text-sm font-bold">
                      <FaRuler className="text-[#43B4A6] icon" size={18} />{" "}
                      {area}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <Map />
    </div>
  );
};

export default Cards;
