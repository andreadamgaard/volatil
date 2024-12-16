import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import type { SwiperImages } from "./SwiperData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

import "../../styles/swiper.css";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SwiperKarusel({ shows }: SwiperImages) {
  return (
    <section className="w-full group relative pt-1 pb-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        centeredSlides={true}
        allowTouchMove={true}
        spaceBetween={6}
        slidesPerView={1}
        // autoplay={{
        //   delay: 4500,
        // }}
        // speed={400}
        breakpoints={{
          768: {
            slidesPerView: 1.45,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 1.7,
            spaceBetween: 12,
          },
          1920: {
            slidesPerView: 2.23,
            spaceBetween: 16,
          },
        }}
      >
        {shows.map((show) => (
          <SwiperSlide key={show.title} className="flex justify-center items-center py-4 antialiased">
            {({ isActive, isPrev, isNext }) => (
              <>
                <img className="relative w-full h-full object-cover aspect-[7/6] min-[579px]:aspect-video" src={show.src} alt={show.alt} />
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[70%] " />

                <div className={clsx("absolute pl-3 text-white bottom-0 py-5 min-[576px]:pl-4 pr-4 transition-all ease-in duration-500", isActive ? "opacity-100 visible" : "opacity-0 invisible", (isPrev || isNext) && "opacity-0 invisible")}>
                  <div className="mb-6 flex flex-col">
                    <h2 className="leading-[1.1em] text-[28px] min-[992px]:leading-[1.1em] min-[992px]:text-4xl min-[1440px]:leading-[1.1em] min-[1440px]:text-5xl m-0 lg:text-5xl lg:leading-[1.1em] font-bold line-clamp-2">{show.title}</h2>
                    <p className=" text-white leading-[1.4em] font-normal line-clamp-2 md:line-clamp-3 min-[1440px]:text-lg min-[1440px]:leading-[1.4em]">{show.text}</p>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev custom-arrow-prev opacity-0 group-hover:opacity-100 transition-opacity  duration-200">
          <div className="bg-[#0a0f2c99] hover:bg-white transition duration-200 text-white hover:text-black rounded-full w-8 h-8 min-[992px]:w-12 min-[992px]:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronLeft className="text-inherit" />
            </div>
          </div>
        </div>
        <div className="swiper-button-next custom-arrow-next  transition-opacity  duration-200">
          <div className=" bg-[#0a0f2c99] hover:bg-white transition duration-200  text-white hover:text-black  rounded-full w-8 h-8 min-[992px]:w-12 min-[992px]:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronRight className="text-inherit" />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
