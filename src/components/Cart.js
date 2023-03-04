import React, { useState } from "react";
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
        <div className="mt-2 mx-4">
          <p className="font-bold">{data.name}</p>
          <p className="font-bold">{data.price}</p>
          <p className="font-bold">{data.des}</p>
          <button
            className="bg-blue-600 px-4  py-1 rounded-lg text-white font-bold"
            onClick={BUY}
          >
            ADD CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
