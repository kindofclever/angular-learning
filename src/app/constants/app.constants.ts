/**
 * General Application Constants
 */

export const APP_CONFIG = {
  NAME: 'Angular Learning',
  VERSION: '1.0.0',
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;

export const STORAGE_KEYS = {
  LANGUAGE: 'app_language',
  THEME: 'app_theme',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const TIMEOUTS = {
  API_REQUEST: 30000, // 30 seconds
  DEBOUNCE: 300, // 300ms
  TOAST_DURATION: 3000, // 3 seconds
} as const;
