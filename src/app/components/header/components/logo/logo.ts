import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ROUTES } from '../../../../constants';
import { SanityService } from '../../../../services/sanity.service';
import { LanguageService } from '../../../../services/language.service';
import type { SanityImage, LocalizedString } from '../../../../types';

interface SiteSettings {
  logo?: SanityImage;
  siteName?: LocalizedString;
  slogan?: LocalizedString;
}

@Component({
  selector: 'app-logo',
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo implements OnInit {
  routes = ROUTES;
  sanityService = inject(SanityService);
  languageService = inject(LanguageService);

  siteSettings = signal<SiteSettings | null>(null);

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
      .fetch<SiteSettings>(`*[_type == "siteSettings"][0]{ logo, siteName, slogan }`)
      .subscribe({
        next: (data) => {
          this.siteSettings.set(data);
        },
        error: (err) => {
          console.error('Error loading site settings:', err);
        },
      });
  }
}
