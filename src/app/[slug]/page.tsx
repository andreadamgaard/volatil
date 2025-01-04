import Image from "next/image";
import { fetchProductData, fetchProductInfo } from "../api/api";
import type { VinSingleType, VinVisningType } from "../api/vin";
import { notFound } from "next/navigation";
import { BoxSingleView } from "../../components/boxSingleView/BoxSingleView";
import { StockLine } from "../../components/boxIndex/StockLine";
import { AntalBox } from "../../components/antal/AntalBox";
import { CheckCheck } from "lucide-react";
import { Link } from "../../components/Link/Link";
import { CustomButton } from "../../components/button/CustomButton";

async function GetVinData(slug: string): Promise<VinSingleType | null> {
  const productData = await fetchProductData();
  // Find vinen der matcher slug i productData
  const matchingProduct = productData.find((dataVin: VinVisningType) => dataVin.handle === slug);
  if (!matchingProduct) return null;

  // Vi bruger matchingProduct.sku til at finde vinen fra Info-data
  const productInfo = await fetchProductInfo();
  return productInfo.find((infoVin: VinSingleType) => infoVin.sku === matchingProduct.sku) || null;
}

export default async function VinPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const vin = await GetVinData(slug);

  if (!vin) {
    return notFound();
  }

  return (
    <section className="pt-4 md:pt-6 xl:pt-10">
      <article className="flex flex-col items-center gap-4 p-5 md:gap-20 md:items-start md:justify-center md:flex-row lg:items-center">
        {/* kun i mobil */}
        <div className="md:hidden flex flex-col gap-2 w-full items-center">
          <h1 className="text-[2rem] text-center font-hackney">{vin.navn}</h1>

          <div className="border-t-2 border-primary flex flex-col gap-2.5 py-2 w-full max-w-[20rem] mx-auto">
            <div className="font-bold flex justify-between items-center w-full">
              <span className="italic text-center">
                <p>{vin.producent}</p>
              </span>
              <span className="text-center">
                <p>{vin.year}</p>
              </span>
            </div>
          </div>
        </div>

        {/* Billede */}
        <figure className="max-w-96 flex justify-center items-center md:w-fit md:max-w-[30rem] relative">
          <Image src={vin.image} alt={vin.navn} width={600} height={900} priority={false} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover rounded-lg" placeholder="blur" blurDataURL="/images/fallback.webp" quality={75} />
        </figure>

        {/* Tekst og data */}
        <div className="max-w-96 min-w-40 flex flex-col gap-4 md:max-w-[30rem]">
          {/* kun i mobil */}
          <div className="flex flex-col md:hidden justify-center items-center">
            <p className="italic">Smager godt til:</p>
            <p className="text-xl font-bold">{vin.smager_godt_til}</p>
          </div>

          {/* desktop visning */}
          <div className=" hidden md:flex flex-col gap-4">
            <h1 className="text-5xl text-center font-hackney ">{vin.navn}</h1>

            <div className="border-y-2 border-primary min-w-40 flex flex-col items-center gap-2.5 py-2">
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
            <CustomButton size="large">KØB MIG!</CustomButton>
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
    </section>
  );
}
