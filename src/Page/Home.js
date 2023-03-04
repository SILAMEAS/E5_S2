import React from "react";
import Footer from "../components/Footer";
import MyHeader from "../components/MyHeader";

import { Constant } from "../Constant/Constant";
import Resource from "../Database/Data";
import { useSelector } from "react-redux";
import Navigate from "../components/Navigate";
import GroupLinking from "../components/GroupLinking";
import { NavigateTop } from "../components/HeaderNav";
const Home = () => {
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
      <div className="h-[82vh] flex flex-col overflow-y-scroll">
        <Resource />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
};

export default Home;
