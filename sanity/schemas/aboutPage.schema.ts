import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const aboutPageSchema = defineType({
  name: 'aboutPageSchema',
  title: 'Über mich',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Über mich',
        subtitle: 'Über mich',
      };
    },
  },
});
