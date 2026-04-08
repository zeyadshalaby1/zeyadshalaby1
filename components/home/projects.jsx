import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects, generateSlug } from "@/lib/supabase";
import { ProjectCardMotion, AnimateOnScroll } from "@/components/motion";

// Function to determine category from tech stack
function getCategoryFromTech(techStack) {
  if (!techStack || techStack.length === 0) return "Full Stack";
  
  const tech = techStack.join(" ").toLowerCase();
  
  if (tech.includes("flutter") || tech.includes("swift") || tech.includes("kotlin")) {
    return "Mobile App";
  }
  if (tech.includes("ecommerce") || tech.includes("stripe") || tech.includes("woocommerce")) {
    return "E-Commerce";
  }
  if (tech.includes("websocket") || tech.includes("realtime") || tech.includes("socket")) {
    return "Real-time";
  }
  if (tech.includes("django") || tech.includes("flask") || tech.includes("laravel") || tech.includes("php")) {
    return "Backend";
  }
  if (tech.includes("react") || tech.includes("vue") || tech.includes("angular")) {
    return "Frontend";
  }
  
  return "Full Stack";
}

export async function ProjectsSection() {
  // Fetch projects from Supabase
  const projectsData = await getProjects();

  // Transform Supabase data to match component structure
  const projects = projectsData.map((project) => ({
    id: project.id,
    slug: generateSlug(project.title),
    title: project.title,
    description: project.description || "مشروع متقدم",
    category: getCategoryFromTech(project.tech_stack),
    image: project.image_url || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: project.tech_stack || [],
  }));

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <AnimateOnScroll delay={0}>
            <h2 className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl">
              مشاريعي المميزة
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              أعمال حقيقية أنجزتها لعملاء من مختلف الصناعات
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <ProjectCardMotion key={project.id} index={idx + 1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white/90 transition duration-500 hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-500/10 dark:border-zinc-700/70 dark:bg-zinc-950/85">
                    <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="space-y-4 p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                            {project.category}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
                            {project.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="h-6 w-6 text-red-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-red-400" />
                      </div>

                      <p className="text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </ProjectCardMotion>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">لم يتم العثور على مشاريع. يرجى التحقق من اتصال Supabase.</p>
            </div>
          )}
        </div>

        {projects.length > 0 && (
          <AnimateOnScroll delay={3} className="mt-12 text-center">
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-8 py-4 text-sm font-semibold text-zinc-900 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-red-500 dark:hover:bg-red-500/10 dark:hover:text-red-400 duration-300"
            >
              عرض جميع المشاريع
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
