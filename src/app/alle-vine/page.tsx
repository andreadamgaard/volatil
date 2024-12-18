"use client";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { LineOne } from "@/content/svgs/line1";
import { useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Sorting } from "@/components/sorting/Sorting";
import { VinVisning } from "@/components/vinVisning/VinVisning";
import { filterData } from "../api/filterData";
import { Filter } from "@/components/filter/Filter";

export default function AllWines() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const [filteredData, setFilteredData] = useState<VinVisningType[]>([]);

  // State til sortering
  const [sortOption, setSortOption] = useState<string>("none");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const allData = await fetchProductData();
      setProductData(allData); // Gem original data
      setFilteredData(allData); // Start med at vise alt
    };
    loadData();
  }, []);

  useEffect(() => {
    // Funktion til filtrering og sortering
    const filterAndSortData = () => {
      let data = [...productData];

      // Filtrering: Kun hvis der er valgte filtre
      if (selectedFilters.length > 0) {
        data = data.filter((vin) => selectedFilters.some((filter) => vin.tags?.includes(filter)));
      }

      // Sortering: Kun hvis der er en aktiv sorteringsmulighed
      if (sortOption !== "none") {
        data = data.sort((a, b) => {
          if (sortOption === "az") return a.navn.localeCompare(b.navn);
          if (sortOption === "za") return b.navn.localeCompare(a.navn);
          if (sortOption === "LowHigh") return a.price - b.price;
          if (sortOption === "HighLow") return b.price - a.price;
          return 0;
        });
      }

      setFilteredData(data); // Opdater filtreret data
    };

    filterAndSortData();
  }, [productData, selectedFilters, sortOption]); // Kører når data, filtre eller sorteringsindstillinger ændres

  return (
    <section className="flex flex-col items-center justify-center">
      <header className="w-2/3 md:w-3/4 lg:w-2/3 flex flex-col items-center">
        <span className="flex justify-end items-center gap-x-10 text-center ">
          <h1 className="headline">
            Alle vine<span className="text-4xl">(omg!)</span>
          </h1>
          <AllTheWines className="size-24 md:size-36" />
        </span>
        <LineOne />
      </header>

      {/* Sorteringsfilter */}
      <div className="flex justify-between w-full mb-4 px-6">
        <span>
          <Filter data={filterData.typer} label="Filtrer vine" onDataChange={setSelectedFilters} />
        </span>
        <span>
          <Sorting onSortChange={setSortOption} />
        </span>
      </div>

      {/* Vin-visning */}
      <VinVisning data={filteredData} />

      {/* Observer til lazy load */}
      {/* <section ref={observerRef} className="h-10 w-full" /> */}
    </section>
  );
}
