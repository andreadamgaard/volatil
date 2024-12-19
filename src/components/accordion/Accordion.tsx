"use client";
import type { VinSingleType } from "@/app/api/vin";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  data: VinSingleType;
};

export const Accordion = ({ data }: AccordionProps) => {
  return (
    <details className="group w-full transition ease-in-out duration-300 border-t border-primary hover:bg-secondary hover:rounded-b-lg">
      <summary className="list-none items-center gap-4 group-open:border-b group-open:border-b-primary ">
        <span className="flex justify-between items-center py-2 ">
          <p className="w-full px-5 text-base">
            <strong>Ska' du ha' mer' information missekat?</strong>
          </p>
          <span className="px-5 transition ease-in-out duration-300 group-open:rotate-180">
            <ChevronDown />
          </span>
        </span>
      </summary>
      <div className="py-6 px-4 transition ease-in-out duration-300 flex justify-between items-center md:py-6 md:px-8">
        <span className="border-r">
          <p>
            <strong className="text-sm">Alkoholprocent:</strong> <br />
            {data.alkoholprocent}
          </p>
        </span>
        <div className="h-12 w-px bg-primary" />

        <span>
          <p>
            <strong className="text-sm"> Tilsat svolv:</strong>

            <br />
            {data.tilsat_svovl}
          </p>
        </span>
        <div className="h-12 w-px bg-primary" />
        <span>
          <p>
            <strong className="text-sm"> Størrelse:</strong>
            <br />
            {data.size}
          </p>
        </span>
      </div>
    </details>
  );
};
