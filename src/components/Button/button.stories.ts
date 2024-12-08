import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      table: {
        defaultValue: { summary: "Button" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BuyBtn: Story = {
  args: {
    children: "Tilføj til kurv",
  },
};
