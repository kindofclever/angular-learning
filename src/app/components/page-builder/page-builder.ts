import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent, type HeroSection } from './hero-section';
import { TextBlockComponent, type TextBlock } from './text-block';
import { ImageGalleryComponent, type ImageGallery } from './image-gallery';
import { ContactFormComponent, type ContactForm } from './contact-form';
import { LanguageService } from '../../services/language.service';

export type PageBuilderSection = HeroSection | TextBlock | ImageGallery | ContactForm;

export interface PageBuilderData {
  title?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  metaDescription?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  pageBuilder?: PageBuilderSection[];
}

@Component({
  selector: 'app-page-builder',
  imports: [CommonModule, HeroSectionComponent, TextBlockComponent, ImageGalleryComponent, ContactFormComponent],
  template: `
    <div class="page-builder">
      @if (pageData && pageData.title) {
        <div class="page-header">
          <h1>{{ pageData.title![currentLang()] }}</h1>
        </div>
      }

      @if (pageData && pageData.pageBuilder && pageData.pageBuilder.length > 0) {
        @for (section of pageData.pageBuilder!; track $index) {
          @switch (section._type) {
            @case ('heroSection') {
              <app-hero-section [data]="section" [currentLang]="currentLang()" />
            }
            @case ('textBlock') {
              <app-text-block [data]="section" [currentLang]="currentLang()" />
            }
            @case ('imageGallery') {
              <app-image-gallery [data]="section" [currentLang]="currentLang()" />
            }
            @case ('contactForm') {
              <app-contact-form [data]="section" [currentLang]="currentLang()" />
            }
          }
        }
      } @else {
        <div class="empty-state">
          <p>{{ emptyMessage[currentLang()] }}</p>
        </div>
      }
    </div>
  `,
  styles: `
    .page-builder {
      min-height: 50vh;
    }

    .page-header {
      padding: 2rem 1rem;
      text-align: center;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-purple) 100%);
      margin-bottom: 2rem;
    }

    .page-header h1 {
      font-size: 2.5rem;
      color: var(--color-accent);
      margin: 0;
    }

    .empty-state {
      padding: 4rem 2rem;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }

    .empty-state p {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      .page-header h1 {
        font-size: 3.5rem;
      }
    }
  `,
})
export class PageBuilderComponent {
  @Input() pageData: PageBuilderData | null = null;

  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLanguage;

  emptyMessage = {
    de: 'Diese Seite hat noch keinen Inhalt. Fügen Sie Inhalte in Sanity CMS hinzu.',
    en: 'This page has no content yet. Add content in Sanity CMS.',
    it: 'Questa pagina non ha ancora contenuti. Aggiungi contenuti in Sanity CMS.',
    es: 'Esta página aún no tiene contenido. Agregue contenido en Sanity CMS.',
  };
}
