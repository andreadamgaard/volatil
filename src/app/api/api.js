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
  return response.json();
};

// export async function getAllDogs() {
//   const res = await fetch(rooturl);
//   return await res.json();
// }

// export async function getDogBySlug(slug) {
//   const res = await fetch(`${rooturl}?slug=${slug}`);
//   return await res.json();
// }

//Her slipper vi for at skulle skrive fx url om alle steder.
//Vi kan bare rette til her og så ændre den i vores kode automatisk.
//Smart!

// const baseURL = process.env.NEXT_PUBLIC_API;
// const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE;
// const supabaseKey = process.env.NEXT_PUBLIC_KEY;

// export const fetchAPI = async (endpoint, options = {}) => {
//   const url = `${baseURL}${endpoint}`;
//   const response = await fetch(url, {
//     ...options,
//     headers: {
//       ...options.headers,
//       "Content-Type": "application/json",
//     },
//   });
//   return await response.json();
// };

//URL: https://jliooxtwhiwrcjpjtfdt.supabase.co

// https://jliooxtwhiwrcjpjtfdt.supabase.co/rest/v1/

// KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaW9veHR3aGl3cmNqcGp0ZmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MjMyNTEsImV4cCI6MjA0ODE5OTI1MX0.o76pepMaZSUdu3__RJm7JvYYdz3b-VMAL3sQoDSG57w
