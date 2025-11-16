import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { LanguageService } from '../../../../services/language.service';
import type { Language } from '../../../../constants';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css',
})
export class LanguageSelector {
  @Input() mode: 'desktop' | 'mobile' = 'desktop';
  @Input() onLanguageChange?: (lang: Language) => void;

  languageService = inject(LanguageService);

  handleLanguageChange(lang: Language) {
    this.languageService.setLanguage(lang);
    if (this.onLanguageChange) {
      this.onLanguageChange(lang);
    }
  }
}
