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
import { LinkButton } from "../button/Button";
import Image from "next/image";

export default function SwiperKarusel({ slides }: SwiperImages) {
  return (
    <section className="w-full group relative pb-4">
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
        autoplay={{
          delay: 4500,
        }}
        speed={400}
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center items-center antialiased">
            {({ isActive, isPrev, isNext }) => (
              <>
                <Image className="relative w-full h-full object-cover aspect-[13/9] xl:aspect-swiper" src={slide.src} alt={slide.alt} fill objectFit="cover" />
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[70%] " />

                <div className={clsx("absolute inset-0 flex flex-col justify-end mb-8 items-center text-bg transition-all ease-in duration-500", isActive ? "opacity-100 visible" : "opacity-0 invisible", (isPrev || isNext) && "opacity-0 invisible")}>
                  <div className="mb-6 flex flex-col items-center ">
                    <h2 className="text-4xl lg:text-7xl m-0 font-hackney">{slide.title}</h2>
                    <LinkButton href={slide.link} size="large">
                      {slide.text}
                    </LinkButton>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev custom-arrow-prev opacity-0 group-hover:opacity-100 transition-opacity  duration-200">
          <div className="bg-primary/60 hover:bg-bg transition duration-200 text-bg hover:text-primary rounded-full w-8 h-8 min-[992px]:w-12 min-[992px]:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronLeft className="text-inherit" />
            </div>
          </div>
        </div>
        <div className="swiper-button-next custom-arrow-next  opacity-0 group-hover:opacity-100 transition-opacity  duration-200">
          <div className=" bg-primary/60 hover:bg-bg transition duration-200  text-bg hover:text-primary  rounded-full w-8 h-8 min-[992px]:w-12 min-[992px]:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronRight className="text-inherit" />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
