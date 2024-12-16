import Image from "next/image";
import Link from "next/link";

export const NavImg = () => {
  return (
    <div className="flex ring-primary ring-2 max-w-[28rem] h-full relative font-hackney text-bg text-5xl">
      <Link href="/" aria-label="Staff picks" className="relative h-full w-1/2 group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <Image className="h-full w-full object-cover" src="/images/WineHands.png" alt="hand with wine" width={227} height={800} />
        <figcaption className="absolute inset-x-0 bottom-6 text-center transition-transform duration-200 ease-in-out group-hover:scale-105">Staff Picks</figcaption>
      </Link>

      <Link href="/" aria-label="Abonnement og kasser" className="relative h-full w-1/2 group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
        <Image className="h-full w-full object-cover" src="/images/WallWine.webp" alt="wall with wine" width={227} height={800} />
        <figcaption className="absolute inset-x-0 bottom-6 text-center transition-transform duration-200 ease-in-out group-hover:scale-105">
          Abonnement
          <br />& kasser
        </figcaption>
      </Link>
    </div>
  );
};
