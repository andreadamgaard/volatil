"use client";
import { Earth, Grape, MapPin, Wine } from "lucide-react";
import { Accordion } from "../accordion/Accordion";
import type { VinSingleType } from "@/app/api/vin";

type BoxSingleViewProps = {
  data: VinSingleType;
};

export const BoxSingleView = ({ data }: BoxSingleViewProps) => {
  return (
    <div className="bg-bg border-primary border-2 max-w-[30rem] justify-center  rounded-lg w-full  pt-5 flex flex-col text-base gap-3">
      <div className="px-5 pb-6 border-b border-b-primary flex flex-col gap-4">
        <span>
          <p>
            <strong className="text-sm">Hvad er det for noget?:</strong> <br />
            {data.beskrivelse}
          </p>
        </span>
        <span>
          <p>
            <strong className="text-sm">Det vigtige spørgsmål, er etiketten flot?!</strong> <br />
            {data.flot_etiket}
          </p>
        </span>
      </div>
      <div className="grid  px-4 gap-2 w-full  md:grid-cols-2 md:px-5 md:gap-4 md:py-2 ">
        <div className="flex flex-col gap-4 md:gap-7 md:border-r md:border-r-primary">
          <span className="flex gap-4 md:gap-3 items-center">
            <Grape className="size md:size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm">Vindruer:</strong> <br />
                {data.druer}
              </p>
            </span>
          </span>
          <span className="flex gap-4 md:gap-3 items-center">
            <Wine className="size md:size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm">Type:</strong> <br />
                {data.type}
              </p>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-4 md:gap-7">
          <span className="flex gap-4 md:gap-3 items-center">
            <Earth className="size md:size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm">Land:</strong> <br />
                {data.land}
              </p>
            </span>
          </span>
          <span className="flex gap-4 md:gap-3 items-center">
            <MapPin className="size md:size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm">Områdeeee:</strong> <br />
                {data.area}
              </p>
            </span>
          </span>
        </div>
      </div>
      <Accordion data={data} />
    </div>
  );
};
