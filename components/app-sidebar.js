"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  LayoutDashboard,
  Settings,
  Users,
  Video,
  FileText,
  LogOut,
  ChevronLeft,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items = [
  {
    title: "لوحة التحكم",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "الكورسات",
    url: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "المقالات",
    url: "/dashboard/articles",
    icon: FileText,
  },
  {
    title: "العقود والفواتير",
    url: "/dashboard/contracts/new",
    icon: FileText,
  },
  {
    title: "الطلاب",
    url: "/dashboard/students",
    icon: Users,
  },
  {
    title: "البث المباشر",
    url: "/dashboard/live",
    icon: Video,
  },
  {
    title: "الإعدادات",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="icon" className="border-l border-r-0">
      <SidebarHeader className="h-16 flex items-center justify-center border-b">
        <div className="flex items-center gap-2 px-4 w-full">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            Z
          </div>
          <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-lg tracking-tight">أكاديمية زياد</span>
            <span className="text-xs text-muted-foreground">لوحة المعلم</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">عام</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} className="h-11">
                    <Link href={item.url}>
                      <item.icon className="size-5" />
                      <span className="group-data-[collapsible=icon]:hidden text-md">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="زياد" />
                <AvatarFallback className="rounded-lg">ZS</AvatarFallback>
              </Avatar>
              <div className="mr-3 flex flex-col items-start gap-0.5 group-data-[collapsible=icon]:hidden">
                <span className="font-semibold text-sm">زياد شلبي</span>
                <span className="text-xs text-muted-foreground truncate">me@zeyadshalaby.cloud</span>
              </div>
              <ChevronLeft className="mr-auto size-4 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" side="left" sideOffset={10}>
            <DropdownMenuItem className="cursor-pointer">
              <span>الملف الشخصي</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-destructive">
              <LogOut className="ml-2 size-4" />
              <span>تسجيل الخروج</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
