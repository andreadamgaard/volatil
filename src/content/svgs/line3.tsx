import Image from "next/image";

export const LineThree = ({ className }: { className?: string }) => {
  return (
    <Image
      className={className}
      src="/images/line3.webp"
      alt="Line one"
      width={1409}
      height={54}
      priority={false} // Lazy load, medmindre det er kritisk
    />
  );
};
