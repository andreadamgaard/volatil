import { LineTwo } from "@/src/content/svgs/line2";
import { Link } from "../../Link/Link";
import { AllTheWines } from "@/src/content/svgs/wine/AllTheWines";

export const Alle = () => {
  return (
    <div className="flex flex-col w-full h-full py-4 px-6 text-base font-bold gap-y-4 items-center">
      <Link href="/alle-vine/" intent="null" aria-label="Alle vine">
        <span className="flex flex-col gap-y-4">
          <span className="w-fit flex flex-col items-center justify-center">
            <h2 className="font-hackney text-4xl text-center">Se alle vine (OMG!)</h2>
            <LineTwo className="-mt-1" />
          </span>
          <span className="hover:scale-105 transition ease-in-out duration-200 group w-full">
            <AllTheWines className="w-60" />
          </span>
        </span>
      </Link>
    </div>
  );
};
