import { Bobler } from "@/content/svgs/wine/Bobler";
import { Cider } from "@/content/svgs/wine/Cider";
import { Hvid } from "@/content/svgs/wine/Hvid";
import { Magnum } from "@/content/svgs/wine/Magnum";
import { Nul } from "@/content/svgs/wine/Nul";
import { Orange } from "@/content/svgs/wine/Orange";
import { Red } from "@/content/svgs/wine/Red";
import { Rose } from "@/content/svgs/wine/Rose";
import { Link } from "@/components/Link/Link";

export const Typer = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>TYPER VINE</h1>
      <div className="flex gap-6 ">
        <Link href="/bobler/" intent="null">
          <span className="flex flex-col items-center justify-center">
            <Bobler className="size-24" />
            <p className="font-hackney text-2xl">Bobler</p>
          </span>
        </Link>

        <Cider className="size-24" />
        <Hvid className="size-24" />
        <Magnum className="size-24" />
        <Nul className="size-24" />
        <Orange className="size-24" />
        <Red className="size-24" />
        <Rose className="size-24" />
      </div>
    </div>
  );
};
