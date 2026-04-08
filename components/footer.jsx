function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.1-.472-.149-.672.15-.197.297-.766.967-.938 1.165-.173.2-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.173.2-.297.3-.496.1-.198.05-.372-.025-.521-.075-.149-.672-1.62-.921-2.223-.242-.585-.487-.507-.672-.517l-.572-.01c-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.15.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.273-.198-.57-.347z" />
      <path d="M12.004 2.003C6.474 2.003 2.004 6.474 2.004 12c0 1.992.52 3.84 1.424 5.434L2 22l4.727-1.229A9.957 9.957 0 0012.004 22c5.53 0 10.001-4.47 10.001-10 0-5.526-4.472-9.997-10.001-9.997z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200/40 bg-gradient-to-r from-white via-zinc-50 to-rose-50 px-4 py-12 text-zinc-800 shadow-inner shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-800/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 dark:text-zinc-200 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-rose-500" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-zinc-950 dark:text-white">زياد شلبي</p>
          <p className="max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            مطور ويب وتطبيقات كامل الوظائف يبني واجهات وجربات مستخدم احترافية، مع تنفيذ قوي للخوادم والأداء.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="https://www.linkedin.com/in/zeyad-shalaby-537959400/" target="_blank" rel="noreferrer" className="transition hover:text-red-600 dark:hover:text-red-400">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/zeyadshalaby2026" target="_blank" rel="noreferrer" className="transition hover:text-red-600 dark:hover:text-red-400">
              Facebook
            </a>
            <a href="https://www.instagram.com/zeyadshalaby2026/" target="_blank" rel="noreferrer" className="transition hover:text-red-600 dark:hover:text-red-400">
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100">روابط سريعة</p>
          <a href="#home" className="transition hover:text-red-600 dark:hover:text-red-400">الرئيسية</a>
          <a href="#about" className="transition hover:text-red-600 dark:hover:text-red-400">عنّي</a>
          <a href="#projects" className="transition hover:text-red-600 dark:hover:text-red-400">مشاريعي</a>
          <a href="#contact" className="transition hover:text-red-600 dark:hover:text-red-400">تواصل</a>
        </div>

        <div className="rounded-[1.85rem] border border-zinc-200/80 bg-white/90 p-6 shadow-xl shadow-zinc-900/5 dark:border-zinc-700/70 dark:bg-zinc-950/85">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100">القانونية</p>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="block transition hover:text-red-600 dark:hover:text-red-300">سياسة الخصوصية</a>
            <a href="#" className="block transition hover:text-red-600 dark:hover:text-red-300">الشروط والأحكام</a>
            <a href="#" className="block transition hover:text-red-600 dark:hover:text-red-300">حقوق الملكية</a>
          </div>
          <div className="mt-6 rounded-3xl bg-zinc-950 px-4 py-4 text-white shadow-lg shadow-red-500/10 dark:bg-emerald-600/95">
            <p className="text-sm font-semibold">اتصل واتساب</p>
            <a href="https://wa.me/201026097345" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                <WhatsAppIcon />
              </span>
              01026097345
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-200/60 pt-6 text-sm text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-500/80">
        <p>© 2026 جميع الحقوق محفوظة لزياد شلبي.</p>
      </div>
    </footer>
  );
}
