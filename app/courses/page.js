"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket, Target, BookOpen, Clock, Users, Code2, Shield,
  Briefcase, GraduationCap, CalendarDays, ChevronDown, CheckCircle2,
  Star, Crown, Phone, Mail, ArrowLeft, Zap, Award, MonitorSmartphone,
  Database, Brain, Palette, ShoppingCart, School, CalendarCheck,
  MessageCircle, Globe, ChevronUp
} from "lucide-react";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [.25, .46, .45, .94] }
  }),
};
const stagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [.25, .46, .45, .94] }
  }),
};

/* ─── data ─── */
const targetAudience = [
  { icon: Code2, title: "مبتدئ طموح", desc: "تريد دخول عالم البرمجة والعمل الحر لكن لا تعرف من أين تبدأ ولا كيف تأخذ أول عميل." },
  { icon: Palette, title: "مصمم جرافيك", desc: "تشتغل على كانفا أو فوتوشوب وحابب توسع خدماتك لبناء مواقع لعملائك بنفسك وتزود دخلك." },
  { icon: Briefcase, title: "موظف يريد دخل إضافي", desc: "تبحث عن سكيل يفتحلك باب فريلانس بجانب وظيفتك بدون ما تسيبها." },
  { icon: GraduationCap, title: "طالب جامعي", desc: "عايز تبني بورتفوليو قوي يخليك تشتغل وانت لسه في الكلية وتبدأ مشروعك." },
];

const stats = [
  { value: "8", label: "حصص تدريبية", sub: "محاضرات مركزة وعملية 100%", icon: BookOpen },
  { value: "+40", label: "ساعة عملية", sub: "تدريب مباشر يحاكي سوق العمل", icon: Clock },
  { value: "4", label: "مشاريع كاملة", sub: "من المتجر الإلكتروني للمنصة التعليمية", icon: Target },
  { value: "∞", label: "بورتفوليو جاهز للعمل", sub: "توثيق احترافي على GitHub", icon: Award },
];

const highlights = [
  { icon: Briefcase, title: "بورتفوليو مذهل جاهز", desc: "لن تبحث عن أعمال سابقة لعرضها، ستنهي المعسكر بـ 4 مشاريع عالمية موثقة تماماً على GitHub." },
  { icon: Brain, title: "قوة الذكاء الاصطناعي", desc: "تعلم كيف تجعل Cursor و Windsurf و ChatGPT مساعدك الشخصي، لتنجز عمل أسبوع في ساعات معدودة." },
  { icon: Zap, title: "نظام تدريبي ماراثوني", desc: "8 حصص دسمة جداً (حتى 5 ساعات للحصة!)، مصممة لكسر رهبة الأكواد ودفعك لأقصى قدراتك." },
];

const outcomes = [
  { emoji: "🥇", text: "4 مشاريع عملاقة: موقع تعريفي لشركة، متجر إلكتروني متكامل بالدفع الإلكتروني، منصة تعليمية كاملة بالشهادات، ونظام حجوزات آلي متقدم." },
  { emoji: "🥈", text: "حساب GitHub لا يُقاوم: واجهة تعكس مدى التزامك واحترافيتك لعملائك — توثيق كامل للـ Source Code بتنسيق مبهر." },
  { emoji: "🥉", text: "عقلية المهندس (Mindset): التفكير المنطقي لاكتشاف الأخطاء (Debugging) وحلها بأدوات الـ AI." },
  { emoji: "🏅", text: "ترسانة أدوات احترافية: إتقان بيئة التطوير المحلية، التعامل مع قواعد البيانات، ومحررات الأكواد الذكية المدعومة بالـ AI." },
  { emoji: "🎖️", text: "خطة عمل جاهزة: كيف تأخذ أول عميل، كيف تسعّر خدماتك، وكيف تبني سمعتك على Upwork و Mostaql." },
];

