// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://antoinejosset.fr',
  trailingSlash: "never",

  integrations: [
    icon(),
    sitemap({
      filter: (page) => {
        const excludePatterns = ['404', '500'];
        return !excludePatterns.some(pattern => page.includes(pattern));
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    robotsTxt(),
  ],

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["astro > @astrojs/internal-helpers > picomatch"],
    },
  },

  fonts: [{
    provider: fontProviders.google(),
    name: "Geist",
    weights: [400, 500, 600, 700],
    styles: ["normal"],
    cssVariable: "--font-sans",
    subsets: ["latin"],
  }, {
    provider: fontProviders.google(),
    name: "Geist Mono",
    weights: [400, 500, 600],
    styles: ["normal"],
    cssVariable: "--font-mono",
    subsets: ["latin"],
  }],

  adapter: cloudflare({
    prerenderEnvironment: "node"
  }),
});