"use client";
import { useEffect, useState } from "react";
import { fetchBoxes, fetchProductData, fetchProductInfo } from "./api/api";
import { BigArt } from "@/components/IndexSetup/BigArticle";
import { LineOne } from "../content/svgs/line1";
import { LineTwo } from "../content/svgs/line2";
import { SmallArticle } from "@/components/IndexSetup/SmallArticle";
import type { BoxesType, ProductInfoType } from "./api/DataType";
import { AutumnBox } from "@/components/boxIndex/AutumnBox";
import SwiperKarusel from "@/components/swiper/Swiper";
import { SwiperData } from "@/components/swiper/SwiperData";
import { Link } from "@/components/Link/Link";
import { AllTheWines } from "@/content/svgs/wine/AllTheWines";
import { LinkButton } from "@/components/button/Button";

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
      <div className="px-6">
        <section className="flex gap-2.5 md:gap-6 lg:gap-10 justify-center">
          <BigArt img="/images/billigjuice.webp" imgAlt="billig juice" title="RØDVIIIN!" linkText="(Det er psyko!)" href="/roedvin/" />
          <BigArt img="/images/staffPicks.webp" imgAlt="STAFF PICKS" title="STAFF PICKS!" linkText="Vi ved semi hvad vi taler om" href="/alle-vine/" />
        </section>

        <LineOne className="py-4 md:py-8 w-full h-auto" />

        <section className="flex gap-2.5 md:gap-6 justify-center">
          <AutumnBox data={autumnBoxData} />
          <SmallArticle size="large" img="/images/abonnement.webp" imgAlt="Abonnement kasse" title="Sindsygt ABONNEMENT!" linkText="svedig Vin til dig hver måned!" href="/" />
        </section>

        <LineOne className="py-4 md:py-8 w-full h-auto" />

        <section className="flex gap-2.5 md:gap-6 lg:gap-10 justify-center">
          <SmallArticle size="medium" img="/images/wierd.webp" imgAlt="MAGNUM" title="MAGNUM!" linkText="(på den gode måde)!" href="/magnum/" />
          <SmallArticle size="medium" img="/images/cider.webp" imgAlt="Cider" title="Cider!" linkText="Ægte Sprød cider" href="/cider/" />
          <SmallArticle size="medium" img="/images/psykovin.webp" imgAlt="Psykovin" title="Orangevin!" linkText="Sådan ægte psyko" href="/orange-vin/" />
        </section>

        <LineOne className="py-4 md:py-8 w-full h-auto" />

        <section className="flex gap-2.5 md:gap-6 lg:gap-10 justify-center">
          <SmallArticle size="large" img="/images/gavekort.webp" imgAlt="Gavekort flaske" title="Køb et gavekort" linkText="Ikke?!" href="/" />

          <article className="relative flex flex-col justify-center items-center border-2 border-primary px-4 rounded overflow-hidden w-1/2">
            <Link href="/alle-vine/" intent="icon" className="h-full w-full">
              <span className="flex flex-col justify-center items-center">
                <figure>
                  <AllTheWines className="max-w-72 h-36 sm:h-52 md:max-w-80 md:min-h-80" />
                </figure>
                <LinkButton size="large" className="font-hackney text-3xl md:text-5xl">
                  Se alle vine! (OMG!)
                </LinkButton>
              </span>
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
}
