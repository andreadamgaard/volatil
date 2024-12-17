"use client";

import { Button } from "@/components/button/Button";
import { Link } from "@/components/Link/Link";

export const metadata = {
  title: "Band findes ikke",
  description: "Bandet du leder efter spiller desværre ikke på FooFest",
};

export default function NotFound() {
  return (
    <>
      <section className="grid justify-center items-center">
        <article>
          <h1 className="headline">Øv bøv, din vin blev ikke fundet 💔</h1>
          <p className="pb-8 text-3xl">Vi kan æk finde den vin der.</p>
          <div className="flex items-center">
            <Link intent="null" href="/">
              <Button>Gå tilbage til forsiden??</Button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
