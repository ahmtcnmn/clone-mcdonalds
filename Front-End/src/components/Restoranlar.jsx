import React from "react";

function Restoranlar() {
  return (
    <div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13050848.15666956!2d23.11262372800312!3d37.004017300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f119b989313%3A0xfcf30ab8193291e5!2sMcDonald&#39;s%20Adana%20Galleria!5e0!3m2!1str!2str!4v1705700348146!5m2!1str!2str"
        width={1550}
        className=" w-full"
        height={800}
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Restoranlar;
