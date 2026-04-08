-- ============================================
-- 1. تمكين الامتدادات المهمة
-- ============================================
create extension if not exists "uuid-ossp";

-- ============================================
-- 2. جدول المشاريع (Portfolio)
-- ============================================
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  image_url text,
  tech_stack text[] default '{}',
  github_link text,
  live_demo text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- 3. جدول البروفايل (للمستخدمين - مرتبط بـ auth.users)
-- ============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  avatar_url text,
  bio text,
  role text default 'student' check (role in ('student', 'instructor', 'admin')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- 4. جدول الكورسات
-- ============================================
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  instructor_id uuid references public.profiles(id) on delete set null,
  price numeric default 0,
  level text check (level in ('beginner', 'intermediate', 'advanced')),
  thumbnail_url text,
  category text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- 5. جدول الدروس
-- ============================================
create table public.lessons (
  id uuid default gen_random_uuid() primary key,
  course_id uuid references public.courses(id) on delete cascade,
  title text not null,
  description text,
  video_url text,                      -- رابط الفيديو (من Storage أو خارجي)
  content text,                        -- شرح نصي أو ماركداون
  duration integer,                    -- المدة بالدقائق
  "order" integer default 0,
  is_free boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ============================================
-- 6. جدول تسجيل الطلاب في الكورسات
-- ============================================
create table public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  enrolled_at timestamptz default now(),
  progress numeric default 0 check (progress >= 0 and progress <= 100),
  completed_at timestamptz,
  unique(user_id, course_id)
);

-- ============================================
-- 7. جدول تقدم الطالب في كل درس (اختياري لكن مفيد)
-- ============================================
create table public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  enrollment_id uuid references public.enrollments(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete cascade,
  watched boolean default false,
  watched_at timestamptz,
  unique(enrollment_id, lesson_id)
);

-- ============================================
-- 8. دوال لتحديث updated_at تلقائياً
-- ============================================
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_projects_updated_at before update on public.projects
  for each row execute function update_updated_at_column();

create trigger update_profiles_updated_at before update on public.profiles
  for each row execute function update_updated_at_column();

create trigger update_courses_updated_at before update on public.courses
  for each row execute function update_updated_at_column();

create trigger update_lessons_updated_at before update on public.lessons
  for each row execute function update_updated_at_column();

-- ============================================
-- 9. تفعيل Row Level Security (RLS) على كل الجداول
-- ============================================
alter table public.projects enable row level security;
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

-- ============================================
-- 10. سياسات RLS (أذونات)
-- ============================================

-- المشاريع: الكل يقدر يشوفها، لكن التعديل والإضافة للأدمن فقط (أو يمكنك تعديل حسب حاجتك)
create policy "المشاريع عامة للقراءة" on public.projects
  for select using (true);

create policy "المشاريع - الإضافة والتعديل للأدمن" on public.projects
  for all using (auth.uid() in (select id from public.profiles where role = 'admin'));

-- البروفايل: المستخدم يقرأ و يعدل بروفايله فقط
create policy "البروفايل عام للقراءة" on public.profiles
  for select using (true);

create policy "تحديث البروفايل للمستخدم نفسه" on public.profiles
  for update using (auth.uid() = id);

create policy "إدراج البروفايل للمستخدم نفسه" on public.profiles
  for insert with check (auth.uid() = id);

-- الكورسات: المنشورة فقط تظهر للكل، المسودة للمدرس فقط
create policy "عرض الكورسات المنشورة" on public.courses
  for select using (published = true or auth.uid() = instructor_id or (auth.uid() in (select id from public.profiles where role = 'admin')));

create policy "إدارة الكورسات للمدرس أو الأدمن" on public.courses
  for all using (auth.uid() = instructor_id or (auth.uid() in (select id from public.profiles where role = 'admin')));

-- الدروس: منشورة تلقائياً مع الكورس المنشور
create policy "عرض الدروس للكورسات المنشورة" on public.lessons
  for select using (
    exists (select 1 from public.courses where courses.id = lessons.course_id and (courses.published = true or courses.instructor_id = auth.uid()))
  );

create policy "إدارة الدروس للمدرس أو الأدمن" on public.lessons
  for all using (
    exists (select 1 from public.courses where courses.id = lessons.course_id and (courses.instructor_id = auth.uid() or auth.uid() in (select id from public.profiles where role = 'admin')))
  );

-- التسجيل: المستخدم يشترك بنفسه، المدرس يطلع على طلابه
create policy "عرض التسجيلات للطالب نفسه أو المدرس" on public.enrollments
  for select using (auth.uid() = user_id or auth.uid() in (select instructor_id from public.courses where id = course_id));

create policy "تسجيل الطالب لنفسه" on public.enrollments
  for insert with check (auth.uid() = user_id);

create policy "تحديث التقدم للطالب نفسه" on public.enrollments
  for update using (auth.uid() = user_id);

-- تقدم الدروس: الطالب يعدل فقط
create policy "عرض تقدم الدروس للطالب أو المدرس" on public.lesson_progress
  for select using (
    exists (select 1 from public.enrollments where enrollments.id = enrollment_id and (enrollments.user_id = auth.uid() or auth.uid() in (select instructor_id from public.courses where id = enrollments.course_id)))
  );

create policy "تحديث تقدم الدروس للطالب" on public.lesson_progress
  for all using (exists (select 1 from public.enrollments where enrollments.id = enrollment_id and enrollments.user_id = auth.uid()));

-- ============================================
-- 11. إنشاء Storage Buckets للملفات
-- ============================================
insert into storage.buckets (id, name, public) values ('project-images', 'project-images', true);
insert into storage.buckets (id, name, public) values ('course-thumbnails', 'course-thumbnails', true);
insert into storage.buckets (id, name, public) values ('lesson-videos', 'lesson-videos', false);  -- خاص للفيديوهات

-- سياسات الـ Storage
create policy "الكل يقدر يقرأ صور المشاريع" on storage.objects
  for select using (bucket_id = 'project-images');

create policy "الأدمن فقط يرفع صور المشاريع" on storage.objects
  for insert with check (bucket_id = 'project-images' and auth.uid() in (select id from public.profiles where role = 'admin'));

create policy "الكل يقرأ صور الكورسات" on storage.objects
  for select using (bucket_id = 'course-thumbnails');

create policy "المدرس أو الأدمن يرفع صور الكورسات" on storage.objects
  for insert with check (bucket_id = 'course-thumbnails' and auth.uid() in (select id from public.profiles where role in ('instructor', 'admin')));

-- فيديوهات الدروس: المدرس أو الأدمن فقط يقرأ/يكتب
create policy "المدرس يقرأ فيديوهات دروسه" on storage.objects
  for select using (bucket_id = 'lesson-videos' and auth.uid() in (select id from public.profiles where role in ('instructor', 'admin')));

create policy "المدرس يرفع فيديوهات" on storage.objects
  for insert with check (bucket_id = 'lesson-videos' and auth.uid() in (select id from public.profiles where role in ('instructor', 'admin')));

-- ============================================
-- 12. إنشاء فهارس (Indexes) لتحسين الأداء
-- ============================================
create index idx_courses_instructor on public.courses(instructor_id);
create index idx_courses_published on public.courses(published);
create index idx_lessons_course on public.lessons(course_id);
create index idx_enrollments_user on public.enrollments(user_id);
create index idx_enrollments_course on public.enrollments(course_id);
create index idx_lesson_progress_enrollment on public.lesson_progress(enrollment_id);

-- ============================================
-- 13. دالة لتسجيل البروفايل تلقائياً عند إنشاء مستخدم جديد
-- ============================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- 14. (اختياري) نموذج لإدراج بيانات تجريبية
-- ============================================
insert into public.projects (title, description, tech_stack, github_link, live_demo)
values 
('تطبيق إدارة المهام', 'تطبيق كامل لإدارة المهام مع فريق العمل', ARRAY['React', 'Supabase', 'Tailwind'], 'https://github.com/yourusername/task-app', 'https://task-app.demo.com'),
('منصة تعليمية', 'منصة للكورسات أونلاين', ARRAY['Next.js', 'Supabase', 'TypeScript'], 'https://github.com/yourusername/ed-platform', 'https://ed-platform.demo.com');
-- Create contact_messages table for the contact form
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (submit the form)
CREATE POLICY "Allow public insert on contact_messages"
ON public.contact_messages FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can read messages
CREATE POLICY "Allow admin read on contact_messages"
ON public.contact_messages FOR SELECT
USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));
-- Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    image_url TEXT,
    content TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    light_color TEXT,
    dark_color TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access on testimonials" 
