"use client";
import { LinkButton } from "../components/button/Button";

export const metadata = {
  title: "Siden findes ikke",
  description: "Siden du vil ind på findes ikke :(",
};

export default function error() {
  return (
    <>
      <section className="grid justify-center items-center py-16">
        <article className="flex flex-col flex-wrap items-center justify-center text-center">
          <h1 className="font-hackney text-4xl pt-16 md:text-7xl md:pt-12 lg:text-9xl">
            Øv bøv
            <br />
            Siden blev ikke fundet
          </h1>
          <p className="pb-8 text-xl md:text-2xl">Vi kan bare æk finde siden 💔</p>
          <div className="flex justify-center items-center">
            <LinkButton href="/" size="large">
              Gå tilbage til forsiden??
            </LinkButton>
          </div>
        </article>
      </section>
    </>
  );
}
