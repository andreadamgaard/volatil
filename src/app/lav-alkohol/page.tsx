"use client";
import { useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Nul } from "@/content/svgs/wine/Nul";
import { LineOne } from "@/content/svgs/line1";
import { Filter } from "@/components/filter/Filter";
import { Sorting } from "@/components/sorting/Sorting";
import { VinListe } from "@/components/vinListe/VinListe";

export default function LavAlkohol() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const [availableProducers, setAvailableProducers] = useState<string[]>([]);
  const [availableLande, setAvailableLande] = useState<string[]>([]);

  // State til sortering
  const [sortOption, setSortOption] = useState<string>("none");
  const [selectedFilterLand, setSelectedFilterLand] = useState<string[]>([]);
  const [selectedFilterProducent, setSelectedFilterProducent] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allData = await fetchProductData();
        const allLowVine = allData.filter((vin) => vin.tags?.some((tag) => tag === "lav alkohol" || tag === "0%"));

        const producers = Array.from(new Set(allLowVine.map((vin) => vin.producent))).sort() as string[];
        const land = Array.from(new Set(allLowVine.flatMap((vin) => vin.land))).sort() as string[];

        setProductData(allLowVine);
        setAvailableProducers(producers);
        setAvailableLande(land);
      } catch (error) {
        console.error("Error fetching data:", error);
        error("Kunne ikke hente data, prøv igen senere.");
      }
    };

    loadData();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <header className=" flex flex-col items-center w-full">
        <span className="flex justify-end items-center gap-x-2 text-center ">
          <h1 className="headline">Lav alko og 0%!</h1>
          <Nul className="size-24 md:size-36 -rotate-6" />
        </span>
        <span className="w-[95%] md:w-[90%] lg:w-2/3">
          <LineOne />
        </span>
      </header>

      {/* Sorteringsfilter */}
      <div className="flex justify-between items-start md:items-end w-full mb-4 px-6">
        <div>
          <h2 className="flex justify-start font-bold text-lg px-1 pb-1">Filtrer:</h2>
          <span className="flex flex-col md:flex-row md:gap-4">
            <Filter data={availableLande} label="Lande" onDataChange={setSelectedFilterLand} />
            <Filter data={availableProducers} label="Producent" onDataChange={setSelectedFilterProducent} />
          </span>
        </div>
        <div>
          <Sorting onSortChange={setSortOption} />
        </div>
      </div>

      {/* Vin-visning */}
      <VinListe data={productData} sortOption={sortOption} selectedFilterLand={selectedFilterLand} selectedFilterProducent={selectedFilterProducent} />
    </section>
  );
}
