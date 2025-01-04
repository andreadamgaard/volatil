"use client";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { LineOne } from "@/content/svgs/line1";
import { Suspense, useEffect, useRef, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";
import { Sorting } from "@/components/sorting/Sorting";
import { filterData } from "../api/filterData";
import { Filter } from "@/components/filter/Filter";
import Loading from "../loading";
import { VinListe } from "@/components/vinListe/VinListe";
import Head from "next/head";

export default function AllWines() {
  const dataRef = useRef<VinVisningType[] | null>(null); // Gemmer data
  const [availableProducers, setAvailableProducers] = useState<string[]>([]);
  const [availableLande, setAvailableLande] = useState<string[]>([]);

  const [sortOption, setSortOption] = useState<string>("none");
  const [selectedFilterType, setSelectedFilterType] = useState<string[]>([]);
  const [selectedFilterLand, setSelectedFilterLand] = useState<string[]>([]);
  const [selectedFilterProducent, setSelectedFilterProducent] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      // Hent data kun, hvis det ikke allerede er gemt
      if (!dataRef.current) {
        try {
          const allData = await fetchProductData();
          dataRef.current = allData;

          // Generer sorteret liste af producenter
          const producers = Array.from(new Set(allData.map((vin) => vin.producent))).sort() as string[];

          const land = Array.from(new Set(allData.flatMap((vin) => vin.land))).sort() as string[];

          setAvailableProducers(producers);
          setAvailableLande(land);
        } catch (error) {
          console.error("ingen data fetch", error);
          error();
        }
      }
    };
    loadData();
  }, []);

  const firstImage = dataRef.current?.[0]?.image;

  return (
    <>
      <Head>{firstImage && <link rel="preload" as="image" href={firstImage} imageSizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw" />}</Head>

      <section className="flex flex-col items-center justify-center pt-4 md:pt-6 xl:pt-10">
        <header className=" flex flex-col justify-center items-center w-96 md:w-[39rem]">
          <div className="flex justify-end items-center gap-x-2 md:gap-x-10 text-center">
            <h1 className="headline">
              Alle vine<span className="text-2xl md:text-4xl">(omg!)</span>
            </h1>
            <AllTheWines className="size-24 md:size-36" />
          </div>
          <LineOne />
        </header>

        {/* Sorteringsfilter */}
        <div className="flex justify-between items-start md:items-end w-full mb-4 px-6">
          <div>
            <h2 className="flex justify-start font-bold text-lg px-1 pb-1">Filtrer:</h2>
            <span className="flex flex-col sm:flex-row sm:gap-2 md:gap-4">
              <Filter data={filterData.typer} label="Typer vine" onDataChange={setSelectedFilterType} />
              <Filter data={availableLande} label="Lande" onDataChange={setSelectedFilterLand} />
              <Filter data={availableProducers} label="Producent" onDataChange={setSelectedFilterProducent} />
            </span>
          </div>
          <div>
            <Sorting onSortChange={setSortOption} />
          </div>
        </div>

        {/* Vin-visning */}
        <Suspense fallback={<Loading />}>
          <VinListe data={dataRef.current || []} sortOption={sortOption} selectedFilterType={selectedFilterType} selectedFilterLand={selectedFilterLand} selectedFilterProducent={selectedFilterProducent} />
        </Suspense>
      </section>
    </>
  );
}
