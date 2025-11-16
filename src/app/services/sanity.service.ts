import { Injectable } from '@angular/core';
import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment.development';
import type { SanityImageSource } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;
  private imageBuilder;

  constructor() {
    this.client = createClient(environment.sanity);
    this.imageBuilder = imageUrlBuilder(this.client);
  }

  /**
   * GROQ-Query ausführen
   * @param query GROQ Query String
   * @param params Optionale Parameter für die Query
   */
  fetch<T>(query: string, params?: Record<string, string | number | boolean>): Observable<T> {
    if (params) {
      return from(this.client.fetch<T>(query, params));
    }
    return from(this.client.fetch<T>(query));
  }

  /**
   * Dokument nach ID abrufen
   * @param id Dokument-ID
   */
  getById<T>(id: string): Observable<T> {
    return from(this.client.getDocument(id)) as Observable<T>;
  }

  /**
   * Mehrsprachige Inhalte abrufen
   * @param documentType z.B. 'page', 'post'
   * @param slug Slug des Dokuments
   * @param language Sprachcode (de, en, it, es)
   */
  getLocalizedContent<T>(
    documentType: string,
    slug: string,
    language: string = 'de'
  ): Observable<T> {
    const query = `*[_type == $docType && slug.current == $slug][0]{
      _id,
      _type,
      "title": coalesce(title[$lang], title.de),
      "description": coalesce(description[$lang], description.de),
      "content": coalesce(content[$lang], content.de),
      slug,
      image,
      publishedAt
    }`;

    return this.fetch<T>(query, {
      docType: documentType,
      slug: slug,
      lang: language,
    });
  }

  /**
   * Liste von Dokumenten mit Übersetzung abrufen
   * @param documentType z.B. 'page', 'post'
   * @param language Sprachcode
   */
  getLocalizedList<T>(documentType: string, language: string = 'de'): Observable<T[]> {
    const query = `*[_type == $docType] | order(publishedAt desc) {
      _id,
      _type,
      "title": coalesce(title[$lang], title.de),
      "description": coalesce(description[$lang], description.de),
      slug,
      image,
      publishedAt
    }`;

    return this.fetch<T[]>(query, {
      docType: documentType,
      lang: language,
    });
  }

  /**
   * Bild-URL generieren
   * @param source Sanity Image Reference
   */
  urlFor(source: SanityImageSource) {
    return this.imageBuilder.image(source);
  }

  /**
   * Optimierte Bild-URL
   * @param source Sanity Image Reference
   * @param width Breite in Pixeln
   * @param height Höhe in Pixeln (optional)
   */
  getImageUrl(source: SanityImageSource, width: number = 800, height?: number): string {
    let builder = this.imageBuilder.image(source).width(width).auto('format');

    if (height) {
      builder = builder.height(height);
    }

    return builder.url();
  }

  /**
   * Seite mit Page Builder abrufen
   * @param schemaName Name des Schemas (z.B. 'homePageSchema')
   */
  getPageWithBuilder<T>(schemaName: string): Observable<T> {
    const query = `*[_type == "${schemaName}"][0]{
      _id,
      _type,
      title,
      metaDescription,
      pageBuilder[]{
        _type,
        _type == 'heroSection' => {
          title,
          subtitle,
          image,
          ctaText,
          ctaLink
        },
        _type == 'textBlock' => {
          heading,
          content
        },
        _type == 'imageGallery' => {
          title,
          images[]{
            image,
            alt,
            caption
          },
          layout
        },
        _type == 'contactForm' => {
          heading,
          description,
          submitButtonText,
          emailAddress
        }
      },
      publishedAt
    }`;

    return this.fetch<T>(query);
  }
}
