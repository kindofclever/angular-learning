import { defineType, defineField } from 'sanity';

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Textblock',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Überschrift',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'de', type: 'string', title: 'Deutsch' },
        { name: 'en', type: 'string', title: 'Englisch' },
        { name: 'it', type: 'string', title: 'Italienisch' },
        { name: 'es', type: 'string', title: 'Spanisch' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Inhalt',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'de', type: 'text', title: 'Deutsch', rows: 10 },
        { name: 'en', type: 'text', title: 'Englisch', rows: 10 },
        { name: 'it', type: 'text', title: 'Italienisch', rows: 10 },
        { name: 'es', type: 'text', title: 'Spanisch', rows: 10 },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Textblock',
        subtitle: 'Text-Komponente',
      };
    },
  },
});
