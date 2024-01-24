import React from "react";
import { useState } from "react";
function BuLezzeteList(hizmetler) {
  const [over, setOver] = useState(true);
  const overflow = () => {
    if (over) {
      setOver(false);
    } else {
      setOver(true);
    }
  };
  return (
    <div className=" w-[600px] border-2 m-5">
      <div className="">
        <img className=" w-full" src={hizmetler.hizmetler.img} alt="" />
      </div>
      <div className=" w-full p-5">
        <h1 className="text-4xl mb-3">{hizmetler.hizmetler.title}</h1>
        <p
          id="desc"
          className={over ? "text-base truncate h-auto" : "text-base h-auto"}
        >
          {hizmetler.hizmetler.description}
        </p>
      </div>
      <div className=" w-full p-4">
        <button
          onClick={overflow}
          className=" w-36 h-12 bg-navbarYellow rounded"
        >
          Daha Fazla Bilgi
        </button>
      </div>
    </div>
  );
}

export default BuLezzeteList;
