import React from 'react';

export interface TourItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  size?: string;
  excerpt?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  location?: string;
  region: string;
  imageUrl: string;
  desc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface HeroText {
  title: string;
  subtitle: string;
}

export interface HeroDestination {
  name: string;
  country: string;
  image: string;
}

export interface TravelStory {
  id?: string;
  author: string;
  title: string;
  desc: string;
  imageUrl?: string;
  date?: string;
}