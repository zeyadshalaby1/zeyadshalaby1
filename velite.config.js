import { defineConfig, s } from 'velite'

export default defineConfig({
  collections: {
    projects: {
      name: 'Project',
      pattern: 'projects/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('projects'),
          date: s.isodate(),
          cover: s.image(),
          description: s.string(),
          category: s.string(),
          tech: s.array(s.string()),
          link: s.string().url().optional(),
          github: s.string().url().optional(),
          featured: s.boolean().default(false),
          metadata: s.metadata(),
          content: s.markdown()
        })
        .transform(data => ({ ...data, permalink: `/projects/${data.slug}` }))
    },
    courses: {
      name: 'Course',
      pattern: 'courses/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug('courses'),
          description: s.string(),
          cover: s.image(),
          promoVideoId: s.string().optional(),
          price: s.number(),
          oldPrice: s.number().optional(),
          category: s.string(),
          level: s.enum(['Beginner', 'Intermediate', 'Advanced']),
          duration: s.string(), // e.g. "12h 30m"
          instructor: s.object({
            name: s.string(),
            title: s.string(),
            avatar: s.image()
          }),
          curriculum: s.array(s.object({
            title: s.string(),
            lessons: s.array(s.object({
              title: s.string(),
              duration: s.string(),
              freePreview: s.boolean().default(false),
              videoUrl: s.string().optional()
            }))
          })),
          requirements: s.array(s.string()),
          outcomes: s.array(s.string()),
          featured: s.boolean().default(false),
          metadata: s.metadata(),
          content: s.markdown()
        })
        .transform(data => ({ ...data, permalink: `/courses/${data.slug}` }))
    }
  }
})
