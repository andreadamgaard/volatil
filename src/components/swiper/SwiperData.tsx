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
  { id: "staffpicks1", link: "/staff-picks/", title: "Staff picks! Fra os til jer", text: "Gode sager lige til din hals", src: "/images/steffi_shelf.webp", alt: "Staff picks" },
  { id: "nouveau", link: "/roedvin/", title: "Så er der rødvin!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
  { id: "xmas1", link: "/alle-vine/", title: "Se alt vores vin!!", text: "Køb til dig selv!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
  { id: "staffpicks2", link: "/staff-picks/", title: "Staff picks! Fra os til jer", text: "Gode sager lige til din hals", src: "/images/steffi_shelf.webp", alt: "Staff picks" },
  { id: "nouveau-1", link: "/roedvin/", title: "Så er der rødvin!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
  { id: "xmas2", link: "/alle-vine/", title: "Se alt vores vin!!", text: "Køb til dig selv!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
];
