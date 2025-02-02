import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().datetime(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
