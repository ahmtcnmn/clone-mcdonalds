const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000", // İstek yapan kaynağın adresi
  credentials: true, // Kimlik doğrulama bilgileri gönderilsin mi?
};

app.use(cors(corsOptions));
const transporter = nodemailer.createTransport({
  host: "swan.wlsrv.com",
  secureConnection: false,
  tls: {
    rejectUnauthorized: false,
  },
  port: 587,
  auth: {
    user: "",
    pass: "",
  },
});

app.post("/send-email", (req, res) => {
  const {
    nameSurname,
    phoneNumber,
    email,
    dateBirty,
    restaurant,
    dateParty,
    packet,
  } = req.body;
  console.log(req.body);
  const mailOptions = {
    from: "info@mesopotamiaglobal.com",
    to: "info@mesopotamiaglobal.com",
    subject: "New message from your website",
    text: `İsim Soyisim: ${nameSurname}\nDoğum Tarihi: ${dateBirty}\nParti Tarihi: ${dateParty}\nŞehir: ${restaurant}\nTelefon :${phoneNumber}\nEmail: ${email}\n\nPaket:${packet}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("E-posta gönderildi: " + info.response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
