import React from "react";
import FollowUs from "./FollowUs";

function Hakkımızda() {
  return (
    <div className="">
      <div className=" relative">
        <img
          src="https://www.mcdonalds.com.tr/Files/Hakkimizda/ea876205-b0bd-43b1-af6b-e57e2bb4462e-hakkimizda.jpg"
          alt=""
        />
        <div className=" absolute z-10 top-[180px] text-center flex flex-col  content-center w-full text-2xl text-white  ">
          <h2 className=" text-8xl  font-bold  pb-4">McDonald's Hakkında</h2>
          <p>
            2023 Brand Z Raporu’na göre dünyanın en değerli beşinci markası olan
            <br /> McDonald’s olarak, dünyanın dört bir yanında yer alan 34 bini
            aşkın restoran
            <br /> ve 1,6 milyonu geçen çalışanımızla, günde ortalama
            <br /> 58 milyon müşterimizi mutlu edebilmek için çalışıyoruz.
            Türkiye'de de McDonald’s, bugün yaklaşık 260 restoranı ve <br />
            6000 civarında çalışanı ile yılda 100 milyon kişiye hizmet
            vermektedir.
          </p>
        </div>
      </div>
      <div className=" w-full relative mt-[-140px] flex flex-col items-center justify-center">
        <div className=" w-[1250px]">
          <div className=" w-full mb-7 relative">
            <img
              src="https://www.mcdonalds.com.tr/Files/Hakkimizda/33ae57e5-70f8-440d-8ed0-432b74bc097f-tarihce.jpg"
              alt=""
            />
            <div className=" top-[calc(50%-50px)]  text-white font-bold  text-2xl text-center flex flex-col items-center w-full absolute">
              <h2 className=" text-3xl font-extrabold">TARİHÇEMİZ</h2>
              <p className=" text-lg mt-5 mb-16">
                1954'te başladığımız seüven devam ediyor. <br /> Zaman
                yolculuğuna ne dersiniz?
              </p>
              <button className="  bg-buttonRed rounded-3xl w-56 h-10 text-center text-base">
                DAHA FAZLA BİLGİ
              </button>
            </div>
          </div>
          <div className=" w-full mb-7 relative">
            <img
              src="https://www.mcdonalds.com.tr/Files//e537b2f2-3fcb-41dc-beb1-c8a5c61a882b-417b2700-c17e-46be-80dd-aa36c65935ae-cocuk-vakfi.jpg"
              alt=""
            />
            <div className=" top-[calc(50%-50px)]  text-white font-bold  text-2xl text-center flex flex-col items-center w-full absolute">
              <h2 className=" text-3xl font-extrabold">
                McDONALD'S ÇOCUK VAKFI
              </h2>
              <p className=" text-lg mt-5 mb-16">
                1974’ten bu yana dünyanın dört bir yanında <br /> tedavi gören
                çocukların yanındayız.
              </p>
              <button className="  bg-buttonRed rounded-3xl w-56 h-10 text-center text-base">
                DAHA FAZLA BİLGİ
              </button>
            </div>
          </div>
          <div className=" flex">
            <div className=" w-1/2 mr-3 relative">
              <img
                src="https://www.mcdonalds.com.tr/Files/Hakkimizda/9854e5b4-fe78-496b-83e7-5e804d904b3a-8d1175c1-cdea-472b-8dcf-5fb3d2f353e7-insan-kaynaklari-copy.jpg"
                alt=""
              />
              <div className=" top-[calc(50%-50px)]  text-white font-bold  text-2xl text-center flex flex-col items-center w-full absolute">
                <h2 className=" text-3xl font-extrabold">İNSAN KAYNAKLARI</h2>
                <p className=" text-lg mt-5 mb-16">
                  McDonald’s Ailesi’nin bir parçası olmaya ne dersiniz?
                </p>
                <button className="  bg-buttonRed rounded-3xl w-56 h-10 text-center text-base">
                  DAHA FAZLA BİLGİ
                </button>
              </div>
            </div>
            <div className=" w-1/2 ml-3 relative">
              <img
                src="https://www.mcdonalds.com.tr/Files/Hakkimizda/34e22d4b-ea53-44e4-934b-3f2dba181131-franchising.jpg"
                alt=""
              />
              <div className=" top-[calc(50%-50px)]  text-white font-bold  text-2xl text-center flex flex-col items-center w-full absolute">
                <h2 className=" text-3xl font-extrabold">FRANCHISING</h2>
                <p className=" text-lg mt-5 mb-16">
                  McDonald’s markası altında kendi işinizin sahibi olun!
                </p>
                <button className="  bg-buttonRed rounded-3xl w-56 h-10 text-center text-base">
                  DAHA FAZLA BİLGİ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-44 flex  flex-col justify-center items-center mt-10 border-b-2 ">
          <h2 className=" w-full text-center text-4xl ">
            Bize farklı kanallar üzerinden ulaşabilirisiniz.
          </h2>
          <button className=" w-56 h-10 bg-buttonRed rounded-3xl mt-10 mb-16 text-white  font-black">
            İLETİŞİM
          </button>
        </div>
        <FollowUs />
      </div>
    </div>
  );
}

export default Hakkımızda;
