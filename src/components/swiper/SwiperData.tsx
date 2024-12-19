export type SwiperImages = {
  slides: SwiperProps[];
};

type SwiperProps = {
  id: string;
  title: string;
  text: string;
  src: string;
  alt: string;
  link: string;
};

export const SwiperData = [
  { id: "nouveau", link: "/roedvin/", title: "Så er der rødvin!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
  { id: "staffpicks1", link: "/bobler/", title: "BOOOOOBLER MAND!", text: "Lige til din hals!", src: "/images/steffi_shelf.webp", alt: "Staff picks" },
  { id: "xmas1", link: "/alle-vine/", title: "Se alt vores vin!!", text: "Køb til dig selv!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
  { id: "nouveau-1", link: "/roedvin/", title: "Så er der rødvin!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
  { id: "staffpicks2", link: "/bobler/", title: "BOOOOOBLER MAND!", text: "Lige til din hals!", src: "/images/steffi_shelf.webp", alt: "Staff picks" },
  { id: "xmas2", link: "/alle-vine/", title: "Se alt vores vin!!", text: "Køb til dig selv!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
];
