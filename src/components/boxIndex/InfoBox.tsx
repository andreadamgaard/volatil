import type { BoxesType } from "@/app/api/DataType";
import { Earth, Grape, NotebookPen, Wine } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const InfoBox = ({ data }: { data: BoxesType | null }) => {
  if (!data) {
    return <p>loader</p>;
  }

  return (
    <div className="hidden bg-secondary text-sm justify-center items-start rounded max-w-full gap-4 px-3 py-5 w-fit md:flex md:flex-col lg:text-base">
      <span className="flex gap-2 md:gap-3 items-start">
        <Wine className="size-5" />
        <span className="flex flex-wrap">
          {Array.isArray(data.navn) ? (
            data.navn.map((navn, index) => (
              <span key={uuidv4()} className="inline-flex items-center">
                <p>{navn}</p>
                {index < data.navn.length - 1 && <span className="inline-block mx-1 font-bold lg:mx-2 text-center">|</span>}
              </span>
            ))
          ) : (
            <p>{data.navn}</p>
          )}
        </span>
      </span>
      <span className="hidden lg:flex gap-2 md:gap-3 items-start">
        <Grape className="size-5" />
        <span className="flex flex-wrap">
          {Array.isArray(data.druer) ? (
            data.druer.map((drue, index) => (
              <span key={uuidv4()} className="inline-flex items-center">
                <p>{drue}</p>
                {index < data.druer.length - 1 && <span className="inline-block mx-1 font-bold lg:mx-2 text-center">|</span>}
              </span>
            ))
          ) : (
            <p>{data.druer}</p>
          )}
        </span>
      </span>
      <span className="flex gap-2 md:gap-3 items-start">
        <Earth className="size-5" />
        <span className="flex flex-wrap">
          {data.land.map((land, index) => (
            <span key={uuidv4()} className="inline-flex items-center">
              <p>{land}</p>
              {index < data.land.length - 1 && <span className="inline-block mx-1 font-bold lg:mx-2 text-center">|</span>}
            </span>
          ))}
        </span>
      </span>
      <p className="flex gap-2 md:gap-3 items-start">
        <span>
          <NotebookPen className="size-5" />
        </span>
        {data.beskrivelse}
      </p>
    </div>
  );
};
