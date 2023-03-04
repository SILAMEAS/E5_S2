import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import GroupLinking from "../components/GroupLinking";
import { NavigateTop } from "../components/HeaderNav";
import MyHeader from "../components/MyHeader";

import Navigate from "../components/Navigate";

import { Constant } from "../Constant/Constant";
const HingCode = () => {
  return (
    <div className="w-[100%] mt-5 flex flex-col">
      <div className="grid grid-cols-3 px-10">
        <img
          src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2021/09/EPRS-Briefing-698028-General-product-safety-regulation-FINAL.png?fit=1000%2C666&ssl=1"
          alt="s"
          className="h-[72%]"
        />
        <img
          src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
          alt="dsfd"
        />
        <img
          src="https://e5projectclothes.netlify.app/img/about/team.jpg"
          alt=""
        ></img>
      </div>
      <div>
        <div className="flex flex-col space-y-10 px-10">
          <hr />
          <div className="flex justify-center">
            <ul className="border-2 border-blue-500 px-4 py-2 rounded-md">
              <p className="text-center bg-blue-500 px-4 py-2 text-white mb-5 font-bold ">
                My teams members
              </p>
              <li classname="ml-5">Meas Sila</li>
              <li classname="ml-5">Money Ritheara</li>
              <li classname="ml-5">Mam Hing</li>
              <li classname="ml-5">Kou Kimhai</li>
              <li classname="ml-5">Nan Povoudom</li>
              <li classname="ml-5">Pha Sokheang</li>
              <li classname="ml-5">Roeun Chhorvy</li>
            </ul>
            <div className="bg-black flex items-center justify-center">
              <img
                src="https://www.goldonecomputer.com/image/catalog/Icon%20and%20Logo/Gold%20One%20New%20Logo-1.png"
                alt="Logo"
              />
              <div classname="text-white">
                Contact Us <br />
                Tel : 0123456789
                <br />
                Address : RUPP
                <br />
                Location : Googlemap.Rupp.com.kh
              </div>
            </div>
          </div>
          <hr />
          <center>
            <h1 style={{ fontFamily: "verdana" }} width="50%" height="50%">
              About Us
            </h1>
            <br />
            <p>
              We create this Website for helping you for shopping online And
              make seller and buyer easy to contact and get the product. <br />
              Phone-call or Telegram: 0966804599 <br />
              Email: gmail@gmail.com
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};
const AboutUs = () => {
  const { qty } = useSelector((state) => state.counter);
  return (
    <div className="h-[100vh] fixed w-[100%]">
      <NavigateTop op3="" op4="" />
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
        <HingCode />
      </div>
      <Footer address="Cambodai" location="Phnom Penh" tel="0123456789" />
    </div>
  );
};

export default AboutUs;
