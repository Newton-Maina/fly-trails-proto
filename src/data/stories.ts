import { TravelStory } from '../types';

export const featuredStory: TravelStory = {
  id: 'featured',
  author: 'Sarah K. — June 2025',
  title: 'Walking with Giants: A Guide to Amboseli',
  desc: 'Join us as we track the legendary elephant herds of Amboseli National Park, with Mount Kilimanjaro providing the perfect backdrop.',
  imageUrl: '/safari-journal.jpg'
};

export const sideStories: TravelStory[] = [
  { author: 'May 2025', title: 'Spice Markets of Zanzibar', desc: 'A sensory journey through the winding alleys of Stone Town and the aromatic clove plantations of the island.' },
  { author: 'April 2025', title: 'The Magic of Lamu Old Town', desc: 'Discovering the Swahili culture, dhow sailing, and the slow pace of life in this UNESCO World Heritage site.' },
  { author: 'March 2025', title: 'Gorilla Trekking in Rwanda', desc: 'A once-in-a-lifetime encounter with the majestic silverbacks in the mist-covered Volcanoes National Park.' }
];