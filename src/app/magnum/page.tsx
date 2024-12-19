"use client";
import { useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { filterData } from "../api/filterData";
import { Magnum } from "@/content/svgs/wine/Magnum";
import { LineOne } from "@/content/svgs/line1";
import { Filter } from "@/components/filter/Filter";
import { Sorting } from "@/components/sorting/Sorting";
import { VinVisning } from "@/components/VinVisning/VinVisning";

export default function MagnumFlasker() {
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
        const allMagnumVine = allData.filter((vin) => vin.tags?.includes("Magnum"));
        const producers = Array.from(new Set(allMagnumVine.map((vin) => vin.producent))) as string[];

        setProductData(allMagnumVine); // Gem original data
        setFilteredData(allMagnumVine); // Viser kun Magum
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
      <header className=" flex flex-col items-center w-full">
        <span className="flex justify-end items-center gap-x-2 text-center ">
          <h1 className="headline">Magnum!</h1>
          <Magnum className="size-24 md:size-36" />
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
            <Filter data={filterData.lande} label="Lande" onDataChange={setSelectedFilterLand} />
            <Filter data={availableProducers} label="Producent" onDataChange={setSelectedFilterProducent} />
          </span>
        </div>
        <div>
          <Sorting onSortChange={setSortOption} />
        </div>
      </div>

      {/* Vin-visning */}
      <VinVisning data={filteredData} />
    </section>
  );
}
