import { Injectable, signal } from '@angular/core';
import { LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_NAMES, type Language } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly currentLanguageSignal = signal<Language>(DEFAULT_LANGUAGE);

  readonly currentLanguage = this.currentLanguageSignal.asReadonly();
  readonly availableLanguages = Object.values(LANGUAGES);
  readonly languageNames = LANGUAGE_NAMES;

  constructor() {
    // Check localStorage for saved language preference
    const savedLanguage = this.getSavedLanguage();
    if (savedLanguage && this.isValidLanguage(savedLanguage)) {
      this.currentLanguageSignal.set(savedLanguage as Language);
    }

    // Check browser language if no saved preference
    if (!savedLanguage) {
      const browserLanguage = this.getBrowserLanguage();
      if (browserLanguage && this.isValidLanguage(browserLanguage)) {
        this.currentLanguageSignal.set(browserLanguage as Language);
      }
    }
  }

  setLanguage(language: Language): void {
    if (!this.isValidLanguage(language)) {
      console.warn(`Invalid language: ${language}. Using default: ${DEFAULT_LANGUAGE}`);
      language = DEFAULT_LANGUAGE;
    }

    this.currentLanguageSignal.set(language);
    this.saveLanguage(language);

    // Update HTML lang attribute
    document.documentElement.lang = language;
  }

  private isValidLanguage(language: string): boolean {
    return this.availableLanguages.includes(language as Language);
  }

  private getSavedLanguage(): string | null {
    try {
      return localStorage.getItem('selectedLanguage');
    } catch {
      return null;
    }
  }

  private saveLanguage(language: Language): void {
    try {
      localStorage.setItem('selectedLanguage', language);
    } catch (error) {
      console.warn('Could not save language preference:', error);
    }
  }

  private getBrowserLanguage(): string | null {
    const browserLang = navigator.language.split('-')[0];
    return browserLang;
  }
}
