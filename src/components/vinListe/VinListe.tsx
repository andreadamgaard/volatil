import { Link } from "../Link/Link";
import Image from "next/image";
import type { VinVisningType } from "@/app/api/vin";
import { CustomButton } from "../button/CustomButton";

type VinVisningProps = {
  data: VinVisningType[];
};

export const VinListe = ({ data }: VinVisningProps) => {
  return (
    <div className="grid grid-cols-2 px-6 py-5 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((vin) => (
        <article key={vin.sku} className="flex flex-col max-w-[30rem] ring-2 ring-primary rounded">
          <Link href={vin.handle} intent="wines" className="flex flex-col h-full max-w-[30rem]">
            <figure className="relative w-full lg:max-h-96 lx:max-h-[30rem] overflow-hidden rounded-t group">
              <div className=" w-full h-full transition duration-500 ease-in-out group-hover:scale-105">
                <Image src={vin.image} alt={vin.title} width={2580} height={3855} className="h-full xl:min-h-[16rem] object-cover object-center" />
              </div>
              <div className="absolute inset-0 px-7 pb-4 flex items-end justify-end opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <CustomButton size="medium" className="px-4 py-2">
                  Køb mig lige?!
                </CustomButton>
              </div>
            </figure>

            <div className="flex flex-col flex-grow pt-0 pb-2 gap-y-0 px-2.5 border-t-2 border-t-primary">
              <h3
                className="font-bold text-2xl md:text-2xl lg:text-2xl text-center xl:text-[1.5rem]
               min-h-16 flex items-center justify-center leading-tight pt-1"
              >
                <span className="line-clamp-2 text-center">{vin.navn}</span>
              </h3>
              <span className="flex justify-between items-start md:text-base min-h-[2.5rem] pt-1">
                <p className="max-w-[75%] break-words text-[0.8rem] italic md:text-base">{vin.producent}</p>
                <p>{vin.price} kr</p>
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};
