import type { Meta, StoryObj } from "@storybook/react";
import { Button, LinkButton } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryBtn: Story = {};

export const LinkTwo: Story = {
  render: () => (
    <div className=" grid gap-6">
      <LinkButton size="medium">Link 1</LinkButton>
      <LinkButton size="medium" className="font-DINCondensed ">
        Link 2
      </LinkButton>
    </div>
  ),
};
