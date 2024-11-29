"use client";

import { useEffect } from "react";
import { fetchData } from "./api/api";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("product-data");
      console.log("data", data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>HEJ!</h1>
    </div>
  );
}
