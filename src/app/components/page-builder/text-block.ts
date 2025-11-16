import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TextBlock {
  _type: 'textBlock';
  heading?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  content: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
}

@Component({
  selector: 'app-text-block',
  imports: [CommonModule],
  template: `
    <section class="text-block">
      <div class="container">
        @if (data.heading) {
          <h2>{{ data.heading[currentLang] }}</h2>
        }
        <div class="content" [innerHTML]="data.content[currentLang]"></div>
      </div>
    </section>
  `,
  styles: `
    .text-block {
      padding: 3rem 1rem;
      background-color: rgba(255, 255, 255, 0.03);
      margin-bottom: 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--color-accent);
    }

    .content {
      font-size: 1.1rem;
      line-height: 1.8;
      color: white;
    }

    .content ::ng-deep p {
      margin-bottom: 1rem;
    }

    .content ::ng-deep ul,
    .content ::ng-deep ol {
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    .content ::ng-deep li {
      margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
      .text-block {
        padding: 4rem 2rem;
      }

      h2 {
        font-size: 2.5rem;
      }
    }
  `,
})
export class TextBlockComponent {
  @Input() data!: TextBlock;
  @Input() currentLang: 'de' | 'en' | 'it' | 'es' = 'de';
}
