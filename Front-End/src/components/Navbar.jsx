import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex  justify-evenly">
      <div className=" flex items-center  flex-row content-between w-full h-24 justify-between items-center  text-white bg-navbarBlack text-sm font-semibold">
        <div className="w-40 sticky  top-0 z-10 p-4">
          <NavLink to={"/"}>
            <img
              className=" z-50 bg-no-repeat h-[92px] relative bottom-[-25px]  flex content-center items-center"
              src="https://www.mcdonalds.com.tr/assets/img/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <nav className="flex sm:hidden md:flex md:text-xs lg:text-sm h-full justify-between w-full p-4 items-center">
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"mclezzetleri"}
          >
            McDONALD'S <br /> LEZZETLERİ
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"kampanyalar"}
          >
            KAMPANYALAR
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"hakkimizda"}
          >
            HAKKIMIZDA
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"bulezzeteguven"}
          >
            BU LEZZETE GÜVEN
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"restoranlar"}
          >
            RESTORANLAR
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"odullerim"}
          >
            MyMcDonald’s Ödüllerim
          </NavLink>
          <NavLink
            className="lg:m-4 lg:p-2  flex content-center items-center "
            to={"dogum-gunu-parti"}
          >
            Doğum Günü Partisi
          </NavLink>
          <div>
            <img
              className="flex "
              src="https://www.mcdonalds.com.tr/assets/img/menu-search.png"
              alt=""
            />
          </div>
        </nav>
        <div className="flex flex-row md:w-auto lg:w-52 items-center bg-navbarYellow h-full">
          <img
            className="m-4"
            src="https://www.mcdonalds.com.tr/assets/img/menu-phone.png"
            alt=""
          />
          444 62 62
        </div>
        <div className="flex flex-row items-center md:w-auto lg:w-52 bg-navbarRed h-full">
          <img
            className="m-4"
            src="https://www.mcdonalds.com.tr/assets/img/menu-order.png"
            alt=""
          />
          SİPARİŞ VER
        </div>
      </div>
    </div>
  );
}

export default Navbar;
