// Page schemas
import { homePageSchema } from './homePage.schema';
import { aboutPageSchema } from './aboutPage.schema';
import { contactPageSchema } from './contactPage.schema';
import { bookingPageSchema } from './bookingPage.schema';
import { impressionsPageSchema } from './impressionsPage.schema';
import { pricingPageSchema } from './pricingPage.schema';
import { procedurePageSchema } from './procedurePage.schema';
import { reviewsPageSchema } from './reviewsPage.schema';
import { servicesPageSchema } from './servicesPage.schema';

// Site settings
import { siteSettingsSchema } from './siteSettings.schema';

// Page builder components
import { heroSection, textBlock, imageGallery, contactForm } from './pageBuilder';

// Export all schemas
export const schemaTypes = [
  // Site settings (singleton)
  siteSettingsSchema,
  // Page schemas
  homePageSchema,
  aboutPageSchema,
  contactPageSchema,
  bookingPageSchema,
  impressionsPageSchema,
  pricingPageSchema,
  procedurePageSchema,
  reviewsPageSchema,
  servicesPageSchema,
  // Page builder components
  heroSection,
  textBlock,
  imageGallery,
  contactForm,
];
