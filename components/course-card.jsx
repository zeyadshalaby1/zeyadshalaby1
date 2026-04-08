"use client";

import { Users, Clock } from "lucide-react";

export function CourseCard({ course, onSubscribe }) {
  const Icon = course.icon;

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 transition duration-500 hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-500/10 dark:border-zinc-700/70 dark:bg-zinc-950/85">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 text-red-600 dark:bg-red-500/15 dark:text-red-400">
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {course.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-2xl bg-zinc-100 p-3 dark:bg-zinc-900/80">
            <p className="text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400">
              المستوى
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {course.level}
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-100 p-3 dark:bg-zinc-900/80">
            <p className="text-xs font-semibold uppercase text-zinc-600 dark:text-zinc-400">
              المدة
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {course.duration}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-zinc-200/50 pt-4 dark:border-zinc-800/50">
          <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <Users className="h-4 w-4" />
            {course.students} متعلم
          </div>
          <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
        </div>

        <button
          onClick={onSubscribe}
          className="w-full rounded-full bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95"
        >
          اشترك الآن - {course.price}
        </button>
      </div>
    </div>
  );
}
