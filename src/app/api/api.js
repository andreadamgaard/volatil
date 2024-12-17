const rootUrl = "https://jliooxtwhiwrcjpjtfdt.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW9veHR3aGl3cmNqcGp0ZmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MjMyNTEsImV4cCI6MjA0ODE5OTI1MX0.o76pepMaZSUdu3__RJm7JvYYdz3b-VMAL3sQoDSG57w";

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
