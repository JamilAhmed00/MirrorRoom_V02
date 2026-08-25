import type { CSSProperties } from 'react';

export interface FlavorData {
  id: string;
  name: string;
  subName: string;
  tagline: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  titleColor: string;
  cardBgColor: string;
  canImage: string;
  canHeroImage?: string;
  frontImage?: string;
  slices: {
    src: string;
    alt: string;
    className: string;
    divStyle?: CSSProperties;
    imgStyle?: CSSProperties;
    style?: CSSProperties;
  }[];
  description: string;
  tags: string[];
  specs: {
    sugar: string;
    calories: string;
    volume: string;
    caffeine: string;
  };
  secretItems: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  categoryColor: string;
  question: string;
  answer: string;
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  flavorColor: string;
  flavorName: string;
  quote: string;
  rating: number;
}
