import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, PageBuilderComponent],
  template: `
    <div class="page-container">
      <app-page-builder [pageData]="pageData()" />
    </div>
  `,
  styles: ``,
})
export class Booking implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('bookingPageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading booking page:', err)
      });
  }
}
