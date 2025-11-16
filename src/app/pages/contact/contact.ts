import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, PageBuilderComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('contactPageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading contact page:', err)
      });
  }
}
