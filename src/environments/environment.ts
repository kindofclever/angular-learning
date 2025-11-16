// Für Production: Fest kodierte Werte (sicher für Production Builds)
export const environment = {
  production: true,
  sanity: {
    projectId: 'iom7eda2', // Trage hier deine Production Project ID ein
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: '', // Niemals echte Tokens hier! Nur für Backend-Requests
  },
  api: {
    baseUrl: 'https://your-domain.com',
  },
};
