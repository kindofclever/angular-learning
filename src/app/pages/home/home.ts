import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PageBuilderComponent],
  template: `
    <div class="page-container">
      <app-page-builder [pageData]="pageData()" />
    </div>
  `,
  styles: ``,
})
export class Home implements OnInit {
  private sanity = inject(SanityService);

  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.sanity.getPageWithBuilder<PageBuilderData>('homePageSchema')
      .subscribe({
        next: (data) => {
          console.log('Home page data loaded:', data);
          this.pageData.set(data);
        },
        error: (err) => {
          console.error('Error loading home page:', err);
        }
      });
  }
}
