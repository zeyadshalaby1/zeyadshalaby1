import { Cairo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AnimatedBackground } from "@/components/animated-background";
import { LoadingScreen } from "@/components/loading-screen";
import { PageTransition } from "@/components/page-transition";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "زياد شلبي - مطور ويب وتطبيقات",
  description: "زياد شلبي، مطور ويب وتطبيقات كامل الوظائف متخصص في Flutter، Go، Next.js، وLaravel. بناء تطبيقات محمولة عالية الأداء وأنظمة خلفية قابلة للتوسع.",
  keywords: "زياد شلبي, مطور ويب, مطور تطبيقات, Flutter, Go, Next.js, Laravel, PHP, Node.js, React, TypeScript, Tailwind CSS, PostgreSQL, MySQL, Redis, Docker",
  authors: [{ name: "زياد شلبي" }],
  creator: "زياد شلبي",
  publisher: "زياد شلبي",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "زياد شلبي - مطور ويب وتطبيقات",
    description: "مطور ويب وتطبيقات كامل الوظائف متخصص في بناء تطبيقات محمولة وأنظمة خلفية قابلة للتوسع.",
    url: "https://zeyadshalaby.cloud",
    siteName: "محفظة زياد شلبي",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/274340476?v=4",
        width: 180,
        height: 180,
        alt: "صورة زياد شلبي",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "زياد شلبي - مطور ويب وتطبيقات",
    description: "مطور ويب وتطبيقات كامل الوظائف متخصص في Flutter، Go، Next.js، وLaravel.",
    images: ["https://avatars.githubusercontent.com/u/274340476?v=4"],
    creator: "@zeyadshalaby2026",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zeyadshalaby.cloud",
  },
  other: [
    {
      tagName: 'link',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "زياد شلبي",
    "alternateName": "Zeyad Shalaby",
    "jobTitle": "مطور ويب وتطبيقات كامل الوظائف",
    "description": "مطور ويب وتطبيقات كامل الوظائف متخصص في بناء تطبيقات محمولة عالية الأداء وأنظمة خلفية قابلة للتوسع باستخدام Flutter، Go، Next.js، وLaravel.",
    "image": "https://avatars.githubusercontent.com/u/274340476?v=4",
    "url": "https://zeyadshalaby.cloud",
    "sameAs": [
      "https://www.linkedin.com/in/zeyad-shalaby-537959400/",
      "https://www.facebook.com/zeyadshalaby2026",
      "https://www.instagram.com/zeyadshalaby2026/",
      "https://github.com/YOUR_GITHUB_USERNAME"
    ],
    "email": "me@zeyadshalaby.cloud",
    "knowsAbout": [
      "Flutter",
      "Dart",
      "Go",
      "Laravel",
      "PHP",
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "Clean Architecture",
      "SOLID Principles",
      "Microservices"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "مطور ويب وتطبيقات كامل الوظائف",
      "occupationLocation": {
        "@type": "Country",
        "name": "مصر"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "جامعة أو معهد تقني"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG"
    },
    "gender": "Male",
    "birthDate": "1990-01-01",
    "nationality": {
      "@type": "Country",
      "name": "مصر"
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-cairo">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col relative z-0">
            <LoadingScreen />
            <AnimatedBackground />
            <Navbar />
            <SmoothScroll>
              <main className="flex-grow">
                <PageTransition>{children}</PageTransition>
              </main>
            </SmoothScroll>
            <Footer />
            <a
              href="https://wa.me/201026097345"
              target="_blank"
              rel="noreferrer"
              className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-700/30 transition hover:bg-emerald-500"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.1-.472-.149-.672.15-.197.297-.766.967-.938 1.165-.173.2-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.2-.297.3-.496.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.921-2.223-.242-.585-.487-.507-.672-.517l-.572-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.15.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.273-.198-.57-.347z" />
                  <path d="M12.004 2.003C6.474 2.003 2.004 6.474 2.004 12c0 1.992.52 3.84 1.424 5.434L2 22l4.727-1.229A9.957 9.957 0 0012.004 22c5.53 0 10.001-4.47 10.001-10 0-5.526-4.472-9.997-10.001-9.997z" />
                </svg>
              </span>
              واتساب 01026097345
            </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
