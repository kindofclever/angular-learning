import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const homePageSchema = defineType({
  name: 'homePageSchema',
  title: 'Startseite',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Startseite',
        subtitle: 'Homepage',
      };
    },
  },
});
