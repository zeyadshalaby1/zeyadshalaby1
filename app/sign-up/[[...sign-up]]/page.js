import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Cinematic Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="relative z-10 w-full max-w-md p-4 animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-l from-foreground to-foreground/70 bg-clip-text text-transparent">
            إنشاء حساب جديد
          </h1>
          <p className="text-muted-foreground text-sm">
            انضم إلى رحلة التعلم مع زياد شلبي
          </p>
        </div>

        <div className="flex justify-center bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm normal-case",
                card: "bg-transparent shadow-none border-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "hidden", 
                dividerRow: "hidden",
                footer: "bg-transparent",
                footerActionText: "text-muted-foreground",
                footerActionLink: "text-primary hover:text-primary/90 font-medium",
                formFieldLabel: "text-foreground font-medium mb-1",
                formFieldInput: "bg-background/50 border-border/50 focus:border-primary/50 transition-all",
              },
              variables: {
                colorPrimary: "hsl(var(--primary))",
                colorBackground: "transparent",
                colorText: "hsl(var(--foreground))",
                colorTextSecondary: "hsl(var(--muted-foreground))",
                colorInputBackground: "transparent",
                colorInputText: "hsl(var(--foreground))",
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
