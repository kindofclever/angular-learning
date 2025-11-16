import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EXTERNAL_ROUTES } from '../../constants';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  template: `
    <div style="text-align: center; padding: 3rem;">
      <h2>Weiterleitung zum Sanity Studio...</h2>
      <p>Du wirst automatisch weitergeleitet zu:</p>
      <p><strong>{{ studioUrl }}</strong></p>
    </div>
  `,
  styles: [],
})
export class Admin implements OnInit {
  readonly studioUrl = EXTERNAL_ROUTES.SANITY_STUDIO;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = this.studioUrl;
    }
  }
}
