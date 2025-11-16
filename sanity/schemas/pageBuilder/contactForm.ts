import { defineType, defineField } from 'sanity';

export const contactForm = defineType({
  name: 'contactForm',
  title: 'Kontaktformular',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Formular-Überschrift',
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
      name: 'description',
      title: 'Beschreibung',
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
      name: 'submitButtonText',
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
      initialValue: {
        de: 'Absenden',
        en: 'Submit',
        it: 'Invia',
        es: 'Enviar',
      },
    }),
    defineField({
      name: 'email',
      title: 'E-Mail-Adresse (für Formular-Einsendungen)',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
  preview: {
    select: {
      title: 'heading.de',
    },
    prepare({ title }) {
      return {
        title: title || 'Kontaktformular',
        subtitle: 'Formular-Komponente',
      };
    },
  },
});
