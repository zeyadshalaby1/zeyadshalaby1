import { getProjects, generateSlug } from "@/lib/supabase";
import { ProjectsPageClient } from "./client";

// Function to determine category from tech stack
function getCategoryFromTech(techStack) {
  if (!techStack || techStack.length === 0) return "Full Stack";
  const tech = techStack.join(" ").toLowerCase();
  if (tech.includes("flutter") || tech.includes("swift") || tech.includes("kotlin")) return "Mobile App";
  if (tech.includes("ecommerce") || tech.includes("stripe") || tech.includes("woocommerce")) return "E-Commerce";
  if (tech.includes("websocket") || tech.includes("realtime") || tech.includes("socket")) return "Real-time";
  if (tech.includes("django") || tech.includes("flask") || tech.includes("laravel") || tech.includes("php")) return "Backend";
  if (tech.includes("react") || tech.includes("vue") || tech.includes("angular")) return "Frontend";
  return "Full Stack";
}

export const metadata = {
  title: "المشاريع - زياد شلبي",
  description: "تصفح جميع مشاريعي في تطوير الويب والتطبيقات",
};

export default async function ProjectsPage() {
  const projectsData = await getProjects();

  const projects = projectsData.map((project) => ({
    id: project.id,
    slug: generateSlug(project.title),
    title: project.title,
    description: project.description || "مشروع متقدم",
    category: getCategoryFromTech(project.tech_stack),
    image: project.image_url || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tech: project.tech_stack || [],
  }));

  // Get unique categories
  const categories = ["الكل", ...new Set(projects.map((p) => p.category))];

  return <ProjectsPageClient projects={projects} categories={categories} />;
}
