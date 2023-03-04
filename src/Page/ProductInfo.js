import React from "react";

import { TiHome } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Constant } from "../Constant/Constant";
function ProductInfo() {
  const navigate = useNavigate();
  const { ProDetail } = useSelector((state) => state.counter);
  console.log("------");
  console.log(ProDetail);

  return (
    <div className="w-screen flex flex-col h-screen justify-center">
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
          <div className="flex items-center justify-between space-x-10 w-[90%] lg:w-[50%] sm:flex-col lg:flex-row sm:space-y-10">
            <div className="flex flex-col space-y-5">
              <img
                src={ProDetail.img}
                alt="Logo"
                className="border-2 border-gray-200 px-5"
              />
              <button className="bg-yellow-400 text-white add px-2 py1 rounded-md h-[3vh]">
                ADD TO CART
              </button>
            </div>

            <div>
              <h1 className="font-bold text-xl">{ProDetail.name}</h1>

              <div className="flex space-x-5 text-gray-400">
                <ul>
                  <li className="fa-regular fa-star"></li>
                  <li className="fa-regular fa-star"></li>
                  <li className="fa-regular fa-star"></li>
                  <li className="fa-regular fa-star"></li>
                  <li className="fa-regular fa-star"></li>
                </ul>
                <p>0 reviews</p>
                <p>
                  <span className="fa-solid fa-pencil"></span> Write a review
                </p>
              </div>

              <div className="flex space-x-5 border-b-2 border-t-2 py-4 my-4 border-gray-200">
                <div>
                  <p className="font-semibold">Brand : {ProDetail.brand}</p>
                  <p className="font-semibold">Product Code : {ProDetail.id}</p>
                  <p className="font-bold text-xl mt-3 ">
                    Price : {ProDetail.price}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <p className="font-semibold">QTY</p>
                    <input
                      id="qty"
                      type="text"
                      value={ProDetail.buy}
                      placeholder="0"
                      maxlength="3"
                      className="w-10 text-center border-2 focus:border-black rounded-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center w-[90%] flex-col">
            <div className="flex justify-center items-center space-x-5">
              <p className="p-2 bg-gray-700 text-white font-bold rounded-sm">
                DESCRIPTION
              </p>
              <p className="text-gray-400 font-bold">REVIEWS (0)</p>
            </div>
            <hr className="bg-gray-300 h-[1px] w-full mb-5" />
            <div className="flex flex-col space-y-10">
              <h1 className="text-lg bg-yellow-500  text-center font-bold text-white">
                Detail
              </h1>
              {/* <p>{Constant.Pc.subDetailPc}</p> */}
              <p>{ProDetail.des}</p>
              <p>{ProDetail.subDes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
