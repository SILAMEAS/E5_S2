import React from "react";
import MyInput from "./MyInput";

const MySearch = ({
  holder = "unknow",
  nameInput = "unknow",
  value,
  type = "text",
}) => {
  return (
    <div className="flex w-[full] justify-between px-5 items-start">
      <div className="flex items-center justify-center h-full">
        <MyInput type={type} value={value} placeholder={holder} />
        <button className="bg-yellow-400 p-2">{nameInput}</button>
      </div>
    </div>
  );
};
export default MySearch;
