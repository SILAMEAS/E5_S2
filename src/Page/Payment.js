import React from "react";
import MyLinking from "../components/MyLinking";
import HeaderNav from "../components/HeaderNav";
import MyHeader from "../components/MyHeader";
import { Constant } from "../Constant/Constant";
import Navigate from "../components/Navigate";
import ProductInfo from "./ProductInfo";
import Footer from "../components/Footer";

function Payment() {
  return (
    <div className="h-[100vh] fixed w-[100%]">
      <HeaderNav />
      <MyHeader IMGLogo={Constant.IMGLogo} />
      <div className="bg-black">
        <Navigate
          ListLinking={
            <>
              <MyLinking listName={"Home"} Goto={Constant.Home} />
              <MyLinking listName={"Payment"} Goto={Constant.Payment} />
            </>
          }
        />
      </div>
      <div className="h-[75vh] flex flex-col overflow-y-scroll">
        <ProductInfo />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
}

export default Payment;
