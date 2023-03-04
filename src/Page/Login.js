import React from "react";
import HeaderNav from "../components/HeaderNav";
import MyHeader from "../components/MyHeader";

function Login() {
  return (
    <div className="h-[100vh] w-screen bg-slate-300 fixed">
      <HeaderNav />
      <MyHeader />
    </div>
  );
}

export default Login;
