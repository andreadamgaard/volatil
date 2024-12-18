import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";
import { filterData } from "../../app/api/filterData";

const landeMockData = filterData.lande;

export default {
  title: "Components/Filter",
  component: Filter,
  args: {
    data: landeMockData,
  },
};

type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {
    data: landeMockData,
  },
};
