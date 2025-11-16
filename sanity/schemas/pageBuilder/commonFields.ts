import { defineField } from 'sanity';

// Gemeinsames mehrsprachiges Titel-Feld für alle Seiten
export const titleField = defineField({
  name: 'title',
  title: 'Seitentitel',
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
});

// Gemeinsames mehrsprachiges Meta-Description Feld für SEO
export const metaDescriptionField = defineField({
  name: 'metaDescription',
  title: 'Meta-Beschreibung (SEO)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    { name: 'de', type: 'text', title: 'Deutsch', rows: 3 },
    { name: 'en', type: 'text', title: 'Englisch', rows: 3 },
    { name: 'it', type: 'text', title: 'Italienisch', rows: 3 },
    { name: 'es', type: 'text', title: 'Spanisch', rows: 3 },
  ],
});

// Gemeinsames Veröffentlichungsdatum-Feld
export const publishedAtField = defineField({
  name: 'publishedAt',
  title: 'Veröffentlicht am',
  type: 'datetime',
  initialValue: () => new Date().toISOString(),
});
