import { defineType, defineField } from 'sanity';

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Website-Name',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativtext',
          description: 'Wichtig für Barrierefreiheit und SEO',
        },
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Kleines Icon für Browser-Tabs (empfohlen: 32x32px oder 64x64px)',
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'object',
      description: 'Wird unter dem Logo angezeigt',
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
      name: 'seoTitle',
      title: 'Standard SEO-Titel',
      type: 'object',
      description: 'Wird verwendet, wenn keine seitenspezifischer Titel vorhanden ist',
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
      name: 'seoDescription',
      title: 'Standard SEO-Beschreibung',
      type: 'object',
      description: 'Wird verwendet, wenn keine seitenspezifische Beschreibung vorhanden ist',
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
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO-Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Wichtige Suchbegriffe für Ihre Website',
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Media Vorschaubild',
      type: 'image',
      description: 'Wird verwendet für Social Media Shares (empfohlen: 1200x630px)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerText',
      title: 'Footer-Text',
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
    }),
    defineField({
      name: 'contactInfo',
      title: 'Kontaktinformationen',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'E-Mail',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Telefon',
        },
        {
          name: 'address',
          type: 'text',
          title: 'Adresse',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Öffnungszeiten',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: 'de', type: 'text', title: 'Deutsch', rows: 5 },
        { name: 'en', type: 'text', title: 'Englisch', rows: 5 },
        { name: 'it', type: 'text', title: 'Italienisch', rows: 5 },
        { name: 'es', type: 'text', title: 'Spanisch', rows: 5 },
      ],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright-Text',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Website-Einstellungen',
        subtitle: 'Logo, SEO, Footer und Kontakt',
      };
    },
  },
});
