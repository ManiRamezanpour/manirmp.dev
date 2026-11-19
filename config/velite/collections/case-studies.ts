import { defineCollection, s } from 'velite';

const hex = s.string().regex(new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$'));

export const caseStudies = defineCollection({
  name: 'CaseStudy',
  pattern: './case-studies/*.mdx',
  schema: s
    .object({
      title: s.string(),
      summary: s.string(),
      slug: s.custom().transform((_, { meta }) => {
        return meta.basename?.replace(/\.mdx$/, '') || '';
      }),
      icon: s.string(),
      color: hex,
      darkColor: hex.optional(),
      year: s.string(),
      role: s.string(),
      context: s.string().optional(),
      stack: s.array(s.string()).default([]),
      links: s
        .array(s.object({ label: s.string(), url: s.string().url() }))
        .default([]),
      order: s.number().default(0),
      draft: s.boolean().optional().default(false),
      code: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      icon: data.icon.startsWith('/')
        ? `/media/projects${data.icon}`
        : `/media/projects/${data.icon}`,
    })),
});
