import React from "react";
import { useNavigate } from "react-router-dom";
import { Constant } from "../Constant/Constant";

const DetailItem = ({ ProDetail }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-center flex-col ">
      <div className="flex justify-center items-center space-x-5">
        <p className="p-2 bg-gray-700 text-white font-bold rounded-sm">
          DESCRIPTION
        </p>
        <p className="text-gray-400 font-bold">REVIEWS (0)</p>
      </div>
      <hr className="bg-gray-300 h-[1px] w-full mb-5" />
      <div className="flex flex-col space-y-10">
        <h1
          className="text-lg bg-yellow-500  text-center font-bold text-white cursor-pointer"
          onClick={() => {
            navigate(Constant.Payment);
          }}
        >
          Buy this {ProDetail.type}
        </h1>
        {/* <p>{Constant.Pc.subDetailPc}</p> */}
        <p>{ProDetail.des}</p>
        <p>{ProDetail.subDes}</p>
      </div>
    </div>
  );
};

export default DetailItem;
