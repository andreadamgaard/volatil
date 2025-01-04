import type { Meta, StoryObj } from "@storybook/react";
import { StaffBoxes } from "./StaffBoxes";

const meta: Meta<typeof StaffBoxes> = {
  component: StaffBoxes,
};

export default meta;
type Story = StoryObj<typeof StaffBoxes>;

export const Primary: Story = {};
