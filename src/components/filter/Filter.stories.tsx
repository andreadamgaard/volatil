import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";

const producersMockData = ["Jérôme Arnoux", "Clos Massotte", "Ferme Des Sept Lunes", "Mendall", "Ramaz Nikoladze", "Patrick Desplats", "Jérôme Saurigny", "Fabio Gea", "Giacomo Fenocchio"] satisfies string[];

export default {
  title: "Components/Filter",
  component: Filter,
  args: {
    producersMockData,
  },
};

type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {
    producersMockData,
  },
};
