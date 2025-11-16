import { defineType } from 'sanity';
import {
  titleField,
  metaDescriptionField,
  publishedAtField,
  pageBuilderField,
} from './pageBuilder';

export const servicesPageSchema = defineType({
  name: 'servicesPageSchema',
  title: 'Leistungen',
  type: 'document',
  fields: [titleField, metaDescriptionField, pageBuilderField, publishedAtField],
  preview: {
    select: {
      title: 'title.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Leistungen',
        subtitle: 'Leistungen',
      };
    },
  },
});
