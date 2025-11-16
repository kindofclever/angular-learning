import type { Language } from './languages.constants';

export const NAV_TRANSLATIONS: Record<
  Language,
  {
    home: string;
    about: string;
    services: string;
    pricing: string;
    procedure: string;
    impressions: string;
    reviews: string;
    contact: string;
    booking: string;
  }
> = {
  de: {
    home: 'Home',
    about: 'Über uns',
    services: 'Leistungen',
    pricing: 'Preise',
    procedure: 'Ablauf',
    impressions: 'Eindrücke',
    reviews: 'Bewertungen',
    contact: 'Kontakt',
    booking: 'Jetzt buchen',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    pricing: 'Pricing',
    procedure: 'Process',
    impressions: 'Gallery',
    reviews: 'Reviews',
    contact: 'Contact',
    booking: 'Book Now',
  },
  it: {
    home: 'Home',
    about: 'Chi siamo',
    services: 'Servizi',
    pricing: 'Prezzi',
    procedure: 'Procedura',
    impressions: 'Galleria',
    reviews: 'Recensioni',
    contact: 'Contatto',
    booking: 'Prenota ora',
  },
  es: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    services: 'Servicios',
    pricing: 'Precios',
    procedure: 'Proceso',
    impressions: 'Galería',
    reviews: 'Reseñas',
    contact: 'Contacto',
    booking: 'Reservar ahora',
  },
};
