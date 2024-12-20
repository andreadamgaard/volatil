import Image from "next/image";
import Link from "next/link";
import { LinkButtonNoLink } from "@/components/button/CustomButton";

type BigArtProps = {
  img: string;
  imgAlt: string;
  title: string;
  linkText: string;
  href: string;
};

export const BigArt = ({ img, imgAlt, title, linkText, href }: BigArtProps) => {
  return (
    <article className="min-h-64 w-1/2 md:h-[26rem] lg:h-[31rem] relative overflow-hidden group max-w-[53.75rem]">
      <Link href={href}>
        <span className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-10 gap-1.5">
          <h2 className="font-hackney text-4xl md:text-7xl xl:text-9xl antialiased">{title}</h2>
          <LinkButtonNoLink size="large">{linkText}</LinkButtonNoLink>
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition duration-500 ease-in-out" />
        <figure className="relative -z-10 w-full h-full transition duration-500 ease-in-out group-hover:scale-105">
          <Image src={img} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, (max-width: 1440px) 50vw, 33vw" className="object-cover " />
        </figure>
      </Link>
    </article>
  );
};
