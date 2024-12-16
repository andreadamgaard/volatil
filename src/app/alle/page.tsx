"use client";
import { VinVisning } from "@/components/vinVisning/vinVisning";
import { LineOne } from "@/content/svgs/line1";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { useEffect, useRef, useState } from "react";
import type { VinVisningType } from "../api/vin";
import { fetchProductData } from "../api/api";

export default function AllWines() {
  const [productData, setProductData] = useState<VinVisningType[]>([]);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerScroll = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          const newData = await fetchProductData();
          setProductData((prev) => [...prev, ...newData]);
        }
      },
      { threshold: 0.1 }
    );
    if (observerRef.current) observerScroll.observe(observerRef.current);
    return () => {
      if (observerRef.current) observerScroll.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-2/3 md:w-3/4 lg:w-2/3 flex flex-col items-center">
        <span className="flex justify-end items-center gap-x-10 text-center ">
          <h1 className="headline">
            Alle vine<span className="text-4xl">(omg!)</span>
          </h1>
          <AllTheWines className="size-24 md:size-36" />
        </span>
        <LineOne />
      </div>
      <div>
        <VinVisning data={productData} />
        <div ref={observerRef} className="h-10 w-full" />
      </div>
    </section>
  );
}
