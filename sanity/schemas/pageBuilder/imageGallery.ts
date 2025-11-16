import { defineType, defineField } from 'sanity';

export const imageGallery = defineType({
  name: 'imageGallery',
  title: 'Bildergalerie',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Galerie-Titel',
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
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'object',
              title: 'Alternativtext',
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
            },
            {
              name: 'caption',
              type: 'object',
              title: 'Bildunterschrift',
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
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Raster 2 Spalten', value: 'grid-2' },
          { title: 'Raster 3 Spalten', value: 'grid-3' },
          { title: 'Raster 4 Spalten', value: 'grid-4' },
          { title: 'Karussell', value: 'carousel' },
        ],
        layout: 'radio',
      },
      initialValue: 'grid-3',
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      images: 'images',
    },
    prepare({ title, images }) {
      return {
        title: title || 'Bildergalerie',
        subtitle: `${images?.length || 0} Bilder - Galerie-Komponente`,
        media: images?.[0],
      };
    },
  },
});
