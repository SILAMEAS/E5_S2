import React from "react";

function HeaderNav({
  op1 = "My Account",
  op2 = "Wish List",
  op3 = "Checkout",
  op4 = "My Cart",
}) {
  return (
    <div className="p-2 w-ful pr-[5%] bg-zinc-800 flex items-center justify-end h-[2vh]">
      <ul className="text-white flex text-xs space-x-5">
        <li>
          <p>{op1}</p>
        </li>
        <li>
          <p>{op2}</p>
        </li>
        <li>
          <p>{op3}</p>
        </li>
        <li>
          <p>{op4}</p>
        </li>
      </ul>
    </div>
  );
}
export default HeaderNav;
