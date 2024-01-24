import React from "react";

function OdullerList(oduller) {
  return (
    <div className=" w-64">
      <div>
        <img src={oduller.oduller.img} alt="" />
      </div>
      <div>
        <h2 className=" text-3xl text-navbarRed font-extrabold">
          {oduller.oduller.puan}
        </h2>
        <h3 className=" text-base">{oduller.oduller.title}</h3>
      </div>
    </div>
  );
}

export default OdullerList;
