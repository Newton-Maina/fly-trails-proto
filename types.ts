import React from 'react';

export interface TourItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export interface DestinationItem {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}