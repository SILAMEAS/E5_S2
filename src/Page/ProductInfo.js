import React from "react";

import { TiHome } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Constant } from "../Constant/Constant";
import Description from "../utils/Description";
import DetailItem from "../utils/DetailItem";
function ProductInfo() {
  const navigate = useNavigate();
  const { ProDetail } = useSelector((state) => state.counter);
  return (
    <div className="w-screen flex flex-col h-screen justify-center fixed">
      <div className="bg-black absolute top-0 left-0 -z-10 w-full h-full opacity-20"></div>
      <p
        className="absolute bottom-10 right-10 bg-blue-500 p-4 rounded-full"
        onClick={() => {
          navigate(Constant.Home);
        }}
      >
        <TiHome className="text-5xl text-white" />
      </p>
      <div>
        <div className="items-center justify-between flex flex-col space-y-16">
          <div className="flex flex-col items-center justify-between space-x-10 w-[90%] lg:w-[50%]  sm:space-y-10">
            <div className="flex flex-col space-y-5">
              <img
                src={ProDetail.img}
                alt="Logo"
                className="border-2 border-gray-200 px-5 w-[80%] h-[50%] mx-auto"
              />
            </div>
            <div className="flex justify-between  w-[100%]">
              {/* left */}
              <DetailItem ProDetail={ProDetail} />
              {/* Right */}
              <Description ProDetail={ProDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