const phase1Sessions = [
  {
    num: 1, title: "إعداد بيئة التطوير والتوثيق الاحترافي", icon: Rocket,
    image: "https://i.ibb.co/hxnXjbmh/Gemini-Generated-Image-mxw2z8mxw2z8mxw2.png",
    goal: "بناء الأساس البرمجي الصحيح وتسطيب كل الأدوات التي ستحتاجها طوال رحلتك كمطور.",
    rows: [
      { time: "الساعة 1", topic: "تأسيس Localhost", action: "تنصيب وإعداد (Local by Flywheel). إنشاء أول دومين محلي وقاعدة بيانات." },
      { time: "الساعة 2", topic: "Version Control", action: "إنشاء حساب GitHub. تعلم أوامر الـ Git الأساسية (Commit, Push, Pull)." },
      { time: "الساعة 3-4", topic: "AI Code Editors", action: "تسطيب Cursor / Windsurf. تفعيل أدوات الـ AI وربطها بالمشروع المفتوح." },
      { time: "الساعة 5", topic: "التوثيق الاحترافي", action: "كتابة وصياغة أول README.md احترافي ليكون واجهتك أمام العميل." },
    ],
    output: "بيئة تطوير كاملة جاهزة + حساب GitHub + أول مشروع موثق."
  },
  {
    num: 2, title: "تشريح منصة WordPress من الداخل", icon: Database,
    image: "https://i.ibb.co/cK5zckcJ/Gemini-Generated-Image-257z86257z86257z.png",
    goal: "فهم كيف يعمل الووردبريس من الداخل — لن تكون مستخدماً عادياً بعد اليوم.",
    rows: [
      { time: "الساعة 1", topic: "هيكلة الملفات", action: "جولة داخل مجلد wp-content. كيف تتفاعل القوالب مع الإضافات؟" },
      { time: "الساعة 2-3", topic: "قاعدة البيانات", action: "كيف يحفظ الووردبريس البيانات؟ تتبع wp_options و wp_posts داخل الـ DB." },
      { time: "الساعة 4", topic: "ملفات الأساس", action: "التعرف على wp-config.php وإعدادات الأمان الأساسية من الكود." },
      { time: "الساعة 5", topic: "تهيئة الهيكل", action: "ضبط الإعدادات العامة وتنظيف الووردبريس من الملفات والإضافات الزائدة." },
    ],
    output: "فهم معمّق للبنية الداخلية + موقع نظيف ومُعَد بالكامل للعمل."
  },
  {
    num: 3, title: "ماستر كلاس — المنطق البرمجي واستخدام الـ AI", icon: Brain,
    image: "https://i.ibb.co/N6nf74zc/Gemini-Generated-Image-455e39455e39455e.png",
    goal: "كسر رهبة الأكواد نهائياً! تعلم كيف تفكر كمبرمج وتستخدم الـ AI لكتابة الكود بدلاً عنك.",
    rows: [
      { time: "الساعة 1-2", topic: "صناعة المنطق (Logic)", action: "كيف تطلب من الـ AI كتابة كود معقد بالنيابة عنك (Prompt Engineering)." },
      { time: "الساعة 3", topic: "البحث عن الأخطاء", action: "مهارة الـ Debugging: الشاشة البيضاء (WSOD). قراءة سجلات الأخطاء وحلها." },
      { time: "الساعة 4", topic: "Elementor", action: "مقدمة عملية للمحررات المرئية ودمج الكود المخصص مع التصميم." },
      { time: "الساعة 5", topic: "تطبيقات عملية", action: "صنع خطأ برمجي متعمد وتطبيق مهارات الاستنتاج لحله بمفردك!" },
    ],
    output: "عقلية مبرمج + القدرة على حل أي مشكلة تقنية + التحكم في الـ AI كمساعد."
  },
  {
    num: 4, title: "Custom Snippets والأداء الأقصى والحماية", icon: Shield,
    image: "https://i.ibb.co/4wGBRYFh/Gemini-Generated-Image-p1nbxjp1nbxjp1nb.png",
    goal: "الاستغناء عن الإضافات الثقيلة وكتابة حلولك الخاصة. \"وداعاً للبطء، مرحباً بالسرعة الصاروخية!\"",
    rows: [
      { time: "الساعة 1-2", topic: "ملف functions.php", action: "إضافة أكواد فعالة (Snippets) لتسريع الموقع وتعديل وظائف أساسية بدون Plugins." },
      { time: "الساعة 3", topic: "تطوير الـ Forms", action: "إنشاء نماذج تواصل ديناميكية وآمنة واختبارها محلياً (SMTP Testing)." },
      { time: "الساعة 4", topic: "حماية الجدران", action: "تنفيذ جدران الحماية برمجياً ضد هجمات الـ Brute Force والتصيد." },
      { time: "الساعة 5", topic: "نظام الـ Backups", action: "بناء استراتيجية نسخ احتياطي يدوية وآلية لضمان بقاء المشاريع حية للأبد." },
    ],
    output: "موقع خفيف وسريع كالصاروخ + مؤمّن بالكامل + نسخة احتياطية لا تُفقد."
  },
];

