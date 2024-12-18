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
      <div>
        <h1>{vin.navn}</h1>
        <figure className="max-w-[30rem] h-auto ">
          <Image src={vin.image} alt={vin.navn} width={2580} height={3855} className="w-full h-auto rounded-t object-cover" />
        </figure>
        <article>
          <p>Producent: {vin.producent}</p>
          <p>Druer: {vin.druer}</p>
          <p>Land: {vin.land}</p>
          <p>Flot Etiket: {vin.flot_etiket}</p>
        </article>
      </div>
    );
  } catch (error) {
    return NotFound();
  }
}
