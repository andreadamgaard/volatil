import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenu } from "./BurgerMenu";

const meta: Meta<typeof BurgerMenu> = {
  component: BurgerMenu,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BurgerMenu>;

export const BurgerMenuDefault: Story = {};
