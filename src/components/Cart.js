import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Constant } from "../Constant/Constant";
import {
  buyOne,
  setCarsu,
  setProDetail,
} from "./../redux/counter/counterSlice";
const Cart = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewPic, setViewPic] = useState(false);
  const { carsU } = useSelector((state) => state.counter);
  let [amountBuy, setamountBuy] = useState(0);
  const BUY = () => {
    dispatch(buyOne());
    setamountBuy(amountBuy++);
    !carsU.find((i) => i.id === data.id) &&
      dispatch(
        setCarsu([
          ...carsU,
          {
            name: data.name,
            price: data.price,
            img: data.img,
            id: data.id,
            buy: amountBuy,
          },
        ])
      );
    carsU.find((i) => i.id === data.id) && alert("Have one");
  };
  return (
    <div>
      {viewPic && (
        <div className="bg-black absolute top-0 left-0 w-[100%] h-[100%] z-50 flex justify-center items-center">
          <div className="relative">
            <div
              className="bg-blue-500 absolute top-0 right-0 rounded-full"
              onClick={() => {
                setViewPic(false);
              }}
            >
              <IoIosCloseCircleOutline className="text-8xl text-white" />
            </div>
            <img alt="hsdf" src={data.img} />
          </div>
        </div>
      )}
      <div className="w-full rounded-md overflow-hidden pb-4 cursor-pointer shadow-sm hover:shadow-lg p-2 h-[23rem] lg:h-[30rem] mb-3">
        <img
          src={data.img}
          alt=""
          className="w-full h-[70%] rounded-md"
          onClick={() => {
            navigate(Constant.ProductInfo);
            dispatch(setProDetail(data));
          }}
        />
        <div className="mt-2 mx-auto">
          <p className="font-bold">Model : {data.name}</p>
          <p className="font-bold">Price : {data.price}</p>
          <p className="font-bold">Brand : {data.brand}</p>
          <div className="text-blue-400 flex w-[100%] justify-between px-5 items-center h-[70%] text-2xl mt-5">
            <button
              onClick={() => {
                setViewPic(true);
              }}
              className="hover:text-white hover:bg-blue-600 rounded-full p-2"
            >
              <FaRegEye />
            </button>
            <button
              onClick={BUY}
              className="hover:text-white hover:bg-blue-600 rounded-full p-2"
            >
              <BsCart2 />
            </button>
            <button
              onClick={BUY}
              className="hover:text-white hover:bg-blue-600 rounded-full p-2"
            >
              <MdPlaylistAdd />
            </button>
          </div>
          {/* <button
            className="bg-blue-600 px-4  py-1 rounded-lg text-white font-bold"
            onClick={BUY}
          >
            ADD CART
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default Cart;
