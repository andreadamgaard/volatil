import { VolatilLogo } from "@/app/Logo/VolatilLogo";
import { CircleUserRound, Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  const hoverContent = {
    "Alle vine": ["Rødvin", "Hvidvin", "Rosé", "Mousserende"],
    Typer: ["Frugtig", "Kraftig", "Let", "Tør"],
    Område: ["Frankrig", "Italien", "Spanien", "USA"],
    Gavekort: ["500 kr.", "1000 kr.", "2000 kr."],
    "Billigjuice (som stadig er psyko!)": ["Budget Rødvin", "Budget Hvidvin"],
    "Weird shit (på den gode måde!)": ["Naturvin", "Eksperimentel Vin"],
  };

  return (
    <header className="bg-secondary relative w-full h-fit flex justify-between items-center px-8 py-2">
      <div>
        <button className="font-hackney text-4xl hover:text-hover" type="button" onClick={() => setIsOpen(true)}>
          Vine
        </button>
        {isOpen && (
          <div className="absolute flex">
            <ul className="min-w-[312px] bg-bg group py-7 text-xl ring-primary ring-2 focus-within:hover:bg-primary">
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Alle vine</span>
              </li>
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Typer</span>
              </li>
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Område</span>
              </li>
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Gavekort</span>
              </li>
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Billigjuice (som stadig er psyko!)</span>
              </li>
              <li className="hover:bg-primary hover:text-bg py-3">
                <span className="px-4">Weird shit (på den gode måde!)</span>
              </li>
            </ul>
            <div>
              <div className="flex  ring-primary ring-2">
                <Image className="max-h-[368px] w-auto" src="/images/hand-wine.png" alt="hand with wine" width={879} height={1424} />
                <Image className="max-h-[368px] w-auto" src="/images/wine-wall.png" alt="wall with wine" width={879} height={1424} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <VolatilLogo className=" h-16 fill-primary stroke-[5px]" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="flex gap-2 text-4xl items-center hover:text-hover">
          <Search className="size-7 " />
          <p className="font-hackney">Search</p>
        </span>
        <CircleUserRound className="size-7 hover:text-hover" />
        <ShoppingBasket className="size-7 hover:text-hover" />
      </div>
    </header>
  );
};
