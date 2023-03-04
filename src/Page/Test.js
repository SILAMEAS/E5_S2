import React from "react";

export const Test = () => {
  return (
    <div>
      <div>
        <div classname="p-2 w-ful pr-[5%] bg-zinc-800 flex items-center justify-end">
          <ul classname="text-white flex text-md space-x-5">
            <li>My Accout</li>
            <li>Wish List</li>
            <li>Checkout</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div classname="p-5 w-ful bg-black text-white flex flex-col border-b-4 border-yellow-400 items-center">
          <div classname="flex w-[90%] justify-between items-center mb-5 sm:flex-col lg:flex-row sm:space-y-10">
            <div>
              <img
                src="https://www.goldonecomputer.com/image/catalog/Icon%20and%20Logo/Gold%20One%20New%20Logo-1.png"
                alt="Logo"
              />
            </div>
            <div classname="bg-white">
              <input
                type="text"
                placeholder="Search"
                classname="p-2 bg-inherit"
              />
              <button classname="bg-yellow-400 p-2">SEARCH</button>
            </div>
            <div classname="flex items-center">
              <div classname="fa-solid fa-phone p-3 border-2 rounded-full border-white">
                <div classname="ml-3">
                  <p classname="">CONTACT</p>
                  <p>010-900-950</p>
                </div>
                <div classname="fa-solid fa-bag-shopping ml-5 text-2xl bg-yellow-500 p-4 rounded-full"></div>
              </div>

              <div classname="w-[90%] flex m">
                <nav classname="flex justify-center space-x-4">
                  <a
                    href="./PageHome.html"
                    classname="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-500"
                  >
                    <p classname="text-white">Home</p>
                  </a>
                  <a
                    href="/team"
                    classname="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-500"
                  >
                    <p classname="text-white">Product</p>
                  </a>
                  <a
                    href="/projects"
                    classname="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-500"
                  >
                    <p classname="text-white">Payment</p>
                  </a>
                  <a
                    href="./PageHome.html"
                    classname="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-500"
                  >
                    <p classname="text-white">About</p>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div classname="row my-5">
            <div classname="col-lg-4 col-md-4 card-margin">
              <a href="./latest_news/">
                <div classname="h-100 main-container">
                  <img
                    src="https://e5projectclothes.netlify.app/img/about/team.jpg"
                    alt=""
                  />
                  <div classname="overlay">
                    <div classname="main-description text-center">
                      <div classname="title">Teams activities</div>
                      <div classname="hidedescription">latest information</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div classname="col-lg-4 col-md-4 card-margin">
              <a href="./product-service/">
                <div classname="h-100 main-container">
                  <img
                    src="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
                    alt=""
                  />
                  <div classname="overlay">
                    <div classname="main-description text-center">
                      <div classname="title">Products And Services</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div classname="col-lg-4 col-md-4 card-margin">
              <a href="./promotion/">
                <div classname="h-100 main-container">
                  <img
                    src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2021/09/EPRS-Briefing-698028-General-product-safety-regulation-FINAL.png?fit=1000%2C666&ssl=1"
                    alt=""
                  />
                  <div classname="overlay">
                    <div classname="main-description text-center">
                      <div classname="title">shopping</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <ul id="css3dimagePager">
              <hr />
              My teams members
              <li classname="list-group-item list-group-item-danger">
                Meas Sila
              </li>
              <li classname="list-group-item list-group-item-danger">
                {"{"}" "{"}"}
                Money Ritheara
              </li>
              <li classname="list-group-item list-group-item-danger">
                Mam Hing
              </li>
              <li classname="list-group-item list-group-item-danger">
                Kou Kimhai
              </li>
              <li classname="list-group-item list-group-item-danger">
                Nan Povoudom{"{"}" "{"}"}
              </li>
              <li classname="list-group-item list-group-item-danger">
                Pha Sokheang
              </li>
              <li classname="list-group-item list-group-item-danger">
                {"{"}" "{"}"}
                Roeun Chhorvy
              </li>
            </ul>
            <center>
              <h1 style={{ fontFamily: "verdana" }} width="50%" height="50%">
                About as
              </h1>
              <br />
              <p>
                We create this Website for helping you for shopping online And
                make seller and buyer easy to contact and get the product.{" "}
                <br />
                Phone-call or Telegram: 0966804599 <br />
                Email: gmail@gmail.com
              </p>
            </center>
            <div classname="bg-black flex items-center h-full justify-center">
              <div classname="flex justify-around w-full items-center">
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
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
export const Test3 = () => {
  return <p>sdfds</p>;
};
