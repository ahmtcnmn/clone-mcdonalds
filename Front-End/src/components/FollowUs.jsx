import React from "react";

function FollowUs() {
  return (
    <div className="flex items-center content-center w-full h-auto flex-col pt-[90px] pb-[55px]">
      <div className="text-5xl text-">BİZİ TAKİP EDİN</div>
      <div className="flex p-6 w-4/5">
        <a
          href="#"
          className="flex items-center content-center justify-center  w-1/3"
        >
          <img
            src="https://www.mcdonalds.com.tr/assets/img/social-fb.png"
            alt=""
          />
          /McDonaldsTurkiye
        </a>
        <a
          href="#"
          className="flex items-center content-center justify-center w-1/3"
        >
          <img
            src="https://www.mcdonalds.com.tr/assets/img/social-tw.png"
            alt=""
          />
          @McDonaldsTR
        </a>
        <a
          href="#"
          className="flex items-center content-center justify-center w-1/3"
        >
          <img
            src="https://www.mcdonalds.com.tr/assets/img/social-in.png"
            alt=""
          />
          @mcdonaldsturkiye
        </a>
      </div>
    </div>
  );
}

export default FollowUs;
