import type { StaffPicksType } from "@/app/api/DataType";
import { LineTwo } from "@/content/svgs/line2";
import clsx from "clsx";
import { Grape, Wine } from "lucide-react";
import Image from "next/image";

interface StaffBoxesProps {
  product: StaffPicksType[];
}

export const StaffBoxes = ({ product }: StaffBoxesProps) => {
  return (
    <section>
      {product.map((vin) => (
        <div key={vin.sku} className="flex flex-col items-center gap-2 pb-6">
          {/* Header - Ligger i midten over de andre */}
          <div className="flex flex-col justify-center items-center text-center w-fit gap-4">
            <h2 className="text-[2rem] text-center font-hackney md:text-5xl">{vin.title}</h2>
            <div className="border-t-2 border-t-primary w-full flex flex-col items-center pt-2 pb-6 justify-center text-xl font-bold italic">
              <p>Anbefalet af: {vin.anbefaletAf}</p>
            </div>
          </div>

          {/* Billede og Info Box - Ligger side om side på større skærme */}
          <div className="flex flex-col  md:flex-row gap-6 mb-10 items-center md:items-start">
            {/* Billede */}
            <div className="relative aspect-[4/5] max-w-96 min-w-40 max-h-[28rem] overflow-hidden flex items-center md:max-h-[35rem] md:w-fit md:max-w-[30rem] rounded-lg">
              <Image src={vin.image || "/images/fallback.webp"} alt={vin.title} priority width={600} height={900} className="object-cover rounded-lg" />
            </div>

            {/* Info Box */}
            <div className="bg-bg border-primary border-2 max-w-96 min-w-40 rounded-lg md:w-1/2 flex flex-col md:min-w-80 w-full md:max-w-[30rem]">
              {/* Prod + år */}
              <div className="flex justify-between text-base lg:text-lg py-3 px-5 border-b border-b-primary md:px-5">
                <p className="text-3xl font-bold font-hackney ">{vin.producent}</p>
                <p className="text-3xl font-bold font-hackney">{vin.year}</p>
              </div>

              {/* Anbefaling og smager godt til */}
              <div className="text-sm px-5 py-5 border-b border-b-primary flex flex-col gap-4 md:text-base md:px-5 md:gap-8">
                <span className="flex flex-col gap-1.5">
                  <p className="font-bold md:text-lg">Hvorfor har {vin.staffNavn} valgt den her bæller?</p>
                  <p className="text-sm leading-6 md:text-base">{vin.anbefalingen}</p>
                </span>
              </div>

              {/* Type og druer */}
              <div className="flex items-start justify-center px-3 py-2 border-b border-b-primary">
                <div className="flex flex-col flex-1 basis-0 gap-7 items-center py-4">
                  <span className="flex flex-col gap-1 items-center px-2 md:w-4/5">
                    <span className="flex justify-center items-end gap-2 pb-2">
                      <Wine className="size-7" />
                      <p>
                        <strong className="text-base md:text-base">Type</strong>
                      </p>
                    </span>
                    <p className={clsx("text-base text-center", vin.sku === "10201710" && "whitespace-pre-line")}>{vin.sku === "10201710" ? "Rødvin\n(eller campari?)" : vin.type}</p>
                  </span>
                </div>

                <div className="h-24 w-px bg-primary self-center" />

                <div className="flex flex-col flex-1 basis-0 gap-7 items-center py-4">
                  <span className="flex flex-col gap-1 items-center px-2 md:w-4/5">
                    <span className="flex justify-center items-end gap-2 pb-2">
                      <Grape className="size-6" />
                      <p>
                        <strong className="text-base md:text-base">Vindruer</strong>
                      </p>
                    </span>
                    <p className="text-base">{vin.druer}</p>
                  </span>
                </div>
              </div>

              <div className="text-sm px-5 py-5 border-b border-b-primary flex flex-col gap-4 md:text-base md:px-5 md:gap-8">
                <span className="flex flex-col gap-1.5">
                  <p className="font-bold md:text-lg">Hvad er det så for en bandit?</p>
                  <p className="text-sm leading-6 md:text-base">{vin.beskrivelse}</p>
                </span>
              </div>

              {/* Pris */}
              <div className="text-sm lg:text-base py-4 px-5 flex justify-between w-full md:px-5">
                <p className="text-2xl font-bold font-hackney">Men prisen venner?!</p>
                <p className="text-2xl font-bold font-hackney">{vin.price} kr.</p>
              </div>
            </div>
          </div>
          {/* Ingen linje på sidste element */}
          {vin.sortOrder !== 3 && <LineTwo />}
        </div>
      ))}
    </section>
  );
};
