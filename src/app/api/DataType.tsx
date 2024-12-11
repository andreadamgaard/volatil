export type ProductInfoType = {
  sku?: string;
  handle?: string;
  title?: string;
  navn?: string;
  producent?: string;
  year?: string;
  type?: string;
  druer?: string | null;
  land?: string[];
  area?: string | null;
  alkoholprocent?: string;
  tilsat_svovl?: string;
  size?: string;
  flot_etiket?: string;
  beskrivelse?: string;
  smager_godt_til?: string | null;
  price?: string;
  image?: string;
};

export type BoxesType = {
  sku: string;
  handle: string;
  title: string;
  navn: string;
  producent: string;
  year: string;
  type: string;
  druer: string;
  land?: string[];
  area: string;
  alkoholprocent: string;
  tilsat_svovl: string;
  size: string;
  flot_etiket: string;
  beskrivelse: string;
  smager_godt_til: string;
  price: string;
  discounted: boolean;
  oldPrice?: string | null;
  image: string;
};

export type ProductDataType = {
  sku?: string;
  handle?: string;
  title?: string;
  navn?: string;
  producent?: string;
  type?: string;
  tags?: string[];
  published?: boolean;
  price?: string;
  image?: string;
};
