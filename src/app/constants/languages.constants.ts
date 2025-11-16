/**
 * Language and Localization Constants
 */

export const LANGUAGES = {
  DE: 'de',
  EN: 'en',
  IT: 'it',
  ES: 'es',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.DE;

export const LANGUAGE_NAMES = {
  [LANGUAGES.DE]: 'Deutsch',
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.IT]: 'Italiano',
  [LANGUAGES.ES]: 'Español',
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
