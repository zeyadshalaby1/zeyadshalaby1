import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ServicesSection } from "@/components/home/services";
import { OfoqSection } from "@/components/home/ofoq";
import { ProjectsSection } from "@/components/home/projects";
import { TestimonialsSection } from "@/components/home/testimonials";
import { ContactSection } from "@/components/home/contact";
import { Suspense } from "react";

// Loading component for ProjectsSection
function ProjectsLoading() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-zinc-950 dark:text-white sm:text-5xl">
            مشاريعي المميزة
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            جاري تحميل المشاريع...
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse rounded-[2.5rem] border border-zinc-200/80 dark:border-zinc-700/70 overflow-hidden">
              <div className="h-64 bg-zinc-200 dark:bg-zinc-800" />
              <div className="p-6 space-y-4">
                <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsLoading() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold text-zinc-950 dark:text-white sm:text-6xl">
            💬 ماذا يقول عملائي؟
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse rounded-[2.5rem] border-2 border-zinc-200/80 dark:border-zinc-700/70 p-8">
              <div className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-6" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfoqSection />
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<TestimonialsLoading />}>
        <TestimonialsSection />
      </Suspense>
      <ContactSection />
    </div>
  );
}
