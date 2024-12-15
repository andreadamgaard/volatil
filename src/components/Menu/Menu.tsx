"use client";
import { VolatilLogo } from "@/content/logo/VolatilLogo";
import { CircleUserRound, Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Alle } from "./Categories/Alle";
import { Typer } from "./Categories/Typer";
import { Land } from "./Categories/Land";
import { Opdagesle } from "./Categories/Opdagelse";
import clsx from "clsx";
import { Link } from "../Link/Link";

type Category = "Alle vine" | "Typer" | "Land" | "Gå på opdagelse";

const categories: Record<Category, () => JSX.Element> = {
  "Alle vine": Alle,
  Typer: Typer,
  Land: Land,
  "Gå på opdagelse": Opdagesle,
};
export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "">("");

  return (
    <nav className="bg-secondary relative w-full h-fit flex justify items-center px-8 py-2 z-50">
      <div className="basis-0	grow">
        <button className="font-hackney text-4xl hover:text-hover" type="button" onMouseEnter={() => setActiveCategory("Alle vine")}>
          Vine
        </button>

        {/* Dropdown-menuen */}
        {activeCategory && (
          <div
            className="absolute w-fit flex min-h-[368px] h-96"
            // onMouseLeave={() => setActiveCategory("")}
          >
            <ul className="min-w-44 w-60 bg-bg group py-7 text-base ring-primary ring-2 focus-within:hover:bg-primary">
              {Object.keys(categories).map((category) => (
                <li key={category} className={clsx("py-3 font-bold px-4 hover:bg-primary hover:text-bg", activeCategory === category && "bg-primary text-bg")} onMouseEnter={() => setActiveCategory(category as Category)}>
                  {category}
                </li>
              ))}
            </ul>

            {/* Dynamisk kategori-indhold */}
            <div className="min-w-96 lg:w-[33rem] h-auto bg-bg ring-primary ring-2 flex items-start justify-start">{activeCategory && React.createElement(categories[activeCategory])}</div>

            {/* Billeder */}
            <div className="flex ring-primary ring-2 max-w-[28rem]">
              <figure className="h-full w-1/2">
                <Image className="h-full w-full object-cover" src="/images/WineHands.png" alt="hand with wine" width={227} height={800} />
              </figure>
              <figure className="h-full w-1/2">
                <Image className="h-full w-full object-cover" src="/images/WallWine.png" alt="wall with wine" width={227} height={800} />
              </figure>
            </div>
          </div>
        )}
      </div>

      {/* Resten af top nav */}
      {/* Logo */}
      <Link href="/" intent="null" aria-label="forside">
        <VolatilLogo className=" h-16 fill-primary stroke-[5px]" />
      </Link>

      {/* Højre menu */}
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
