"use client";
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
    <nav className="bg-secondary relative w-full h-fit flex justify items-center px-8 py-2">
      <div className="basis-0	grow">
        <button className="font-hackney text-4xl hover:text-hover" type="button" onClick={() => setIsOpen(true)}>
          Vine
        </button>
        {isOpen && (
          <div className="absolute flex min-h-[368px]">
            <ul className="w-72 bg-bg group py-7 text-xl ring-primary ring-2 focus-within:hover:bg-primary">
              {Object.keys(hoverContent).map((item) => (
                <li key={item} className="hover:bg-primary hover:text-bg py-3" onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem("")}>
                  <span className="px-4">{item}</span>
                </li>
              ))}
            </ul>
            {/* <ul className="min-w-[312px] bg-bg group py-7 text-xl ring-primary ring-2 focus-within:hover:bg-primary">
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
            </ul> */}
            <div className="w-96 h-auto bg-bg ring-primary ring-2 flex items-center justify-center px-4">
              {hoveredItem && (
                <ul>
                  {hoverContent[hoveredItem].map((content, index) => (
                    <li key={index} className="py-1 text-primary">
                      {content}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <div className="flex  ring-primary ring-2">
                <Image className="h-full w-auto" src="/images/hand-wine.png" alt="hand with wine" width={227} height={800} />
                <Image className="h-full w-auto" src="/images/wine-wall.png" alt="wall with wine" width={227} height={800} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <VolatilLogo className=" h-16 fill-primary stroke-[5px]" />
      </div>
      <div className="flex gap-4 items-center basis-0	grow justify-end">
        <span className="flex gap-2 text-4xl items-center hover:text-hover">
          <Search className="size-7 " />
          <p className="font-hackney">Search</p>
        </span>
        <CircleUserRound className="size-7 hover:text-hover" />
        <ShoppingBasket className="size-7 hover:text-hover" />
      </div>
    </nav>
  );
};
