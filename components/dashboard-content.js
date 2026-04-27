"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = [
  { name: "سبت", total: 400 },
  { name: "أحد", total: 300 },
  { name: "اثنين", total: 500 },
  { name: "ثلاثاء", total: 450 },
  { name: "أربعاء", total: 600 },
  { name: "خميس", total: 550 },
  { name: "جمعة", total: 700 },
];

const stats = [
  {
    title: "إجمالي الطلاب",
    value: "1,250",
    change: "+12% منذ الشهر الماضي",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "الكورسات النشطة",
    value: "24",
    change: "+2 كورس جديد",
    icon: BookOpen,
    color: "text-green-500",
  },
  {
    title: "الأرباح الشهرية",
    value: "$12,450",
    change: "+18.2% من الشهر الماضي",
    icon: DollarSign,
    color: "text-amber-500",
  },
  {
    title: "ساعات المشاهدة",
    value: "4,200",
    change: "+340 ساعة اليوم",
    icon: Clock,
    color: "text-purple-500",
  },
];

const recentStudents = [
  {
    name: "أحمد علي",
    email: "ahmed@example.com",
    course: "أساسيات Go Lang",
    status: "نشط",
    date: "منذ ساعتين",
  },
  {
    name: "سارة محمد",
    email: "sara@example.com",
    course: "احتراف Next.js",
    status: "مكتمل",
    date: "منذ 5 ساعات",
  },
  {
    name: "محمود حسن",
    email: "mahmoud@example.com",
    course: "Flutter للجميع",
    status: "نشط",
    date: "منذ يوم",
  },
];

export function DashboardContent({ user }) {
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "المستخدم";

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-l from-foreground to-foreground/70 bg-clip-text text-transparent">
            لوحة التحكم العامة
          </h1>
          <p className="text-muted-foreground">مرحباً بك مجدداً {fullName}، إليك نظرة سريعة على أداء أكاديميتك اليوم.</p>
        </div>
        <Avatar className="h-12 w-12 border-2 border-primary/20 p-0.5">
          <AvatarImage src={user?.imageUrl} alt={fullName} />
          <AvatarFallback className="bg-primary/10 text-primary">{user?.firstName?.[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`size-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="size-3 text-green-500" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-border/50 bg-card/50 backdrop-blur-sm min-w-0">
          <CardHeader>
            <CardTitle>معدل التسجيل</CardTitle>
            <CardDescription>عدد الطلاب الجدد خلال الأسبوع الحالي</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
                    cursor={{ fill: 'hsl(var(--muted))', opacity: 0.2 }}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>آخر الطلاب المنضمين</CardTitle>
              <CardDescription>لديك 15 طالب جديد اليوم</CardDescription>
            </div>
            <button className="text-xs text-primary hover:underline flex items-center gap-1">
              عرض الكل <ArrowUpRight className="size-3" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentStudents.map((student) => (
                <div key={student.email} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="mr-4 space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.course}</p>
                  </div>
                  <div className="mr-auto font-medium text-xs text-muted-foreground">
                    {student.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
