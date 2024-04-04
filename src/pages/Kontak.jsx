import React from "react";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill, BsFillHouseFill } from "react-icons/bs";

const Kontak = () => {
  return (
    <div className="flex flex-col min-h-screen items-center p-8 w-full ">
      <h1 className="font-semibold text-3xl mb-10 xl:mt-28 lg:mt-14 md:mt-0">
        KONTAK
      </h1>
      <p className="text-center text-slate-500 mb-10 sm:w-[80%] lg:w-[60%] xl:w-[30%]">
        Jika Anda menemukan kesalahan atau mengalami kendala pada web ini,
        silahkan hubungi kontak di bawah ini atau langsung menuju alamat lokasi
      </p>
      <div className="flex flex-row flex-wrap justify-center items-center gap-12 w-[80%] mt-10">
        <div className="flex flex-col items-center gap-1 justify-center w-[16em]">
          <MdEmail className="text-slate-500 text-[7em]" />
          <p className="text-lg">Email</p>
          <p className="text-slate-500 text-center">
            <a
              href="mailto:bptdkls2sulut.satpelmelonguane@gmail.com"
              className="hover:text-slate-400 text-center flex flex-wrap"
            >
              Email Satpelmelonguane
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center w-[16em]">
          <IoLogoWhatsapp className="text-slate-500 text-[7em]" />
          <p className="text-lg">Whatsapp</p>
          <p className="text-slate-500">
            <a
              href="https://wa.me/+6282180726112"
              className="hover:text-slate-400"
            >
              +62 821 8072 6112
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center w-[16em]">
          <BsFillTelephoneFill className="text-slate-500 text-[7em]" />
          <p className="text-lg">Telephone</p>
          <p className="text-slate-500">
            <a href="tel:+6282180726112" className="hover:text-slate-400">
              +62 821 8072 6112
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center w-[16em]">
          <BsFillHouseFill className="text-slate-500 text-[7em]" />
          <p className="text-lg">Location</p>
          <p className="text-slate-500">
            <a
              href="https://maps.app.goo.gl/6Dp6JUyk2EpcL1Ff9"
              className="hover:text-slate-400"
            >
              Pelabuhan Ferry Melonguane
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
