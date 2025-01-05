import type { StaffPicksType } from "@/app/api/DataType";
import clsx from "clsx";
import { Grape, Wine } from "lucide-react";

interface StaffBoxesProps {
  vin: StaffPicksType;
}

export const InfoBoxTwo = ({ vin }: StaffBoxesProps) => {
  return (
    <div className={clsx("hidden sm:grid grid-cols-4", "bg-bg border-primary border-2 rounded-lg", "min-w-80 max-w-[38rem] md:min-h-[39.75rem] lg:min-h-52 lg:max-w-[38rem]")}>
      {/* Prod + år */}
      <div className={clsx("col-span-4 row-start-1", "flex justify-between", "py-3 px-5 md:px-5", "border-b border-primary")}>
        <p className="text-3xl font-bold font-hackney ">{vin.producent}</p>
        <p className="text-3xl font-bold font-hackney">{vin.year}</p>
      </div>

      {/* Anbefaling */}
      <div className={clsx("row-start-2 col-span-3 md:col-span-4", "flex flex-col gap-4 md:gap-8", " px-5 py-5 md:px-5", "border-b border-primary")}>
        <span className="flex flex-col gap-1.5">
          <p className="font-bold text-sm  md:text-base">Hvorfor har {vin.staffNavn} valgt den her bæller?</p>
          <p className="leading-6 text-sm">{vin.anbefalingen}</p>
        </span>
      </div>

      {/* Type og druer */}
      <div className={clsx("row-span-2 col-start-4 md:row-span-1 md:row-start-3", "flex flex-col items-center justify-center gap-2", "py-2", "border-l border-primary")}>
        {/* Vine */}
        <div className="flex flex-col items-center py-3">
          <span className="flex flex-col items-center gap-1">
            <span className="flex justify-center items-center gap-1 pb-1">
              <Wine className="size-5" />
              <p>
                <strong className="text-sm md:text-base">Type</strong>
              </p>
            </span>
            <p className={clsx("text-sm text-center", vin.sku === "10201710" && "whitespace-pre-line")}>{vin.sku === "10201710" ? "Rødvin\n(eller campari?)" : vin.type}</p>
          </span>
        </div>

        {/* Linje */}
        <div className="h-px w-24 bg-primary self-center" />

        {/* Druer */}
        <div className="flex flex-col items-center py-3">
          <span className="flex flex-col items-center gap-1">
            <span className="flex justify-center items-center gap-1 pb-1">
              <Grape className="size-5" />
              <p>
                <strong className="text-sm md:text-base">Vindruer</strong>
              </p>
            </span>
            <p className="text-sm">{vin.druer}</p>
          </span>
        </div>
      </div>

      {/* Beskrivelse */}
      <div className={clsx("row-start-3 col-span-3", "flex flex-col justify-center gap-4 md:gap-8", "px-5 py-5 md:px-5")}>
        <span className="flex flex-col gap-1.5">
          <p className="font-bold text-sm md:text-base">Hvad er det så for en bandit?</p>
          <p className="leading-6 text-sm">{vin.beskrivelse}</p>
        </span>
      </div>

      {/* Pris */}
      {/* <div className={clsx("row-start-4 col-span-4", "flex justify-between w-full", "py-4 px-5 md:px-5", "border-t border-primary")}>
        <p className="text-2xl font-bold font-hackney">Men prisen venner?!</p>
        <p className="text-2xl font-bold font-hackney">{vin.price} kr.</p>
      </div> */}
    </div>
  );
};
