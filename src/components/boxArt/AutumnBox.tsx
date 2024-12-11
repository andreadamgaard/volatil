import type { BoxesType } from "@/app/api/DataType";
import { CheckCheck, Earth, Grape, NotebookPen, Sparkles, Wine, Zap } from "lucide-react";
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
    <article className="flex h-fit w-fit ring-2 ring-primary">
      <figure className="relative h-fill lg:w-[23rem] border-r-2 border-r-primary">
        <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover" />
      </figure>

      <div className="px-4 py-3 flex flex-col">
        <div className="font-hackney flex flex-col gap-1 justify-start">
          <h2 className="text-6xl">{data.title}</h2>
          <h3 className="text-4xl">
            {data.price} kr <span className="line-through text-textSale">{data.oldPrice}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-2 pt-2 pb-7">
          <p className="font-bold">På lager</p>
          <StockLine />
        </div>

        <div className="flex flex-col bg-secondary min-h-64 max-w-96 rounded px-4 items-start gap-6 justify-center">
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

        <div className="flex items-end justify-between gap-7 pt-5 pb-3">
          <AntalBox />
          <Button>Tilføj til kurv</Button>
        </div>

        <div className="flex gap-4 ">
          <CheckCheck className="text-Vblue-100" />
          <span className="text-sm">
            <p className=" leading-4 pb-2">
              Pickup available at Volatil
              <br />
              Usually ready in 24 hours
            </p>
            <a href="/" className="underline hover:text-hover hover:no-underline">
              View store information
            </a>
          </span>
        </div>
      </div>
    </article>
  );
};
