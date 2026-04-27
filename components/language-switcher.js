"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Index");
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";

  const handleToggle = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium cursor-pointer"
    >
      {t("switchLanguage")}
    </button>
  );
}
