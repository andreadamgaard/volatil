"use client";
import { StaffBoxes } from "@/components/staffPicks/StaffBoxes";
import { useEffect, useState } from "react";
import { fetchProductInfo } from "../api/api";
import type { StaffPicksType } from "../api/DataType";
import { LineThree } from "@/content/svgs/line3";

const staffPicksAnbefalinger = [
  {
    sku: "10076510",
    sortOrder: 1,
    staffNavn: "Christoffer",
    anbefaletAf: "Christoffer (!!!)",
    anbefalingen: "BOOM! Sable Rose Rouge Aérien 2020 er Pinot Noir med røde kinder og vilde idéer! Yannick Meckert har tryllet en vin frem, der danser mellem let og dyb, fræk og fin. Ingen svovl, ingen filter — kun ren, saftig charme fra Alsace. Det her er ikke en vin til fine fornemmelser, det er en vin til når du vil have noget ægte. Drik den til alt, hvad der lugter lidt af eventyr… og måske en vinkelsliber i baggrunden.",
  },
  {
    sku: "10148310",
    sortOrder: 2,
    staffNavn: "Hanna",
    anbefaletAf: "Den gode Hanna",
    anbefalingen: "Okay, venner. Hør lige — Bro 2019 er den slags vin, der både krammer dig og giver dig et lille skub. Castelão-druen? Totalt undervurderet! Lette tanniner, frisk syre og sådan lidt ‘hello sommer-efterår’ vibe. Og hey, 22 måneder på gamle fade uden nogen kemi-dims? Det er naturvin med både sjæl og swag. Pop den op til lidt dåsetun (eller noget mere fancy, hvis du insisterer) — det spiller max!",
  },
  {
    sku: "10201710",
    sortOrder: 3,
    staffNavn: "Tue",
    anbefaletAf: "Legenden selv... Tue",
    anbefalingen: "Hold nu fast — Adonis 2021 er som at tage et skud campari og kysse en fransk landmand på samme tid! Pineau d'aunis, baby! Peber, krydderier og et syrligt lille smæk, der holder dig vågen hele vejen hjem på knallerten. Renaud Guettier laver vin som en mand, der kører uden sele og aldrig bremser op. Det er vildt, det er råt, og det er perfekt til alt, der involverer solskin, havne og lidt for meget fart.",
  },
];

export default function StaffPicks() {
  const [staffPicksData, setStaffPicksData] = useState<StaffPicksType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const products = (await fetchProductInfo()) as StaffPicksType[];

      // Filtrer og tilføj min data til produkterne
      const selectedProducts = products
        .filter((item) => staffPicksAnbefalinger.some((data) => data.sku === item.sku))
        .map((product) => {
          const data = staffPicksAnbefalinger.find((data) => data.sku === product.sku);
          return { ...product, ...data };
        })
        .sort((a, b) => a.sortOrder - b.sortOrder);

      setStaffPicksData(selectedProducts);
    };

    getData();
  }, []);

  return (
    <section className="flex flex-col w-full mb-4 ">
      <div className="flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center justify-center w-fit">
          <h1 className="headline">Staff Picks</h1>
          <LineThree className="w-fit" />
        </div>
        <div className="text-lg max-w-4xl text-center pt-5 pb-20 flex flex-col gap-3">
          <p className="">Jamen halløjsa! Christoffer, Hanna og Tue har rodet rundt i kælderen (og lidt i glassene), og her er resultatet — tre vine, der alle rammer lige i sjælen. Der er noget til de røde læber, noget til de sprøde vibes og noget til de små eventyr.</p>
          <p className="">Helt ærligt, det er svært ikke at blive lidt glad over sådan en trio. Og ja, vi ved godt, det kan være svært at vælge — men hey, du kan jo bare tage dem alle tre? Så spørgsmålet er egentlig bare: Er du klar til at poppe noget lækkert?!</p>
        </div>
      </div>
      <div className="px-6">
        <StaffBoxes product={staffPicksData} />
      </div>
    </section>
  );
}
