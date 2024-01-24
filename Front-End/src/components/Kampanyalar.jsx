import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import KampanyalarList from "./List/KampanyalarList";
function Kampanyalar() {
  const [icerik, setIcerik] = useState([]);

  const restorankamp = async () => {
    try {
      const response = await axios.get("http://localhost:3004/restorankamp");
      setIcerik(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const paketkamp = async () => {
    try {
      const response = await axios.get("http://localhost:3004/paketkamp");
      setIcerik(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    restorankamp();
  }, []);

  return (
    <div>
      <div className=" relative">
        <img
          className=" "
          src="https://www.mcdonalds.com.tr/Files/other/21950d9f-f2cb-493c-b008-4006fd29c99e-sub-promo.jpg"
          alt=""
        />
        <div className=" absolute text-2xl text-white top-1/2 w-full  flex items-center flex-col">
          <h2 className=" text-7xl">KAMPANYALAR</h2>
          <h3 className="text-2xl">
            Hem cebinize, hem damak tadınıza hitap eden lezzetler!
          </h3>
        </div>
      </div>
      <div className=" relative top-[-25px] w-full flex justify-center">
        <div className=" flex flex-col w-1/2 justify-center w-[1250px]">
          <div>
            <button
              className=" bg-red-700  h-14 text-white  w-1/2"
              onClick={restorankamp}
            >
              RESTORAN KAMPANYALARI
            </button>
            <button
              className=" bg-red-700  h-14 text-white   w-1/2"
              onClick={paketkamp}
            >
              PAKET SERVİS KAMPANYALARI
            </button>
          </div>

          <div className=" w-full">
            <div className=" flex flex-wrap">
              {icerik.map((kampanya) => {
                return <KampanyalarList kampanya={kampanya} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kampanyalar;
