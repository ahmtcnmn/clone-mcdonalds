import React from "react";

function Boxes() {
  return (
    <div className="flex sm:flex-col md:flex-row w-full h-auto flex-row">
      <div className="relative">
        <img
          src="https://www.mcdonalds.com.tr/Files//fcd42a89-4fd9-48fc-ab26-abc1932d4586-mcd-web-anasayfa-firsatlar-06-2-1-.jpg"
          alt=""
        />
        <a
          href="#"
          className="absolute top-[340px] left-14 bg-navbarYellow raunded  w-56 h-10 rounded-3xl flex items-center justify-center text-white"
        >
          KAMPANYALARI GÖR
        </a>
      </div>
      <div className="relative">
        <img
          src="https://www.mcdonalds.com.tr/Files/4054b6d6-644c-42f9-9614-b207dc0368e8-2.jpg"
          alt=""
        />
        <a
          href="#"
          className="absolute top-[340px] left-14 bg-navbarYellow raunded  w-56 h-10 rounded-3xl flex items-center justify-center text-white"
        >
          KAMPANYALARI GÖR
        </a>
      </div>
      <div className="relative">
        <img
          src="https://www.mcdonalds.com.tr/Files//7acc742f-939c-4bc2-8ff4-cf3336894083-1.jpg"
          alt=""
        />
        <a
          href="#"
          className="absolute top-[340px] left-14 bg-navbarYellow raunded  w-56 h-10 rounded-3xl flex items-center justify-center text-white"
        >
          KAMPANYALARI GÖR
        </a>
      </div>
    </div>
  );
}

export default Boxes;
