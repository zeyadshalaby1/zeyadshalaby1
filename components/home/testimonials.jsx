import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { getTestimonials } from "@/lib/supabase";
import {
  AnimateOnScroll,
  TestimonialCardMotion,
  CounterMotion,
  StatsGridMotion,
} from "@/components/motion";

// Color palette for testimonials (based on index instead of hardcoded id)
const colorPalettes = [
  { bg: "#3b82f6", light: "bg-blue-100 border-blue-300", dark: "dark:bg-blue-950/40 dark:border-blue-800/50" },
  { bg: "#ec4899", light: "bg-pink-100 border-pink-300", dark: "dark:bg-pink-950/40 dark:border-pink-800/50" },
  { bg: "#10b981", light: "bg-green-100 border-green-300", dark: "dark:bg-green-950/40 dark:border-green-800/50" },
  { bg: "#a855f7", light: "bg-purple-100 border-purple-300", dark: "dark:bg-purple-950/40 dark:border-purple-800/50" },
  { bg: "#eab308", light: "bg-yellow-100 border-yellow-300", dark: "dark:bg-yellow-950/40 dark:border-yellow-800/50" },
  { bg: "#f97316", light: "bg-orange-100 border-orange-300", dark: "dark:bg-orange-950/40 dark:border-orange-800/50" },
];

export async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/3 via-transparent to-pink-600/3" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <AnimateOnScroll delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-500/15 dark:text-purple-200 mb-6">
              <Quote className="h-4 w-4" />
              آراء العملاء الحقيقيين
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={1}>
            <h2 className="text-5xl font-bold text-zinc-950 dark:text-white sm:text-6xl">
              💬 ماذا يقول عملائي؟
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={2}>
            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              تقييمات حقيقية من عملائي اللي شوفوا الفرق في أعمالهم
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial, idx) => {
              const palette = colorPalettes[idx % colorPalettes.length];
              const lightColor = testimonial.light_color || palette.light;
              const darkColor = testimonial.dark_color || palette.dark;

              return (
                <TestimonialCardMotion
                  key={testimonial.id}
                  index={idx + 1}
                  className={`group relative overflow-hidden rounded-[2.5rem] border-2 p-8 shadow-xl backdrop-blur-sm ${lightColor} ${darkColor}`}
                >
                  {/* Background decoration */}
                  <div
                    className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-20 dark:opacity-10 blur-3xl"
                    style={{ background: palette.bg }}
                  />

                  {/* Quote icon */}
                  <div className="mb-6 opacity-50 dark:opacity-40 group-hover:opacity-100 dark:group-hover:opacity-60 transition text-zinc-600 dark:text-zinc-400">
                    <Quote className="h-8 w-8" />
                  </div>

                  {/* Rating stars */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <div key={i} className="relative">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                      </div>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="mb-8 text-lg leading-8 text-zinc-800 dark:text-zinc-100 font-medium">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* User info */}
                  <div className="flex items-center gap-4 border-t border-zinc-400/50 dark:border-zinc-600/50 pt-6">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <Image
                        src={testimonial.image_url || `https://i.pravatar.cc/150?img=${idx + 1}`}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800 shadow-lg"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-950 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Verification badge */}
                  <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    ✓ عميل راضي
                  </div>
                </TestimonialCardMotion>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                جاري إضافة التقييمات قريباً...
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <StatsGridMotion className="mt-20 grid gap-8 md:grid-cols-3 text-center">
          {[
            { number: "100+", label: "عميل راضي" },
            { number: "50+", label: "مشروع ناجح" },
            { number: "4.9★", label: "تقييم متوسط" },
          ].map((stat, idx) => (
            <CounterMotion key={idx} index={idx}>
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
                {stat.number}
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 font-medium">
                {stat.label}
              </p>
            </CounterMotion>
          ))}
        </StatsGridMotion>
      </div>
    </section>
  );
}
