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
  // Hent begge datasæt samtidig for at optimere performance
  const [productData, productInfo] = await Promise.all([fetchProductData(), fetchProductInfo()]);

  // Find vinen der matcher slug i productData
  const matchingProduct = productData.find((dataVin: VinVisningType) => dataVin.handle === slug);
  if (!matchingProduct) return null;

  // Vi bruger matchingProduct.sku til at finde vinen fra Info-data
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
      <article className="flex flex-col items-center gap-4 md:p-5 md:gap-6 lg:gap-20 md:items-start md:justify-center md:flex-row">
        {/* kun i mobil */}
        <div className="md:hidden flex flex-col gap-2 w-full items-center pb-4">
          <h1 className="text-[2rem] text-center font-hackney">{vin.navn}</h1>

          <div className="border-y-2 border-primary flex items-center flex-col gap-2.5 py-2 w-full max-w-[20rem] mx-auto">
            <div className="font-bold flex justify-between items-center w-full">
              <span className="italic text-center">
                <p>{vin.producent}</p>
              </span>
              <span className="text-center">
                <p>{vin.year}</p>
              </span>
            </div>
            <span className="w-5/6">
              <hr className="border-primary border-1" />
            </span>
            <div className="flex flex-col justify-center items-center">
              <p className="italic">Smager godt til:</p>
              <p className="text-xl font-bold">{vin.smager_godt_til}</p>
            </div>
          </div>
        </div>

        {/* Billede */}
        <figure className="max-w-96 min-w-40 max-h-[28rem] overflow-hidden flex items-center md:max-h-[35rem] md:w-fit md:max-w-[30rem] rounded-lg relative">
          <Image src={vin.image} alt={vin.navn} priority width={600} height={900} className="object-cover rounded-lg" />
        </figure>

        {/* Tekst og data */}
        <div className="max-w-96 min-w-40 flex flex-col pt-4 gap-4 md:pt-0 md:min-w-96 md:max-w-96 lg:max-w-[30rem] lg:min-w-[30rem]">
          {/* desktop visning */}
          <div className=" hidden md:flex flex-col gap-4">
            <h1 className="text-4xl text-center font-hackney ">{vin.navn}</h1>

            <div className="border-y-2 border-primary min-w-40 flex flex-col items-center gap-2.5 py-2">
              <div className="font-bold flex justify-between text-xl w-full">
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
                <p className="text-xl font-bold">{vin.smager_godt_til}</p>
              </div>
            </div>
          </div>

          <BoxSingleView data={vin} />

          <div className="max-w-96 min-w-40 flex flex-col gap-4 md:min-w-96 md:max-w-96 lg:max-w-[30rem] lg:min-w-[30rem]">
            <div className="flex flex-col pt-1 ">
              <p className="font-bold md:text-sm text-base">På lager</p>
              <StockLine filledWidth="70%" />
            </div>
            <div className="font-hackney text-4xl">
              <p>{vin.price},00 kr</p>
            </div>

            <div className="flex items-end justify-between gap-4 md:gap-10">
              <AntalBox size="medium" />
              <CustomButton size="large">KØB MIG!</CustomButton>
            </div>

            <div>
              <div className="flex gap-3 xl:gap-4 ">
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
        </div>
      </article>
    </section>
  );
}
