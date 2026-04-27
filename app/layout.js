import { Inter, Cairo } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SEOSchema } from "@/components/seo-schema";
import { ClientLoader } from "@/components/client-loader";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata = {
  metadataBase: new URL("https://zeyadshalaby.cloud"),
  title: {
    default: "زياد شلبي | مطور تطبيقات متكامل - Zeyad Shalaby",
    template: "%s | زياد شلبي"
  },
  description: "الموقع الرسمي للمهندس زياد شلبي. متخصص في بناء أنظمة برمجية معقدة باستخدام Go و Laravel وتجارب واجهات فريدة بـ Next.js.",
  keywords: [
    "زياد شلبي", "Zeyad Shalaby", "مطور تطبيقات", "Full Stack Developer", 
    "برمجة تطبيقات مصر", "Go Lang Developer Egypt", "Laravel Expert", 
    "مطور Next.js", "Flutter Developer"
  ],
  authors: [{ name: "زياد شلبي", url: "https://zeyadshalaby.cloud" }],
  creator: "زياد شلبي",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "زياد شلبي | مطور تطبيقات متكامل",
    description: "استكشف معرض أعمال ومقالات المهندس زياد شلبي في عالم البرمجة والذكاء الاصطناعي.",
    url: "https://zeyadshalaby.cloud",
    siteName: "زياد شلبي - Zeyad Shalaby",
    images: [
      {
        url: "/Untitled design.png",
        width: 1200,
        height: 630,
        alt: "زياد شلبي - مطور تطبيقات متكامل",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "زياد شلبي | Zeyad Shalaby",
    description: "مطور تطبيقات متكامل يبني المستقبل بأحدث التقنيات.",
    images: ["/Untitled design.png"],
    creator: "@zeyadshalaby",
  },
  icons: {
    icon: "/gemini-svg.svg",
    apple: "/gemini-svg.svg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "زياد شلبي",
  },
};

export const viewport = {
  themeColor: "#00FF88",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider 
      suppressHydrationWarning
      appearance={{
        variables: { 
          colorPrimary: "#00ff88",
        },
        elements: {
          card: "bg-background border border-border shadow-2xl rounded-3xl",
          headerTitle: "text-foreground font-black",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton: "bg-secondary border-border hover:bg-secondary/80 text-foreground",
          formButtonPrimary: "bg-primary text-primary-foreground hover:brightness-110 rounded-xl font-bold h-11",
          formFieldInput: "bg-secondary/50 border-border rounded-xl text-foreground",
          footerActionLink: "text-primary hover:text-primary/80",
        }
      }}
    >
      <html lang="ar" dir="rtl" suppressHydrationWarning>
        <body className={`${inter.variable} ${cairo.variable} min-h-screen bg-background font-sans antialiased`}>
          <SEOSchema />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClientLoader>
              <Navbar />
              <main className="pt-28">
                {children}
              </main>
              <Footer />
            </ClientLoader>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
