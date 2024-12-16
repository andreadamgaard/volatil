export type SwiperImages = {
  slides: SwiperProps[];
};

type SwiperProps = {
  id: string;
  title: string;
  text: string;
  src: string;
  alt: string;
};

export const SwiperData = [
  { id: "vigneron1", title: "VIGNERON IN FOCUS", text: "Grab your glasses!!", src: "https://volatil.dk/cdn/shop/files/marinho_1351x575.png?v=1730379623", alt: "Graverne" },
  { id: "staffpicks1", title: "STAFF PICKS!", text: "Just in time for Christmas!", src: "https://volatil.dk/cdn/shop/files/Steffi_shelf_1351x575.png?v=1733404589", alt: "Staff picks" },
  { id: "xmas1", title: "CHRISTMAS WINE (HO-HO-HO!)", text: "Vær din egen julenisse!", src: "/images/swiperwines.webp", alt: "CHRISTMAS WINE" },
  { id: "nouveau", title: "Vine til under 200!", text: "Det er lækkert", src: "/images/nouveau.webp", alt: "nouveau.webp" },
];
