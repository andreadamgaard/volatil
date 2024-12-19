import Image from "next/image";
import { fetchProductData, fetchProductInfo } from "../api/api";
import type { VinSingleType, VinVisningType } from "../api/vin";
import { notFound } from "next/navigation";
import { BoxSingleView } from "@/components/boxSingleView/BoxSingleView";
import { StockLine } from "@/components/boxIndex/StockLine";
import { AntalBox } from "@/components/antal/AntalBox";
import { Button } from "@/components/button/Button";
import { CheckCheck } from "lucide-react";
import { Link } from "@/components/Link/Link";

// Hent vinen baseret på slug
async function GetVinData(slug: string): Promise<VinSingleType | null> {
  // Hent produktdata (VinVisningType[])
  const productData: VinVisningType[] = await fetchProductData();

  // Find vin baseret på slug
  const matchingProduct = productData.find((dataVin) => dataVin.handle === slug);
  if (!matchingProduct) return null;

  // Hent detaljerede produktinformationer (VinSingleType[])
  const productInfo: VinSingleType[] = await fetchProductInfo();

  // Find info baseret på sku
  const vin = productInfo.find((infoVin: VinSingleType) => infoVin.sku === matchingProduct.sku);
  return vin || null;
}

export default async function VinPage({ params: { slug } }: { params: { slug: string } }) {
  if (!slug) {
    return notFound();
  }

  // Hent vin-data
  const vin = await GetVinData(slug);

  // Hvis vinen ikke findes
  if (!vin) {
    return notFound();
  }

  return (
    <article className="flex flex-col items-center gap-4 p-5 md:gap-20 md:items-start md:justify-center md:flex-row">
      {/* kun i mobil */}
      <div className=" md:hidden flex flex-col gap-2 w-full">
        <h1 className="text-[2rem] text-center font-hackney ">{vin.navn}</h1>

        <div className="border-t-2 border-primary md:w-[30rem] flex flex-col items-center gap-2.5 py-2">
          <div className="font-bold flex justify-between text-xl w-full">
            <span className="italic">
              <p> {vin.producent} </p>
            </span>
            <span className="">
              <p> {vin.year} </p>
            </span>
          </div>
        </div>
      </div>

      {/* Billede */}
      <figure className=" min-w-72  flex justify-center items-center md:w-fit  md:max-w-[37rem]">
        <Image src={vin.image} alt={vin.navn} width={2580} height={3855} className="w-full h-auto object-cover rounded-lg" />
      </figure>

      {/* Tekst og data */}
      <div className="max-w-80 flex flex-col gap-4 md:max-w-[30rem]">
        {/* kun i mobil */}
        <div className="flex flex-col md:hidden justify-center items-center">
          <p className="italic">Smager godt til:</p>
          <p className="text-xl font-bold">{vin.smager_godt_til}</p>
        </div>

        {/* desktop visning */}
        <div className=" hidden md:flex flex-col gap-4">
          <h1 className="text-5xl text-center font-hackney ">{vin.navn}</h1>

          <div className="border-y-2 border-primary md:w-[30rem] flex flex-col items-center gap-2.5 py-2">
            <div className="font-bold flex justify-between text-2xl w-full">
              <span className="italic">
                <p> {vin.producent} </p>
              </span>
              <span>
                <p> {vin.year} </p>
              </span>
            </div>
            <span className="w-5/6">
              <hr className="border-primary border-1" />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="italic">Smager godt til:</p>
              <p className="text-2xl font-bold">{vin.smager_godt_til}</p>
            </div>
          </div>
        </div>

        <BoxSingleView data={vin} />

        <div className="font-hackney text-5xl">
          <p>{vin.price},00 kr</p>
        </div>

        <div className="flex flex-col pt-1 ">
          <p className="font-bold md:text-sm text-base">På lager</p>
          <StockLine filledWidth="70%" />
        </div>

        <div className="flex items-end justify-between gap-4 md:gap-10">
          <AntalBox size="medium" />
          <Button size="large">KØB MIG!</Button>
        </div>

        <div>
          <div className="flex gap-3  xl:gap-4 ">
            <CheckCheck className="size-5 text-Vblue-100" />
            <span className="text-xs">
              <p className=" pb-1">Pickup available at Volatil. Usually ready in 24 hours</p>
              <Link href="/om-os/" intent="text">
                <strong>View store information</strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
