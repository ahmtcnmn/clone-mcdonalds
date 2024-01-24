import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import OdullerList from "./List/OdullerList";

function Odullerim() {
  const [odullerim, setOdullerim] = useState([]);

  const fetchCouses = async () => {
    try {
      const response = await axios.get("http://localhost:3004/odullerim");
      setOdullerim(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCouses();
  }, []);
  return (
    <div>
      <div className=" w-full h-[650px]">
        <img
          src="https://www.mcdonalds.com.tr/Files/MYM/fdb9ce11-8437-4051-9a13-613a66070f10-thumbnail-mymcd-odullerim-how-to-gmal-banner-2-1-.jpg"
          alt=""
        />
        <button className=" absolute  bottom-[270px] right-[220px] text-white bg-navbarYellow w-52 h-14 rounded-3xl">
          Hemen Kazan
        </button>
      </div>
      <div className="flex flex-col  w-full pt-11 pb-9">
        <div className=" w-full flex justify-center">
          <div className="w-[1280px]">
            <div className=" text-center text-3xl pt-11 pb-9">
              <p>MyM Ödüllerim programı nasıl kullanılır?</p>
            </div>
            <div className=" flex">
              <div className=" w-[426px] text-center">
                <img
                  src="https://www.mcdonalds.com.tr/Files/MYM/earnPoint1.jpg"
                  alt=""
                />
                <h2 className=" text-3xl">Kazanmaya Nasıl Başlarım?</h2>
                <h3 className=" text-base">
                  McDonald's'ta kazanmaya sadece 1 adım uzaklıktasın! McDonald's
                  uygulamasını indirerek üye ol, şimdi kazanmaya başla!
                </h3>
              </div>
              <div className=" w-[426px] text-center">
                <img
                  src="https://www.mcdonalds.com.tr/Files/MYM/earnPoint2.jpg"
                  alt=""
                />
                <h2 className=" text-3xl">Kolayca Puan Kazan</h2>
                <h3 className=" text-base">
                  Puan kazanmak için tek yapman gereken kasada, dijital sipariş
                  ekranlarında veya araca serviste sipariş verirken McDonald's
                  uygulamasındaki MyM sekmesine tıklayarak, çıkan QR kodu
                  okutmak!
                </h3>
              </div>
              <div className=" w-[426px] text-center">
                <img
                  src="https://www.mcdonalds.com.tr/Files/MYM/earnPoint3.jpg"
                  alt=""
                />
                <h2 className=" text-3xl">Puanlarını Gönlünce Harca</h2>
                <h3 className=" text-base">
                  McDonald's uygulamasındaki MyM sekmesine tıklayarak, hem
                  kazandığın puanları hem de ödülleri ve sana özel fırsatları
                  görebilirsin. Seçtiğin ödüle tıkla, çıkan QR kodu kasada veya
                  dijital sipariş ekranlarında okut, ödülün tadını çıkar!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className=" w-[1280px] text-center flex flex-col justify-center pb-9">
          <p className=" w-full text-4xl font-extrabold pb-5">
            Ödüllerim Neler?
          </p>
          <div className=" w-full flex flex-wrap">
            {odullerim.map((oduller) => {
              return <OdullerList oduller={oduller} />;
            })}
          </div>
        </div>
      </div>
      <div className=" w-full flex fle-c justify-center">
        <div className=" w-[1280px] flex flex-col">
          <p className=" w-full text-4xl pb-10 font-extrabold">
            Sıkça Sorulan Sorular
          </p>

          <strong className=" text-2xl">Nasıl puan kazanırım?</strong>
          <h3 className=" py-3 text-sm">
            Puan kazanmaya başlamak için McDonald’s uygulamasını indirmeniz ve
            MyMcDonald's katılım koşullarını kabul etmeniz yeterli. Sipariş
            vermeden önce MyMcDonald’s sayfasının en üstünde yer alan QR kodu
            okutabilir, veya MyMcDonald’s sayfasında yer alan fırsatlardan
            yararlanarak puan kazanabilirsiniz.
          </h3>

          <strong className=" text-2xl">Puanlarımın Süresi Doluyor mu?</strong>
          <h3 className=" py-3 text-sm">
            Puanlarınız, kazandığınız günden itibaren on ikinci ayın son gününde
            hesaptan otomatik olarak düşecektir.
          </h3>

          <strong className=" text-2xl">
            Tek Alışverişte Birden Fazla Ödül Alabilir miyim?
          </strong>
          <h3 className=" py-3 text-sm">
            Sipariş başına bir ödül kullanılabilir.
          </h3>

          <strong className=" text-2xl">Puanlarımı Paylaşabilir miyim?</strong>
          <h3 className=" py-3 text-sm">
            MyMcDonald's puanlarınız sadece size aittir. Yemeğinizi teslim
            aldıktan sonra, paylaşmak isteyip istemediğiniz size kalmış!
          </h3>

          <strong className=" text-2xl">
            Bir Ödülü Kullanıp Aynı Sırada Puan Kazanabilir miyim?
          </strong>
          <h3 className=" py-3 text-sm">
            Evet! Her uygun satın alma işlemi tamamlandıktan sonra puan
            kazanırsınız, yani bir ödülü kullanıyor ve buna ek olarak aynı
            sipariş içerisinde satın aldığınız ürünlerden puan kazanacaksınız.
          </h3>

          <strong className=" text-2xl">
            Alışverişimi tamamladım ama puanım hesabıma gelmedi. Yardımcı olur
            musunuz?
          </strong>
          <h3 className=" py-3 text-sm">
            İlk adım 24 saat beklemek; bazen MyMcDonald's puanlarının uygulamada
            görünmesi biraz zaman alabilir. 24 saat sonra hala puanınız yoksa,
            Çağrı Merkezi üzerinden durumunuzu dile getirebilirsiniz.
          </h3>

          <strong className=" text-2xl">
            Şartlar ve Koşulları nereden görüntüleyebilirim?
          </strong>
          <h3 className=" py-3 text-sm">
            MyMcDonald's Ödüllerim Şart ve Koşullarına, mcdonalds.com.tr
            adresinden buraya tıklayarak ulaşabilirsiniz.
          </h3>
        </div>
      </div>
      <div className="w-full flex pb-5 justify-center">
        <div className="w-[1280px] flex">
          <div className="py-12 px-10   ">
            <img
              className="px-3 "
              src="https://www.mcdonalds.com.tr/assets/img/app-page.png"
              alt=""
            />
          </div>
          <div className=" flex flex-col w-full pt-12 ">
            <strong className=" w-full text-3xl pb-10">
              Uygulamayı indir, restoranlarımıza özel fırsatları yakala!
            </strong>
            <div className="flex content-center">
              <img
                src="https://www.mcdonalds.com.tr/assets/img/app-store.png"
                alt=""
              />
              <img
                src="https://www.mcdonalds.com.tr/assets/img/google-play.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Odullerim;
