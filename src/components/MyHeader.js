import React from "react";
import MySearch from "./MySearch";
import Navbar from "./Navbar";
const MyHeader = ({
  IMGLogo,
  qty = 10,
  value,
  type,
  buttonName = "Search",
  holder = "search",
}) => {
  return (
    <div className="w-ful h-[10vh] flex flex-row justify-between px-10 bg-black">
      <img src={IMGLogo} alt="Logo" />
      <div className="flex h-full items-center space-x-20">
        <MySearch
          holder={holder}
          nameInput={buttonName}
          value={value}
          type={type}
        />
        <Navbar />
      </div>
    </div>
  );
};
export default MyHeader;
