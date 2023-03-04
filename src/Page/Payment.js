import React from "react";
import { NavigateTop } from "../components/HeaderNav";
import MyHeader from "../components/MyHeader";
import { Constant } from "../Constant/Constant";
import Navigate from "../components/Navigate";
import Footer from "../components/Footer";
import GroupLinking from "../components/GroupLinking";
const HingCode = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-blue-500">
        <div className=" card rounded-lg h-auto w-3/4 bg-white">
          <div className="flex h-full w-full ">
            <div className="left_side truncate relative rounded-l-lg h-auto w-full truncate">
              <img src="../Image/Payment.jpg" alt="Logo" />
              <div className="h-48 w-72 opacity-70 rounded-lg  bg-blue-300 absolute top-28 left-8 ">
                <div className="p-2 mt-3 text-black font-semibold">
                  <p>Card Number</p>
                  <p className="border-b-2 text-white shown_number">
                    0000 0000 0000 0000
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <div className="p-2 mt-2 text-black font-semibold">
                    <p>Expiry Date</p>
                    <p className="border-b-2 text-white shown_expiry">
                      mm/yyyy
                    </p>
                  </div>
                  <div className="p-2 mt-2 text-black font-semibold">
                    <p>CVV</p>
                    <p className="border-b-2 text-white shown_cvv">000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 right_side truncate h-auto w-full bg-gray-300 rounded-r-lg">
              <p className="mt-3 text-xl font-semibold">Payment Details</p>
              <div className="mt-5 relative">
                {" "}
                <input
                  className="input_number h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  data-slots="0"
                  data-accept="\d"
                  size="19"
                  onkeyup="Number(this.value)"
                />{" "}
                <label className="text-xs absolute -top-4 left-0">
                  Card Number
                </label>{" "}
              </div>
              <div className="mt-7 w-full flex gap-3">
                <div className=" relative w-full">
                  {/* <input className="input_expiry h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" placeholder="mm/yyyy" data-slots="my" type="text" onkeyup="Expiry(this.value)"> <label className="text-xs absolute -top-4 left-0" /> */}
                  <input
                    className="input_expiry h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"
                    placeholder="mm/yyyy"
                    data-slots="my"
                    type="text"
                    onkeyup="Expiry(this.value)"
                  />
                  <label className="text-xs absolute -top-4 left-0" />
                  <label> Expiry Date</label>
                </div>
                <div className=" relative w-full">
                  <input
                    className="input_cvv h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"
                    type="text"
                    placeholder="000"
                    data-slots="0"
                    data-accept="\d"
                    size="3"
                    onkeyup="Cvv(this.value)"
                  />
                  <label className="text-xs absolute -top-4 left-0">CVV</label>{" "}
                </div>
              </div>
              <div className="mt-7 relative">
                <input
                  className="h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900"
                  type="text"
                />{" "}
                <label
                  className="text-xs absolute -top-4 left-0"
                  onkeyup="Name(this.value)"
                >
                  Name on Card
                </label>{" "}
              </div>
              <p className="mt-4">
                Amount due :{" "}
                {/* <a className="font-semibold" href="#">
                  <i className="fa fa-rupee"></i> 12,500.00
                </a> */}
              </p>
              <div className="mb-5">
                {" "}
                <button className="pay_now mt-4 outline-none rounded-lg text-white h-12 w-full bg-green-500 text-sm cursor-pointer transition-all hover:bg-green-800">
                  <i className="fa fa-lock mr-1 "></i>Pay Now
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black flex items-center h-full justify-center">
        <div className="flex justify-around w-full items-center">
          <img
            src="https://www.goldonecomputer.com/image/catalog/Icon%20and%20Logo/Gold%20One%20New%20Logo-1.png"
            alt="Logo"
          />
          <div className="text-white">
            Contact Us <br />
            Tel : 0123456789
            <br />
            Address : RUPP
            <br />
            Location : Googlemap.Rupp.com.kh
          </div>
        </div>
      </div>
    </>
  );
};
function Payment() {
  return (
    <div classNameName="h-[100vh] fixed w-[100%]">
      <NavigateTop />
      <MyHeader IMGLogo={Constant.IMGLogo} />
      <div classNameName="bg-black">
        <div className=" px-20 border-b-4 border-black">
          <Navigate
            ListLinking={
              <>
                <GroupLinking />
              </>
            }
          />
        </div>
      </div>
      <div classNameName="h-[82vh] flex flex-col overflow-y-scroll">
        <HingCode />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
}

export default Payment;
