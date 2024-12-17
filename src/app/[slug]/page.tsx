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
    const productInfo = await fetchProductInfo();

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
        <p>Producent: {vin.producent}</p>
        <p>Druer: {vin.druer}</p>
        <p>Land: {vin.land}</p>
        <p>Flot Etiket: {vin.flot_etiket}</p>
      </div>
    );
  } catch (error) {
    console.error("Fejl under hentning af data:", error);
    return NotFound();
  }
}
