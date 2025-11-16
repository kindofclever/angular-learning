import { defineType, defineField } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero-Bereich',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Untertitel',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'de', type: 'text', title: 'Deutsch' },
        { name: 'en', type: 'text', title: 'Englisch' },
        { name: 'it', type: 'text', title: 'Italienisch' },
        { name: 'es', type: 'text', title: 'Spanisch' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Hintergrundbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'Button-Text',
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
      name: 'ctaLink',
      title: 'Button-Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero-Bereich',
        subtitle: 'Hero-Komponente',
        media,
      };
    },
  },
});
