import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-impressions',
  imports: [CommonModule, PageBuilderComponent],
  templateUrl: './impressions.html',
  styleUrl: './impressions.css',
})
export class Impressions implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('impressionsPageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading impressions page:', err)
      });
  }
}
