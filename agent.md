# 🤖 دليل تخصيص البورتفوليو (Agent Guide)

> هذا الملف مرجع شامل لأي AI Agent أو مطور يريد تخصيص هذا البورتفوليو لعميل جديد.
> العميل يقدم بياناته، والـ Agent يعدل الملفات المذكورة أدناه بالتفصيل.

---

## 📋 البيانات المطلوبة من العميل

قبل البدء، اطلب من العميل ملء هذه البيانات:

```yaml
# === البيانات الأساسية ===
الاسم_بالعربي: "زياد شلبي"
الاسم_بالانجليزي: "Zeyad Shalaby"
الوظيفة_بالعربي: "مطور ويب وتطبيقات"
الوظيفة_بالانجليزي: "Full-Stack Developer"
النبذة_المختصرة: "مؤسس وفريلانسر متخصص في بناء تطبيقات ويب وتطبيقات محمولة رائعة..."
الحرف_الأول: "Z"  # يظهر في اللوجو والـ Loading Screen

# === معلومات التواصل ===
البريد_الالكتروني: "me@zeyadshalaby.cloud"
رقم_الواتساب: "201026097345"  # بدون + أو 00
رابط_الموقع: "https://zeyadshalaby.cloud"

# === السوشيال ميديا ===
لينكد_ان: "https://www.linkedin.com/in/zeyad-shalaby-537959400/"
فيسبوك: "https://www.facebook.com/zeyadshalaby2026"
انستجرام: "https://www.instagram.com/zeyadshalaby2026/"
جيت_هب: "https://github.com/zeyadshalaby1"
تويتر_هاندل: "@zeyadshalaby2026"

# === الصور ===
صورة_البروفايل: "https://avatars.githubusercontent.com/u/274340476?v=4"
رابط_الـ_CV: "https://docs.google.com/document/d/13Fuf0exEZsjwJr2WJMkkn9_TlLuN4OOX0agi9P-rmVc/export?format=pdf"

# === الألوان (اختياري - الافتراضي أحمر) ===
اللون_الأساسي: "red"       # red | blue | green | purple | orange | teal
اللون_الثانوي: "rose"      # rose | pink | cyan | violet | amber | emerald

# === التقنيات والمهارات ===
تقنيات:
  - { اسم: "Flutter", نسبة: 95 }
  - { اسم: "Go", نسبة: 88 }
  - { اسم: "Next.js", نسبة: 90 }
  - { اسم: "Laravel", نسبة: 92 }
  # ... أضف أو عدل حسب الحاجة

# === الخدمات ===
خدمات:
  - { عنوان: "تطوير تطبيقات موبايل", وصف: "..." }
  - { عنوان: "تطوير مواقع ويب", وصف: "..." }
  # ... أضف أو عدل

# === التايم لاين (الخبرات) ===
خبرات:
  - { سنة: "2026 - الآن", عنوان: "مؤسس منصة أُفُق", وصف: "...", نوع: "work" }
  - { سنة: "2024 - 2026", عنوان: "مطور فريلانسر", وصف: "...", نوع: "work" }
  # ... أضف أو عدل

# === Supabase (اختياري) ===
supabase_url: "https://xxx.supabase.co"
supabase_anon_key: "eyJ..."
supabase_service_role_key: "eyJ..."
```

---

## 📂 خريطة الملفات والتعديلات

### 1. 🔐 المتغيرات البيئية — `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=<supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase_anon_key>
SUPABASE_SERVICE_ROLE_KEY=<supabase_service_role_key>
```

---

### 2. 📄 الـ SEO والـ Metadata — `app/layout.js`

**السطور 23-136** — غيّر كل البيانات التالية:

| الحقل | المكان | القيمة |
|-------|--------|--------|
| `title` | سطر 24 | `"<الاسم_بالعربي> - <الوظيفة_بالعربي>"` |
| `description` | سطر 25 | وصف العميل |
| `keywords` | سطر 26 | الكلمات المفتاحية للعميل |
| `authors.name` | سطر 27 | `<الاسم_بالعربي>` |
| `creator` | سطر 28 | `<الاسم_بالعربي>` |
| `publisher` | سطر 29 | `<الاسم_بالعربي>` |
| `openGraph.title` | سطر 35 | `<الاسم> - <الوظيفة>` |
| `openGraph.url` | سطر 37 | `<رابط_الموقع>` |
| `openGraph.images.url` | سطر 41 | `<صورة_البروفايل>` |
| `twitter.creator` | سطر 55 | `<تويتر_هاندل>` |
| `alternates.canonical` | سطر 69 | `<رابط_الموقع>` |
| `structuredData.name` | سطر 81 | `<الاسم_بالعربي>` |
| `structuredData.alternateName` | سطر 82 | `<الاسم_بالانجليزي>` |
| `structuredData.email` | سطر 93 | `<البريد_الالكتروني>` |
| `structuredData.sameAs` | سطور 87-91 | روابط السوشيال |

---

### 3. 🦸 Hero Section — `components/home/hero.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **البادج** (سطر ~62) | غيّر النص `"🚀 مطور ويب وتطبيقات محترف"` |
| **العنوان** (سطر ~72) | غيّر `"أنا"` و `"زياد شلبي"` |
| **الوصف** (سطر ~80) | غيّر نص الوصف المختصر |
| **زر CV** (سطر ~93) | غيّر `href` لرابط الـ CV |
| **زر GitHub** (سطر ~108) | غيّر `href` لرابط GitHub العميل |
| **الأرقام** (سطر ~130) | غيّر أرقام المشاريع/العملاء/الخبرات |
| **الصورة** (سطر ~148) | غيّر `src` لرابط صورة العميل |
| **رقم واتساب** | ابحث عن `wa.me/201026097345` واستبدله |
| **الألوان** | استبدل `red-600` و `rose-500` باللون المطلوب |

