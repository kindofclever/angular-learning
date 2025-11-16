import { Component, Input, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LanguageService } from '../../../services/language.service';
import type { TextBlockData } from '../../../interfaces';

@Component({
  selector: 'app-text-block',
  imports: [CommonModule, MatCardModule],
  template: `
    @if (data) {
      <mat-card class="text-block">
        <mat-card-content>
          @if (data.heading) {
            <h3>{{ localizedHeading() }}</h3>
          }
          <div [innerHTML]="localizedContent()"></div>
        </mat-card-content>
      </mat-card>
    }
  `,
  styles: `
    .text-block {
      margin: 2rem 0;
    }

    h3 {
      font-size: 2rem;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    ::ng-deep .text-block div {
      line-height: 1.8;
      font-size: 1.1rem;
      color: rgba(0, 0, 0, 0.87);
    }

    ::ng-deep .text-block div p {
      margin: 0 0 1rem 0;
    }

    ::ng-deep .text-block div p:last-child {
      margin-bottom: 0;
    }
  `,
})
export class TextBlock {
  @Input({ required: true }) data!: TextBlockData;

  private languageService = inject(LanguageService);

  localizedHeading = computed(() => {
    if (!this.data.heading) return '';
    const lang = this.languageService.currentLanguage();
    return this.data.heading[lang] || this.data.heading.de || '';
  });

  localizedContent = computed(() => {
    const lang = this.languageService.currentLanguage();
    return this.data.content[lang] || this.data.content.de || '';
  });
}
