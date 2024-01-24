import React from "react";

function Kampanyalar(kampanya) {
  console.log(kampanya);
  return (
    <div className=" w-[600px] h-[400px] m-auto my-14 flex h-auto">
      <img className=" w-1/2" src={kampanya.kampanya.img} alt="" />
      <div className=" w-1/2 flex flex-col justify-center items-center font-extrabold">
        <p className="text-2xl pb-24 w-56 ">{kampanya.kampanya.title}</p>
        <button className=" bg-navbarYellow w-56 h-10 rounded-3xl text-white">
          DAHA FAZLA BİLGİ
        </button>
      </div>
    </div>
  );
}

export default Kampanyalar;
