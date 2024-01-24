import React from "react";
import { useState } from "react";

import left from "../img/left.png";
import right from "../img/right.png";
function HomeImg() {
  const [imgMc, setimgMc] = useState([
    {
      id: 1,
      img: "https://www.mcdonalds.com.tr/Files/Slider/20d33274-bc0b-44d1-b899-908608401852-1920x800-final.jpg",
    },
    {
      id: 2,
      img: "https://www.mcdonalds.com.tr/Files/Slider/15ba08bf-9baf-41fc-a965-db4dd48b3a65-kurumsal-site.jpg",
    },
    {
      id: 3,
      img: "https://www.mcdonalds.com.tr/Files/Slider/be762f90-1ed9-4552-b637-fdd89e3c2b14-1920x800.jpg",
    },
    {
      id: 4,
      img: "https://www.mcdonalds.com.tr/Files/Slider/8baaa913-4c4e-4c8d-8397-096b852295b5-tok-artik-citir-tavuk-web-1280x800.jpg",
    },
  ]);
  const [imgNumber, setimgNumber] = useState(0);

  const rightClick = () => {
    setimgNumber(imgNumber + 1);
    if (imgNumber >= imgMc.length - 1) {
      setimgNumber(0);
    }
  };
  const leftClick = () => {
    setimgNumber(imgNumber - 1);
    if (imgNumber === 0) {
      setimgNumber(imgMc.length - 1);
    }
  };
  return (
    <div className=" ">
      <div className=" relative w-full h-auto bg-gray-400 ">
        <div className="   ">
          <div className=" absolute top-0 w-full z-10 h-full flex">
            <div className=" w-12 flex items-center" onClick={leftClick}>
              <img src={left} alt="" />
            </div>
            <div className=" w-full  h-full flex flex-col ">
              <div className=" w-full h-full"></div>
              <div className=" w-full h-10 flex justify-center">
                <div
                  onClick={() => {
                    setimgNumber(0);
                  }}
                  className={
                    imgNumber === 0
                      ? "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1 bg-navbarYellow"
                      : "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1"
                  }
                ></div>
                <div
                  onClick={() => {
                    setimgNumber(1);
                  }}
                  className={
                    imgNumber === 1
                      ? "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1 bg-navbarYellow"
                      : "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1"
                  }
                ></div>
                <div
                  onClick={() => {
                    setimgNumber(2);
                  }}
                  className={
                    imgNumber === 2
                      ? "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1 bg-navbarYellow"
                      : "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1"
                  }
                ></div>
                <div
                  onClick={() => {
                    setimgNumber(3);
                  }}
                  className={
                    imgNumber === 3
                      ? "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1 bg-navbarYellow"
                      : "border-4 border-navbarYellow transition translate-x-full duration-700 rounded-full w-5 h-5 mx-1"
                  }
                ></div>
              </div>
            </div>
            <div className=" w-12 flex items-center" onClick={rightClick}>
              <img src={right} alt="" />
            </div>
          </div>
          <div className={imgNumber === 0 ? " inline" : " opacity-0 hidden"}>
            <img src={imgMc[0].img} alt="" />
          </div>
          <div className={imgNumber === 1 ? "  inline" : " hidden"}>
            <img src={imgMc[1].img} alt="" />
          </div>
          <div className={imgNumber === 2 ? " inline" : " hidden"}>
            <img src={imgMc[2].img} alt="" />
          </div>
          <div className={imgNumber === 3 ? " inline" : " hidden"}>
            <img src={imgMc[3].img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeImg;
