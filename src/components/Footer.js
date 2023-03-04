import React from "react";
function Footer({ tel = "090", address = "unknow", location = "unknow" }) {
  return (
    <div className="bg-black flex items-center justify-center h-[3vh]">
      <div className="flex justify-around w-full items-center">
        <p className="text-white">
          Contact Us Tel : <span>{tel}</span>
        </p>
        <p className="text-white">
          Address : <span>{address}</span>
        </p>
        <p className="text-white">
          Location :<span>{location}</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
