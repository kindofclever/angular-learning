import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const bookingPageSchema = defineType({
  name: 'bookingPageSchema',
  title: 'Buchung',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Buchung',
        subtitle: 'Buchung',
      };
    },
  },
});
