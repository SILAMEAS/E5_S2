import React from "react";
import MySearch from "./MySearch";
import Navbar from "./Navbar";
const MyHeader = ({ IMGLogo, qty = 10 }) => {
  return (
    <div className="w-ful h-[10vh] flex flex-row justify-between px-10 bg-black">
      <img src={IMGLogo} alt="Logo" />
      <div className="flex h-full items-center space-x-20">
        <MySearch holder="Search" nameInput="Search" />
        <Navbar />
      </div>
    </div>
  );
};
export default MyHeader;
