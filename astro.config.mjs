// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "fr",
    routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: true
    }
  },
    devToolbar: {
    enabled: false
  }
});
