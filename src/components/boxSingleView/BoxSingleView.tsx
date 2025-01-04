"use client";
import { ChevronDown, Earth, Grape, MapPin, Wine } from "lucide-react";
import type { VinSingleType } from "@/app/api/vin";

type BoxSingleViewProps = {
  data: VinSingleType;
};

export const BoxSingleView = ({ data }: BoxSingleViewProps) => {
  return (
    <div className="bg-bg border-primary border-2 min-w-80 w-full md:max-w-[30rem] justify-center rounded-lg  pt-5 flex flex-col text-sm lg:text-base gap-3">
      <div className="px-5 pb-6 border-b border-b-primary flex flex-col gap-4">
        <span>
          <p>
            <strong className="text-sm md:text-base">Hvad er det for noget?:</strong> <br />
            {data.beskrivelse}
          </p>
        </span>
        <span>
          <p>
            <strong className="text-sm md:text-base">Det vigtige spørgsmål, er etiketten flot?!</strong> <br />
            {data.flot_etiket || "Ingen ved det?"}
          </p>
        </span>
      </div>
      <div className="grid w-full grid-cols-2 px-5 gap-4 py-2 ">
        <div className="flex flex-col justify-between pr-0.5 gap-7 border-r border-r-primary">
          <span className="flex gap-3 items-start">
            <Grape className="size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm md:text-base">Vindruer:</strong> <br />
                {data.druer || "-"}
              </p>
            </span>
          </span>
          <span className="flex gap-3 items-start">
            <Wine className="size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm md:text-base">Type:</strong> <br />
                {data.type || "-"}
              </p>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-7 justify-between">
          <span className="flex gap-3 items-start">
            <Earth className="size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm md:text-base">Land:</strong> <br />
                {data.land || "-"}
              </p>
            </span>
          </span>
          <span className="flex gap-3 items-start">
            <MapPin className="size-6" />
            <span className="flex flex-wrap">
              <p>
                <strong className="text-sm md:text-base">Områdeeee:</strong> <br />
                {data.area || "-"}
              </p>
            </span>
          </span>
        </div>
      </div>
      <details className="group w-full  border-t border-primary rounded-b-lg">
        <summary className="list-none items-center gap-4 group-open:border-b group-open:border-b-primary transition ease-in-out duration-200 group-hover:bg-secondary hover:rounded-b-lg group-open:hover:rounded-none ">
          <span className="flex justify-between items-center py-2 ">
            <p className="w-full px-5 text-base">
              <strong>Mere information missekat?</strong>
            </p>
            <span className="px-5 transition ease-in-out duration-300 group-open:rotate-180">
              <ChevronDown />
            </span>
          </span>
        </summary>
        <div className="py-6 px-4 transition ease-in-out duration-300 flex justify-between items-center md:py-6 md:px-8">
          <span className="border-r">
            <p>
              <strong className="text-sm md:text-base">Alkoholprocent:</strong> <br />
              {data.alkoholprocent || "-"}
            </p>
          </span>
          <div className="h-12 w-px bg-primary" />

          <span>
            <p>
              <strong className="text-sm md:text-base"> Tilsat svolv:</strong>

              <br />
              {data.tilsat_svovl || "-"}
            </p>
          </span>
          <div className="h-12 w-px bg-primary" />
          <span>
            <p>
              <strong className="text-sm md:text-base"> Størrelse:</strong>
              <br />
              {data.size || "-"}
            </p>
          </span>
        </div>
      </details>
    </div>
  );
};
