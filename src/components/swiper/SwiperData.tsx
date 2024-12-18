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
  { id: "nouveau", link: "/alle-vine/", title: "Så er der rødvin!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
  { id: "vigneron1", link: "/alle-vine/", title: "VIGNERON IN FOCUS", text: "Grab your glasses!!", src: "https://volatil.dk/cdn/shop/files/marinho_1351x575.png?v=1730379623", alt: "vigneron1" },
  { id: "staffpicks1", link: "/alle-vine/", title: "STAFF PICKS!", text: "Just in time for Christmas!", src: "https://volatil.dk/cdn/shop/files/Steffi_shelf_1351x575.png?v=1733404589", alt: "Staff picks" },
  { id: "xmas1", link: "/alle-vine/", title: "Se alt vores vin!!", text: "Køb til dig selv!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
];
