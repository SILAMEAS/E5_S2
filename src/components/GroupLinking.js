import React from "react";
import { Constant } from "../Constant/Constant";
import MyLinking from "./MyLinking";

const GroupLinking = () => {
  return (
    <>
      <MyLinking listName={"Home"} Goto={Constant.Home} />
      <MyLinking listName={"AboutUs"} Goto={Constant.AboutUs} />
    </>
  );
};

export default GroupLinking;
