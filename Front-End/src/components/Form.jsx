import React from "react";
import { useFormik } from "formik";
import { basicSchemas } from "../schemas";
function Form() {
  const onSubmit = async (values, actions) => {
    // butona tıklandıgında calısacak kod
    console.log(values);
    console.log(actions);

    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
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
    await new Promise((resolve) => {
      setTimeout(resolve, 3000); // 3sn bekletmeye yarar
    });
    actions.resetForm(); // ustteki bittikten sonra form içindekileri sıfırlama işlemi yapar
  };

  const { values, errors, isSubmitting, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        nameSurname: "",
        phoneNumber: "",
        email: "",
        dateBirty: "",
        dateParty: "",
        restaurant: "",
        packet: "",
        isAccept: false,
      },
      validateOnChange: true,
      validationSchema: basicSchemas,
      onSubmit,
    });

  return (
    <div>
      <div className=" h-[1152px] bg-partyYellow flex justify-center items-center">
        <div className=" h-auto">
          <form
            onSubmit={handleSubmit}
            action=""
            className=" w-[1056px] h-auto flex flex-col justify-center items-center"
          >
            <h6>Tüm alanların doldurulması zorunludur.</h6>
            <input
              onChange={handleChange}
              value={values.nameSurname}
              id="nameSurname"
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="text"
              placeholder="Adınız Soyadınız"
            />
            {errors.nameSurname && <p>{errors.nameSurname}</p>}
            <input
              onChange={handleChange}
              id="phoneNumber"
              value={values.phoneNumber}
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="number"
              placeholder="Cep Telefon No"
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <div>{errors.phoneNumber}</div>
            ) : null}
            <input
              onChange={handleChange}
              id="email"
              value={values.email}
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="email"
              placeholder="E-Posta"
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}

            <input
              onChange={handleChange}
              value={values.dateBirty}
              id="dateBirty"
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="date"
              placeholder="Doğum Tarihi"
            />
            {touched.dateBirty && errors.dateBirty ? (
              <div>{errors.dateBirty}</div>
            ) : null}

            <select
              className="px-8 py-4 w-[550px] h-14 my-3"
              name=""
              id="restaurant"
              value={values.restaurant}
              onChange={handleChange}
            >
              <option value="">Restoran seçiniz</option>
              <option value="adana">adana</option>
              <option value="mersin">mersin</option>
            </select>
            {touched.restaurant && errors.restaurant ? (
              <div>{errors.restaurant}</div>
            ) : null}

            <input
              onChange={handleChange}
              value={values.dateParty}
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="date"
              name=""
              id="dateParty"
            />
            {touched.dateParty && errors.dateParty ? (
              <div>{errors.dateParty}</div>
            ) : null}
            <select
              className=" px-8 py-4 w-[550px] h-14 my-3"
              name=""
              id="packet"
              value={values.packet}
              onChange={handleChange}
            >
              <option value="">Parti Paketi</option>
              <option value="standart">Standart Paket</option>
              <option value="delüks">Delüks Paket</option>
            </select>
            {touched.packet && errors.packet ? (
              <div>{errors.packet}</div>
            ) : null}

            <input
              onChange={handleChange}
              className=" px-8 py-4 w-[550px] h-14 my-3"
              type="checkbox"
              name=""
              id="isAccept"
            />
            {touched.isAccept && errors.isAccept ? (
              <div>{errors.isAccept}</div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-[330px] h-12 bg-white text-navbarYellow rounded-full text-xl font-semibold"
            >
              Rezervasyon Yaptır
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
