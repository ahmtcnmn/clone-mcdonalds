import * as yup from "yup";

export const basicSchemas = yup.object().shape({
  email: yup
    .string()
    .required("Email alanını boş bırakamazsınız.")
    .email("Lütfen geçerli bir email giriniz."),
  nameSurname: yup.string("").required("İsim Soy ismini boş bırakamazsınız."),
  phoneNumber: yup
    .number()
    .required("Lütfen iletişim numaranızı giriniz !")
    .min(11, "Başına 0 ekleyerek numaranızı yazınız."),
  dateBirty: yup.date().required("Doğum gününü giriniz lütfen."),
  dateParty: yup.date().required("Doğum gününü giriniz lütfen."),
  restaurant: yup
    .string()
    .oneOf(["adana", "mersin"], "Geçerli şehri seçiniz lütfen")
    .required("Restoran şehrini seçiniz lütfen"),
  packet: yup
    .string()
    .oneOf(["standart", "delüks"], "Doğru paketi seçiniz lütfen")
    .required("Doğru paketi seçiniz lütfen"),
  isAccept: yup.bool().oneOf([true], "Kullanım şartlarını kabul ediniz."),
});
