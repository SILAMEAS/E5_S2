import React from "react";

const MyInput = ({ value, type, placeholder }) => {
  return (
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-black w-full border-none rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:border-none InputSearch"
      placeholder={placeholder}
      value={value}
      type={type}
    />
  );
};

export default MyInput;
