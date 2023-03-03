import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default App;
