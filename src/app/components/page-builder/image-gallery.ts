import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';

export interface ImageGalleryImage {
  image: any;
  alt?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  caption?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
}

export interface ImageGallery {
  _type: 'imageGallery';
  title?: {
    de: string;
    en: string;
    it: string;
    es: string;
  };
  images: ImageGalleryImage[];
  layout?: 'grid' | 'masonry' | 'carousel';
}

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  template: `
    <section class="image-gallery">
      <div class="container">
        @if (data.title) {
          <h2>{{ data.title[currentLang] }}</h2>
        }
        <div class="gallery" [class.grid-layout]="data.layout === 'grid' || !data.layout"
             [class.masonry-layout]="data.layout === 'masonry'"
             [class.carousel-layout]="data.layout === 'carousel'">
          @for (item of data.images; track $index) {
            <div class="gallery-item">
              <img
                [src]="getImageUrl(item.image)"
                [alt]="item.alt ? item.alt[currentLang] : ''"
                loading="lazy"
              />
              @if (item.caption) {
                <p class="caption">{{ item.caption[currentLang] }}</p>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .image-gallery {
      padding: 3rem 1rem;
      background-color: rgba(255, 255, 255, 0.02);
      margin-bottom: 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--color-accent);
      text-align: center;
    }

    .gallery {
      display: grid;
      gap: 1.5rem;
    }

    .grid-layout {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .masonry-layout {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: 10px;
    }

    .carousel-layout {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 1rem;
      padding-bottom: 1rem;
    }

    .carousel-layout .gallery-item {
      flex: 0 0 80%;
      scroll-snap-align: center;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .gallery-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .grid-layout .gallery-item img {
      aspect-ratio: 4/3;
    }

    .caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: white;
      margin: 0;
      font-size: 0.9rem;
    }

    @media (min-width: 768px) {
      .image-gallery {
        padding: 4rem 2rem;
      }

      h2 {
        font-size: 2.5rem;
      }

      .grid-layout {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      }

      .carousel-layout .gallery-item {
        flex: 0 0 45%;
      }
    }

    @media (min-width: 1024px) {
      .carousel-layout .gallery-item {
        flex: 0 0 30%;
      }
    }
  `,
})
export class ImageGalleryComponent {
  @Input() data!: ImageGallery;
  @Input() currentLang: 'de' | 'en' | 'it' | 'es' = 'de';

  constructor(private sanity: SanityService) {}

  getImageUrl(image: any): string {
    return this.sanity.getImageUrl(image, 800, 600);
  }
}
