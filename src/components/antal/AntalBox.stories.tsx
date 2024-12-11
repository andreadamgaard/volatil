import type { Meta, StoryObj } from "@storybook/react";
import { AntalBox } from "./AntalBox";

const meta: Meta<typeof AntalBox> = {
  component: AntalBox,
};

export default meta;
type Story = StoryObj<typeof AntalBox>;

export const Primary: Story = {};
