import React from "react";

function LezzetlerList(course) {
  console.log(course);
  return (
    <div className="p-3.5 w-1/3">
      <div className="flex relative w-full h-[36rem] ">
        <img
          className=" absolute h-full"
          src="https://www.mcdonalds.com.tr/assets/img/products-box-bg.jpg"
          alt=""
        />
        <img className="absolute" src={course.course.img} alt="" />

        <p className=" absolute bottom-24 left-[calc(100%-250px)] ">
          {course.course.title}
        </p>
        <a
          href="#"
          className=" bg-navbarRed h-10 w-56 rounded-3xl flex items-center justify-center text-white absolute bottom-10 left-[calc(50%-110px)] "
        >
          Daha Fazla Bilgi
        </a>
      </div>
    </div>
  );
}

export default LezzetlerList;
