export const metadata = {
  title: "Vinen findes ikke",
  description: "Vinen du leder efter kan vi desværre ikke finde lige nu :(",
};

export default function NotFound() {
  return (
    <>
      <section className="grid justify-center items-center py-16">
        <article className="flex flex-col flex-wrap items-center justify-center text-center">
          <h1 className="font-hackney text-4xl pt-16 md:text-7xl md:pt-12 lg:text-9xl">
            Øv bøv
            <br />
            Vinen blev ikke fundet
          </h1>
          <p className="pb-8 text-xl md:text-2xl lg:text-4xl">Vi kan æk finde den vin 💔</p>
        </article>
      </section>
    </>
  );
}
