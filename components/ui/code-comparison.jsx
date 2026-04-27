"use client";

import { useEffect, useMemo, useState } from "react"
import { FileIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  lightTheme = "github-light",
  darkTheme = "github-dark",
  highlightColor = "rgba(0, 255, 136, 0.1)"
}) {
  const { theme, systemTheme } = useTheme()
  const [highlightedBefore, setHighlightedBefore] = useState("")
  const [highlightedAfter, setHighlightedAfter] = useState("")

  const selectedTheme = useMemo(() => {
    const currentTheme = theme === "system" ? systemTheme : theme
    return currentTheme === "dark" ? darkTheme : lightTheme
  }, [theme, systemTheme, darkTheme, lightTheme])

  useEffect(() => {
    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki")
        
        // Simplified highlighting without complex transformers to avoid missing dependencies
        const before = await codeToHtml(beforeCode, {
          lang: language,
          theme: selectedTheme,
        })
        const after = await codeToHtml(afterCode, {
          lang: language,
          theme: selectedTheme,
        })
        
        setHighlightedBefore(before)
        setHighlightedAfter(after)
      } catch (error) {
        console.error("Error highlighting code:", error)
        setHighlightedBefore(`<pre class="p-4">${beforeCode}</pre>`)
        setHighlightedAfter(`<pre class="p-4">${afterCode}</pre>`)
      }
    }
    highlightCode()
  }, [beforeCode, afterCode, language, selectedTheme])

  const renderCode = (code, highlighted) => {
    if (highlighted) {
      return (
        <div
          className={cn(
            "bg-background h-full w-full overflow-auto font-mono text-[13px] leading-relaxed",
            "[&>pre]:h-full [&>pre]:py-4 [&>pre]:px-4",
            "[&>pre]:bg-transparent!"
          )}
          dangerouslySetInnerHTML={{ __html: highlighted }} 
        />
      );
    } else {
      return (
        <pre className="bg-background text-foreground h-full overflow-auto p-4 font-mono text-[13px] break-all leading-relaxed">
          {code}
        </pre>
      );
    }
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="group border-primary/20 relative w-full overflow-hidden rounded-3xl border bg-secondary/5 backdrop-blur-xl">
        <div className="relative grid md:grid-cols-2">
          {/* Before Column */}
          <div className="leftside group/left border-primary/10 md:border-r">
            <div className="border-primary/10 bg-black/20 text-muted-foreground flex items-center border-b p-3 px-5 text-xs font-black uppercase tracking-widest">
              <FileIcon className="mr-2 h-4 w-4 text-primary" />
              {filename}
              <span className="ml-auto hidden md:block opacity-50">Old Code</span>
            </div>
            <div className="h-[300px]">
              {renderCode(beforeCode, highlightedBefore)}
            </div>
          </div>
          
          {/* After Column */}
          <div className="rightside group/right border-primary/10 border-t md:border-t-0">
            <div className="border-primary/10 bg-black/20 text-primary flex items-center border-b p-3 px-5 text-xs font-black uppercase tracking-widest">
              <FileIcon className="mr-2 h-4 w-4" />
              {filename}
              <span className="ml-auto hidden md:block opacity-50 text-muted-foreground">New Code</span>
            </div>
            <div className="h-[300px]">
              {renderCode(afterCode, highlightedAfter)}
            </div>
          </div>
        </div>
        
        {/* VS Badge */}
        <div className="border-primary/20 bg-primary text-primary-foreground absolute top-1/2 left-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 font-black text-xs md:flex shadow-[0_0_20px_rgba(0,255,136,0.4)]">
          VS
        </div>
      </div>
    </div>
  );
}
