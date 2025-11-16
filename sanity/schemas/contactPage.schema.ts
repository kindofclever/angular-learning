import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const contactPageSchema = defineType({
  name: 'contactPageSchema',
  title: 'Kontakt',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Kontakt',
        subtitle: 'Kontakt',
      };
    },
  },
});