const phase2Sessions = [
  {
    num: 5, title: "المشروع الأول — الموقع التعريفي (Corporate Site)", icon: Globe,
    image: "https://i.ibb.co/gZrSL5ZY/Gemini-Generated-Image-18iehj18iehj18ie.png",
    goal: "المشروع الأكثر طلباً في سوق العمل الحر — أي شركة في العالم تحتاج موقعاً تعريفياً احترافياً!",
    rows: [
      { time: "الساعة 1", topic: "التخطيط والـ Wireframe", action: "تحليل فكرة الشركة. اختيار الهيكل العام لتجربة مستخدم (UX) سلسة." },
      { time: "الساعة 2-3", topic: "الهيدر والفوتر", action: "تخصيص Header & Footer عبر الكود وبناء قائمة تنقل استثنائية." },
      { time: "الساعة 4", topic: "المحتوى بمساعدة الـ AI", action: "توليد النصوص الدعائية وتنسيق الصور وبناء أقسام (عنا، الخدمات، الشركاء)." },
      { time: "الساعة 5", topic: "التجاوب والمراجعة", action: "تظبيط الموقع بالكامل ليتوافق مع كل الشاشات (Responsive Design) ثم توثيقه." },
    ],
    output: "موقع شركة فاخر ومتجاوب + موثق على GitHub = أول عمل في البورتفوليو.",
    price: "من 300$ إلى 1,500$ حسب العميل"
  },
  {
    num: 6, title: "المشروع الثاني — آلة الأرباح (E-Commerce)", icon: ShoppingCart,
    image: "https://i.ibb.co/F49hWD6V/Gemini-Generated-Image-mb2xrsmb2xrsmb2x.png",
    goal: "أعلى مشاريع الووردبريس ربحاً! متجر إلكتروني ضخم بمواصفات المتاجر العالمية.",
    rows: [
      { time: "الساعة 1", topic: "تجهيز WooCommerce", action: "تسطيب المكونات. تخصيص هيكل المتجر (الرئيسية، التصنيفات، الفلاتر)." },
      { time: "الساعة 2-3", topic: "إدارة المنتجات", action: "إدخال منتجات (بسيطة / متغيرة / رقمية). بناء تصفية متقدمة للمنتجات." },
      { time: "الساعة 4", topic: "دورة البيع (Checkout)", action: "تصميم صفحة الدفع باحترافية لتقليل معدل الهجر + تفعيل كوبونات الخصم." },
      { time: "الساعة 5", topic: "بوابات الدفع", action: "تفعيل Stripe/PayPal (Sandbox Mode) لتجربة دورة شراء فعلية كاملة." },
    ],
    output: "متجر إلكتروني متكامل بالدفع الإلكتروني = ثاني عمل في البورتفوليو.",
    price: "من 500$ إلى 3,000$ حسب حجم المتجر"
  },
  {
    num: 7, title: "المشروع الثالث — المنصة التعليمية (LMS)", icon: School,
    image: "https://i.ibb.co/FGwJ7FX/Gemini-Generated-Image-ug6xh2ug6xh2ug6x.png",
    goal: "أكاديمية رقمية على غرار Udemy! تعلم كيف تبني منصتك التعليمية الخاصة أو تبنيها لأي عميل.",
    rows: [
      { time: "الساعة 1-2", topic: "تأسيس الـ LMS", action: "العمل مع Tutor LMS وبناء لوحات تحكم للطلاب والمعلمين." },
      { time: "الساعة 3", topic: "إنشاء المحتوى التعليمي", action: "استخدام الـ AI لإنشاء محاور دورة كاملة بنظام الدروس والاختبارات." },
      { time: "الساعة 4", topic: "نظام الشهادات الآلي", action: "تخصيص توليد شهادات PDF ديناميكية بمعلومات الطالب تلقائياً." },
      { time: "الساعة 5", topic: "ربط الدفع بالدورة", action: "دمج المنصة مع WooCommerce — لا فتح للدورة إلا بعد الدفع!" },
    ],
    output: "منصة تعليمية بشهادات آلية ونظام دفع = ثالث عمل في البورتفوليو.",
    price: "من 800$ إلى 5,000$ حسب حجم المنصة"
  },
  {
    num: 8, title: "المشروع الرابع — نظام الحجوزات السحابي (Booking System)", icon: CalendarCheck,
    image: "https://i.ibb.co/hRKDyfpG/Gemini-Generated-Image-p8nud1p8nud1p8nu.png",
    goal: "نظام حجوزات مواعيد ذكي للعيادات والصالونات والمراكز المتخصصة — من أكثر المشاريع طلباً!",
    rows: [
      { time: "الساعة 1-2", topic: "محرك الحجوزات", action: "بناء واجهة مخصصة وتخصيص الـ Calendar برمجياً وتحديد أوقات الدوام." },
      { time: "الساعة 3", topic: "تسلسل الحجز البرمجي", action: "اختيار الطبيب/الموظف ← اختيار الخدمة والميعاد ← إصدار فاتورة + إشعار." },
      { time: "الساعة 4", topic: "الختام وضبط الأداء", action: "مراجعة أداء المشاريع الـ 4 وربط كل النهايات وإنهاء التوثيق." },
      { time: "الساعة 5", topic: "🎉 احتفال التخرج", action: "رفع البورتفوليو بالكامل على GitHub — مبروك! أنت الآن WordPress Freelancer!" },
    ],
    output: "نظام حجوزات متكامل = رابع عمل + بورتفوليو GitHub نهائي جاهز.",
    price: "من 600$ إلى 4,000$ حسب التخصص"
  },
];

