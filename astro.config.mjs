import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	/* site: 'https://noartroom.github.io/blog', */
	site: 'https://itsnilskerwer.github.io/',
	/* base: 'ethereum-viewer/', */
/* 	trailingSlash: 'never',
 */	
	integrations: [sitemap(), astroImageTools]
});
