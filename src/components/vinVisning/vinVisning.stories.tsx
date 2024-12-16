import type { VinVisningType } from "@/app/api/vin";
import type { Meta, StoryObj } from "@storybook/react";
import { VinVisning } from "./vinVisning";

const VinData: VinVisningType[] = [
  {
    sku: "1497635",
    handle: "gonzo-22-stephane-cyran",
    title: "Gonzo '22, Stéphane Cyran",
    producent: "Stéphane Cyran",
    type: "Vin",
    tags: ["frankrig", "natur", "naturvin", "psykovin", "rødvin", "supplier-vinsvin", "weird"],
    published: true,
    price: 265,
    image: "https://cdn.shopify.com/s/files/1/2235/1703/files/DSC_0652.jpg?v=1708781050",
    navn: "Gonzo",
  },
  {
    sku: "1568374",
    handle: "chardonnay-bambule-22-judith-beck",
    title: "Chardonnay Bambule! '22, Judith Beck",
    producent: "Judith Beck",
    type: "Vin",
    tags: ["Copenhagen wine", "hvid", "hvidvin", "natur", "natural wine", "naturvin", "organic wine", "supplier-vinsvin", "supplier-volatil", "vin butik", "østrig"],
    published: true,
    price: 235,
    image: "https://cdn.shopify.com/s/files/1/2235/1703/files/DSC_0684_d91f98c2-4f46-4556-b0db-01ce46850360.jpg?v=1709992757",
    navn: "Chardonnay Bambule!",
  },
];

const meta: Meta<typeof VinVisning> = {
  component: VinVisning,
  args: {
    data: VinData, // Vi sender data som en prop
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof VinVisning>;

export const DefaultVinVisning: Story = {};
