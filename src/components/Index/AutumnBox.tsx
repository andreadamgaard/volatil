import type { BoxesType } from "@/app/api/DataType";
import Image from "next/image";

export const AutumnBox = ({ data }: { data: BoxesType | null }) => {
  if (!data) {
    return <p>Data findes ikke</p>;
  }

  return (
    <article className="grid grid-cols-2">
      <figure className="relative w-full h-64 md:h-80 lg:h-[41rem]">
        <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover" />
      </figure>
      <div>
        <h2>{data.title}</h2>
        <h3>{data.price}</h3>
        <span>
          <p>Lager linje</p>
        </span>
        <div>
          <span>{data.navn} </span>
          <span>{data.druer}</span>
          <span>{data.land} </span>
          <span>{data.beskrivelse}</span>
        </div>
      </div>
    </article>
  );
};
