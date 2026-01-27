import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().default('Jason Howes'),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };