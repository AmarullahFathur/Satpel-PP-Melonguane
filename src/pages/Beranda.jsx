import React from "react";
import kantor from "../assets/kantor.png";
import logo from "../assets/logo.png";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import doc1 from "../assets/dokumentasi/doc1.png";
import doc2 from "../assets/dokumentasi/doc2.png";
import doc3 from "../assets/dokumentasi/doc3.png";
import doc4 from "../assets/dokumentasi/doc4.png";
import doc5 from "../assets/dokumentasi/doc5.png";
import doc6 from "../assets/dokumentasi/doc6.png";
import doc7 from "../assets/dokumentasi/doc7.png";
import doc8 from "../assets/dokumentasi/doc8.png";
import doc9 from "../assets/dokumentasi/doc9.png";
import doc10 from "../assets/dokumentasi/doc10.png";
import bawal from "../assets/kapal/bawal.png";
import warambe from "../assets/kapal/warambe.png";
import watunapato from "../assets/kapal/watunapato.png";
import tarusi from "../assets/kapal/tarusi.png";
import labuhanHaji from "../assets/kapal/labuhan-haji.png";

const Beranda = () => {
  return (
    <div className="beranda flex justify-center items-center ">
      <div className="min-h-screen w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] p-8 lg:pt-16 ">
        <div className="welcome flex flex-row justify-center lg:justify-center md:gap-x-24 xl:gap-x-48 items-center gap-y-8 flex-wrap-reverse ">
          <div className="desc w-[95%] text-sm md:w-[60%] md:text-md md:leading-6 lg:w-[50%] xl:w-[40%] md:tracking-wider text-center lg:text-left">
            <p className="text-xl font-semibold md:text-2xl lg:text-3xl">
              <Typewriter
                words={[" Selamat Datang !!!"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={60}
                delaySpeed={1500}
                className="text-3xl font-semibold"
              />
            </p>
            <p className="text-slate-500">
              Website resmi satuan pelayanan pelabuhan melonguane
            </p>
          </div>
          <div className="picture ">
            <img
              src={logo}
              alt="logo"
              className=" w-[10em] md:w-[14em] xl:w-[17em] rounded-lg drop-shadow-[5px_7px_4px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
        <div className="intro flex flex-row justify-center lg:justify-center md:gap-x-24 xl:gap-x-48 items-center gap-y-8 flex-wrap pt-8 ">
          <div className="picture hidden md:block">
            <img
              src={kantor}
              alt="kantor"
              className=" w-[10em] md:w-[14em] xl:w-[17em] rounded-lg shadow-xl shadow-slate-400"
            />
          </div>
          <div className="desc w-[95%] text-sm md:w-[60%] md:text-md md:leading-6 lg:w-[50%] xl:w-[40%] text-center lg:text-end md:tracking-wider">
            Satuan pelayanan Pelabuhan Penyeberangan Melonguane merupakan satuan
            pelayanan yang ada di Balai Pengelola Transportasi Darat Kelas II
            Sulawesi Utara, dan Satpel PP Melonguane memiliki tugas melaksanakan
            pengelolaan Lalu Lintas Angkutan Penyeberangan dan penyelenggaraan
            pada pelabuhan penyeberangan Melonguane yang diusahakan secara
            komersial dan pelabuhan yang belum diusahakan secara komersial
          </div>
        </div>
        <div className="documentation w-[80%] pt-16 m-auto">
          <h2 className="text-center md:text-end text-2xl font-semibold mb-5">
            DAFTAR KAPAL
          </h2>
          <Swiper
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            direction="horizontal"
          >
            <SwiperSlide>
              <img src={bawal} alt="bawal" />
              <p className="text-center text-slate-500 font-medium mt-1">
                KMP. Bawal{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={warambe} alt="warambe" />
              <p className="text-center text-slate-500 font-medium mt-1">
                KMP. Marambe{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={watunapato} alt="watunapato" />
              <p className="text-center text-slate-500 font-medium mt-1">
                KMP. Watunapato{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={tarusi} alt="tarusi" />
              <p className="text-center text-slate-500 font-medium mt-1">
                KMP. Tarusi{" "}
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={labuhanHaji} alt="labuhan-haji" />
              <p className="text-center text-slate-500 font-medium mt-1">
                KMP. Labuhan Haji{" "}
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="documentation pt-16 w-[80%] m-auto mb-12">
          <h2 className="text-center md:text-left text-2xl font-semibold mb-5">
            DOKUMENTASI KEGIATAN
          </h2>
          <Swiper
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <img src={doc1} alt="doc 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc2} alt="doc 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc3} alt="doc 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc4} alt="doc 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc5} alt="doc 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc6} alt="doc 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc7} alt="doc 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc8} alt="doc 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc9} alt="doc 9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={doc10} alt="doc 10" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
