import type { VinVisningType } from "@/app/api/vin";
import { Link } from "../Link/Link";
import Image from "next/image";

type VinVisningProps = {
  data: VinVisningType[];
};

export const VinVisning = ({ data }: VinVisningProps) => {
  return (
    <div className="grid grid-cols-2 px-6 py-5 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((vin) => (
        <article key={vin.sku} className="flex flex-col max-w-[30rem] ring-2 ring-primary">
          <Link href={vin.handle} intent="wines" className="flex flex-col h-full max-w-[30rem]">
            <figure className="max-w-[30rem] h-auto border-b-2 border-b-primary">
              <Image src={vin.image} alt={vin.title} width={2580} height={3855} className="w-full h-auto object-cover" />
            </figure>
            <div className="flex flex-col justify-between flex-grow py-2.5 gap-y-1.5 px-2 md:py-4 md:gap-y-3">
              <h3 className="font-bold text-base md:text-2xl text-center xl:text-[2rem]">{vin.navn}</h3>
              <span className="flex justify-between text-sm md:text-lg xl:text-2xl">
                <p>{vin.producent}</p>
                <p>{vin.price} kr</p>
              </span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};