const philosophy = [
  { icon: Target, title: "التعلم بالعمل", desc: "لا توجد دروس نظرية بحتة. كل ساعة هي ساعة عمل حقيقية — كأنك تشتغل على مشروع لعميل فعلي." },
  { icon: Brain, title: "عقلية المطور", desc: "تعلم كيف تفكر كمبرمج يحل المشكلات بأدوات الذكاء الاصطناعي مش مبرمج يحفظ أكواد." },
  { icon: BookOpen, title: "التوثيق هو المفتاح", desc: "مشروع بدون GitHub هو مشروع لم يحدث. التوثيق هو ما يبيع خدمتك ويثبت احترافيتك للعميل." },
];

const techStack = [
  "WordPress", "WooCommerce", "PHP", "MySQL", "HTML5", "CSS3",
  "JavaScript", "GitHub", "Git", "Cursor AI", "ChatGPT", "Elementor"
];

const faqs = [
  { q: "هل أحتاج لخبرة مسبقة في البرمجة؟", a: "إطلاقاً لا! هذا المنهج مصمم ليأخذك من مستوى الصفر تماماً. تركيزنا على فهم \"المنطق البرمجي\" (Logic) وليس حفظ الأكواد. ستتعلم كيف تستخدم أدوات الذكاء الاصطناعي لكتابة الكود المعقد بدلاً عنك. كل اللي محتاجه هو لابتوب واتصال بالإنترنت ورغبة حقيقية في التعلم." },
  { q: "كم ساعة أحتاج أسبوعياً؟ وهل يناسب اللي بيشتغل؟", a: "كل حصة ورشة عمل تتراوح بين 3 إلى 5 ساعات مستمرة (نظام ماراثوني). المعسكر مصمم ليناسب الموظفين والطلاب — كل اللي محتاجه هو تفرّغ ليوم الحصة وتجهز قهوتك للعمل المتواصل." },
  { q: "ماذا لو واجهتني مشكلة تقنية أثناء العمل؟", a: "ده أحلى جزء! المشاكل التقنية هي فرصتك الذهبية للتعلم. في الحصة الثالثة هنتعلم مهارات Debugging المتقدمة وكيف نستخدم الـ AI لتحليل وحل أي خطأ. بالإضافة لده، فيه دعم مباشر عبر واتساب طوال فترة المعسكر." },
  { q: "هل سأتمكن من العمل كفريلانسر فعلاً بعد المعسكر؟", a: "هذا هو الهدف الأساسي! ستخرج بـ 4 مشاريع احترافية كاملة في بورتفوليو على GitHub. هذه المشاريع ليست تمارين — هي نفس أنواع المشاريع التي يدفع العملاء مقابلها من 300$ إلى 5,000$. ستتعلم أيضاً كيف تسعّر خدماتك وكيف تبدأ على منصات العمل الحر." },
  { q: "ما هي متطلبات الانضمام (الأجهزة والبرامج)؟", a: "كل اللي محتاجه: لابتوب (ويندوز أو ماك) بمواصفات متوسطة على الأقل (8GB RAM)، اتصال إنترنت مستقر، حساب Gmail، وطموح ورغبة حقيقية في التغيير! كل البرامج والأدوات المستخدمة مجانية بالكامل وهنسطّبها مع بعض في أول حصة." },
];

/* ────────────────────── helper components ────────────────────── */

