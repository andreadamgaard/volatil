const rootUrl = "https://jliooxtwhiwrcjpjtfdt.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW9veHR3aGl3cmNqcGp0ZmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MjMyNTEsImV4cCI6MjA0ODE5OTI1MX0.o76pepMaZSUdu3__RJm7JvYYdz3b-VMAL3sQoDSG57w";

let currentStart = 0;
let currentEnd = 19;

export const fetchData = async (table, start = 0, end = 19) => {
  const url = `${rootUrl}/${table}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Range: `${start}-${end}`,
    },
  });
  return response.json();
};

export const fetchProductData = async () => {
  const data = await fetchData("product-data", currentStart, currentEnd);
  currentStart = currentEnd + 1;
  currentEnd = currentEnd + 20;
  return data;
};

export const fetchProductInfo = () => fetchData("product-info");
export const fetchBoxes = () => fetchData("boxes");
export const fetchSub = () => fetchData("subscription");
