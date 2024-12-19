const rootUrl = "https://jliooxtwhiwrcjpjtfdt.supabase.co/rest/v1/";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const fetchData = async (table) => {
  const url = `${rootUrl}/${table}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      apikey: key,
    },
  });
  return await response.json();
};

export const fetchProductData = async () => fetchData("product-data");
export const fetchProductInfo = () => fetchData("product-info");

export const fetchBoxes = () => fetchData("boxes");
export const fetchSub = () => fetchData("subscription");
