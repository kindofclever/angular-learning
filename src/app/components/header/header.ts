import { Component, inject, computed, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ROUTES, NAV_TRANSLATIONS } from '../../constants';
import { LanguageService } from '../../services/language.service';
import { SanityService } from '../../services/sanity.service';
import type { Language } from '../../constants';
import type { SanityImage, LocalizedString } from '../../types';

interface SiteSettings {
  logo?: SanityImage;
  favicon?: SanityImage;
  siteName?: LocalizedString;
  slogan?: LocalizedString;
}

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  routes = ROUTES;
  languageService = inject(LanguageService);
  sanityService = inject(SanityService);
  private platformId = inject(PLATFORM_ID);

  siteSettings = signal<SiteSettings | null>(null);
  drawerOpen = signal<boolean>(false);

  // Computed signal für aktuelle Übersetzungen
  navLabels = computed(() => {
    return NAV_TRANSLATIONS[this.languageService.currentLanguage()];
  });

  logoUrl = computed(() => {
    const settings = this.siteSettings();
    if (!settings?.logo) return null;
    return this.sanityService.getImageUrl(settings.logo, 200);
  });

  slogan = computed(() => {
    const settings = this.siteSettings();
    if (!settings?.slogan) return null;
    const lang = this.languageService.currentLanguage();
    return settings.slogan[lang] || settings.slogan.de || null;
  });

  ngOnInit() {
    this.loadSiteSettings();
  }

  loadSiteSettings() {
    this.sanityService
      .fetch<SiteSettings>(`*[_type == "siteSettings"][0]{ logo, favicon, siteName, slogan }`)
      .subscribe({
        next: (data) => {
          this.siteSettings.set(data);
          this.updateFavicon(data);
        },
        error: (err) => {
          console.error('Error loading site settings:', err);
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

  onLanguageChange(language: Language): void {
    this.languageService.setLanguage(language);
  }

  toggleDrawer(): void {
    this.drawerOpen.set(!this.drawerOpen());
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }
}
