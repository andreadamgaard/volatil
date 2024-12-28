import Image from "next/image";

export const LineFour = ({ className }: { className?: string }) => {
  return (
    <Image
      className={className}
      src="/images/line4.webp"
      alt="Line one"
      width={1409}
      height={54}
      priority={false} // Lazy load, medmindre det er kritisk
    />
  );
};
