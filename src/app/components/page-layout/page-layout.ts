import { Component, Input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { HeroSection } from '../page-builder/hero-section/hero-section';
import { TextBlock } from '../page-builder/text-block/text-block';
import type { PageData } from '../../interfaces';

@Component({
  selector: 'app-page-layout',
  imports: [CommonModule, HeroSection, TextBlock],
  template: `
    @if (pageData) {
      <div class="page-container">
        @for (component of pageData.pageBuilder; track component._type + $index) {
          @switch (component._type) {
            @case ('heroSection') {
              <app-hero-section [data]="$any(component)" />
            }
            @case ('textBlock') {
              <div class="content-wrapper">
                <app-text-block [data]="$any(component)" />
              </div>
            }
          }
        }
      </div>
    } @else {
      <div class="page-container">
        <div class="content-wrapper">
          <p>Lade Inhalte...</p>
        </div>
      </div>
    }
  `,
  styles: `
    .page-container {
      width: 100%;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
  `,
})
export class PageLayout {
  @Input({ required: true }) pageData: PageData | null = null;

  private titleService = inject(Title);
  private metaService = inject(Meta);
  private languageService = inject(LanguageService);

  private pageTitle = computed(() => {
    if (!this.pageData?.title) return '';
    const lang = this.languageService.currentLanguage();
    return this.pageData.title[lang] || this.pageData.title.de || '';
  });

  private metaDescription = computed(() => {
    if (!this.pageData?.metaDescription) return '';
    const lang = this.languageService.currentLanguage();
    return this.pageData.metaDescription[lang] || this.pageData.metaDescription.de || '';
  });

  ngOnInit() {
    // Set page title and meta description
    const title = this.pageTitle();
    if (title) {
      this.titleService.setTitle(title);
    }

    const description = this.metaDescription();
    if (description) {
      this.metaService.updateTag({ name: 'description', content: description });
    }
  }
}
