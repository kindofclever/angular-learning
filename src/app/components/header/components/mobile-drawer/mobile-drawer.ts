import { Component, Input, Output, EventEmitter, ViewChild, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ROUTES, NAV_TRANSLATIONS } from '../../../../constants';
import { LanguageService } from '../../../../services/language.service';
import { LanguageSelector } from '../language-selector/language-selector';
import type { Language } from '../../../../constants';

@Component({
  selector: 'app-mobile-drawer',
  imports: [
    CommonModule,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    LanguageSelector,
  ],
  templateUrl: './mobile-drawer.html',
  styleUrl: './mobile-drawer.css',
})
export class MobileDrawer {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('drawer') drawer!: MatSidenav;

  routes = ROUTES;
  languageService = inject(LanguageService);

  navLabels = computed(() => {
    return NAV_TRANSLATIONS[this.languageService.currentLanguage()];
  });

  onClose() {
    this.close.emit();
  }

  onLanguageChange = (lang: Language) => {
    this.onClose();
  };
}
