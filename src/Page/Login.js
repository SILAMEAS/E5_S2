import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import GroupLinking from "../components/GroupLinking";
import { NavigateTop } from "../components/HeaderNav";

import MyHeader from "../components/MyHeader";
import Navigate from "../components/Navigate";
import { LoginByKim } from "../components/TemplateLogin";
import { Constant } from "../Constant/Constant";

function Login() {
  const { qty } = useSelector((state) => state.counter);
  const [IsLogin, setIsLogin] = useState(false);
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
      <div className="h-[82vh] flex overflow-y-scroll justify-center items-center">
        <LoginByKim IsLogin={IsLogin} setLogin={setIsLogin} />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
}
export default Login;
