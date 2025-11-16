import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const reviewsPageSchema = defineType({
  name: 'reviewsPageSchema',
  title: 'Bewertungen',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Bewertungen',
        subtitle: 'Bewertungen',
      };
    },
  },
});
