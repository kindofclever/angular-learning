import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';

export interface HeroSection {
  _type: 'heroSection';
  title: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  subtitle?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  image?: any;
  ctaText?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  ctaLink?: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      @if (data.image) {
        <div class="hero-image">
          <img [src]="getImageUrl(data.image)" [alt]="data.title[currentLang]" />
        </div>
      }
      <div class="hero-content">
        <h1>{{ data.title[currentLang] }}</h1>
        @if (data.subtitle) {
          <p class="subtitle">{{ data.subtitle[currentLang] }}</p>
        }
        @if (data.ctaText && data.ctaLink) {
          <a [href]="data.ctaLink" class="cta-button">
            {{ data.ctaText[currentLang] }}
          </a>
        }
      </div>
    </section>
  `,
  styles: `
    .hero-section {
      position: relative;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-purple) 100%);
      color: white;
      margin-bottom: 2rem;
    }

    .hero-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 800px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-button {
      display: inline-block;
      padding: 0.75rem 2rem;
      background-color: var(--color-secondary);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 3.5rem;
      }

      .subtitle {
        font-size: 1.5rem;
      }
    }
  `,
})
export class HeroSectionComponent {
  @Input() data!: HeroSection;
  @Input() currentLang: 'de' | 'en' | 'it' | 'es' = 'de';

  constructor(private sanity: SanityService) {}

  getImageUrl(image: any): string {
    return this.sanity.getImageUrl(image, 1200, 600);
  }
}
