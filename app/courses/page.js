"use client";

import { useState } from "react";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { SubscribeModal } from "@/components/subscribe-modal";

const courses = [
  {
    id: 1,
    title: "تطوير تطبيقات Flutter المتقدمة",
    description: "تعلم تطوير تطبيقات محمولة احترافية باستخدام Flutter و Dart",
    level: "متقدم",
    duration: "8 أسابيع",
    students: 245,
    price: "299 جنيه",
    icon: BookOpen,
    details: [
      "أساسيات Flutter و Dart",
      "بناء واجهات مستخدم معقدة",
      "إدارة الحالة مع Provider و Riverpod",
      "التكامل مع APIs و Databases",
      "نشر التطبيقات على App Store و Google Play",
      "أفضل الممارسات والأداء"
    ]
  },
  {
    id: 2,
    title: "بناء الخوادم باستخدام Go",
    description: "تعلم بناء خوادم قوية وسريعة مع لغة Go",
    level: "متقدم",
    duration: "6 أسابيع",
    students: 189,
    price: "349 جنيه",
    icon: Award,
    details: [
      "أساسيات Go و الـ Goroutines",
      "بناء REST APIs قوية",
      "قواعد البيانات مع PostgreSQL",
      "كيفية التعامل مع الأخطاء",
      "الـ Testing و Deployment",
      "Microservices Architecture"
    ]
  },
  {
    id: 3,
    title: "Next.js و React المتقدمة",
    description: "احترف تطوير الويب مع أحدث ميزات Next.js",
    level: "متوسط",
    duration: "7 أسابيع",
    students: 312,
    price: "279 جنيه",
    icon: Users,
    details: [
      "مكونات React المتقدمة",
      "App Router مع Next.js 14+",
      "Server Components و Client Components",
      "API Routes و Middleware",
      "الـ SEO و Performance Optimization",
      "نشر التطبيقات على Vercel"
    ]
  },
  {
    id: 4,
    title: "Laravel و PHP الحديثة",
    description: "بناء تطبيقات ويب قوية باستخدام Laravel",
    level: "متوسط",
    duration: "8 أسابيع",
    students: 156,
    price: "259 جنيه",
    icon: Clock,
    details: [
      "أساسيات Laravel و Eloquent ORM",
      "بناء Artisan Commands",
      "Middleware و Authentication",
      "Queue و Background Jobs",
      "Testing و Deployment",
      "Real-time مع Laravel Reverb"
    ]
  },
  {
    id: 5,
    title: "قواعد البيانات PostgreSQL و Redis",
    description: "تعلم إدارة قواعد البيانات القوية",
    level: "متقدم",
    duration: "5 أسابيع",
    students: 134,
    price: "199 جنيه",
    icon: BookOpen,
    details: [
      "تصميم قواعد البيانات",
      "الـ Indexing و Query Optimization",
      "Advanced SQL Queries",
      "NoSQL مع Redis",
      "Backup و Replication",
      "الـ Performance Monitoring"
    ]
  },
  {
    id: 6,
    title: "Docker و DevOps الأساسية",
    description: "نشر التطبيقات باحترافية مع Docker و Kubernetes",
    level: "متوسط",
    duration: "6 أسابيع",
    students: 198,
    price: "229 جنيه",
    icon: Users,
    details: [
      "Docker Basics و Images",
      "Docker Compose و Networks",
      "Kubernetes Basics",
      "CI/CD Pipelines",
      "Monitoring و Logging",
      "Production Deployment"
    ]
  }
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-12 lg:px-8">
      <div className="mb-12 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600/10 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-500/15 dark:text-red-200">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span>
          دوراتي المتخصصة
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
          احترف التطوير مع دوراتي
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          تعلم من الصفر إلى الباقة العملية مع شرح مفصل لكل موضوع، وكل دورة مصممة خصيصاً لتميزك في سوق العمل.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSubscribe={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {selectedCourse && (
        <SubscribeModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}
