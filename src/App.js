import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Constant } from "./Constant/Constant";
import AboutUs from "./Page/AboutUs";

import Home from "./Page/Home";

import Login from "./Page/Login";
import Payment from "./Page/Payment";
import ProductInfo from "./Page/ProductInfo";
function getWindowSize() {
  const Widthinner = window.innerWidth;
  return Widthinner;
}

function App() {
  const [width, setWidth] = useState(getWindowSize());
  console.log(width);
  /// window size
  useEffect(() => {
    function handleWidth() {
      setWidth(getWindowSize);
    }
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path={Constant.Home} element={<Home />} />
        <Route path={Constant.Login} element={<Login />} />
        <Route path={Constant.Payment} element={<Payment />} />
        <Route path={Constant.ProductInfo} element={<ProductInfo />} />
        <Route path={Constant.AboutUs} element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
