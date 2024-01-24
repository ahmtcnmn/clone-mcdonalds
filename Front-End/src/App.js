import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mclezzetler from "./components/Mclezzetler";
import Kampanyalar from "./components/Kampanyalar";
import Hakkımızda from "./components/Hakkımızda";
import BuLezzet from "./components/BuLezzet";
import Restoranlar from "./components/Restoranlar";
import Odullerim from "./components/Odullerim";
import DogumGunu from "./components/DogumGunu";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mclezzetleri" element={<Mclezzetler />} />
        <Route path="/kampanyalar" element={<Kampanyalar />} />
        <Route path="/hakkimizda" element={<Hakkımızda />} />
        <Route path="/bulezzeteguven" element={<BuLezzet />} />
        <Route path="/restoranlar" element={<Restoranlar />} />
        <Route path="/odullerim" element={<Odullerim />} />
        <Route path="/dogum-gunu-parti" element={<DogumGunu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
