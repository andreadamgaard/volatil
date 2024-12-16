export type SwiperImages = {
  shows: ShowProps[];
};

type ShowProps = {
  title: string;
  tag?: string;
  logo?: string;
  altLogo?: string;
  text: string;
  src: string;
  alt: string;
};

export const SwiperData = [
  { title: "VIGNERON IN FOCUS", text: "Grab your glasses!!", src: "https://volatil.dk/cdn/shop/files/marinho_1351x575.png?v=1730379623", alt: "Graverne" },
  { title: "STAFF PICKS!", text: "Just in time for Christmas!", src: "https://volatil.dk/cdn/shop/files/Steffi_shelf_1351x575.png?v=1733404589", alt: "Staff picks" },
  { title: "STAFF PICKS!", text: "Just in time for Christmas!", src: "https://volatil.dk/cdn/shop/files/Steffi_shelf_1351x575.png?v=1733404589", alt: "Staff picks" },
];
