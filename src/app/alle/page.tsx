"use client";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { LineOne } from "@/content/svgs/line1";
import { useEffect, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Sorting } from "@/components/sorting/Sorting";
import { VinVisning } from "@/components/vinVisning/VinVisning";

export default function AllWines() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const [sortedData, setSortedData] = useState<VinVisningType[]>([]);
  const [sortOption, setSortOption] = useState<string>("none");

  useEffect(() => {
    const loadData = async () => {
      const allData = await fetchProductData();
      setProductData(allData);
      setSortedData(allData);
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleSort = () => {
      if (sortOption === "none") {
        setSortedData(productData);
        return;
      }

      const sorted = [...productData].sort((a, b) => {
        if (sortOption === "az") return a.navn.localeCompare(b.navn);
        if (sortOption === "za") return b.navn.localeCompare(a.navn);
        if (sortOption === "LowHigh") return a.price - b.price;
        if (sortOption === "HighLow") return b.price - a.price;
        return 0;
      });
      setSortedData(sorted);
    };

    handleSort();
  }, [sortOption, productData]);

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
      <div className="flex justify-end mb-4">
        <Sorting onSortChange={(sortKey) => setSortOption(sortKey)} label="Sorter vin:" />
      </div>

      {/* Vin-visning */}
      <VinVisning data={sortedData} />

      {/* Observer til lazy load */}
      {/* <section ref={observerRef} className="h-10 w-full" /> */}
    </section>
  );
}
