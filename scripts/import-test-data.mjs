import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: 'iom7eda2',
  dataset: 'production',
  useCdn: false,
  token: process.env['SANITY_TOKEN'],
  apiVersion: '2024-01-01',
});

const testData = {
  siteSettings: {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: {
      de: 'Fuess Mobil',
      en: 'Fuess Mobil',
      it: 'Fuess Mobil',
      es: 'Fuess Mobil',
    },
    slogan: {
      de: 'Ihre Mobilität ist unser Ziel',
      en: 'Your mobility is our goal',
      it: 'La vostra mobilità è il nostro obiettivo',
      es: 'Su movilidad es nuestro objetivo',
    },
    seoTitle: {
      de: 'Fuess Mobil - Professionelle Fahrdienste',
      en: 'Fuess Mobil - Professional Transportation Services',
      it: 'Fuess Mobil - Servizi di trasporto professionali',
      es: 'Fuess Mobil - Servicios de transporte profesionales',
    },
    seoDescription: {
      de: 'Zuverlässige Fahrdienste für alle Ihre Mobilitätsbedürfnisse. Von Arztbesuchen bis Flughafentransfers - wir bringen Sie sicher ans Ziel.',
      en: 'Reliable transportation services for all your mobility needs. From doctor visits to airport transfers - we get you there safely.',
      it: 'Servizi di trasporto affidabili per tutte le vostre esigenze di mobilità. Dalle visite mediche ai trasferimenti aeroportuali - vi portiamo a destinazione in sicurezza.',
      es: 'Servicios de transporte confiables para todas sus necesidades de movilidad. Desde visitas médicas hasta traslados al aeropuerto: lo llevamos allí de forma segura.',
    },
    seoKeywords: [
      'Fahrdienst',
      'Mobilitätsdienst',
      'Krankenfahrten',
      'Flughafentransfer',
      'Barrierefreier Transport',
    ],
    footerText: {
      de: 'Fuess Mobil - Ihr zuverlässiger Partner für alle Mobilitätsbedürfnisse. Wir bringen Sie sicher und komfortabel ans Ziel.',
      en: 'Fuess Mobil - Your reliable partner for all mobility needs. We get you to your destination safely and comfortably.',
      it: 'Fuess Mobil - Il vostro partner affidabile per tutte le esigenze di mobilità. Vi portiamo a destinazione in modo sicuro e confortevole.',
      es: 'Fuess Mobil - Su socio confiable para todas las necesidades de movilidad. Lo llevamos a su destino de manera segura y cómoda.',
    },
    contactInfo: {
      email: 'info@fuessmobil.de',
      phone: '+49 123 456789',
      address: 'Musterstraße 123\n12345 Musterstadt\nDeutschland',
    },
    socialMedia: {
      facebook: 'https://facebook.com/fuessmobil',
      instagram: 'https://instagram.com/fuessmobil',
    },
    businessHours: {
      de: 'Montag - Freitag: 7:00 - 19:00 Uhr\nSamstag: 8:00 - 16:00 Uhr\nSonntag: Nach Vereinbarung\nFeiertage: Nach Vereinbarung',
      en: 'Monday - Friday: 7:00 AM - 7:00 PM\nSaturday: 8:00 AM - 4:00 PM\nSunday: By appointment\nHolidays: By appointment',
      it: 'Lunedì - Venerdì: 7:00 - 19:00\nSabato: 8:00 - 16:00\nDomenica: Su appuntamento\nGiorni festivi: Su appuntamento',
      es: 'Lunes - Viernes: 7:00 - 19:00\nSábado: 8:00 - 16:00\nDomingo: Con cita previa\nDías festivos: Con cita previa',
    },
    copyrightText: {
      de: '© 2025 Fuess Mobil. Alle Rechte vorbehalten.',
      en: '© 2025 Fuess Mobil. All rights reserved.',
      it: '© 2025 Fuess Mobil. Tutti i diritti riservati.',
      es: '© 2025 Fuess Mobil. Todos los derechos reservados.',
    },
  },

  homePage: {
    _id: 'homePage',
    _type: 'homePageSchema',
    title: {
      de: 'Willkommen bei Fuess Mobil',
      en: 'Welcome to Fuess Mobil',
      it: 'Benvenuti a Fuess Mobil',
      es: 'Bienvenido a Fuess Mobil',
    },
    metaDescription: {
      de: 'Professionelle Fahrdienste für Krankenfahrten, Arztbesuche, Flughafentransfers und mehr. Zuverlässig, sicher und komfortabel.',
      en: 'Professional transportation services for medical appointments, doctor visits, airport transfers and more. Reliable, safe and comfortable.',
      it: 'Servizi di trasporto professionali per appuntamenti medici, visite mediche, trasferimenti aeroportuali e altro. Affidabile, sicuro e confortevole.',
      es: 'Servicios de transporte profesionales para citas médicas, visitas al médico, traslados al aeropuerto y más. Confiable, seguro y cómodo.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  aboutPage: {
    _id: 'aboutPage',
    _type: 'aboutPageSchema',
    title: {
      de: 'Über uns',
      en: 'About Us',
      it: 'Chi siamo',
      es: 'Sobre nosotros',
    },
    metaDescription: {
      de: 'Erfahren Sie mehr über Fuess Mobil - Ihr professioneller Fahrdienst mit langjähriger Erfahrung und höchsten Qualitätsstandards.',
      en: 'Learn more about Fuess Mobil - your professional transportation service with years of experience and highest quality standards.',
      it: 'Scoprite di più su Fuess Mobil - il vostro servizio di trasporto professionale con anni di esperienza e i più alti standard di qualità.',
      es: 'Conozca más sobre Fuess Mobil: su servicio de transporte profesional con años de experiencia y los más altos estándares de calidad.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  servicesPage: {
    _id: 'servicesPage',
    _type: 'servicesPageSchema',
    title: {
      de: 'Unsere Dienstleistungen',
      en: 'Our Services',
      it: 'I nostri servizi',
      es: 'Nuestros servicios',
    },
    metaDescription: {
      de: 'Von Krankenfahrten über Arztbesuche bis hin zu Flughafentransfers - entdecken Sie unser umfassendes Dienstleistungsangebot.',
      en: 'From medical transportation to doctor visits and airport transfers - discover our comprehensive range of services.',
      it: 'Dal trasporto medico alle visite mediche e ai trasferimenti aeroportuali: scoprite la nostra gamma completa di servizi.',
      es: 'Desde transporte médico hasta visitas al médico y traslados al aeropuerto: descubra nuestra gama completa de servicios.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  pricingPage: {
    _id: 'pricingPage',
    _type: 'pricingPageSchema',
    title: {
      de: 'Preise & Tarife',
      en: 'Pricing & Rates',
      it: 'Prezzi e tariffe',
      es: 'Precios y tarifas',
    },
    metaDescription: {
      de: 'Transparente Preise für alle unsere Fahrdienste. Faire Konditionen und individuelle Angebote für Stammkunden.',
      en: 'Transparent pricing for all our transportation services. Fair conditions and individual offers for regular customers.',
      it: 'Prezzi trasparenti per tutti i nostri servizi di trasporto. Condizioni eque e offerte individuali per i clienti abituali.',
      es: 'Precios transparentes para todos nuestros servicios de transporte. Condiciones justas y ofertas individuales para clientes habituales.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  procedurePage: {
    _id: 'procedurePage',
    _type: 'procedurePageSchema',
    title: {
      de: 'Ablauf & Buchung',
      en: 'Process & Booking',
      it: 'Procedura e prenotazione',
      es: 'Proceso y reserva',
    },
    metaDescription: {
      de: 'So einfach funktioniert die Buchung Ihres Fahrdienstes - vom ersten Kontakt bis zur pünktlichen Abholung.',
      en: 'This is how easy it is to book your transportation service - from first contact to punctual pickup.',
      it: 'Ecco quanto è facile prenotare il vostro servizio di trasporto: dal primo contatto al ritiro puntuale.',
      es: 'Así de fácil es reservar su servicio de transporte: desde el primer contacto hasta la recogida puntual.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  impressionsPage: {
    _id: 'impressionsPage',
    _type: 'impressionsPageSchema',
    title: {
      de: 'Eindrücke & Galerie',
      en: 'Impressions & Gallery',
      it: 'Impressioni e galleria',
      es: 'Impresiones y galería',
    },
    metaDescription: {
      de: 'Werfen Sie einen Blick auf unsere modernen Fahrzeuge und professionellen Service in unserer Bildergalerie.',
      en: 'Take a look at our modern vehicles and professional service in our photo gallery.',
      it: 'Date un\'occhiata ai nostri veicoli moderni e al nostro servizio professionale nella nostra galleria fotografica.',
      es: 'Eche un vistazo a nuestros vehículos modernos y servicio profesional en nuestra galería de fotos.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  reviewsPage: {
    _id: 'reviewsPage',
    _type: 'reviewsPageSchema',
    title: {
      de: 'Kundenbewertungen',
      en: 'Customer Reviews',
      it: 'Recensioni dei clienti',
      es: 'Opiniones de clientes',
    },
    metaDescription: {
      de: 'Lesen Sie, was unsere zufriedenen Kunden über unseren Service sagen. Ehrliche Bewertungen und Erfahrungsberichte.',
      en: 'Read what our satisfied customers say about our service. Honest reviews and testimonials.',
      it: 'Leggete cosa dicono i nostri clienti soddisfatti del nostro servizio. Recensioni e testimonianze oneste.',
      es: 'Lea lo que nuestros clientes satisfechos dicen sobre nuestro servicio. Reseñas y testimonios honestos.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  contactPage: {
    _id: 'contactPage',
    _type: 'contactPageSchema',
    title: {
      de: 'Kontakt',
      en: 'Contact',
      it: 'Contatto',
      es: 'Contacto',
    },
    metaDescription: {
      de: 'Nehmen Sie Kontakt mit uns auf. Wir sind für Sie da und beantworten gerne alle Ihre Fragen.',
      en: 'Get in touch with us. We are here for you and happy to answer all your questions.',
      it: 'Mettetevi in contatto con noi. Siamo qui per voi e saremo lieti di rispondere a tutte le vostre domande.',
      es: 'Póngase en contacto con nosotros. Estamos aquí para usted y estaremos encantados de responder a todas sus preguntas.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },

  bookingPage: {
    _id: 'bookingPage',
    _type: 'bookingPageSchema',
    title: {
      de: 'Online Buchung',
      en: 'Online Booking',
      it: 'Prenotazione online',
      es: 'Reserva en línea',
    },
    metaDescription: {
      de: 'Buchen Sie Ihren Fahrdienst bequem online. Einfach, schnell und unkompliziert.',
      en: 'Book your transportation service conveniently online. Simple, fast and uncomplicated.',
      it: 'Prenota comodamente online il tuo servizio di trasporto. Semplice, veloce e senza complicazioni.',
      es: 'Reserve su servicio de transporte cómodamente en línea. Simple, rápido y sin complicaciones.',
    },
    publishedAt: new Date().toISOString(),
    pageBuilder: [],
  },
};

async function importData() {
  console.log('🚀 Starting to import test data to Sanity...\n');

  try {
    // Import Site Settings
    console.log('📝 Importing Site Settings...');
    await client.createOrReplace(testData.siteSettings);
    console.log('✅ Site Settings imported successfully\n');

    // Import all pages
    const pages = [
      { name: 'Home Page', data: testData.homePage },
      { name: 'About Page', data: testData.aboutPage },
      { name: 'Services Page', data: testData.servicesPage },
      { name: 'Pricing Page', data: testData.pricingPage },
      { name: 'Procedure Page', data: testData.procedurePage },
      { name: 'Impressions Page', data: testData.impressionsPage },
      { name: 'Reviews Page', data: testData.reviewsPage },
      { name: 'Contact Page', data: testData.contactPage },
      { name: 'Booking Page', data: testData.bookingPage },
    ];

    for (const page of pages) {
      console.log(`📄 Importing ${page.name}...`);
      await client.createOrReplace(page.data);
      console.log(`✅ ${page.name} imported successfully\n`);
    }

    console.log('🎉 All test data imported successfully!');
    console.log('\n📍 You can view your data at: http://localhost:3333');
    console.log('📍 Or in Sanity Studio: https://www.sanity.io/manage');
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
}

importData();
