import React, { useState } from "react";
import Cart from "../components/Cart";

const Resource = () => {
  const [cars] = useState([
    {
      type: "car",
      buy: 1,
      id: 1,
      name: "roll roys",
      price: 10000000,
      des: "loy mes",
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 2,
      name: "Firarri",
      price: 4500000,
      des: "loy mes",
      img: "https://imgs.search.brave.com/XcUYQCLoJycKsol5p5uYf61KtO2N8tuwTUVylUc0VR0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2MvNC9iLzUx/MDEwNS5qcGc",
    },
    {
      type: "car",
      buy: 1,
      id: 3,
      name: "Lambo",
      price: 240000000,
      des: "loy mes",
      img: "https://www.topgear.com/sites/default/files/2022/04/1-Lamborghini-Aventador-Ultimae.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 4,
      name: "NSX",
      price: 240000000,
      des: "loy mes",
      img: "https://elitetraveler.com/wp-content/uploads/sites/8/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    },
    {
      type: "car",
      buy: 1,
      id: 5,
      name: "OD",
      price: 2340000000,
      des: "loy mes",
      img: "https://i.pinimg.com/originals/d5/1c/07/d51c07ff9e7f04ab4346c0105c6adfe6.png",
    },
    {
      type: "car",
      buy: 1,
      id: 6,
      name: "roll roys",
      price: 10000000,
      des: "loy mes",
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 7,
      name: "Firarri",
      price: 4500000,
      des: "loy mes",
      img: "https://imgs.search.brave.com/XcUYQCLoJycKsol5p5uYf61KtO2N8tuwTUVylUc0VR0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2MvNC9iLzUx/MDEwNS5qcGc",
    },
    {
      type: "car",
      buy: 1,
      id: 8,
      name: "Lambo",
      price: 240000000,
      des: "loy mes",
      img: "https://www.topgear.com/sites/default/files/2022/04/1-Lamborghini-Aventador-Ultimae.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 9,
      name: "NSX",
      price: 240000000,
      des: "loy mes",
      img: "https://elitetraveler.com/wp-content/uploads/sites/8/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    },
    {
      type: "car",
      buy: 1,
      id: 10,
      name: "OD",
      price: 2340000000,
      des: "loy mes",
      img: "https://i.pinimg.com/originals/d5/1c/07/d51c07ff9e7f04ab4346c0105c6adfe6.png",
    },
    {
      type: "car",
      buy: 1,
      id: 1,
      name: "roll roys",
      price: 10000000,
      des: "loy mes",
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 2,
      name: "Firarri",
      price: 4500000,
      des: "loy mes",
      img: "https://imgs.search.brave.com/XcUYQCLoJycKsol5p5uYf61KtO2N8tuwTUVylUc0VR0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2MvNC9iLzUx/MDEwNS5qcGc",
    },
    {
      type: "car",
      buy: 1,
      id: 3,
      name: "Lambo",
      price: 240000000,
      des: "loy mes",
      img: "https://www.topgear.com/sites/default/files/2022/04/1-Lamborghini-Aventador-Ultimae.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 4,
      name: "NSX",
      price: 240000000,
      des: "loy mes",
      img: "https://elitetraveler.com/wp-content/uploads/sites/8/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    },
    {
      type: "car",
      buy: 1,
      id: 5,
      name: "OD",
      price: 2340000000,
      des: "loy mes",
      img: "https://i.pinimg.com/originals/d5/1c/07/d51c07ff9e7f04ab4346c0105c6adfe6.png",
    },
    {
      type: "car",
      buy: 1,
      id: 6,
      name: "roll roys",
      price: 10000000,
      des: "loy mes",
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 7,
      name: "Firarri",
      price: 4500000,
      des: "loy mes",
      img: "https://imgs.search.brave.com/XcUYQCLoJycKsol5p5uYf61KtO2N8tuwTUVylUc0VR0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2MvNC9iLzUx/MDEwNS5qcGc",
    },
    {
      type: "car",
      buy: 1,
      id: 8,
      name: "Lambo",
      price: 240000000,
      des: "loy mes",
      img: "https://www.topgear.com/sites/default/files/2022/04/1-Lamborghini-Aventador-Ultimae.jpg",
    },
    {
      type: "car",
      buy: 1,
      id: 9,
      name: "NSX",
      price: 240000000,
      des: "loy mes",
      img: "https://elitetraveler.com/wp-content/uploads/sites/8/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    },
    {
      type: "car",
      buy: 1,
      id: 10,
      name: "OD",
      price: 2340000000,
      des: "loy mes",
      img: "https://i.pinimg.com/originals/d5/1c/07/d51c07ff9e7f04ab4346c0105c6adfe6.png",
    },
  ]);

  return (
    <>
      <div className="grid lg:grid-cols-5  md:grid-cols-4 grid-cols-2 w-full mt-10 gap-4 mx-auto h-full">
        {cars.map((items) => {
          return (
            <Cart
              name={items.name}
              price={items.price}
              des={items.des}
              img={items.img}
              key={items.id}
              id={items.id}
              buy={items.buy}
            />
          );
        })}
      </div>
    </>
  );
};

export default Resource;
