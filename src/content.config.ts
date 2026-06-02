import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workEntry = z.object({
  title: z.string(),
  summary: z.string(),
  type: z.enum(['Framework', 'AI build', 'Systems build', 'Reference']),
  employer: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number().default(99),
  draft: z.boolean().default(false),

  hero: z.object({
    eyebrow: z.string().default('Case study'),
    intro: z.string(),
  }),

  overview: z
    .object({
      headline: z.string(),
      paragraphs: z.array(z.string()),
      pullLine: z.string().optional(),
    })
    .optional(),

  problem: z
    .object({
      headline: z.string(),
      intro: z.string().optional(),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
        }),
      ),
      pullLine: z.string().optional(),
    })
    .optional(),

  framework: z
    .object({
      headline: z.string(),
      intro: z.string().optional(),
      dimensions: z
        .array(
          z.object({
            name: z.string(),
            note: z.string(),
          }),
        )
        .optional(),
      paragraphs: z.array(z.string()).optional(),
      scorecardLink: z.boolean().default(false),
      pullLine: z.string().optional(),
    })
    .optional(),

  builds: z
    .object({
      headline: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
          link: z
            .object({
              label: z.string(),
              href: z.string(),
            })
            .optional(),
        }),
      ),
    })
    .optional(),

  outcomes: z
    .object({
      headline: z.string(),
      items: z.array(z.string()),
      pullLine: z.string().optional(),
    })
    .optional(),

  portablePOV: z
    .object({
      headline: z.string(),
      intro: z.string().optional(),
      points: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
        }),
      ),
      pullLine: z.string().optional(),
    })
    .optional(),

  closing: z
    .object({
      headline: z.string(),
      body: z.string(),
      primaryCta: z
        .object({ label: z.string(), href: z.string() })
        .optional(),
      secondaryCta: z
        .object({ label: z.string(), href: z.string() })
        .optional(),
    })
    .optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: workEntry,
});

export const collections = { work };
