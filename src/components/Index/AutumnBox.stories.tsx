import type { Meta, StoryObj } from "@storybook/react";
import { AutumnBox } from "./AutumnBox";

const autumnBoxData = {
  sku: "38965412",
  handle: "3-x-autumn-box",
  title: "Autumn Box x 3",
  navn: "1 x .e4c5 / 1 x Furie / 1 x Adonis",
  producent: "Lorenzo Raffaglio / Domaine Mada / La Grapperie",
  year: "23/22/21",
  type: "RED",
  druer: "Nero d'avola, Cinsault, Pineau d’aunis",
  land: ["Italien", "Frankrig", "Frankrig"],
  area: "Somewhere",
  alkoholprocent: "Good",
  tilsat_svovl: "NO NEJ NO",
  size: "75 cl x 3",
  flot_etiket: "Beauty is in the eye of the beholder",
  beskrivelse: "A perfect little collection for the fall season, lucky you!",
  smager_godt_til: "Pumpkin spiced lattes.",
  price: "598,00",
  image: "https://cdn.shopify.com/s/files/1/2235/1703/files/IMG_0893.jpg?v=1726149802",
  discounted: true,
  oldPrice: "676,00 kr",
};

const meta: Meta<typeof AutumnBox> = {
  component: AutumnBox,
};

export default meta;
type Story = StoryObj<typeof AutumnBox>;

export const Primary: Story = {
  args: {
    data: autumnBoxData,
  },
};
