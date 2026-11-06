// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Static HTML for a later GitHub Pages deploy. Do not set `site` or `base`
// until Pages is explicitly enabled. Project-pages would need base: '/personal-site'.
export default defineConfig({
	output: 'static',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			weights: ['400', '600'],
			styles: ['normal'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Sans',
			cssVariable: '--font-sans',
			weights: ['400', '500'],
			styles: ['normal'],
		},
	],
});
