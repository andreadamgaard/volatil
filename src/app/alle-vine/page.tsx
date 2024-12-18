"use client";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { LineOne } from "@/content/svgs/line1";
import { Suspense, useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Sorting } from "@/components/sorting/Sorting";
import { filterData } from "../api/filterData";
import { Filter } from "@/components/filter/Filter";
import { VinVisning } from "@/components/vinVisning/vinVisning";
import Loading from "../loading";

export default function AllWines() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const [filteredData, setFilteredData] = useState<VinVisningType[]>([]);

  // State til sortering
  const [sortOption, setSortOption] = useState<string>("none");
  const [selectedFilterType, setSelectedFilterType] = useState<string[]>([]);
  const [selectedFilterLand, setSelectedFilterLand] = useState<string[]>([]);
  const [selectedFilterProducent, setSelectedFilterProducent] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allData = await fetchProductData();

        setProductData(allData); // Gem original data
        setFilteredData(allData); // Start med at vise alt
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

      // Filtrering for type: Kun hvis der er valgte filtre
      if (selectedFilterType.length > 0) {
        data = data.filter((vin) => selectedFilterType.some((filter) => vin.tags?.includes(filter)));
      }

      // Filtrering for lande: Kun hvis der er valgte lande
      if (selectedFilterLand.length > 0) {
        data = data.filter((vin) => selectedFilterLand.some((filter) => vin.tags?.includes(filter)));
      }

      // Filtrering for producenter
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
  }, [productData, selectedFilterType, selectedFilterLand, selectedFilterProducent, sortOption]);
  // Kører når data, filtre eller sorteringsindstillinger ændres

  return (
    <section className="flex flex-col items-center justify-center">
      <header className="w-[80%] md:w-[90%] lg:w-2/3 flex flex-col items-center">
        <span className="flex justify-end items-center gap-x-10 text-center ">
          <h1 className="headline">
            Alle vine<span className="text-4xl">(omg!)</span>
          </h1>
          <AllTheWines className="size-24 md:size-36" />
        </span>
        <LineOne />
      </header>

      {/* Sorteringsfilter */}
      <div className="flex justify-between items-start md:items-end w-full mb-4 px-6">
        <div className="">
          <h2 className="flex justify-start font-bold text-lg px-1 pb-1">Filtrer:</h2>
          <span className="grid grid-cols-2 md:flex gap-1 md:gap-4">
            <Filter data={filterData.typer} label="Typer vine" onDataChange={setSelectedFilterType} />
            <Filter data={filterData.lande} label="Lande" onDataChange={setSelectedFilterLand} />
            <Filter data={filterData.producent} label="Producent" onDataChange={setSelectedFilterProducent} />
          </span>
        </div>
        <div>
          <Sorting onSortChange={setSortOption} />
        </div>
      </div>

      {/* Vin-visning */}
      <Suspense fallback={<Loading />}>
        <VinVisning data={filteredData} />
      </Suspense>

      {/* Observer til lazy load */}
      {/* <section ref={observerRef} className="h-10 w-full" /> */}
    </section>
  );
}
