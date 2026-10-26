import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://johnsonmauro.github.io',
  trailingSlash: 'ignore',
  // The site used to live under /johnson-portfolio; keep shared links working.
  redirects: {
    '/johnson-portfolio': '/',
    '/johnson-portfolio/en': '/en/',
    '/johnson-portfolio/pt': '/pt/',
    '/johnson-portfolio/en/cv': '/en/cv/',
    '/johnson-portfolio/pt/cv': '/pt/cv/',
  },
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pt: 'pt-BR',
        },
      },
    }),
  ],
});
