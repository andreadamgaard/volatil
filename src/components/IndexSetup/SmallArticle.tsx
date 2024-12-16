import Image from "next/image";
import { LinkButton } from "../button/Button";
import clsx from "clsx";

type SmallArtProps = {
  img: string;
  imgAlt: string;
  title: string;
  linkText: string;
  href: string;
  size: "medium" | "large";
};

export const SmallArticle = ({ img, imgAlt, title, linkText, href, size }: SmallArtProps) => {
  const sizes = {
    medium: {
      article: "min-h-52 w-1/3 md:min-h-[27rem] lg:min-h-[32rem]",
      title: "text-3xl md:text-6xl lg:text-7xl",
      txtPlacement: "gap-1.5 py-3 md:py-9",
      btnSize: "small" as const,
    },
    large: {
      article: "min-h-72 w-1/2 md:w-[40%] md:min-w-[16rem] md:h-[35rem] lg:max-w-[35%]",
      title: "text-3xl sm:text-4xl md:text-4xl lg:text-6xl",
      txtPlacement: "gap-1.5 py-9 md:py-9",
      btnSize: "small" as const,
    },
  };

  return (
    <article className={clsx("relative overflow-hidden group max-w-[35rem]", sizes[size].article)}>
      <span className={clsx("absolute w-full h-full flex flex-col items-center justify-end text-center text-white z-10", sizes[size].txtPlacement)}>
        <h2 className={clsx("font-hackney", sizes[size].title)}>{title}</h2>
        <LinkButton size={sizes[size].btnSize} href={href}>
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
