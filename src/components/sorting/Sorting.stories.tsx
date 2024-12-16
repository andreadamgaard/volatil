import type { Meta, StoryObj } from "@storybook/react";
import { Sorting } from "./Sorting";

const meta: Meta<typeof Sorting> = {
  component: Sorting,
};

export default meta;
type Story = StoryObj<typeof Sorting>;

export const Primary: Story = {};
