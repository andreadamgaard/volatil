export type VinVisningType = {
  sku: string;
  handle: string;
  title: string;
  producent: string;
  type: string;
  tags: string[];
  published: boolean;
  price: number;
  image: string;
  navn: string;
};
export type VinSingleType = {
  sku: string;
  handle: string;
  title: string;
  navn: string;
  producent: string;
  year: string;
  type: string;
  druer: string;
  land: string[];
  area: string;
  alkoholprocent: string;
  tilsat_svovl: string;
  size: string;
  flot_etiket: string;
  beskrivelse: string | null;
  smager_godt_til: string | null;
  price: number;
  image: string;
};
