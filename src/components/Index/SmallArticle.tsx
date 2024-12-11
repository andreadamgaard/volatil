import Image from "next/image";
import { LinkButton } from "../Button/Button";

type SmallArtProps = {
  img: string;
  imgAlt: string;
  title: string;
  linkText: string;
  href: string;
};

export const SmallArticle = ({ img, imgAlt, title, linkText, href }: SmallArtProps) => {
  return (
    <article className="min-w-[7.2rem] min-h-[13rem] w-[14rem] md:h-[22rem] md:w-[19rem] lg:w-[26rem] lg:h-[32rem] relative overflow-hidden group">
      <span className="absolute w-full h-full flex flex-col items-center justify-end py-3 md:py-9 text-center text-white z-10">
        <h2 className="font-hackney text-3xl md:text-6xl lg:text-7xl">{title}</h2>
        <LinkButton size="small" href={href}>
          {linkText}
        </LinkButton>
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition duration-500 ease-in-out" />
      <div className="relative -z-10 w-full h-full transition duration-500 ease-in-out group-hover:scale-105">
        <Image src={img} alt={imgAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
      </div>
    </article>
  );
};
