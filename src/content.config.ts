// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Helper to safely parse dates from Decap CMS (handles strings, Date objects, nulls, and empty objects)
const safeDate = z.preprocess((val) => {
  if (!val || val === '' || (typeof val === 'object' && !(val instanceof Date))) {
    return undefined;
  }
  const parsed = new Date(val as string | Date);
  return isNaN(parsed.getTime()) ? undefined : parsed;
}, z.date().optional());

const peopleCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    term_year: z.string(),
    order: z.number().default(99),
    image: z.string().optional(),
  }),
});

const programsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/programs" }),
  schema: z.object({
    title: z.string(),
    program_type: z.enum(["Flagship Program", "Committee Initiative"]).default("Flagship Program"),
    committee: z.string().optional(),
    category: z.string(),
    date: safeDate,
    image: z.string().optional(),
    excerpt: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    editions: z.array(
      z.object({
        year: z.string(),
        title: z.string().optional(),
        date: safeDate,
        summary: z.string().optional(),
        gallery: z.array(z.string()).optional(),
      })
    ).optional(),
  }),
});

const archivesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/archives" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    document: z.string(),
  }),
});

const settingsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/settings" }),
  schema: z.object({
    home_subtitle: z.string().optional(),
    footer_desc: z.string().optional(),
    contact_email: z.string().optional(),
    donation_methods: z.array(
      z.object({
        method: z.string(),
        account_name: z.string(),
        account_number: z.string(),
        qr_code: z.string().optional(),
        payment_link: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = {
  'people': peopleCollection,
  'programs': programsCollection,
  'archives': archivesCollection,
  'settings': settingsCollection,
};