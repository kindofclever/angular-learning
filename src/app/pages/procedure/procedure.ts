import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanityService } from '../../services/sanity.service';
import { PageBuilderComponent, type PageBuilderData } from '../../components/page-builder/page-builder';

@Component({
  selector: 'app-procedure',
  imports: [CommonModule, PageBuilderComponent],
  templateUrl: './procedure.html',
  styleUrl: './procedure.css',
})
export class Procedure implements OnInit {
  private sanity = inject(SanityService);
  pageData = signal<PageBuilderData | null>(null);

  ngOnInit() {
    this.sanity.getPageWithBuilder<PageBuilderData>('procedurePageSchema')
      .subscribe({
        next: (data) => this.pageData.set(data),
        error: (err) => console.error('Error loading procedure page:', err)
      });
  }
}
