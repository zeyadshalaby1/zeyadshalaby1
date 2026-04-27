"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "أحمد علي",
    username: "@ahmed_tech",
    body: "زياد بجد فنان، سلملي مشروع Laravel و Go في وقت قياسي وبجودة كود مذهلة.",
    img: "https://avatar.vercel.sh/ahmed",
  },
  {
    name: "سارة محمود",
    username: "@sara_ux",
    body: "تجربة المستخدم في الموقع اللي عمله زياد خرافية. بجد فاهم يعني إيه Clean UI.",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "ياسين كريم",
    username: "@yassin_dev",
    body: "الـ Backend اللي زياد بناه بـ Go قدر يتحمل ضغط مستخدمين عالي جداً بدون أي مشاكل.",
    img: "https://avatar.vercel.sh/yassin",
  },
  {
    name: "مريم حسن",
    username: "@mariam_flutter",
    body: "تطبيق الفلتر كان سموث جداً، والأنيميشنز فيه خلت العميل مبهور بالنتيجة.",
    img: "https://avatar.vercel.sh/mariam",
  },
  {
    name: "عمر خالد",
    username: "@omar_business",
    body: "بوابة دفع أفق كانت الحل الأمثل لمشروعي، زياد عرف يربط كل حاجة ببعض بسلاسة.",
    img: "https://avatar.vercel.sh/omar",
  },
  {
    name: "ليلى إبراهيم",
    username: "@layla_design",
    body: "شغله في الـ Next.js والسيو خلى موقعي يتصدر نتائج البحث في وقت قصير.",
    img: "https://avatar.vercel.sh/layla",
  },
  {
    name: "محمود سعد",
    username: "@mahmoud_api",
    body: "الـ API Documentation كانت واضحة جداً، والـ Integration مخدش مننا أي مجهود.",
    img: "https://avatar.vercel.sh/mahmoud",
  },
  {
    name: "هناء يوسف",
    username: "@hana_startup",
    body: "زياد مش بس مطور، ده مستشار تقني بيفهم في البيزنس وبيعرف يوجهك للصح.",
    img: "https://avatar.vercel.sh/hana",
  }
];

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-3xl border p-6 transition-all duration-300",
        "border-border bg-secondary/20 backdrop-blur-xl hover:bg-secondary/40 hover:scale-[1.02]",
        "dark:border-white/10 dark:bg-white/5"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-2xl shadow-lg" width="45" height="45" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-black text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-bold text-primary">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm font-bold leading-relaxed text-muted-foreground">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  const columns = [
    reviews.slice(0, 2),
    reviews.slice(2, 4),
    reviews.slice(4, 6),
    reviews.slice(6, 8),
  ];

  return (
    <div className="relative flex h-[600px] w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:1200px] bg-background/50 py-20 border-y border-primary/10">
      <div
        className="flex flex-row items-center gap-8"
        style={{
          transform:
            "rotateX(25deg) rotateY(-15deg) rotateZ(10deg) translateZ(-100px)",
        }}
      >
        {columns.map((col, idx) => (
          <Marquee 
            key={idx} 
            reverse={idx % 2 === 0} 
            pauseOnHover 
            vertical 
            className="[--duration:30s] gap-8"
          >
            {col.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        ))}
      </div>
      
      {/* Fading Edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background via-background/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
      
      {/* Center Label */}
      
    </div>
  );
}
