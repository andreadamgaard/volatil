import { Link } from "@/components/Link/Link";

export const Alle = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-start py-8">
      <h1>ALLE VINE</h1>
      <div>
        <Link intent="text" href="/alle/" aria-label="Alle vine">
          Se alle vores sindsyge vine!!
        </Link>
      </div>
    </div>
  );
};
