import type { Meta, StoryObj } from "@storybook/react";
import { BigArt } from "./BigArticle";

const BigData = [
  {
    img: "/images/billigjuice.png",
    imgAlt: "billig juice",
    title: "Billigjuice!",
    linkText: "(som stadig er psyko!)",
    href: "/",
  },
  {
    img: "/images/abonnement.png",
    imgAlt: "STAFF PICKS",
    title: "STAFF PICKS!",
    linkText: "Vi ved semi hvad vi taler om",
    href: "/",
  },
] satisfies Array<React.ComponentProps<typeof BigArt>>;

const meta: Meta<typeof BigArt> = {
  component: BigArt,
  args: BigData[0],
};

export default meta;
type Story = StoryObj<typeof BigArt>;

export const Primary: Story = {
  args: BigData[0],
};
export const Second: Story = {
  args: BigData[1],
};
