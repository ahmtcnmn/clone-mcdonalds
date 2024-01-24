import React from "react";
import { useState } from "react";
import Form from "./Form";
function DogumGunu() {
  const [nameSurname, setnameSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [city, setcity] = useState("");
  const [partDate, setpartDate] = useState("");
  const [packet, setpacket] = useState("");
  const [checkBox, setcheckBox] = useState("");
  const [emailData, setEmailData] = useState({
    nameSurname: nameSurname,
    number: number,
    email: email,
    date: date,
    city: city,
    partDate: partDate,
    packet: packet,
  });
  const sendEmail = (e) => {
    setEmailData({
      nameSurname: nameSurname,
      number: number,
      email: email,
      date: date,
      city: city,
      partDate: partDate,
      packet: packet,
    });
    e.preventDefault();

    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
      credentials: "include",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className=" relative">
        <img
          src="https://www.mcdonalds.com.tr/Files/HappyMealDogumGunu/fe01b0af-0161-4b5f-9f07-527cf866ad03-dogumgunu.jpg"
          alt=""
        />
        <div className=" absolute top-[calc(50%-25px)] left-1/3 text-center">
          <h1 className=" text-7xl font-extrabold">DOĞUM GÜNÜ</h1>
          <h3 className="text-2xl">
            BİRLİKTE DOĞUM GÜNÜ KUTLAMAYA VAR MISIN ?
          </h3>
          <button className=" bg-white text-black font-extrabold rounded-3xl w-48 h-12 mt-10">
            Rezervasyon Yaptır
          </button>
        </div>
      </div>
      <div className="flex flex-col content-center text-center items-center">
        <strong className=" text-3xl pt-10">BİR DÜNYA DÜŞLEYİN...</strong>
        <strong className=" text-3xl pb-10">
          HER ŞEY SİZİN MUTLULUĞUNUZ İÇİN TASARLANMIŞ.
        </strong>
        <p className=" text-xs pb-3">
          Herkes sizin eğlenmeniz ve güzel zaman geçirmeniz için çalışıyor.
          Masal gibi bir dünya… İşte böyle bir dünyayı McDonald’s olarak
          çocuğunuz için hayal ettik. Çocuğunuz McDonald’s’ta böyle bir <br />{" "}
          doğum günü partisini sizce de hak etmiyor mu? <br /> Özel parti
          davetiyeleri, tabaklar, parti taçları... <br /> Davetli çocuklar için
          renkli isimlikler... <br />
          Doğum günü için hazırlanacak tepsi örtüleri, oda süsleri... <br /> Ve
          çocuğunuzun McDonald’s’ta geçireceği rüya gibi bir doğum günü...
        </p>

        <strong className="text-3xl pt-12 pb-10">
          McDONALD'S PARTİ PAKETİ
        </strong>
        <div className=" flex mb-16">
          <div className=" w-32 flex flex-col items-center text-center">
            <img
              src="https://www.mcdonalds.com.tr/assets/img/dogum-gunu-pastasi.png"
              alt=""
            />
            <h6>Doğum Günü Pastası</h6>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            <img
              src="https://www.mcdonalds.com.tr/assets/img/davetiye.png"
              alt=""
            />
            <h6>Doğum Günü Pastası</h6>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            <img
              src="https://www.mcdonalds.com.tr/assets/img/susler.png"
              alt=""
            />
            <h6>Doğum Günü Pastası</h6>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            <img
              src="https://www.mcdonalds.com.tr/assets/img/isimlik.png"
              alt=""
            />
            <h6>Doğum Günü Pastası</h6>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            <img
              src="https://www.mcdonalds.com.tr/assets/img/tabak.png"
              alt=""
            />
            <h6>Doğum Günü Pastası</h6>
          </div>
          <div className=" w-32 flex flex-col items-center text-center">
            <img src="https://www.mcdonalds.com.tr/assets/img/tac.png" alt="" />
            <h6>Doğum Günü Pastası</h6>
          </div>
        </div>
      </div>
      <div className=" w-full h-[720px] bg-party flex items-center justify-center">
        <div className=" w-auto h-[550px] flex flex-col">
          <div className="flex w-full">
            <div className=" py-4 w-[431px] mr-1 text-center bg-black text-white text-3xl font-extrabold rounded-tl-3xl">
              STANDART PAKET
            </div>
            <div className=" py-4 w-[431px] ml-1 text-center bg-black text-white text-3xl font-extrabold rounded-tr-3xl">
              DELÜKS PAKET
            </div>
          </div>
          <div className=" flex w-full">
            <div className="w-[431px] mr-1 py-4 text-center mt-2 w-1/2 bg-white text-3xl font-extrabold">
              PARTİ SÜRESİ 90 DK. <br /> 2950TL
            </div>
            <div className="w-[431px] ml-1 text-center   py-4 mt-2 w-1/2 bg-white text-3xl font-extrabold">
              PARTİ SÜRESİ 90 DK. <br /> 3950TL
            </div>
          </div>
          <div className="py-4 h-[378px]  flex">
            <div className="px-10 py-5  w-[435px] text-white font-semibold bg-partyPurple rounded-bl-3xl flex flex-col justify-between">
              <div>
                <strong className=" text-base">Paket İçeriği</strong>
                <li>1 pasta</li>
                <li>10 adet Happy Meal</li>
                <li>Özel McDonadl's Parti Seti</li>
                <li>Tetişkinlere 10 adet Sıcak İçcek</li>
                <li>
                  Parti aktiviteleri (Çocukların yaş gruplarına göre oyunlar ve
                  müzik)
                </li>
              </div>
              <button className=" w-[330px] h-[60px] justify-center items-center rounded-full text-xl flex bg-navbarRed text-white">
                Standart Parti Sözleşmesi
                <img
                  className=" ml-4"
                  src="https://www.mcdonalds.com.tr/assets/img/cta-icon.png"
                  alt=""
                />
              </button>
            </div>
            <div className="px-10 py-5   w-[435px] text-white font-semibold bg-partyPurple rounded-br-3xl flex flex-col justify-between">
              <div>
                <strong className=" text-base">Paket İçeriği</strong>

                <li>1 pasta</li>
                <li>10 adet Happy Meal</li>
                <li>
                  10 adet Büyük Sandviçli Menü (Menü detayları için sözleşmeye
                  bakınız.)
                </li>
                <li>Özel McDonald's Parti Seti</li>
                <li>Yetişkinlere 10 adet Sıcak İçecek</li>
                <li>
                  Parti aktiviteleri (Çocukların yaş gruplarına göre oyunlar ve
                  müzik)
                </li>
              </div>
              <button className=" w-[330px] h-[60px] justify-center items-center rounded-full text-xl flex bg-navbarRed text-white">
                Delüks Parti Sözleşmesi
                <img
                  className=" ml-4"
                  src="https://www.mcdonalds.com.tr/assets/img/cta-icon.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex py-12 w-full justify-evenly">
          <div className=" mx-4  text-3xl border-8 w-[493px] h-20 border-navbarYellow rounded-2xl flex items-center justify-center relative">
            Rezervasyon Yaptır
            <img
              src="https://www.mcdonalds.com.my/images/booking_system/birthday/red_dot.png"
              className=" absolute right-10 bottom-[-10px]"
              alt=""
            />
          </div>
          <div className=" mx-4  text-3xl border-8 w-[493px] h-20 border-navbarYellow rounded-2xl flex items-center justify-center relative">
            Parti Kitleri
            <img
              src="https://www.mcdonalds.com.my/images/booking_system/birthday/red_dot.png"
              className=" absolute right-10 bottom-[-10px]"
              alt=""
            />
          </div>
          <div className=" mx-4  text-3xl border-8 w-[493px] h-20 border-navbarYellow rounded-2xl flex items-center justify-center relative">
            Galeri
            <img
              src="https://www.mcdonalds.com.my/images/booking_system/birthday/red_dot.png"
              className=" absolute right-10 bottom-[-10px]"
              alt=""
            />
          </div>
        </div>
        <div className=" w-full h-auto relative">
          <div className=" w-full">
            <img
              src="https://www.mcdonalds.com.tr/Files/HappyMealDogumGunu/banner.jpg"
              alt=""
            />
            <div className=" w-full h-full  absolute top-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <Form />
        <div>
          <div className=" w-full h-[1086px] relative">
            <img
              className=" w-full h-full"
              src="https://www.mcdonalds.com.my/images/booking_system/birthday/bg_party_package.jpg?20200208"
              alt=""
            />
            <div className=" absolute top-28 left-[105px] rounded-3xl border-navbarRed w-[1413px] h-[870px] border-8">
              <img
                className=" w-full h-full rounded-2xl"
                src="https://www.mcdonalds.com.tr/Files/HappyMealDogumGunu/Partykit_v1.jpg"
                alt=""
              />
              <h1 className=" absolute top-[-36px] rounded-xl w-[600px] h-[76px] text-center py-2.5 text left-[398px] text-5xl text-white bg-navbarRed">
                Parti Ekipmanları
              </h1>
            </div>
          </div>
        </div>
        <div className=" bg-partyYellow flex">
          <div className=" flex py-12 px-12 mx-24">
            <img
              className=" w-80 h-80"
              src="https://www.mcdonalds.com.tr/Files/HappyMealDogumGunu/galeri1.jpg"
              alt=""
            />
            <img
              className=" w-80 h-80"
              src="https://www.mcdonalds.com.tr/Files/HappyMealDogumGunu/galeri2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogumGunu;
