import { LineTwo } from "@/content/svgs/line2";
import { Link } from "../../Link/Link";
import { Red } from "@/content/svgs/wine/Red";
import { Hvid } from "@/content/svgs/wine/Hvid";
import { Orange } from "@/content/svgs/wine/Orange";
import { Rose } from "@/content/svgs/wine/Rose";
import { Bobler } from "@/content/svgs/wine/Bobler";
import { Cider } from "@/content/svgs/wine/Cider";
import { Nul } from "@/content/svgs/wine/Nul";
import { Magnum } from "@/content/svgs/wine/Magnum";

export const Typer = () => {
  return (
    <div className="flex flex-col w-full h-full gap-y-2 py-4 px-6">
      <span className="w-full flex justify-center">
        <span className="w-fit flex flex-col items-center justify-center">
          <h2 className="font-hackney text-4xl  text-center">Hvad er din type???</h2>
          <LineTwo className="-mt-1" />
        </span>
      </span>

      <div className="grid grid-cols-4 place-items-center text-center gap-y-4 gap-x-1 font-hackney text-2xl">
        <Link href="/roedvin/" intent="null" aria-label="Rødvine">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Red className="size-28" />
            <p className="group-hover:text-hover">Rødvin</p>
          </span>
        </Link>
        <Link href="/hvidvin/" intent="null" aria-label="Hvidvine">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Hvid className="size-28" />
            <p className="group-hover:text-hover">Hvidvin</p>
          </span>
        </Link>
        <Link href="/orange-vin/" intent="null" aria-label="Orange vine">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Orange className="size-28" />
            <p className="group-hover:text-hover">Orange</p>
          </span>
        </Link>
        <Link href="/rose/" intent="null" aria-label="Rosé Vine">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Rose className="size-28" />
            <p className="group-hover:text-hover">Rosé</p>
          </span>
        </Link>
        <Link href="/bobler/" intent="null" aria-label="Vin med bobler">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Bobler className="size-28" />
            <p className="group-hover:text-hover">Bobler</p>
          </span>
        </Link>
        <Link href="/cider/" intent="null" aria-label="Cider">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Cider className="size-28" />
            <p className="group-hover:text-hover">Cider</p>
          </span>
        </Link>
        <Link href="/lav-alkohol/" intent="null" aria-label="Lav til 0%">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Nul className="size-28" />
            <p className="group-hover:text-hover">Lav og 0%</p>
          </span>
        </Link>
        <Link href="/magnum/" intent="null" aria-label="Mangnum vine">
          <span className="flex flex-col items-center justify-center hover:scale-105 transition ease-in-out duration-200 group">
            <Magnum className="size-28" />
            <p className="group-hover:text-hover">Magnum!</p>
          </span>
        </Link>
      </div>
    </div>
  );
};
