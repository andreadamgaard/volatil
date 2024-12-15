import { Link } from "@/components/Link/Link";

export const Alle = () => {
  return (
    <div>
      <h1>ALLE VINEneee</h1>
      <div>
        <Link intent="text" href="/alle/" aria-label="Alle vine">
          Se alle vores sindsyge vine!!
        </Link>
      </div>
    </div>
  );
};
