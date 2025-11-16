import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const impressionsPageSchema = defineType({
  name: 'impressionsPageSchema',
  title: 'Eindrücke',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Eindrücke',
        subtitle: 'Eindrücke',
      };
    },
  },
});
