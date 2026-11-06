import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Public URL rules for v1:
 * - https only (blocks mailto: / tel: / personal email and phone)
 * - no Hillsdale study URL (404 and private operational numbers)
 */
const publicHref = z.url({ protocol: /^https$/ }).refine((href) => !href.includes('hillsdale-study'), {
	message: 'v1 links must not point at the Hillsdale study URL',
});

const link = z.object({
	label: z.string(),
	href: publicHref,
});

const site = defineCollection({
	loader: file('src/content/site.yaml'),
	schema: z.object({
		name: z.string(),
		documentTitle: z.string(),
		description: z.string(),
		heroLine: z.string(),
		proof: z.string(),
		about: z.string(),
		primaryCta: link,
		links: z.array(link),
	}),
});

const work = defineCollection({
	loader: file('src/content/work.yaml'),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		href: publicHref,
		hrefLabel: z.string(),
		order: z.number(),
	}),
});

const experience = defineCollection({
	loader: file('src/content/experience.yaml'),
	schema: z.object({
		org: z.string(),
		title: z.string(),
		dates: z.string().optional(),
		bullets: z.array(z.string()),
		order: z.number(),
	}),
});

const education = defineCollection({
	loader: file('src/content/education.yaml'),
	schema: z.object({
		school: z.string(),
		credential: z.string(),
		dates: z.string().optional(),
		order: z.number(),
	}),
});

export const collections = { site, work, experience, education };
