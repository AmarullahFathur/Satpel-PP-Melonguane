import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Jadwal from "./pages/Jadwal/Jadwal";
import Kontak from "./pages/Kontak";
import NavbarFooter from "./components/NavbarFooter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarFooter />}>
          <Route index element={<Beranda />} />
          <Route path="jadwal" element={<Jadwal />} />
          <Route path="kontak" element={<Kontak />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
