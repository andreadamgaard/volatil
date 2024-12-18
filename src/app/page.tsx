"use client";

import { useEffect, useState } from "react";
import { fetchBoxes, fetchProductData, fetchProductInfo } from "./api/api";
import { BigArt } from "@/components/IndexSetup/BigArticle";
import { LineOne } from "../content/svgs/line1";
import { LineTwo } from "../content/svgs/line2";
import { LineThree } from "../content/svgs/line3";
import { SmallArticle } from "@/components/IndexSetup/SmallArticle";
import type { BoxesType, ProductInfoType } from "./api/DataType";
import { AutumnBox } from "@/components/boxIndex/AutumnBox";
import SwiperKarusel from "@/components/swiper/Swiper";
import { SwiperData } from "@/components/swiper/SwiperData";

export default function Home() {
  const [autumnBoxData, setAutumnBoxData] = useState<BoxesType | null>(null);

  useEffect(() => {
    const getData = async () => {
      const productData = await fetchProductData();
      const productInfo = (await fetchProductInfo()) as ProductInfoType[];
      const boxes = (await fetchBoxes()) as BoxesType[];

      //Hent data til Autumn box
      const getAutumnBox = boxes.find((item) => item.sku === "38965412") || null;
      setAutumnBoxData(getAutumnBox);
    };
    getData();
  }, []);

  return (
    <div>
      <section className="">
        <SwiperKarusel slides={SwiperData} />
      </section>
      <div>
        <section className="flex gap-2.5 md:gap-6 lg:gap-10 justify-center">
          <BigArt img="/images/billigjuice.webp" imgAlt="billig juice" title="Billigjuice!" linkText="(som stadig er psyko!)" href="/" />
          <BigArt img="/images/staffPicks.webp" imgAlt="STAFF PICKS" title="STAFF PICKS!" linkText="Vi ved semi hvad vi taler om" href="/" />
        </section>

        <LineOne className="py-4 md:py-8 w-full h-auto" />

        <section className="flex gap-2.5 md:gap-6 justify-center">
          <AutumnBox data={autumnBoxData} />
          <SmallArticle size="large" img="/images/abonnement.webp" imgAlt="Abonnement kasse" title="Sindsygt ABONNEMENT!" linkText="svedig Vin til dig hver måned!" href="/" />
        </section>

        <LineTwo className="py-4 md:py-8 w-full h-auto" />

        <section className="flex gap-2.5 md:gap-6 lg:gap-10 justify-center">
          <SmallArticle size="medium" img="/images/cider.webp" imgAlt="Cider" title="Cider!" linkText="Ægte Sprød cider" href="/" />
          <SmallArticle size="medium" img="/images/wierd.webp" imgAlt="Weird shit" title="Weird shit" linkText="(på den gode måde)!" href="/" />
          <SmallArticle size="medium" img="/images/psykovin.webp" imgAlt="Psykovin" title="Psykovin!" linkText="Sådan ægte psyko" href="/" />
        </section>
        <LineThree className="py-4 md:py-8 w-full h-auto" />
        <section className="">
          <SmallArticle size="large" img="/images/gavekort.webp" imgAlt="Gavekort flaske" title="Køb et gavekort" linkText="Ikke?!" href="/" />
        </section>
      </div>
    </div>
  );
}
