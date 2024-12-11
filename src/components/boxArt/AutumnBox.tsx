import type { BoxesType } from "@/app/api/DataType";
import { Earth, Grape, NotebookPen, Sparkles, Wine, Zap } from "lucide-react";
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
    <article className="flex">
      <figure className="relative h-64 lg:w-[26rem] lg:h-[41rem] ring-2 ring-primary ">
        <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover" />
      </figure>

      <div className="px-4 py-5 flex flex-col gap-4 ring-2 ring-primary">
        <div className="font-hackney flex flex-col gap-2 justify-start">
          <h2 className="text-6xl">{data.title}</h2>
          <h3 className="text-4xl">
            {data.price} kr <span className="line-through text-textSale">{data.oldPrice}</span>
          </h3>
        </div>
        <div>
          <p className=" font-bold ">På lager</p>
          <StockLine />
        </div>

        <div className="flex flex-col bg-secondary min-h-80 max-w-96 rounded px-6 py-4 items-start gap-6 justify-center">
          <span className="flex gap-5 text-lg items-center">
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
          <span className="flex gap-5 text-lg items-center">
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
          <span className="flex gap-5 text-lg items-center">
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
          <p className="flex gap-5 text-lg">
            <span>
              <NotebookPen />
            </span>
            {data.beskrivelse}
          </p>
        </div>
        <div className="flex items-end justify-between gap-7">
          <AntalBox />
          <Button>Tilføj til kurv</Button>
        </div>
      </div>
    </article>
  );
};