---

### 4. 🧑‍💻 قسم "عنّي" — `components/home/about.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **مصفوفة `skills`** (سطر ~12) | عدّل الفئات والتقنيات والنسب |
| **مصفوفة `timeline`** (سطر ~65) | عدّل الخبرات والتعليم |
| **نص النبذة** (سطر ~125) | غيّر النص التعريفي |
| **الألوان** | الألوان في كل فئة مهارة ( `color`, `bgLight`, `bgDark`) |

---

### 5. 📅 قسم الخدمات — `components/home/services.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **مصفوفة `services`** (سطر ~11) | عدّل العناوين والأوصاف والأيقونات |
| **عنوان السكشن** (سطر ~85) | غيّر النص |

---

### 6. 🚀 قسم أُفُق — `components/home/ofoq.jsx`

> **ملاحظة:** هذا القسم خاص بمنصة أُفُق. إذا العميل مالوش منصة مشابهة:
> - **احذف** هذا القسم من `app/page.js` 
> - أو **استبدله** بقسم آخر (مثلاً: "مشاريعي المميزة" أو "شهادات")

| العنصر | كيفية التعديل |
|--------|--------------|
| **الروابط** | غيّر `ofoq.site` لرابط منصة العميل |
| **النصوص** | كل النصوص داخل الـ JSX |
| **المميزات** | مصفوفة الـ features (سطر ~59) |

---

### 7. 📧 قسم التواصل — `components/home/contact.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **رقم واتساب** (سطر ~175) | غيّر `wa.me/201026097345` |
| **البريد** (سطر ~182) | غيّر `me@zeyadshalaby.cloud` |
| **لينكد إن** (سطر ~189) | غيّر الرابط |

---

### 8. 🧭 الـ Navbar — `components/navbar.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **حرف اللوجو** (سطر ~70) | غيّر `"Z"` للحرف الأول للعميل |
| **اسم الموقع** (سطر ~73) | غيّر `"Zeyad Portfolio"` |
| **رقم واتساب** | ابحث عن `wa.me/201026097345` |
| **عناصر القائمة** (سطر ~8) | عدّل/أضف/احذف روابط حسب الحاجة |

---

### 9. 🎬 شاشة التحميل — `components/loading-screen.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **حرف اللوجو** (سطر ~41) | غيّر `"Z"` |
| **الاسم** (سطر ~50) | غيّر `"Zeyad Shalaby"` |
| **الوظيفة** (سطر ~51) | غيّر `"Full-Stack Developer"` |

---

### 10. 🔻 الـ Footer — `components/footer.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **الاسم** (سطر ~16) | غيّر `"زياد شلبي"` |
| **الوصف** (سطر ~18) | غيّر النص التعريفي |
| **روابط السوشيال** (سطور 21-30) | غيّر كل الروابط |
| **رقم واتساب** (سطر ~54) | غيّر الرقم |
| **حقوق النشر** (سطر ~61) | غيّر السنة والاسم |

---

### 11. 🌐 الخلفية المتحركة — `components/animated-background.jsx`

| العنصر | كيفية التعديل |
|--------|--------------|
| **ألوان الـ Orbs** | غيّر `red-600`, `fuchsia-600`, `rose-600` للون المطلوب |

---

### 12. 🗺️ SEO Files

| الملف | التعديل |
|-------|---------|
| `public/robots.txt` | غيّر `Sitemap: https://zeyadshalaby.cloud/sitemap.xml` |
| `app/sitemap.js` | غيّر `baseUrl` لرابط موقع العميل |

---

### 13. 🗄️ Supabase والـ Database

| الملف | الوصف |
|-------|-------|
| `db.sql` | الاسكيما الأساسية (projects, profiles, courses, lessons) |
| `setup_testimonials.sql` | جدول التقييمات + بيانات تجريبية |
| `setup_contact.sql` | جدول رسائل الفورم |
| `insert_sample_projects.sql` | مشاريع تجريبية |

> **مهم:** بعد تغيير بيانات Supabase في `.env.local`، لازم العميل ينفذ ملفات الـ SQL في Supabase SQL Editor.

---

## 🎨 تغيير نظام الألوان (Color Scheme)

> اللون الأساسي الافتراضي هو **أحمر (red)**. لتغييره:

### الملفات المتأثرة بتغيير اللون:

