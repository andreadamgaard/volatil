import { Bobler } from "@/app/svgs/wine/Bobler";
import { Cider } from "@/app/svgs/wine/Cider";
import { Hvid } from "@/app/svgs/wine/Hvid";
import { Magnum } from "@/app/svgs/wine/Magnum";
import { Nul } from "@/app/svgs/wine/Nul";
import { Orange } from "@/app/svgs/wine/Orange";
import { Red } from "@/app/svgs/wine/Red";
import { Rose } from "@/app/svgs/wine/Rose";

export const Typer = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>TYPER VINE</h1>
      <div className="flex gap-6 ">
        <Bobler className="size-24" />
        <Cider className="size-24" />
        <Hvid className="size-24" />
        <Magnum className="size-24" />
      </div>
      <div className="flex gap-6">
        <Nul className="size-24" />
        <Orange className="size-24" />
        <Red className="size-24" />
        <Rose className="size-24" />
      </div>
    </div>
  );
};
