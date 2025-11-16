import { Component, Input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '../../../services/language.service';
import { SanityService } from '../../../services/sanity.service';
import type { HeroSectionData } from '../../../interfaces';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, MatButtonModule],
  template: `
    @if (data) {
      <section class="hero-section">
        @if (data.image) {
          <div class="hero-image">
            <img [src]="imageUrl()" [alt]="localizedTitle()" />
          </div>
        }
        <div class="hero-content">
          <h1>{{ localizedTitle() }}</h1>
          @if (data.subtitle) {
            <h2>{{ localizedSubtitle() }}</h2>
          }
          @if (data.ctaText && data.ctaLink) {
            <a mat-raised-button color="primary" [href]="data.ctaLink">
              {{ localizedCtaText() }}
            </a>
          }
        </div>
      </section>
    }
  `,
  styles: `
    .hero-section {
      position: relative;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      padding: 3rem;
      border-radius: 8px;
    }

    h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0 0 2rem 0;
      font-weight: 400;
    }
  `,
})
export class HeroSection {
  @Input({ required: true }) data!: HeroSectionData;

  private languageService = inject(LanguageService);
  private sanityService = inject(SanityService);

  localizedTitle = computed(() => {
    const lang = this.languageService.currentLanguage();
    return this.data.title[lang] || this.data.title.de || '';
  });

  localizedSubtitle = computed(() => {
    if (!this.data.subtitle) return '';
    const lang = this.languageService.currentLanguage();
    return this.data.subtitle[lang] || this.data.subtitle.de || '';
  });

  localizedCtaText = computed(() => {
    if (!this.data.ctaText) return '';
    const lang = this.languageService.currentLanguage();
    return this.data.ctaText[lang] || this.data.ctaText.de || '';
  });

  imageUrl = computed(() => {
    if (!this.data.image) return '';
    return this.sanityService.getImageUrl(this.data.image, 1920, 1080);
  });
}
