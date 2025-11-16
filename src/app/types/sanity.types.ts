/**
 * Sanity CMS Type Definitions
 */

// Sanity Image Asset Reference
export interface SanityImageAsset {
  _ref: string;
  _type?: 'reference';
}

// Sanity Image Object
export interface SanityImage {
  _type?: 'image';
  asset: SanityImageAsset;
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

// Sanity Image Source kann ein Objekt oder String sein
export type SanityImageSource = SanityImage | string;

// Sanity Slug Object
export interface SanitySlug {
  _type: 'slug';
  current: string;
}

// Base Document (alle Sanity Dokumente haben diese Felder)
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
}

// Lokalisierter Text (für mehrsprachige Felder)
export interface LocalizedString {
  de?: string;
  en?: string;
  it?: string;
  es?: string;
}

// Beispiel: Page Content Type
export interface PageContent extends SanityDocument {
  title: string;
  description?: string;
  content?: string;
  slug: SanitySlug;
  image?: SanityImage;
  publishedAt?: string;
}

// Beispiel: Blog Post Type
export interface BlogPost extends SanityDocument {
  title: string;
  description?: string;
  content?: string;
  slug: SanitySlug;
  image?: SanityImage;
  author?: string;
  publishedAt?: string;
  tags?: string[];
}
