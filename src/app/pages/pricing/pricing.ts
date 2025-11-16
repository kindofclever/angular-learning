import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, PageBuilderComponent],
  template: `
    <div class="page-container">
      <app-page-builder [pageData]="pageData()" />
    </div>
  `,
  styles: ``,
})
export class Pricing implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('pricingPageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading pricing page:', err)
      });
  }
}
