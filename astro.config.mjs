import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	/* site: 'https://noartroom.github.io/blog', */
	site: 'https://itsnilskerwer.github.io/ethereum-viewer/',
	 trailingSlash: 'ignore', 
/* 	trailingSlash: 'never',
 */	
	integrations: [sitemap()]
});
