import Image from "next/image";
import { LinkButton } from "../Button/Button";

type BigArtProps = {
  img: string;
  imgAlt: string;
  title: string;
  linkText: string;
  href: string;
};

export const BigArt = ({ img, imgAlt, title, linkText, href }: BigArtProps) => {
  return (
    <article className="w-[11rem] h-[14rem] md:w-[22rem] md:h-[26rem] lg:w-[42rem] relative lg:h-[31rem]">
      <Image src={img} alt={imgAlt} layout="fill" objectFit="cover" />
      <span className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h2 className="font-hackney text-4xl md:text-7xl lg:text-9xl">{title}</h2>
        <LinkButton href={href}>{linkText}</LinkButton>
      </span>
    </article>
  );
};
