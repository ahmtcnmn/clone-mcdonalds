import React from "react";
import LezzetlerList from "./List/LezzetlerList";
import { useEffect, useState } from "react";
import axios from "axios";
function Mclezzetler() {
  const [courses, setCourses] = useState([]);

  const fetchCouses = async () => {
    try {
      const response = await axios.get("http://localhost:3004/secenekler");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCouses();
  }, []);

  return (
    <div>
      <div className="relative w-full">
        <img
          src="https://www.mcdonalds.com.tr/Files//75062911-0f44-4b8a-a31d-4f0d8a6ac9e3-sub-promo.jpg"
          alt=""
        />
        <div className="absolute text-white  w-full flex items-center flex-col top-[calc(50%-130px)]  ">
          <p className="text-[90px]">McDONALD'S LEZZETLERİ</p>
          <p className="text-2xl">
            Size özel hazırladığımız, ağzınıza layık efsane McDonald’s
          </p>
          <p className="text-2xl">lezzetleri ile tanışmaya hazır mısınız?</p>
        </div>
      </div>
      <div className="w-full flex justify-center relative mt-[-160px]">
        <div className="relative w-[80%] flex flex-wrap  ">
          {courses.map((course) => {
            return <LezzetlerList course={course} />;
          })}
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="w-[80%]">
          <div className="mb-5">
            <a
              className="my-3"
              href="https://www.mcdonalds.com.tr/Files/Kampanyalar/7cf28b0f-386b-4141-8aa0-26a927ed8485-enerji-ve-besin-ogeleri-a3-dikey-5-6-.pdf"
            >
              <img
                className="w-full"
                src="https://www.mcdonalds.com.tr/Files/EDB_1800x600.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="mb-5">
            <a href="https://www.mcdonalds.com.tr/Files//b7dda5dc-bad6-47df-9c37-1c9c3635c2ff-alerjen-listesi-a3-dikey-3-2-.pdf">
              <img
                className="w-full h-auto"
                src="https://www.mcdonalds.com.tr/Files//e2903c83-1305-46c1-9a13-3df4567ac34f-edb-1800x300-kirmizi-.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mclezzetler;
