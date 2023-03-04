import React from "react";
import { useSelector } from "react-redux";
import MyInput from "./MyInput";

const MySearch = ({
  holder = "unknow",
  nameInput = "unknow",
  type = "text",
}) => {
  const { dataSearch } = useSelector((state) => state.counter);
  const Search = () => {
    alert(dataSearch);
  };
  return (
    <div className="flex w-[full] justify-between px-5 items-start">
      <div className="flex items-center justify-center h-full bg-yellow-400">
        <MyInput type={type} holder={holder} />
        <button className="bg-yellow-400 p-2" onClick={Search}>
          {nameInput}
        </button>
      </div>
    </div>
  );
};
export default MySearch;