function SectionBadge({ children, color = "teal" }) {
  const colors = {
    teal: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    red: "bg-red-500/10 text-red-300 border-red-500/20",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
}

function SessionCard({ session, phaseColor }) {
  const [open, setOpen] = useState(false);
  const Icon = session.icon;
  const borderColor = phaseColor === "teal" ? "border-teal-500/30" : "border-blue-500/30";
  const accentBg = phaseColor === "teal" ? "from-teal-500/20 to-teal-600/5" : "from-blue-500/20 to-blue-600/5";
  const numBg = phaseColor === "teal" ? "bg-teal-500" : "bg-blue-500";

  return (
    <motion.div
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl border ${borderColor} bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 hover:border-opacity-60`}
    >
      {/* Session image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img src={session.image} alt={session.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
        <div className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl ${numBg} text-sm font-black text-white shadow-lg`}>
          {session.num}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accentBg}`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white leading-tight">{session.title}</h4>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{session.goal}</p>
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-2xl bg-zinc-800/60 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-800"
        >
          <span>🗓️ عرض الجدول الزمني</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-2">
                {session.rows.map((row, i) => (
                  <div key={i} className="flex gap-3 rounded-xl bg-zinc-800/40 p-3">
                    <span className={`mt-0.5 flex h-7 w-16 shrink-0 items-center justify-center rounded-lg ${numBg}/20 text-[11px] font-bold text-white`}>
                      {row.time}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-200">{row.topic}</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{row.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Output */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 p-4">
          <p className="text-sm text-emerald-300 font-semibold">🎁 المخرجات:</p>
          <p className="text-xs text-emerald-200/80 mt-1">{session.output}</p>
        </div>

        {session.price && (
          <div className="flex items-center gap-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 px-4 py-3">
            <span className="text-amber-400 text-sm">💵</span>
            <p className="text-sm text-amber-300 font-semibold">القيمة السوقية: {session.price}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-right"
      >
        <span className="text-base font-semibold text-zinc-200">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ════════════════════ MAIN PAGE ════════════════════ */

export default function WordPressBootcampPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative px-4 pt-16 pb-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center space-y-8">
            {/* Banner image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/20"
            >
              <img
                src="https://i.ibb.co/N2pMVZJH/Gemini-Generated-Image-3m9jn83m9jn83m9j.png"
                alt="WordPress AI Bootcamp Banner"
                className="w-full max-h-[350px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <SectionBadge color="teal">
                <Rocket className="h-3.5 w-3.5" /> معسكر تدريبي مكثف — لايف 100%
              </SectionBadge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                معسكر الووردبريس <br />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  الاحترافي
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
                <strong className="text-white">8 خطوات لاحتراف العمل الحر</strong> وجني أرباحك الأولى بقوة الذكاء الاصطناعي
              </p>

              <p className="mx-auto max-w-3xl text-base text-zinc-500 leading-loose">
                أهلاً بك في <strong className="text-zinc-300">التجربة التدريبية الأقوى على مستوى المنطقة</strong> التي ستحولك من مجرد &ldquo;مستخدم عادي للووردبريس&rdquo; إلى <strong className="text-zinc-300">مطور ويب متكامل (Full-Stack WordPress Freelancer)</strong> قادر على بناء أي موقع يتخيله العميل. هنا لا نتعلم نظرياً، بل <strong className="text-zinc-300">نحاكي سوق العمل الحقيقي</strong> ونبني <strong className="text-teal-400">4 مشاريع ضخمة من الصفر</strong> بالذكاء الاصطناعي!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/201026097345?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%B2%D9%8A%D8%A7%D8%AF%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%AD%D8%AC%D8%B2%20%D9%85%D9%82%D8%B9%D8%AF%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%B3%D9%83%D8%B1%20%D8%A7%D9%84%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition-all hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 transition group-hover:rotate-12" />
                🚀 احجز مقعدك الآن عبر واتساب
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-4 text-sm font-semibold text-zinc-300 transition hover:border-teal-500/50 hover:text-teal-400 hover:bg-teal-500/5"
              >
                📚 تصفح المنهج التفصيلي
                <ArrowLeft className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ═══════════ TARGET AUDIENCE ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center space-y-3">
              <SectionBadge color="blue">👇 مصمم خصيصاً لك</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">هذا المعسكر مصمم خصيصاً لك إذا كنت...</h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {targetAudience.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all hover:border-teal-500/30 hover:bg-zinc-900/80"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/10 transition-colors group-hover:from-teal-500/30 group-hover:to-blue-500/20">
                      <Icon className="h-6 w-6 text-teal-400" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ WHY DIFFERENT ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center space-y-3">
              <SectionBadge color="red">🎯 لماذا نحن مختلفون</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">لماذا هذا المعسكر ليس &ldquo;مجرد كورس&rdquo; آخر؟</h2>
              <p className="mx-auto max-w-3xl text-base text-zinc-500 leading-relaxed">
                في هذا المعسكر، نحن نلغي فكرة &ldquo;شاهد الفيديو وجرب لاحقاً&rdquo;. أنت تدخل في وضع <strong className="text-zinc-300">العمل الفوري (Hands-on Action)</strong> منذ اللحظة الأولى. <strong className="text-zinc-300">أنت لا تتعلم ووردبريس فقط، بل تتعلم كيف تبيع خدماتك وتبني بيزنس حقيقي.</strong>
              </p>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    custom={i}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 text-center transition-all hover:border-red-500/20"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/15 to-orange-500/10">
                      <Icon className="h-7 w-7 text-red-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ STATS ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center space-y-3">
              <SectionBadge color="purple">📊 الأرقام</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">أرقام تتحدث عن نفسها</h2>
            </motion.div>
            <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    custom={i}
                    className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all hover:border-purple-500/30"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-3xl font-black text-white">{s.value}</p>
                    <p className="mt-1 text-sm font-bold text-zinc-300">{s.label}</p>
                    <p className="mt-1 text-xs text-zinc-500">{s.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ OUTCOMES ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10 text-center space-y-3">
              <SectionBadge color="amber">💼 الغنائم</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">ماذا ستمتلك في نهاية الرحلة؟</h2>
              <p className="text-base text-zinc-500">لن تخرج بشهادة توضع على الحائط فقط، بل <strong className="text-zinc-300">ببيزنس كامل</strong> وخدمات تبدأ أسعارها من <strong className="text-amber-400">500$</strong> وأكثر</p>
            </motion.div>
            <div className="space-y-4">
              {outcomes.map((o, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-amber-500/20"
                >
                  <span className="text-2xl shrink-0">{o.emoji}</span>
                  <p className="text-sm text-zinc-400 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ CURRICULUM ═══════════ */}
        <section id="curriculum" className="px-4 py-20 lg:px-8 scroll-mt-24">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-14 text-center space-y-3">
              <SectionBadge color="teal">🗺️ المنهج التفصيلي</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">رحلتك داخل المعسكر</h2>
              <p className="mx-auto max-w-2xl text-base text-zinc-500">
                كل حصة عبارة عن <strong className="text-zinc-300">ورشة عمل متكاملة (حتى 5 ساعات)</strong>. هنا لا توجد أسرار، إليك الشفافية الكاملة!
              </p>
            </motion.div>

            {/* Phase 1 */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-teal-500 animate-pulse" />
                <h3 className="text-xl font-bold text-teal-400">المرحلة الأولى: التأسيس، إتقان الأكواد، وثورة الذكاء الاصطناعي</h3>
                <span className="text-xs text-zinc-600 font-mono">(الحصص 1 - 4)</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {phase1Sessions.map((s) => (
                  <SessionCard key={s.num} session={s} phaseColor="teal" />
                ))}
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div variants={fadeUp} className="mt-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
                <h3 className="text-xl font-bold text-blue-400">المرحلة الثانية: ماراثون المشاريع العملاقة — محاكاة سوق العمل الحقيقي</h3>
                <span className="text-xs text-zinc-600 font-mono">(الحصص 5 - 8)</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {phase2Sessions.map((s) => (
                  <SessionCard key={s.num} session={s} phaseColor="blue" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 text-center space-y-3">
              <SectionBadge color="amber">💰 الأسعار</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">خطط الأسعار — عرض الإطلاق</h2>
            </motion.div>

            {/* Limited spots alert */}
            <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-xl rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 text-center">
              <p className="text-base font-bold text-amber-400">🔥 العدد محدود جداً: أقصى عدد للجروب 20 شخص فقط!</p>
              <p className="mt-2 text-sm text-amber-300/70">
                لأن المعسكر <strong>لايف 100%</strong> ولازم أقدر أرد على أسئلتك وأتابع معاك شخصياً. <strong>النوعية فوق الكمية دائماً.</strong>
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Standard Plan */}
              <motion.div
                variants={scaleIn}
                custom={0}
                className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all hover:border-zinc-700"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800">
                    <Star className="h-6 w-6 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">⭐ الباقة الأساسية (Standard)</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-zinc-500">السعر الأصلي</p>
                  <p className="text-lg font-bold text-zinc-600 line-through">4,500 جنيه مصري</p>
                  <p className="mt-1 text-sm text-teal-400 font-semibold">🎁 سعر عرض الإطلاق</p>
                  <p className="text-4xl font-black text-white mt-1">2,200 <span className="text-lg font-normal text-zinc-400">جنيه مصري</span></p>
                  <p className="mt-1 text-sm text-zinc-500">≈ <strong className="text-zinc-300">45 دولار أمريكي</strong> (للعرب خارج مصر)</p>
                </div>

                <div className="mb-8 space-y-3 border-t border-zinc-800 pt-6">
                  {[
                    "8 حصص لايف مكثفة (+40 ساعة عملي)",
                    "بناء 4 مشاريع كاملة من الصفر",
                    "تعلم أدوات الـ AI (Cursor / ChatGPT)",
                    "توثيق احترافي على GitHub لكل مشروع",
                    "دعم عبر واتساب أثناء فترة المعسكر",
                    "شهادة إتمام المعسكر",
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-sm text-zinc-400">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/201026097345?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%B2%D9%8A%D8%A7%D8%AF%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%B3%D9%83%D8%B1%20%D8%A7%D9%84%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3"
                  target="_blank" rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-700 py-3.5 text-sm font-bold text-white transition hover:bg-zinc-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  احجز الباقة الأساسية
                </a>
              </motion.div>

              {/* VIP Plan */}
              <motion.div
                variants={scaleIn}
                custom={1}
                className="relative rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/5 via-zinc-900/80 to-zinc-900/60 p-8 transition-all hover:border-amber-500/60"
              >
                {/* Popular badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    ⚡ الأكثر طلباً
                  </span>
                </div>

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15">
                    <Crown className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">👑 باقة VIP (متابعة يومية شخصية)</h3>
                    <p className="text-xs text-amber-400/80">للناس اللي عاوزة الدلع والمتابعة الكاملة 🔥</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-black text-white mt-1">5,000 <span className="text-lg font-normal text-zinc-400">جنيه مصري</span></p>
                  <p className="mt-1 text-sm text-zinc-500">≈ <strong className="text-zinc-300">120 دولار أمريكي</strong> (للعرب خارج مصر)</p>
                </div>

                <div className="mb-8 space-y-3 border-t border-amber-500/10 pt-6">
                  {[
                    { text: "كل مميزات الباقة الأساسية بالكامل", plus: false },
                    { text: "مراجعة شخصية (1-on-1 Review) لبروفايل GitHub بعد الكورس — نص ساعة كاملة وجهاً لوجه", plus: true },
                    { text: "دعم فني خاص على واتساب لمدة شهر كامل بعد انتهاء المعسكر", plus: true },
                    { text: "مكتبة الأكواد الجاهزة (Custom Snippets) — كل الـ Code Snippets في ملف منظم", plus: true },
                    { text: "ملف البرومبتات السرية (AI Prompts) — كل الـ Prompts جاهزة للاستخدام الفوري", plus: true },
                    { text: "متابعة يومية شخصية طوال فترة المعسكر — أتابع تقدمك يوم بيوم وأوجهك", plus: true },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {f.plus ? (
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">+</span>
                      ) : (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      )}
                      <span className={`text-sm ${f.plus ? "text-amber-200/80 font-semibold" : "text-zinc-400"}`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/201026097345?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%B2%D9%8A%D8%A7%D8%AF%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%AD%D8%AC%D8%B2%20%D8%A8%D8%A7%D9%82%D8%A9%20VIP%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%B3%D9%83%D8%B1%20%D8%A7%D9%84%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3"
                  target="_blank" rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition hover:shadow-xl hover:scale-[1.02]"
                >
                  <Crown className="h-4 w-4" />
                  👑 احجز باقة VIP الآن
                </a>
              </motion.div>
            </div>

            {/* ROI + Guarantee */}
            <motion.div variants={fadeUp} className="mt-10 space-y-6">
              <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 text-center">
                <p className="text-base text-teal-300 leading-relaxed">
                  ⚡ <strong>لا تفكر كثيراً!</strong> أنت تستثمر مقابل مهارة تدر عليك <strong>من 300$ إلى 5,000$</strong> لكل مشروع واحد فقط.
                  هذا يعني أن <strong>أول عميل واحد</strong> بعد التخرج سيُعيد لك <strong>أضعاف استثمارك</strong>!
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
                  <Shield className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">🛡️ ضمان استرجاع الفلوس بالكامل</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
                  لو حضرت <strong className="text-zinc-200">أول حصتين (أكتر من 10 ساعات تدريب!)</strong> وحسيت إنك مش بتستفاد — <strong className="text-emerald-400">فلوسك هترجعلك بالكامل</strong> بدون أي أسئلة! ✋
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  ⚡ ده معناه إنك بتجرب <strong>+10 ساعات من التدريب العملي مجاناً تماماً</strong> قبل ما تاخد قرارك النهائي.
                </p>
              </div>

              <p className="text-center text-xs text-zinc-600">
                ⚠️ <strong>تنبيه مهم:</strong> الأماكن محدودة بـ <strong>20 شخص فقط</strong> كحد أقصى. العرض متاح لأول <strong>15 مشترك</strong> أو لمدة <strong>3 أيام</strong> من تاريخ الإعلان — أيهما أقرب.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ PHILOSOPHY ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-5xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center space-y-3">
              <SectionBadge color="emerald">💡 فلسفتنا</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">فلسفة المعسكر</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3">
              {philosophy.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 text-center transition-all hover:border-emerald-500/20"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ TECH STACK ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-4xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10 space-y-3">
              <SectionBadge color="blue">🛠️ التقنيات</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">ترسانة الأدوات والتقنيات</h2>
              <p className="text-base text-zinc-500">نحن نستخدم أحدث ما توصلت إليه التكنولوجيا لتكون دائماً بعشر خطوات أمام منافسيك.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="rounded-full border border-zinc-700 bg-zinc-800/60 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-blue-500/30 hover:text-blue-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ INSTRUCTOR ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 text-center space-y-3">
              <SectionBadge color="purple">👨‍🏫 المحاضر</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">من هو قائدك ومرشدك في هذه الرحلة؟</h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
            >
              <div className="shrink-0 text-center">
                <div className="relative">
                  <img
                    src="https://avatars.githubusercontent.com/u/274340476?v=4"
                    alt="زياد شلبي"
                    className="h-40 w-40 rounded-full border-4 border-teal-500/30 object-cover shadow-xl shadow-teal-500/10"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-[10px] font-bold text-white">
                    Full-Stack Engineer
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a href="https://wa.me/201026097345" target="_blank" rel="noreferrer"
                    className="rounded-xl bg-emerald-500/15 p-2.5 text-emerald-400 transition hover:bg-emerald-500/25">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                  <a href="mailto:me@zeyadshalaby.cloud"
                    className="rounded-xl bg-red-500/15 p-2.5 text-red-400 transition hover:bg-red-500/25">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-right">
                <div>
                  <h3 className="text-2xl font-bold text-white">زياد شلبي 👋</h3>
                  <p className="text-sm text-teal-400 font-semibold">Full-Stack Software Engineer</p>
                </div>
                <p className="text-sm text-zinc-500 italic leading-relaxed">
                  &ldquo;مهمتي ليست تلقينك الكود، بل اختصار سنوات من التخبط والأخطاء، ووضعك على المسار المباشر والصحيح للاحتراف وجني الأرباح التقنية.&rdquo;
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-teal-400 font-bold mt-0.5">🚀</span>
                    <span><strong className="text-zinc-300">مطور برمجيات شامل:</strong> متخصص في بناء أنظمة Backend متقدمة باستخدام Go و Laravel، وواجهات مستخدم تفاعلية عبر Next.js و Flutter.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-teal-400 font-bold mt-0.5">🧠</span>
                    <span><strong className="text-zinc-300">عقلية هندسية صارمة:</strong> جودة الكود و Clean Architecture ومبادئ الـ SOLID — لأن كل مشروع لازم يكون على أعلى مستوى.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-teal-400 font-bold mt-0.5">🤝</span>
                    <span><strong className="text-zinc-300">شريك نجاحك:</strong> خلاصة خبراتي ومعاناتي في سوق العمل الحر مكثفة في هذا المعسكر.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-teal-400 font-bold mt-0.5">🌍</span>
                    <span><strong className="text-zinc-300">رؤيتي:</strong> تمكين جيل جديد من المطورين العرب لاقتحام السوق العالمي بأعمال تنافس أكبر الشركات.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section className="px-4 py-20 lg:px-8">
          <motion.div className="mx-auto max-w-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10 text-center space-y-3">
              <SectionBadge color="teal">❓ الأسئلة الشائعة</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">الأسئلة الشائعة (FAQ)</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="px-4 py-24 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              هل أنت مستعد لنقل مسارك المهني <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">للمستوى التالي؟</span>
            </h2>
            <p className="text-base text-zinc-500 leading-relaxed max-w-xl mx-auto">
              لا تنتظر &ldquo;الوقت المناسب&rdquo; — الوقت المناسب هو <strong className="text-white">الآن!</strong><br />
              كل يوم يمر بدون ما تبدأ، هو يوم ضايع كان ممكن يكون فيه أول عميل ليك.<br />
              <strong className="text-zinc-300">المقاعد محدودة جداً</strong> لضمان الجودة والمتابعة الشخصية.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://wa.me/201026097345?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%B2%D9%8A%D8%A7%D8%AF%D8%8C%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%AD%D8%AC%D8%B2%20%D9%85%D9%82%D8%B9%D8%AF%20%D9%81%D9%8A%20%D9%85%D8%B9%D8%B3%D9%83%D8%B1%20%D8%A7%D9%84%D9%88%D9%88%D8%B1%D8%AF%D8%A8%D8%B1%D9%8A%D8%B3"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-emerald-600/25 transition-all hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105"
              >
                <MessageCircle className="h-6 w-6 transition group-hover:rotate-12" />
                🚀 احجز مقعدك الآن عبر واتساب
              </a>
              <a
                href="https://wa.me/201026097345"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-300"
              >
                <Phone className="h-4 w-4" />
                📞 اتصل بينا: 01026097345
              </a>
            </div>

            <div className="pt-10 border-t border-zinc-800/50">
              <p className="text-xs text-zinc-600">صُنع بـ ❤️ بواسطة <strong>زياد شلبي</strong> | جميع الحقوق محفوظة © 2025</p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
