import React from "react";
import BuLezzeteList from "./List/BuLezzeteList";
import { useState, useEffect } from "react";
import axios from "axios";
function BuLezzet() {
  const [icerik, setIcerik] = useState([]);
  const buLezzete = async () => {
    try {
      const response = await axios.get("http://localhost:3004/bulezzeteguven");
      setIcerik(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    buLezzete();
  }, []);
  return (
    <div className="">
      <div className=" relative w-full">
        <img
          className="  w-full "
          src="https://www.mcdonalds.com.tr/Files/kalite_global/kapak.jpg"
          alt=""
        />
        <div className=" absolute z-10 top-0 text-white text-center w-full mt-[480px]">
          <h1 className=" text-7xl font-extrabold">BU LEZZETE GÜVEN</h1>
          <p className=" text-2xl mt-4">
            Aklında soru işareti kalmasın. Hakkımızda merak ettiğiniz her şey
            burada!
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center ">
        <div className=" w-[1280px] flex flex-wrap  ">
          {icerik.map((hizmetler) => {
            return <BuLezzeteList hizmetler={hizmetler} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BuLezzet;
