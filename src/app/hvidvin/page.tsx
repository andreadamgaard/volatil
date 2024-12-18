"use client";
import { LineOne } from "@/content/svgs/line1";
import { useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Sorting } from "@/components/sorting/Sorting";
import { filterData } from "../api/filterData";
import { Filter } from "@/components/filter/Filter";
import { VinVisning } from "@/components/vinVisning/vinVisning";
import { Hvid } from "@/content/svgs/wine/Hvid";

export default function Hvidvin() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const [filteredData, setFilteredData] = useState<VinVisningType[]>([]);
  const [availableProducers, setAvailableProducers] = useState<string[]>([]);

  // State til sortering
  const [sortOption, setSortOption] = useState<string>("none");
  const [selectedFilterLand, setSelectedFilterLand] = useState<string[]>([]);
  const [selectedFilterProducent, setSelectedFilterProducent] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allData = await fetchProductData();
        const allHvidVine = allData.filter((vin) => vin.tags?.includes("hvidvin"));
        const producers = Array.from(new Set(allHvidVine.map((vin) => vin.producent))) as string[];

        setProductData(allHvidVine); // Gem original data
        setFilteredData(allHvidVine); // Viser kun Hvidvin på siden
        setAvailableProducers(producers); // Opdateret liste over producere
      } catch (error) {
        console.error("Error fetching data:", error);
        error("Kunne ikke hente data, prøv igen senere.");
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    // Funktion til filtrering og sortering
    const filterAndSortData = () => {
      let data = [...productData];

      // Filtrering for lande: Kun hvis der er valgte lande
      if (selectedFilterLand.length > 0) {
        data = data.filter((vin) => selectedFilterLand.some((filter) => vin.tags?.includes(filter)));
      }

      if (selectedFilterProducent.length > 0) {
        data = data.filter((vin) => selectedFilterProducent.includes(vin.producent));
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
  }, [productData, selectedFilterLand, selectedFilterProducent, sortOption]);
  // Kører når data, filtre eller sorteringsindstillinger ændres

  return (
    <section className="flex flex-col items-center justify-center">
      <header className="w-2/3 md:w-3/4 lg:w-2/3 flex flex-col items-center">
        <span className="flex justify-end items-center gap-x-2 text-center ">
          <h1 className="headline">Hvidvin</h1>
          <Hvid className="size-24 md:size-36 -rotate-[25deg]" />
        </span>
        <LineOne />
      </header>

      {/* Sorteringsfilter */}
      <div className="flex justify-between items-end w-full mb-4 px-6">
        <span className="flex gap-4">
          <Filter data={filterData.lande} label="Lande" onDataChange={setSelectedFilterLand} />
          <Filter data={availableProducers} label="Producent" onDataChange={setSelectedFilterProducent} />
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
