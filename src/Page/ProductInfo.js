import React, { useState } from "react";

import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Constant } from "../Constant/Constant";
function ProductInfo() {
  const navigate = useNavigate();
  const [Pc] = useState({
    picPc:
      "https://www.goldonecomputer.com/image/cache/catalog/Apple/2023/MacBook-Pro-M2-16-Grey-330x409.jpg",
    namePc: "Macbook PRO 6 (M2 PRO / 16 GM / SSD 1TM / 16.2",
    subDetailPc: `-CPU: Apple M2 Pro with 12-core CPU, 19-core GPU, 16-core Neural Engine $
  -RAM: 16GB Unified -Storage: SSD 1TB
  -Display: 16.2" Liquid Retina XDR Display`,
    subSubDetailPc: `  -Wi-Fi 6
  -Bluetooth 5
  -Weigh : 2.2Kg
  -OS: MacOS
  -Color: Grey and Silver`,
    footerPc: ` Warranty - 1-year hardware
  - (No warranty for screen, battery, keyboard, fan & speaker, adapter)`,
    brandPc: "XLove",
    qtyPc: 90,
    codePc: "9090",
  });

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
            <div className="flex flex-col">
              <img
                src={Pc.picPc}
                alt="Logo"
                className="border-2 border-gray-200 px-5"
              />
            </div>

            <div>
              <h1 className="font-bold text-xl">{Pc.namePc}</h1>

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
                  <p className="font-semibold">Brand : {Pc.brandPc}</p>
                  <p className="font-semibold">Product Code : {Pc.codePc}</p>
                  <p className="font-bold text-xl mt-3 price"></p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <p className="font-semibold">QTY</p>
                    <input
                      id="qty"
                      type="text"
                      value={Pc.qtyPc}
                      placeholder="0"
                      maxlength="3"
                      className="w-10 text-center border-2 focus:border-black rounded-sm"
                    />
                  </div>
                  <button className="bg-yellow-400 text-white add px-2 py1 rounded-md">
                    ADD TO CART
                  </button>
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
              <h1 className="text-lg bg-yellow-500 w-[10%] text-center font-bold text-white">
                Detail
              </h1>
              <p>{Pc.subDetailPc}</p>
              <p>{Pc.subSubDetailPc}</p>
              <p>{Pc.footerPc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
