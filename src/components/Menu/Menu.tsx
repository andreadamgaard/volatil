"use client";
import { ChevronDown, CircleUserRound, Search, ShoppingBasket } from "lucide-react";
import React, { useRef, useState } from "react";
import { Alle } from "./Categories/Alle";
import { Typer } from "./Categories/Typer";
import { Land } from "./Categories/Land";
import { Opdagesle } from "./Categories/Opdagelse";
import clsx from "clsx";
import { Link } from "../Link/Link";
import { NavImg } from "./NavImg";
import { VolatilLogo } from "@/content/logo/VolatilLogo";
import { LineTwo } from "@/content/svgs/line2";

type Category = "Alle vine" | "Typer" | "Land" | "Gå på opdagelse";

const categories: Record<Category, () => JSX.Element> = {
  "Alle vine": Alle,
  Typer: Typer,
  Land: Land,
  "Gå på opdagelse": Opdagesle,
};
export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "">("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const navImgRef = useRef<HTMLDivElement>(null);

  const handleKeyDownOnButton = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsDropdownOpen(true);
    }
  };

  const handleKeyDownOnCategory = (event: React.KeyboardEvent, category: Category) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveCategory(category);
      setTimeout(() => contentRef.current?.focus(), 0);
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (!relatedTarget?.closest(".dropdown-container") && !relatedTarget?.closest(".vine-button")) {
      setActiveCategory("");
      setIsDropdownOpen(false);
    }
  };
  return (
    <header className="w-full bg-bg z-40 pt-2 relative">
      <nav className=" flex justify-center items-center px-8 ">
        <div className="basis-0	grow flex gap-5 lg:gap-10">
          <button className="flex items-center font-hackney text-2xl lg:text-4xl hover:text-hover vine-button" type="button" onMouseEnter={() => setIsDropdownOpen(true)} onKeyDown={handleKeyDownOnButton} onBlur={handleBlur} aria-expanded={isDropdownOpen}>
            Vine
            <ChevronDown className="size-5 lg:size-7 stroke-[3px]" />
          </button>

          {isDropdownOpen && (
            <div className="absolute w-fit z-50 flex min-h-[368px] h-96 left-[2%] top-[65%] dropdown-container" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} onBlur={handleBlur} tabIndex={-1} role="menu">
              {/* Kategorier */}
              <ul className="min-w-44 w-60 bg-bg group py-7 text-base ring-primary ring-2" role="menu">
                {Object.keys(categories).map((category) => (
                  <li key={category} className="w-full">
                    <button type="button" role="menuitem" className={clsx("w-full px-4 py-3 font-bold text-left hover:bg-primary focus:bg-primary hover:text-bg focus:text-bg", activeCategory === category && "bg-primary text-bg")} onMouseEnter={() => setActiveCategory(category as Category)} onKeyDown={(event) => handleKeyDownOnCategory(event, category as Category)} onFocus={() => setActiveCategory(category as Category)}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Dynamisk kategori-indhold */}
              <section
                ref={contentRef}
                className="min-w-96 lg:w-[33rem] h-auto bg-bg ring-primary ring-2 flex items-start justify-start"
                aria-labelledby={activeCategory}
                tabIndex={-1} // Fokuserbart via script
              >
                {activeCategory && React.createElement(categories[activeCategory])}
              </section>

              {/* Billeder */}
              <div ref={navImgRef}>
                <NavImg />
              </div>
            </div>
          )}

          <Link href="/alle-vine/" intent="null" aria-label="forside">
            <span className="font-hackney text-2xl lg:text-4xl hover:text-hover">Alle Vine</span>
          </Link>
          <Link href="/om-os/" intent="null" aria-label="forside">
            <span className="font-hackney text-2xl lg:text-4xl hover:text-hover">Om os</span>
          </Link>
        </div>

        {/* Resten af top nav */}
        {/* Logo */}
        <Link href="/" intent="null" aria-label="forside">
          <VolatilLogo className="hover:text-hover h-16 stroke-[8px] transition ease-in-out duration-200" />
        </Link>

        {/* Højre menu */}
        <div className="flex gap-4 items-center basis-0	grow justify-end">
          <span className="flex gap-2 text-2xl lg:text-4xl items-center hover:text-hover">
            <Search className="size-7 " />
            <p className="font-hackney">Search</p>
          </span>
          <CircleUserRound className="size-7 hover:text-hover" />
          <ShoppingBasket className="size-7 hover:text-hover" />
        </div>
      </nav>
      <span>
        <LineTwo className="-mb-2" />
      </span>
    </header>
  );
};
