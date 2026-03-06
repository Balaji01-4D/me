import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const socials = defineCollection({
	loader: file('src/content/socials.yml'),
	schema: z.object({
		id: z.string().optional(),
		label: z.string(),
		href: z.string(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			stack: z.array(z.string()).optional(),
			github: z.string().url().optional(),
			docs: z.string().url().optional(),
		}),
});

const site = defineCollection({
	loader: file('src/site-config.yml'),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		based: z.string().optional(),
		timezone: z.string().optional(),
		locale: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	loader: file('src/content/testimonials.yml'),
	schema: ({ image }) =>
		z.object({
			quote: z.string(),
			author: z.string(),
			role: z.string().optional(),
			avatar: image().optional(),
		}),
});

export const collections = { socials, projects, site, testimonials };
