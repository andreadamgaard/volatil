import type { Meta, StoryObj } from "@storybook/react";
import { Button, LinkButton } from "./Button";

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

export const PrimaryBtn: Story = {
  args: {
    children: "Button",
  },
};

export const LinkTwo: Story = {
  render: (args) => (
    <div className=" grid gap-6">
      <LinkButton size="medium">Link 1</LinkButton>
      <LinkButton size="medium" className="font-DINCondensed ">
        Link 2
      </LinkButton>
    </div>
  ),
};
