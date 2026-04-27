"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="loader-container">
      <div className="loader relative scale-75 md:scale-100 flex flex-col items-center gap-8">
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs>
            <linearGradient y2="2" x2="0" y1="62" x1="0" id="grad-primary">
              <stop stopColor="#00FF88" />
              <stop stopColor="#7B2FFF" offset="1" />
            </linearGradient>
            <linearGradient y2="0" x2="0" y1="64" x1="0" id="grad-spin">
              <stop stopColor="#7B2FFF" />
              <stop stopColor="#00FF88" offset="1" />
              <animateTransform 
                repeatCount="indefinite" 
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" 
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" 
                dur="8s" 
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" 
                type="rotate" 
                attributeName="gradientTransform" 
              />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated "Z" Logo */}
        <div className="relative">
          <svg viewBox="0 0 80 80" width="100" height="100" className="drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">
            <path 
              d="M22 24 L58 24 L22 56 L58 56" 
              stroke="url(#grad-primary)" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
              className="dash"
              pathLength="360"
            />
            {/* Spinning Circle around Logo */}
            <circle 
              cx="40" 
              cy="40" 
              r="38" 
              stroke="url(#grad-spin)" 
              strokeWidth="2" 
              fill="none" 
              className="spin opacity-40" 
              pathLength="360" 
            />
          </svg>
        </div>

        {/* Text Part */}
        <div className="relative h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" height="60" width="400" className="overflow-visible">
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="dash"
              style={{
                fontSize: '28px',
                fontWeight: '900',
                fontFamily: 'var(--font-cairo), sans-serif',
                fill: 'none',
                stroke: 'url(#grad-primary)',
                strokeWidth: '1px',
                letterSpacing: '12px',
                textTransform: 'uppercase'
              }}
              pathLength="360"
            >
              ZEYAD SHALABY
            </text>
          </svg>
        </div>

        <div className="mt-4 flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
