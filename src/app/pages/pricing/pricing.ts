import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, PageBuilderComponent],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
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
