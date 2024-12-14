import type { BoxesType } from "@/app/api/DataType";
import Image from "next/image";
import React from "react";
import { BoxText } from "./BoxText";

export const AutumnBox = ({ data }: { data: BoxesType | null }) => {
  if (!data) {
    return <p>Data findes ikke</p>;
  }

  return (
    <div className="flex flex-col min-w-44 min-h-72 w-1/2 md:max-w-[55%] md:h-[35rem] md:flex-row lg:w-fit">
      <figure className="relative -z-10 aspect-4/5 border-primary border-2 border-b-0 md:border-b-2 md:border-r-0 transition duration-500 ease-in-out  md:aspect-9/16 md:w-[45%] lg:aspect-4/5 lg:w-[45%] lg:max-w-[30rem] group-hover:scale-105">
        <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover myImg" />
        {data.discounted === true && <figcaption className="absolute bg-Vblue-100 z-10 text-white font-hackney rounded-xl py-0 px-3 md:px-5 text-base md:text-2xl mt-2 ml-2">On sale</figcaption>}
      </figure>
      <BoxText data={data} />
    </div>
  );
};
