// Export all page builder components
export { heroSection } from './heroSection';
export { textBlock } from './textBlock';
export { imageGallery } from './imageGallery';
export { contactForm } from './contactForm';

// Export common page fields
export { titleField, metaDescriptionField, publishedAtField } from './commonFields';

// Base pageBuilder field that can be reused across different document types
import { defineField } from 'sanity';
import { heroSection } from './heroSection';
import { textBlock } from './textBlock';
import { imageGallery } from './imageGallery';
import { contactForm } from './contactForm';

export const pageBuilderField = defineField({
  name: 'pageBuilder',
  title: 'Seitenaufbau',
  type: 'array',
  of: [
    { type: heroSection.name },
    { type: textBlock.name },
    { type: imageGallery.name },
    { type: contactForm.name },
  ],
  description: 'Flexibler Seiteninhalt aus wiederverwendbaren Komponenten',
});
