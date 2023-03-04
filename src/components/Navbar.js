import React, { useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCarsu, setProDetail } from "../redux/counter/counterSlice";
import { useNavigate } from "react-router";
import { Constant } from "../Constant/Constant";

const Navbar = () => {
  const [opencar, setOpenCar] = useState(false);
  const { carsU } = useSelector((state) => state.counter);
  const [Tmp, setTmp] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(carsU);
  const Unbuy = (id) => {
    dispatch(setCarsu(carsU.filter((i) => i.id !== id)));
  };
  const get = (id) => {
    setTmp(carsU.filter((i) => i.id === id));
    console.log(Tmp);
    navigate(Constant.ProductInfo);
  };

  return (
    <div>
      <div className=" h-16 text-white font-bold text-2xl flex justify-between items-center w-[80%] mx-auto">
        <div className="relative cursor-pointer">
          <div className="bg-red-600 py-1 px-2  rounded-full text-sm flex justify-center absolute -top-4 -right-4">
            {carsU.length}
          </div>
          <BsFillCartDashFill
            className="lg:text-4xl md:text-3xl"
            onClick={() => {
              setOpenCar(!opencar);
            }}
          />
          <div
            className={`h-80  w-64 absolute top-10 -right-[3rem] lg:-left-[520%] md:-right-[5rem] flex  flex-col overflow-y-auto ${
              !opencar && "hidden"
            }`}
          >
            {carsU.map((i) => {
              return (
                <div
                  className="h-20 mt-2 bg-white rounded-lg p-2 flex  w-[90%] mx-auto justify-between "
                  key={i}
                >
                  <div className="text-black h-100 text-sm overflow-hidden">
                    <div
                      className="flex relative"
                      onClick={() => {
                        get(i.id);
                        dispatch(setProDetail(i));
                      }}
                    >
                      <img
                        src={i.img}
                        alt=""
                        className="w-16 h-16"
                        onClick={() => {
                          setOpenCar(!opencar);
                        }}
                      />
                      <div className="ml-4">
                        <p className="al">{i.name}</p>
                        <p>${i.price * i.buy}</p>
                      </div>
                      <div className="bg-red-600 py-1 px-2  rounded-full text-sm flex justify-center absolute top-0 text-white">
                        {i.buy}
                      </div>
                    </div>
                  </div>
                  <AiFillCloseCircle
                    className="-ml-9 text-red-700 rounded-lg"
                    onClick={() => {
                      Unbuy(i.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
