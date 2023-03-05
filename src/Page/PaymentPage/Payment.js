import React from "react";
import { NavigateTop } from "../../components/HeaderNav";
import MyHeader from "../../components/MyHeader";
import { Constant } from "../../Constant/Constant";
import Navigate from "../../components/Navigate";
import Footer from "../../components/Footer";
import GroupLinking from "../../components/GroupLinking";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
function Payment() {
  const { qty } = useSelector((state) => state.counter);
  return (
    <div className="h-[100vh] fixed w-[100%]">
      <NavigateTop />
      <MyHeader IMGLogo={Constant.IMGLogo} qty={qty} />
      <div className=" px-20 border-b-4 border-black">
        <Navigate
          ListLinking={
            <>
              <GroupLinking />
            </>
          }
        />
      </div>
      <div className="h-[82vh] flex flex-col overflow-y-scroll justify-center items-center">
        <Checkout />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
}

export default Payment;
