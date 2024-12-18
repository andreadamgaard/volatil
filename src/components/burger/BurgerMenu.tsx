"use client";
import { Button, Menu } from "@headlessui/react";
import { MenuIcon, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "../Link/Link";
import clsx from "clsx";
import { VolatilLogo } from "@/content/logo/VolatilLogo";
import { LineFour } from "@/content/svgs/line4";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVintyperOpen, setIsVintyperOpen] = useState(false);
  const [isLandeOpen, setIsLandeOpen] = useState(false);
  const [isOpdagesleOpen, setIsOpdagesleOpen] = useState(false);

  const lande = ["Argentina", "Australien", "Bulgarien", "Danmark", "Frankrig", "Georgien", "Grækenland", "Italien", "Kroatien", "New Zealand", "Portugal", "Slovakiet", "Slovenien", "Spanien", "Sverige", "Sydafrika", "Tjekkiet", "Tyskland", "Ungarn", "Østrig"];

  return (
    <header className="w-full bg-bg z-40">
      <nav className="relative flex justify-center items-center px-5 py-2">
        <div className="basis-1/3" />
        <div className="basis-1/3 flex justify-center items-center">
          {/* Logo */}
          <Link href="/" intent="null" aria-label="forside">
            {/* <h1 className=" font-hackney text-6xl  transition ease-in-out duration-200 hover:text-hover">VOLATIL</h1> */}
            <VolatilLogo className="hover:text-hover h-16 stroke-[8px] transition ease-in-out duration-200" />
          </Link>
        </div>

        <div className="relative basis-1/3 flex justify-end  items-center">
          <Button className="relative w-8 h-8 flex items-center justify-center z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className={`absolute w-8 h-1 bg-primary rounded transition-all duration-400 ${isOpen ? "rotate-45" : "translate-y-[-8px]"}`} />
            <span className={`absolute w-8 h-1 bg-primary rounded transition-opacity duration-400 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute w-8 h-1 bg-primary rounded transition-all duration-400 ${isOpen ? "-rotate-45" : "translate-y-[8px]"}`} />
          </Button>

          {/* Menu */}
          {isOpen && (
            <div className="absolute top-full mt-3 right-0 w-72 h-fit bg-bg px-6 py-4 rounded ring-2 ring-primary">
              <ul className="space-y-4">
                <li>
                  <Link intent="burger" href="/alle-vine/" className="block">
                    Alle Vine
                  </Link>
                </li>
                <li>
                  <Link intent="burger" href="/om-os/" className="block">
                    Om os
                  </Link>
                </li>
                <li>
                  <Link intent="burger" href="/" className="block">
                    Gavekort
                  </Link>
                </li>
                <li>
                  <Link intent="burger" href="/" className="block">
                    Naturvin på abonnement
                  </Link>
                </li>
                <li>
                  <div>
                    <Button className="flex justify-between font-bold items-center w-full text-left transition ease-in-out duration-200 pb-2 border-b border-b-primary" onClick={() => setIsVintyperOpen(!isVintyperOpen)} aria-expanded={isVintyperOpen}>
                      <span>Vintyper</span>
                      <span className={`transition-transform duration-300 ${isVintyperOpen ? "rotate-45 " : ""}`}>
                        <Plus className="size-7" />
                      </span>
                    </Button>
                    {isVintyperOpen && (
                      <ul className="mt-2 space-y-4 pl-4">
                        <li>
                          <Link intent="burger" href="/roedvin/" className="block ">
                            Rødvin
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/hvidvin/" className="block ">
                            Hvidvin
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/orange-vin/" className="block ">
                            Orange
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/rose/" className="block ">
                            Rosé
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/bobler/" className="block ">
                            Bobler
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/cider/" className="block ">
                            Cider
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/lav-alkohol/" className="block ">
                            Lav og 0%
                          </Link>
                        </li>
                        <li>
                          <Link intent="burger" href="/magnum/" className="block ">
                            Magnum!
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <div>
                  <Button className="flex justify-between font-bold items-center w-full text-left transition ease-in-out duration-200 pb-2 border-b border-b-primary" onClick={() => setIsLandeOpen(!isLandeOpen)} aria-expanded={isLandeOpen}>
                    <span>Lande</span>
                    <span className={`transition-transform duration-300 ${isLandeOpen ? "rotate-45 " : ""}`}>
                      <Plus className="size-7" />
                    </span>
                  </Button>
                </div>
                {isLandeOpen && (
                  <ul className="mt-2 space-y-4 pl-4">
                    {lande.map((land) => (
                      <li key="land">{land}</li>
                    ))}
                  </ul>
                )}
                <div>
                  <Button className="flex justify-between font-bold items-center w-full text-left transition ease-in-out duration-200 pb-2 border-b border-b-primary" onClick={() => setIsOpdagesleOpen(!isOpdagesleOpen)} aria-expanded={isOpdagesleOpen}>
                    <span>Gå på opdagelse</span>
                    <span className={`transition-transform duration-300 ${isOpdagesleOpen ? "rotate-45 " : ""}`}>
                      <Plus className="size-7" />
                    </span>
                  </Button>
                </div>
                {isOpdagesleOpen && (
                  <ul className="mt-2 space-y-4 pl-4">
                    <li>Psykovin!!</li>
                    <li>Billigjuice (som stadig er psyko!)</li>
                    <li>Weird shit (på den gode måde!)</li>
                    <li>Staff picks</li>
                  </ul>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <LineFour />
    </header>
  );
};
