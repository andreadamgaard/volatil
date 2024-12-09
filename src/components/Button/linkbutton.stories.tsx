import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "./Button";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  argTypes: {
    children: {
      table: {
        defaultValue: { summary: "LinkButton" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    children: "LinkButton",
  },
};

export const LinkTwo: Story = {
  render: (args) => (
    <div className=" grid gap-6">
      <LinkButton>Link 1</LinkButton>
      <LinkButton className="font-DINCondensed ">Link 2</LinkButton>
    </div>
  ),
};
