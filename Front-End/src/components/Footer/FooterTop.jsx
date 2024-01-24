import React from "react";

function FooterTop() {
  return (
    <div className="bg-navbarBlack flex justify-around content-center items-center text-white w-full h-48">
      <div className="w-[25%] flex justify-center">
        <a href="#">
          <img
            src="https://www.mcdonalds.com.tr/assets/img/footer-logo.png"
            alt=""
          />
        </a>
      </div>
      <div className="flex justify-around flex-col w-full  ml-10">
        <div className="">
          <a href="#" className="mr-10">
            Gizlilik ve Veri Güvenliği Polikitası
          </a>
          <a href="#" className="mr-10">
            Kullanım Koşulları
          </a>
          <a href="#" className="mr-10">
            Bilgi Toplumu Hizmetleri
          </a>
          <a href="#" className="mr-10">
            Bize Ulaşın
          </a>
        </div>
        <div className="mt-3">
          Copyright© Anadolu Restoran İşletmeleri Ltd. Şti.
        </div>
      </div>
      <div className="flex content-center items-center w-[30%] text-4xl text-navbarYellow mx-10 font-black">
        <img
          className="mx-6"
          src="https://www.mcdonalds.com.tr/assets/img/footer-phone.png"
          alt=""
        />
        444 62 62
      </div>
    </div>
  );
}

export default FooterTop;
