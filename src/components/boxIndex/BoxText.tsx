import type { BoxesType } from "@/app/api/DataType";
import { CheckCheck, Earth, Grape, NotebookPen, Wine } from "lucide-react";
import { StockLine } from "./StockLine";
import { AntalBox } from "../antal/AntalBox";
import { Link } from "../Link/Link";
import { InfoBox } from "./InfoBox";
import { Button } from "../Button/Button";

export const BoxText = ({ data }: { data: BoxesType | null }) => {
  if (!data) {
    return <p>loader</p>;
  }

  return (
    <article className="flex flex-col px-1 py-3 w-full md:w-fit md:max-w-[30rem] ring-2 ring-inset ring-primary md:px-4 md:py-3 md:gap-3 md:justify-between lg:gap-3">
      <div>
        <div className="font-hackney flex flex-col md:gap-0 justify-start">
          <h2 className="text-2xl sm:text-4xl ">{data.title}</h2>
          <h3 className="text-base md:text-2xl">
            {data.price} kr <span className="line-through text-textSale">{data.oldPrice}</span>
          </h3>
        </div>
        <div className="flex flex-col pt-1 lg:pb-1.5">
          <p className="font-bold md:text-sm text-[0.7rem]">På lager</p>
          <StockLine />
        </div>
      </div>

      <InfoBox data={data} />

      <div className="hidden md:flex items-end justify-between gap-3">
        <AntalBox />
        <Button>Tilføj til kurv</Button>
      </div>

      <div className="hidden gap-3 md:flex xl:gap-4 ">
        <CheckCheck className="size-5 text-Vblue-100" />
        <span className="text-xs">
          <p className=" pb-1">
            Pickup available at Volatil
            <br />
            Usually ready in 24 hours
          </p>
          <Link intent="text">View store information</Link>
        </span>
      </div>
    </article>
  );
};