ON public.testimonials FOR SELECT 
USING (true);

-- Insert mock data based on the previous hardcoded values
INSERT INTO public.testimonials (name, role, image_url, content, rating, light_color, dark_color) VALUES 
('محمد علي', 'مؤسس - E-commerce Platform', 'https://i.pravatar.cc/150?img=1', 'عملت زياد مع فريقنا على تطوير منصة البيع الإلكترونية. انقذ المشروع من الفشل وسلمه في الوقت المحدد. الشخص كفء جداً وسهل التعامل معه.', 5, 'bg-blue-100 border-blue-300', 'dark:bg-blue-950/40 dark:border-blue-800/50'),
('ليلى محمود', 'مدير المشاريع - Tech Agency', 'https://i.pravatar.cc/150?img=5', 'أفضل تعاون على الإطلاق! زياد استطاع فهم المتطلبات بسرعة وتسليم كود نظيف وآمن. سأعمل معه مجدداً في أي فرصة.', 5, 'bg-pink-100 border-pink-300', 'dark:bg-pink-950/40 dark:border-pink-800/50'),
('أحمد حسن', 'CTO - Fintech Startup', 'https://i.pravatar.cc/150?img=3', 'معماريته للأنظمة الموزعة ممتازة. تعامل مع مشاكل الأداء بحنكة عالية وسلمنا solving الأمثل. مطور حقاً متفاني.', 5, 'bg-green-100 border-green-300', 'dark:bg-green-950/40 dark:border-green-800/50'),
('فاطمة خميس', 'مدير تطوير - SaaS Company', 'https://i.pravatar.cc/150?img=9', 'احترافيته تخطت توقعاتنا بكثير. اتواصل معه سهل والتطبيق اللي سلمه كان أكثر من رائع. خمسة نجوم من قلبي.', 5, 'bg-purple-100 border-purple-300', 'dark:bg-purple-950/40 dark:border-purple-800/50'),
('سارة نور', 'صاحبة مشروع - Education Platform', 'https://i.pravatar.cc/150?img=47', 'زياد ساعدني بناء منصة التعليم بتاعتي من الصفر. الدعم بعد التسليم كان ممتاز والنتائج تجاوزت كل توقعاتي تماماً.', 5, 'bg-yellow-100 border-yellow-300', 'dark:bg-yellow-950/40 dark:border-yellow-800/50'),
('إبراهيم رشوان', 'رئيس قسم - Development Team', 'https://i.pravatar.cc/150?img=12', 'بصفتي رئيس فريق، زياد أثبت أنه عضو قيم جداً. إنتاجيته عالية وفهمه التقني عميق جداً. سيصير قائد رائع في المستقبل.', 5, 'bg-orange-100 border-orange-300', 'dark:bg-orange-950/40 dark:border-orange-800/50');
