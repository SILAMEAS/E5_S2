import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataSearch } from "../redux/counter/counterSlice";

const MyInput = ({ value, type, placeholder }) => {
  const { dataSearch } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-none py-2 pl-9 pr-3 shadow-sm focus:outline-none    sm:text-sm focus:border-none InputSearch text-black"
      placeholder={placeholder}
      value={dataSearch}
      type={type}
      onChange={(e) => dispatch(setDataSearch(e.target.value))}
    />
  );
};

export default MyInput;
