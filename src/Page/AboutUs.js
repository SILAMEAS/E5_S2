import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import MyHeader from "../components/MyHeader";
import MyLinking from "../components/MyLinking";
import Navigate from "../components/Navigate";
import { Constant } from "../Constant/Constant";

const AboutUs = () => {
  const { qty } = useSelector((state) => state.counter);
  return (
    <div className="h-[100vh] fixed w-[100%]">
      <HeaderNav op3="" op4="" />
      <MyHeader IMGLogo={Constant.IMGLogo} qty={qty} />
      <div className=" px-20 border-b-4 border-black">
        <Navigate
          ListLinking={
            <>
              <MyLinking listName={"Home"} Goto={Constant.Home} />
              <MyLinking listName={"Payment"} Goto={Constant.Payment} />
              <MyLinking listName={"AboutUs"} Goto={Constant.AboutUs} />
            </>
          }
        />
      </div>
      <div className="h-[82vh] flex flex-col overflow-y-scroll"></div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
};

export default AboutUs;
