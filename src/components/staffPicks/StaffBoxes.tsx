import type { StaffPicksType } from "@/app/api/DataType";
import { LineTwo } from "@/content/svgs/line2";
import Image from "next/image";
import { InfoBoxOne } from "./InfoBoxFirst";
import { InfoBoxTwo } from "./InfoBox";
import clsx from "clsx";
import { Link } from "../Link/Link";

interface StaffBoxesProps {
  product: StaffPicksType[];
}

export const StaffBoxes = ({ product }: StaffBoxesProps) => {
  return (
    <section>
      {product.map((vin) => (
        <div key={vin.sku} className="flex flex-col items-center gap-2 pb-6">
          {/* Header - Ligger i midten over de andre */}
          <div className="flex flex-col justify-center items-center w-fit gap-4">
            <h2 className="font-hackney text-[2rem] md:text-5xl">{vin.title}</h2>
            <div className={clsx("flex flex-col items-center justify-center ", "pt-2 pb-6 w-full", "border-t-2 border-primary", "text-xl font-bold italic")}>
              <p>Anbefalet af {vin.anbefaletAf}</p>
            </div>
          </div>

          {/* Billede og Info Box */}
          <div className="grid justify-center lg:items-center gap-6 mb-10 md:grid-cols-5">
            {/* Billede */}
            <div className="md:col-span-2 flex justify-center">
              <Link href={vin.handle} intent="wines">
                <figure className={clsx("flex relative group", "rounded-lg overflow-hidden", "aspect-[4/5] max-w-96 min-w-40 max-h-[28rem] md:w-fit md:max-h-[27.25rem] md:max-w-[30rem]")}>
                  <Image src={vin.image || "/images/fallback.webp"} alt={vin.title} priority width={600} height={900} className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  <figcaption className={clsx("absolute z-10", "py-1 px-3 md:px-5  mt-4 ml-4", "text-white bg-Vblue-100 group-hover:bg-Vblue-50 rounded-xl", "transition duration-300 ease-in-out", "font-hackney text-2xl")}>Den er din for {vin.price} kr!</figcaption>
                </figure>
              </Link>
            </div>

            <div className="md:col-span-3 md:col-start-3">
              {/* Infobox */}
              <InfoBoxOne vin={vin} />

              <InfoBoxTwo vin={vin} />
            </div>
          </div>

          {/* Ingen linje på sidste element */}
          {vin.sortOrder !== 3 && <LineTwo />}
        </div>
      ))}
    </section>
  );
};
