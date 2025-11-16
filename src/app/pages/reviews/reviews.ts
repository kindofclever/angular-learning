import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule, PageBuilderComponent],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('reviewsPageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading reviews page:', err)
      });
  }
}
