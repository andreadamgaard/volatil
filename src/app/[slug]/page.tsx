import Image from "next/image";
import { fetchProductData, fetchProductInfo } from "../api/api";
import type { VinSingleType } from "../api/vin";
import NotFound from "../not-found";

export default async function Vin({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // Hvis slug mangler, returner NotFound
  if (!slug) {
    return NotFound();
  }

  try {
    // Hent data fra begge datasæt
    const productData = await fetchProductData();
    const productInfo: VinSingleType[] = await fetchProductInfo();

    // Find det matchende produkt baseret på slug
    const matchingProduct = productData.find((dataVin) => dataVin.handle === slug);

    // Hvis produktet ikke findes, returner NotFound
    if (!matchingProduct) {
      return NotFound();
    }

    // Find vinen fra productInfo baseret på sku
    const vin = productInfo.find((infoVin: VinSingleType) => infoVin.sku === matchingProduct.sku);

    // Hvis vinen ikke findes, returner NotFound
    if (!vin) {
      return NotFound();
    }

    // Returner data fra `vin`
    return (
      <article className="grid grid-cols-gridContent">
        <h1 className="col-start-2 col-end-5 text-center pt-5 pb-6 font-hackney text-6xl">{vin.navn}</h1>
        <section className="col-start-2 col-end-5">
          <div className="grid md:grid-cols-2 gap-8">
            <figure className="md:p-5 flex justify-center items-center">
              <Image src={vin.image} alt={vin.navn} width={2580} height={3855} className="w-full h-auto object-cover rounded-lg" />
            </figure>
            <div className="flex flex-col md:p-5">
              <p className="text-lg font-semibold">Producent: {vin.producent}</p>
              <p className="text-lg font-semibold">Druer: {vin.druer}</p>
              <p className="text-lg font-semibold">Land: {vin.land}</p>
              <p className="text-lg font-semibold">Flot Etiket: {vin.flot_etiket}</p>
            </div>
          </div>
        </section>
      </article>
    );
  } catch (error) {
    return NotFound();
  }
}
