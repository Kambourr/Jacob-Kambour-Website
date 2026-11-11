// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// GitHub Pages project site.
export default defineConfig({
	output: 'static',
	site: 'https://kambourr.github.io',
	base: '/Jacob-Kambour-Website',
	trailingSlash: 'always',
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
		// Pixel display face used only by the /v2/ terminal band.
		{
			provider: fontProviders.google(),
			name: 'Silkscreen',
			cssVariable: '--font-pixel',
			weights: ['400'],
			styles: ['normal'],
		},
	],
});
