import React from "react";

function FooterBottom() {
  return (
    <div className=" flex content-start w-full h- pt-5 pb-28 bg-navbarBottomBlack text-navbarBottomBlackText">
      <div className=" flex w-full h-16">
        <div className=" w-1/2 flex justify-evenly items-center px-5">
          <img src="https://www.mcdonalds.com.tr/assets/img/footer-social.png" />
          <p>Sosyal Medyada McDonald's</p>
          <img
            src="https://www.mcdonalds.com.tr/assets/img/footer-icons.png"
            alt=""
          />
        </div>
        <div className=" flex w-1/2 justify-evenly px-5 items-center">
          <div className=" flex items-center">
            <img src="https://www.mcdonalds.com.tr/assets/img/app-download.png" />
            <p className=" ml-3">MxDonald's Uygulamasını İndirin</p>
          </div>
          <div className=" flex ml-4">
            <a href="#">
              <img
                src="https://www.mcdonalds.com.tr/assets/img/app-store.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://www.mcdonalds.com.tr/assets/img/google-play.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
