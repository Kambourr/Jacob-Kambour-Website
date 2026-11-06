import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/** The only mailto allowed in v1. Not a personal Gmail. */
const grokbotMailto = 'mailto:jkambour@mail.grokbot.com';

/**
 * Public URL rules for v1:
 * - https for work, profile, and LinkedIn
 * - mailto only for the approved Grok Bot inbox
 * - no Hillsdale study URL (404 and private operational numbers)
 * - no other email, phone, or tel:
 */
const httpsHref = z.url({ protocol: /^https$/ }).refine((href) => !href.includes('hillsdale-study'), {
	message: 'v1 links must not point at the Hillsdale study URL',
});

const contactHref = z.union([httpsHref, z.literal(grokbotMailto)]);

const profileLink = z.object({
	label: z.string(),
	href: httpsHref,
});

const contactLink = z.object({
	label: z.string(),
	href: contactHref,
});

const site = defineCollection({
	loader: file('src/content/site.yaml'),
	schema: z.object({
		name: z.string(),
		documentTitle: z.string(),
		description: z.string(),
		heroLine: z.string(),
		whoLine: z.string(),
		proof: z.string(),
		about: z.string(),
		primaryCta: profileLink,
		profileLinks: z.array(profileLink),
		contact: z.array(contactLink),
	}),
});

const work = defineCollection({
	loader: file('src/content/work.yaml'),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		href: httpsHref,
		hrefLabel: z.string(),
		image: z.string(),
		imageAlt: z.string(),
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
