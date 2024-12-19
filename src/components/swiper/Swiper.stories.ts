import type { Meta, StoryObj } from "@storybook/react";
import SwiperKarusel from "./Swiper";
import { SwiperData } from "./SwiperData";

const meta: Meta<typeof SwiperKarusel> = {
  component: SwiperKarusel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SwiperKarusel>;

export const Swiper: Story = {
  args: {
    slides: SwiperData,
  },
};
