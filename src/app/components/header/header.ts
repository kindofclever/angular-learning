import { Component, inject, computed, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ROUTES, NAV_TRANSLATIONS } from '../../constants';
import { LanguageService } from '../../services/language.service';
import { SanityService } from '../../services/sanity.service';
import { Logo } from './components/logo/logo';
import { NavItem } from './components/nav-item/nav-item';
import { MobileMenuButton } from './components/mobile-menu-button/mobile-menu-button';
import { MobileDrawer } from './components/mobile-drawer/mobile-drawer';
import { LanguageSelector } from './components/language-selector/language-selector';
import type { SanityImage } from '../../types';

interface SiteSettings {
  favicon?: SanityImage;
}

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    Logo,
    NavItem,
    MobileMenuButton,
    MobileDrawer,
    LanguageSelector,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  routes = ROUTES;
  languageService = inject(LanguageService);
  sanityService = inject(SanityService);
  private platformId = inject(PLATFORM_ID);

  drawerOpen = signal<boolean>(false);

  navLabels = computed(() => {
    return NAV_TRANSLATIONS[this.languageService.currentLanguage()];
  });

  ngOnInit() {
    this.loadFavicon();
  }

  loadFavicon() {
    this.sanityService
      .fetch<SiteSettings>(`*[_type == "siteSettings"][0]{ favicon }`)
      .subscribe({
        next: (data) => {
          this.updateFavicon(data);
        },
        error: (err) => {
          console.error('Error loading favicon:', err);
        },
      });
  }

  updateFavicon(settings: SiteSettings) {
    if (!settings?.favicon) return;

    // Only run in browser, not during SSR
    if (!isPlatformBrowser(this.platformId)) return;

    const faviconUrl = this.sanityService.getImageUrl(settings.favicon, 32);

    // Update favicon link element
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }

  toggleDrawer(): void {
    this.drawerOpen.set(!this.drawerOpen());
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}
