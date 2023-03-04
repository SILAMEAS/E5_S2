import React from "react";
import { Route, Routes } from "react-router";
import { Constant } from "../Constant/Constant";
import AboutUs from "../Page/AboutUs";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Payment from "../Page/Payment";
import ProductInfo from "../Page/ProductInfo";

export default function Navigator() {
  return (
    <Routes>
      <Route path={Constant.Home} element={<Home />} />
      <Route path={Constant.Login} element={<Login />} />
      <Route path={Constant.Payment} element={<Payment />} />
      <Route path={Constant.ProductInfo} element={<ProductInfo />} />
      <Route path={Constant.AboutUs} element={<AboutUs />} />
    </Routes>
  );
}
