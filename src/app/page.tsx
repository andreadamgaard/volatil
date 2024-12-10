"use client";

import { useEffect } from "react";
import { fetchProductData, fetchProductInfo } from "./api/api";
import { BigArt } from "@/components/Index/BigArticle";
import { LineOne } from "./svgs/line1";
import { LineTwo } from "./svgs/line2";
import { LineThree } from "./svgs/line3";
import { SmallArticle } from "@/components/Index/SmallArticle";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const productData = await fetchProductData();
      const productInfo = (await fetchProductInfo()) as { land: string }[];

      const getCountry = [...new Set(productInfo.flatMap((item) => item.land))];
      //console.log("land", getCountry);
      // console.log("data", productInfo);
    };
    getData();
  }, []);

  return (
    <div className="px-2 md:px-4 lg:px-16">
      <section className="flex gap-2 md:gap-6 lg:gap-10 justify-center">
        <BigArt img="/images/billigjuice.png" imgAlt="billig juice" title="Billigjuice!" linkText="(som stadig er psyko!)" href="/" />
        <BigArt img="/images/abonnement.png" imgAlt="STAFF PICKS" title="STAFF PICKS!" linkText="Vi ved semi hvad vi taler om" href="/" />
      </section>
      <LineOne className="py-4 md:py-8 w-full h-auto" />
      <section className="flex gap-2 md:gap-7 lg:gap-10 justify-center">
        <SmallArticle img="/images/cider.png" imgAlt="Cider" title="Cider!" linkText="Ægte Sprød cider" href="/" />
        <SmallArticle img="/images/wierd.png" imgAlt="Weird shit" title="Weird shit" linkText="(på den gode måde)!" href="/" />
        <SmallArticle img="/images/psykovin.png" imgAlt="Psykovin" title="Psykovin!" linkText="Sådan ægte psyko" href="/" />
      </section>
      <LineThree className="py-4 md:py-8 w-full h-auto" />
    </div>
  );
}
