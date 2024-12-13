import type { BoxesType } from "@/app/api/DataType";
import { CheckCheck, Earth, Grape, Link, NotebookPen, Sparkles, Wine, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import { StockLine } from "./StockLine";
import { AntalBox } from "../antal/AntalBox";
import { Button } from "../Button/Button";

export const AutumnBox = ({ data }: { data: BoxesType | null }) => {
  if (!data) {
    return <p>Data findes ikke</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-fit w-fit ring-2 ring-primary">
      <figure className="relative h-fill min-w-44 h-40 md:h-96 md:min-w-[25rem] lg:h-auto lg:w-[23rem] lg:border-r-2 border-primary">
        <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover" />
        {data.discounted === true && <figcaption className="absolute bg-Vblue-100 z-10 text-white font-hackney rounded-xl py-0 px-3 md:px-5 text-base md:text-2xl mt-2 ml-2">On sale</figcaption>}
      </figure>

      <article className="flex flex-col px-2 py-1 md:px-4 md:py-3">
        <div className="font-hackney flex flex-col md:gap-1 justify-start">
          <h2 className="text-xl md:text-6xl">{data.title}</h2>
          <h3 className="text-base md:text-4xl">
            {data.price} kr <span className="line-through text-textSale">{data.oldPrice}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-1 pb-2 md:gap-2 md:pt-2 md:pb-7">
          <p className="font-bold md:text-base text-[0.7rem]">På lager</p>
          <StockLine />
        </div>

        <div className="hidden text-base py-2 lg:flex md:flex-col bg-secondary min-h-64 max-w-[22rem] rounded px-4 items-start gap-6 justify-center">
          <span className="flex gap-5 items-center">
            <Wine />
            <span className="flex flex-wrap">
              {Array.isArray(data.navn) ? (
                data.navn.map((navn, index) => (
                  <span key={Math.random()} className="inline-flex items-center">
                    <p>{navn}</p>
                    {index < data.navn.length - 1 && <span className="mx-4 font-bold">|</span>}
                  </span>
                ))
              ) : (
                <p>{data.navn}</p>
              )}
            </span>
          </span>
          <span className="flex gap-5 items-center">
            <Grape />
            <span className="flex flex-wrap">
              {Array.isArray(data.druer) ? (
                data.druer.map((drue, index) => (
                  <span key={Math.random()} className="inline-flex items-center">
                    <p>{drue}</p>
                    {index < data.druer.length - 1 && <span className="inline-block mx-2 text-center">|</span>}
                  </span>
                ))
              ) : (
                <p>{data.druer}</p>
              )}
            </span>
          </span>
          <span className="flex gap-5 items-center">
            <Earth />
            <span className="flex flex-wrap">
              {data.land.map((land, index) => (
                <span key={Math.random()} className="inline-flex items-center">
                  <p>{land}</p>
                  {index < data.land.length - 1 && <span className="mx-4 font-bold">|</span>}
                </span>
              ))}
            </span>
          </span>
          <p className="flex gap-5">
            <span>
              <NotebookPen />
            </span>
            {data.beskrivelse}
          </p>
        </div>

        <div className="hidden lg:flex items-end justify-between gap-7 pt-5 pb-3">
          <AntalBox />
          <Button>Tilføj til kurv</Button>
        </div>

        <div className="hidden lg:flex gap-4 ">
          <CheckCheck className="text-Vblue-100" />
          <span className="text-sm">
            <p className=" leading-4 pb-2">
              Pickup available at Volatil
              <br />
              Usually ready in 24 hours
            </p>
            <Link>View store information</Link>
          </span>
        </div>
      </article>
    </div>
  );
};
