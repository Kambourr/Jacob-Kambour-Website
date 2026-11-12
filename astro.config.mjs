// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages project site.
export default defineConfig({
	output: 'static',
	site: 'https://kambourr.github.io',
	base: '/Jacob-Kambour-Website',
	trailingSlash: 'always',
	// The one-screen homepage was previewed at /v2/ before it replaced the old homepage.
	redirects: {
		// Destinations are not base-prefixed by Astro, so include the base here.
		'/v2/': '/Jacob-Kambour-Website/',
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			weights: ['400', '500', '600'],
			styles: ['normal'],
		},
		{
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-mono-family',
			weights: ['400', '500'],
			styles: ['normal'],
		},
	],
});
