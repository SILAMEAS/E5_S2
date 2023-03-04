import React from "react";

const Description = ({ ProDetail }) => {
  return (
    <div>
      <h1 className="font-bold text-xl">{ProDetail.name}</h1>

      <div className="flex space-x-5 text-gray-400">
        <ul>
          <li className="fa-regular fa-star"></li>
          <li className="fa-regular fa-star"></li>
          <li className="fa-regular fa-star"></li>
          <li className="fa-regular fa-star"></li>
          <li className="fa-regular fa-star"></li>
        </ul>
        <p>0 reviews</p>
        <p>
          <span className="fa-solid fa-pencil"></span> Write a review
        </p>
      </div>

      <div className="flex space-x-5 border-b-2 border-t-2 py-4 my-4 border-gray-200">
        <div>
          <p className="font-semibold">Brand : {ProDetail.brand}</p>
          <p className="font-semibold">Product Code : {ProDetail.id}</p>
          <p className="font-bold text-xl mt-3 ">Price : {ProDetail.price}</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <p className="font-semibold">QTY</p>
            <input
              id="qty"
              type="text"
              value={ProDetail.buy}
              placeholder="0"
              maxlength="3"
              className="w-10 text-center border-2 focus:border-black rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
