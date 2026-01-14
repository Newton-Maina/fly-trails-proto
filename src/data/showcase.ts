import { TravelStory } from '../types';

export interface ShowcaseSlide {
  image: string;
  title: string;
  desc: string;
}

export const showcaseSlides: ShowcaseSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=2070", // Hot Air Balloon
    title: "Ascend",
    desc: "Float above the endless plains at sunrise."
  },
  {
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069", // Leopard/Distinct
    title: "Witness",
    desc: "The greatest show on earth unfolds."
  },
  {
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070", // Kilimanjaro / Landscape
    title: "Conquer",
    desc: "Stand on the roof of Africa."
  }
];