| الملف | ابحث عن | استبدل بـ |
|-------|---------|----------|
| `app/globals.css` | `--primary: oklch(0.505 0.213 27.518)` | قيمة اللون الجديد بصيغة oklch |
| `components/home/hero.jsx` | `red-600`, `rose-500` | اللون الجديد |
| `components/home/about.jsx` | `red-500`, `rose-500` (progress bars) | اللون الجديد |
| `components/home/services.jsx` | `rose-600`, `violet-600` (العنوان) | اللون الجديد |
| `components/home/contact.jsx` | `red-600`, `red-500` | اللون الجديد |
| `components/home/projects.jsx` | `red-600`, `red-400` | اللون الجديد |
| `components/home/testimonials.jsx` | `red-600`, `pink-600` (stats) | اللون الجديد |
| `components/navbar.jsx` | `red-600`, `rose-500` | اللون الجديد |
| `components/loading-screen.jsx` | `red-600`, `rose-500`, `red-500` | اللون الجديد |
| `components/animated-background.jsx` | `red-600`, `fuchsia-600`, `rose-600` | اللون الجديد |
| `components/footer.jsx` | `red-600` | اللون الجديد |

### أمثلة تحويل الألوان:

| اللون | الأساسي (600) | الفاتح (500) | الداكن (700) |
|-------|---------------|-------------|-------------|
| أحمر | `red-600` | `rose-500` | `red-700` |
| أزرق | `blue-600` | `sky-500` | `blue-700` |
| أخضر | `emerald-600` | `green-500` | `emerald-700` |
| بنفسجي | `violet-600` | `purple-500` | `violet-700` |
| برتقالي | `orange-600` | `amber-500` | `orange-700` |
| تركوازي | `teal-600` | `cyan-500` | `teal-700` |

---

## 📱 واتساب — كل الأماكن اللي فيها الرقم

ابحث واستبدل `201026097345` في:
1. `components/home/contact.jsx`
2. `components/navbar.jsx`
3. `components/footer.jsx`
4. `app/layout.js` (الزر الثابت أسفل اليمين)

---

## ✅ Checklist سريع للتخصيص

```
[ ] 1. حدّث `.env.local` ببيانات Supabase الجديدة
[ ] 2. حدّث `app/layout.js` — الـ metadata والـ SEO
[ ] 3. حدّث `components/home/hero.jsx` — الاسم والصورة والأزرار
[ ] 4. حدّث `components/home/about.jsx` — المهارات والتايم لاين
[ ] 5. حدّث `components/home/services.jsx` — الخدمات
[ ] 6. حدّث `components/home/ofoq.jsx` — أو احذفه
[ ] 7. حدّث `components/home/contact.jsx` — بيانات التواصل
[ ] 8. حدّث `components/navbar.jsx` — اللوجو والاسم
[ ] 9. حدّث `components/loading-screen.jsx` — اللوجو والاسم
[ ] 10. حدّث `components/footer.jsx` — البيانات والروابط
[ ] 11. حدّث `components/animated-background.jsx` — الألوان
[ ] 12. حدّث `public/robots.txt` — الدومين
[ ] 13. حدّث `app/sitemap.js` — الدومين
[ ] 14. حدّث `public/favicon.svg` — أيقونة الموقع
[ ] 15. نفّذ ملفات SQL في Supabase
[ ] 16. اختبر الموقع على موبايل وديسكتوب
```

---

## 🏗️ هيكل المشروع

```
my-portfolio/
├── app/
│   ├── layout.js          ← SEO + Metadata + الهيكل العام
│   ├── page.js            ← الصفحة الرئيسية (ترتيب الأقسام)
│   ├── globals.css        ← الألوان والمتغيرات
│   ├── sitemap.js         ← خريطة الموقع
│   ├── all-projects/      ← صفحة كل المشاريع مع فلتر
│   ├── projects/[slug]/   ← صفحة المشروع الفردي
│   └── courses/           ← صفحة الدورات
├── components/
│   ├── home/
│   │   ├── hero.jsx       ← القسم الرئيسي
│   │   ├── about.jsx      ← عنّي + المهارات + Timeline
│   │   ├── services.jsx   ← الخدمات
│   │   ├── ofoq.jsx       ← قسم أُفُق (اختياري)
│   │   ├── projects.jsx   ← المشاريع من Supabase
│   │   ├── testimonials.jsx ← التقييمات من Supabase
│   │   └── contact.jsx    ← فورم التواصل
│   ├── navbar.jsx         ← شريط التنقل + Mobile Menu
│   ├── footer.jsx         ← الفوتر
│   ├── loading-screen.jsx ← شاشة التحميل
│   ├── animated-background.jsx ← الخلفية المتحركة
│   ├── motion.jsx         ← مكونات Framer Motion المشتركة
│   └── page-transition.jsx ← أنيميشن الانتقال
├── lib/
│   └── supabase.js        ← اتصال Supabase + دوال الجلب
├── public/
│   ├── favicon.svg        ← أيقونة الموقع
│   └── robots.txt         ← SEO
└── .env.local             ← المتغيرات البيئية (سري)
```
