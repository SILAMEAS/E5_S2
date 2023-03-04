import React from "react";
import { useNavigate } from "react-router";
import { Constant } from "../Constant/Constant";

function HeaderNav({ listMenu }) {
  return (
    <div className="p-2 w-ful pr-[5%] bg-zinc-800 flex items-center justify-end h-[2vh]">
      <ul className="text-white flex text-xs space-x-5">{listMenu}</ul>
    </div>
  );
}
function NavigateTop() {
  const navigate = useNavigate();
  return (
    <HeaderNav
      listMenu={
        <>
          <li>
            <button
              onClick={() => {
                navigate(Constant.Login);
              }}
            >
              Login Account
            </button>
          </li>
          <li>
            <p>Contact Us</p>
          </li>
        </>
      }
    />
  );
}
export { HeaderNav, NavigateTop };
