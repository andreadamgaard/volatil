import type { StaffPicksType } from "@/app/api/DataType";
import clsx from "clsx";
import { Grape, Wine } from "lucide-react";

interface BoxProps {
  vin: StaffPicksType;
}

export const InfoBoxOne = ({ vin }: BoxProps) => {
  return (
    <div className={clsx("sm:hidden flex flex-col", "bg-bg border-primary border-2 rounded-lg", "w-full min-w-40 max-w-96 md:w-1/2 md:min-w-80 md:max-w-[30rem]")}>
      {/* Prod + år */}
      <div className={clsx("flex justify-between", "py-3 px-5 md:px-5", "border-b border-primary")}>
        <p className="text-3xl font-bold font-hackney ">{vin.producent}</p>
        <p className="text-3xl font-bold font-hackney">{vin.year}</p>
      </div>

      {/* Anbefaling og smager godt til */}
      <div className={clsx("flex flex-col gap-4 md:gap-8", "px-5 py-5 md:px-5", "border-b border-primary")}>
        <span className="flex flex-col gap-1.5">
          <p className="text-sm font-bold md:text-lg">Hvorfor har {vin.staffNavn} valgt den her bæller?</p>
          <p className="text-sm leading-6 md:text-base">{vin.anbefalingen}</p>
        </span>
      </div>

      {/* Type og druer */}
      <div className={clsx("flex items-start justify-center", "px-3 py-2", "border-b border-primary")}>
        {/* Vine */}
        <div className="flex flex-col flex-1 basis-0 items-center gap-7 py-4">
          <span className="flex flex-col items-center gap-1 px-2 md:w-4/5">
            <span className="flex justify-center items-end gap-2 pb-2">
              <Wine className="size-7" />
              <p>
                <strong className="text-base">Type</strong>
              </p>
            </span>
            <p className={clsx("text-base text-center", vin.sku === "10201710" && "whitespace-pre-line")}>{vin.sku === "10201710" ? "Rødvin\n(eller campari?)" : vin.type}</p>
          </span>
        </div>

        {/* Linje */}
        <div className="h-24 w-px bg-primary self-center" />

        {/* Druer */}
        <div className="flex flex-col flex-1 basis-0 items-center gap-7 py-4">
          <span className="flex flex-col items-center gap-1 px-2 md:w-4/5">
            <span className="flex justify-center items-end gap-2 pb-2">
              <Grape className="size-6" />
              <p>
                <strong className="text-base">Vindruer</strong>
              </p>
            </span>
            <p className="text-base">{vin.druer}</p>
          </span>
        </div>
      </div>

      {/* Beskrivelse */}
      <div className={clsx("flex flex-col gap-4 px-5 py-5 md:px-5 md:gap-8", "border-b border-primary")}>
        <span className="flex flex-col gap-1.5">
          <p className="font-bold text-sm md:text-lg">Hvad er det så for en bandit?</p>
          <p className="leading-6 text-sm md:text-base">{vin.beskrivelse}</p>
        </span>
      </div>

      {/* Pris */}
      {/* <div className="flex justify-between w-full py-4 px-5 md:px-5">
        <p className="font-bold text-2xl font-hackney">Men prisen venner?!</p>
        <p className="font-bold text-2xl font-hackney">{vin.price} kr.</p>
      </div> */}
    </div>
  );
};
