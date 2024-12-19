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
import Image from "next/image";
import { CustomLinkButton } from "../button/CustomButton";

export default function SwiperKarusel({ slides }: SwiperImages) {
  return (
    <section className="w-full group relative pb-4 min-w-[300px] md:min-w-[450px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        loop={true}
        keyboard={{
          enabled: true,
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="flex justify-center place-items-center antialiased min-w-[400px] md:min-w-[450px]">
            {({ isActive, isPrev, isNext }) => (
              <>
                <Image loading="eager" priority={index === 0} className="relative object-cover w-full h-[450px] md:h-[480px]" src={slide.src} alt={slide.alt} width={880} height={375} />
                <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full h-[70%] " />

                <div className={clsx("absolute inset-0 flex flex-col justify-end mb-8 items-center text-bg transition-all ease-in duration-500", isActive ? "opacity-100 visible" : "opacity-0 invisible", (isPrev || isNext) && "opacity-0 invisible")}>
                  <div className="mb-6 flex flex-col items-center ">
                    <h2 className="text-4xl lg:text-7xl m-0 font-hackney">{slide.title}</h2>
                    <CustomLinkButton href={slide.link} size="large">
                      {slide.text}
                    </CustomLinkButton>
                  </div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev custom-arrow-prev">
          <div className="bg-primary/60 hover:bg-bg  text-bg opacity-0 group-hover:opacity-100 transition-opacity  duration-200 hover:opacity-100 hover:text-primary rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronLeft className="text-inherit" />
            </div>
          </div>
        </div>
        <div className="swiper-button-next custom-arrow-next ">
          <div className=" bg-primary/60 hover:bg-bg  text-bg opacity-0 group-hover:opacity-100 transition-opacity  duration-200 hover:opacity-100 hover:text-primary  rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center">
            <div className=" md:h-6 md:w-6">
              <ChevronRight className="text-inherit" />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
