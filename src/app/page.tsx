"use client";

import { useEffect } from "react";
import { fetchData, fetchProductData } from "./api/api";
import { BigArt } from "@/components/Index/BigArticle";
import Image from "next/image";
import { LineOne } from "./svgs/line1";
import { LineTwo } from "./svgs/line2";
import { LineThree } from "./svgs/line3";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductData();
      console.log("data", data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>HEJ!</h1>
      <section className="flex justify-center items-center gap-2 md:gap-6 lg:gap-8">
        <BigArt img="/images/billigjuice.png" imgAlt="billig juice" title="Billigjuice!" linkText="(som stadig er psyko!)" href="/" />
        <BigArt img="/images/abonnement.png" imgAlt="STAFF PICKS" title="STAFF PICKS!" linkText="Vi ved semi hvad vi taler om" href="/" />
      </section>
      <span>
        <LineOne className="px-8" />
      </span>
    </div>
  );
}
