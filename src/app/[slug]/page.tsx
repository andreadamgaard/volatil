import { fetchProductData, fetchProductInfo } from "../api/api";
import type { ProductInfoType } from "../api/DataType";
import type { VinSingleType } from "../api/vin";

export default async function Vin({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Hent data fra begge datasæt
  const productData = await fetchProductData();
  const productInfo = await fetchProductInfo();

  // console.log("Slug:", slug);
  // console.log("ProductData:", productData);
  // console.log("ProductInfo:", productInfo);

  // Find SKU på vinen
  const matchingProduct = productData.find((product) => product.handle === slug);
  if (!matchingProduct) {
    console.error("No matching product found in productData for slug:", slug);
    return <div>Øv bøv, din vin blev ikke fundet 💔</div>;
  }

  const matchingSku = matchingProduct.sku;
  const vinen = productInfo.find((info: VinSingleType) => info.sku === matchingSku);
  if (!vinen) {
    console.error("No matching product found in productInfo for SKU:", matchingSku);
    return <div>Øv bøv, din vin blev ikke fundet 💔</div>;
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
