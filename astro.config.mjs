// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    integrations: [pagefind()],
    i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "fr",
    routing: {
        prefixDefaultLocale: true,
        //redirectToDefaultLocale: true
    }
  },
    devToolbar: {
    enabled: false
  }
});
