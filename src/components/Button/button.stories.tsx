import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "./CustomButton";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const PrimaryBtn: Story = {};
