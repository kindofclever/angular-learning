import type { SanityImageSource } from '../types';
import type { MultilingualText } from './page.interface';

export interface HeroSectionData {
  _type: 'heroSection';
  title: MultilingualText;
  subtitle?: MultilingualText;
  image?: SanityImageSource;
  ctaText?: MultilingualText;
  ctaLink?: string;
}

export interface TextBlockData {
  _type: 'textBlock';
  heading?: MultilingualText;
  content: MultilingualText;
}

export interface ImageGalleryItem {
  image: SanityImageSource;
  alt: MultilingualText;
  caption?: MultilingualText;
}

export interface ImageGalleryData {
  _type: 'imageGallery';
  title?: MultilingualText;
  images: ImageGalleryItem[];
  layout: 'grid-2' | 'grid-3' | 'grid-4' | 'carousel';
}

export interface ContactFormData {
  _type: 'contactForm';
  heading: MultilingualText;
  description?: MultilingualText;
  submitButtonText: MultilingualText;
  emailAddress: string;
}

export type PageBuilderComponent = HeroSectionData | TextBlockData | ImageGalleryData | ContactFormData;
