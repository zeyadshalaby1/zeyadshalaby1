
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Laptop } from "lucide-react";
import { getProjectBySlug, generateSlug } from "@/lib/supabase";

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

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const projectData = await getProjectBySlug(resolvedParams.slug);

  if (!projectData) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-zinc-950 dark:text-white">المشروع غير موجود</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">عذراً، لم نتمكن من العثور على هذا المشروع.</p>
        <Link href="/" className="mt-6 inline-block text-red-600 hover:underline dark:text-red-400">
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  // Transform Supabase data to match component structure
  const project = {
    id: projectData.id,
    slug: generateSlug(projectData.title),
    title: projectData.title,
    description: projectData.description || "مشروع متقدم",
    category: getCategoryFromTech(projectData.tech_stack),
    image: projectData.image_url || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    tech: projectData.tech_stack || [],
    details: projectData.description || "مشروع متقدم وموثوق.",
    results: "تم إكمال المشروع بنجاح بمعايير عالية من الجودة والأداء.",
    challenge: "تطوير حل يلبي جميع متطلبات العميل مع الحفاظ على أسلوب الكود الاحترافي.",
    solution: `استخدام التقنيات الحديثة المتقدمة: ${(projectData.tech_stack || []).join(", ")}`,
    features: projectData.tech_stack?.slice(0, 3) || ["ميزة 1", "ميزة 2", "ميزة 3"],
    links: {
      live: projectData.live_demo || "#",
      github: projectData.github_link || "#"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
            <ArrowRight className="h-4 w-4 rotate-180" />
            العودة للرئيسية
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                  {project.category}
                </p>
                <h1 className="mt-2 text-5xl font-bold text-zinc-950 dark:text-white">
                  {project.title}
                </h1>
              </div>

              <p className="text-xl text-zinc-600 dark:text-zinc-300">
                {project.details}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-500/15 dark:text-red-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {project.links.live && project.links.live !== "#" && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                    <Laptop className="h-4 w-4" />
                    شاهد المشروع
                  </a>
                )}
                {project.links.github && project.links.github !== "#" && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900">
                    <Code className="h-4 w-4" />
                    كود المشروع
                  </a>
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/80 bg-white/90 shadow-2xl dark:border-zinc-700/70 dark:bg-zinc-950/85">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">التحدي</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">الحل</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-zinc-200/80 bg-red-600/5 p-8 dark:border-zinc-700/70 dark:bg-red-500/10">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white mb-4">النتائج</h2>
            <p className="text-lg font-semibold text-red-600 dark:text-red-400">
              {project.results}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

