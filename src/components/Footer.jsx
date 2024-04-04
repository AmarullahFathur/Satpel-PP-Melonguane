import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { Footer as Foot } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    // <footer className="tracking-widest text-xs text-[#a8a8a8] gap-5 justify-between p-8 px-12  bottom-0 w-full border grid grid-cols-1 md:grid-cols-3 place-items-center">
    //   <div className="">Designed by Pelabuhan Ferry Melonguange</div>
    //   <div className="flex justify-center w-auto">
    //     <IoLocation size={25} className="mx-5" />
    //     <p>
    //       Jl. Dermaga Melonguane, Melonguane Timur, Kabupaten Kepulauan Talaud,
    //       Provinsi Sulawesi Utara
    //     </p>
    //   </div>
    //   <div className="flex flex-col">
    //     <a
    //       href="https://wa.me/6281340000000"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="flex flex-row gap-2 items-center hover:text-slate-400"
    //     >
    //       <FaWhatsapp size={18} />
    //       +62 821 8022 7516
    //     </a>
    //     <a
    //       href="tel:+6281340000000"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="mt-2 flex flex-row gap-2 items-center hover:text-slate-400"
    //     >
    //       <BsTelephone size={18} />
    //       +62 721 543 231
    //     </a>
    //     <a
    //       href="mailto:pelabuhanferry@gmail.com"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="mt-2 flex flex-row gap-2 items-center hover:text-slate-400"
    //     >
    //       <HiOutlineMail size={18} />
    //       pelabuhanferry@gmail.com
    //     </a>
    //   </div>
    // </footer>

    <Foot container className="foot">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Foot.Brand
              href="/"
              src={logo}
              alt="logo"
              name="SATPEL PP MELONGUANE"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Foot.Title title="about" />
              <Foot.LinkGroup col>
                <Foot.Link href="#">PT. ASDP</Foot.Link>
                <Foot.Link href="#">PP Melonguane</Foot.Link>
              </Foot.LinkGroup>
            </div>
            <div>
              <Foot.Title title="Contact us" />
              <Foot.LinkGroup col>
                <Foot.Link href="https://wa.me/6282180726112">
                  Whatsapp
                </Foot.Link>
                <Foot.Link href="mailto:bptdkls2sulut.satpelmelonguane@gmail.com">
                  Gmail
                </Foot.Link>
              </Foot.LinkGroup>
            </div>
            <div>
              <Foot.Title title="Legal" />
              <Foot.LinkGroup col>
                <Foot.Link href="#">Privacy Policy</Foot.Link>
                <Foot.Link href="#">Terms &amp; Conditions</Foot.Link>
              </Foot.LinkGroup>
            </div>
          </div>
        </div>
        <Foot.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Foot.Copyright
            href="#"
            by="Pelabuhan Ferry Melonguange™"
            year={2024}
          />
          <div className="mt-4 flex sm:mt-0 sm:justify-center text-sm text-slate-400">
            <p>
              Jl. Dermaga Melonguane, Melonguane Timur, Kabupaten Kepulauan
              Talaud, Provinsi Sulawesi Utara
            </p>
          </div>
        </div>
      </div>
    </Foot>
  );
};

export default Footer;
