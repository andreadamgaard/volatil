import { fetchProductData, fetchProductInfo } from "../api/api";
import type { VinSingleType } from "../api/vin";
import NotFound from "../not-found";

export default async function Vin({ params }) {
  const { slug } = params;

  // Hent data fra begge datasæt
  const productData = await fetchProductData();
  const productInfo = await fetchProductInfo();

  // Find SKU på vinen
  const matchingProduct = productData.find((product) => product.handle === slug);
  if (!matchingProduct) {
    NotFound();
  }

  const matchingSku = matchingProduct.sku;
  const vinen = productInfo.find((info: VinSingleType) => info.sku === matchingSku);
  if (!vinen) {
    NotFound();
  }

  console.log("Matching Product:", matchingProduct);
  console.log("Matching SKU:", matchingSku);
  console.log("Matching Vin:", vinen);

  return (
    <div>
      <h1>{vinen.navn}</h1>
      <p>Producent: {vinen.producent}</p>
      <p>Druer: {vinen.druer}</p>
      <p>Land: {vinen.land}</p>
      <p>Flot Etiket: {vinen.flot_etiket}</p>
    </div>
  );
}
