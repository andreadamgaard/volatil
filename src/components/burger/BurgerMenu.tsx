import { Button, Menu } from "@headlessui/react";
import { MenuIcon, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "../Link/Link";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVintyperOpen, setIsVintyperOpen] = useState(false);

  return (
    <div className="relative">
      <Button className="relative w-8 h-8 flex items-center justify-center z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className={`absolute w-8 h-1 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45" : "translate-y-[-8px]"}`} />
        <span className={`absolute w-8 h-1 bg-gray-800 rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`absolute w-8 h-1 bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-[8px]"}`} />
      </Button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-lg p-4 rounded-md">
          <ul className="space-y-4">
            <li>
              <Link intent="text" href="/alle-vine" className="block text-gray-800 hover:underline">
                Alle Vine
              </Link>
            </li>
            <li>
              <Link intent="text" href="/om-os" className="block text-gray-800 hover:underline">
                Om os
              </Link>
            </li>
            <li>
              <div>
                <Button className="flex items-center w-full text-left text-gray-800 hover:underline" onClick={() => setIsVintyperOpen(!isVintyperOpen)} aria-expanded={isVintyperOpen}>
                  <span>Vintyper</span>
                  <span className="ml-auto">{isVintyperOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
                </Button>
                {isVintyperOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <Link intent="text" href="/vintyper/rodvin" className="block text-gray-700 hover:underline">
                        Rødvin
                      </Link>
                    </li>
                    <li>
                      <Link intent="text" href="/vintyper/hvidvin" className="block text-gray-700 hover:underline">
                        Hvidvin
                      </Link>
                    </li>
                    <li>
                      <Link intent="text" href="/vintyper/orangevin" className="block text-gray-700 hover:underline">
                        Orangevin
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
