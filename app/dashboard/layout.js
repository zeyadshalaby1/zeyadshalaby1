import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardLayout({ children }) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full bg-background" dir="rtl">
          <AppSidebar />
          <SidebarInset className="flex flex-col">
            <header className="flex h-16 shrink-0 items-center justify-between border-b px-4 backdrop-blur-md bg-background/50 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-mr-1" />
                <span className="font-semibold text-sm mr-2 hidden md:block text-muted-foreground">لوحة التحكم</span>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 overflow-auto p-6 bg-muted/30">
              {children}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
