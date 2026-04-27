"use client";

import React, { useId } from "react";
import { DottedMap } from "@/components/ui/dotted-map";

const markers = [
  { lat: 30.0444, lng: 31.2357, size: 1.8, overlay: { countryCode: "eg", label: "مصر" } },
  { lat: 24.7136, lng: 46.6753, size: 1.8, overlay: { countryCode: "sa", label: "السعودية" } },
  { lat: 25.2048, lng: 55.2708, size: 1.8, overlay: { countryCode: "ae", label: "الإمارات" } },
  { lat: 33.5731, lng: -7.5898, size: 1.8, overlay: { countryCode: "ma", label: "المغرب" } },
  { lat: 52.3676, lng: 4.9041, size: 1.8, overlay: { countryCode: "nl", label: "هولندا" } },
  { lat: 52.5200, lng: 13.4050, size: 1.8, overlay: { countryCode: "de", label: "ألمانيا" } },
  { lat: 29.3759, lng: 47.9774, size: 1.5, overlay: { countryCode: "kw", label: "الكويت" } },
  { lat: 25.2854, lng: 51.5310, size: 1.5, overlay: { countryCode: "qa", label: "قطر" } },
  { lat: 31.9454, lng: 35.9284, size: 1.5, overlay: { countryCode: "jo", label: "الأردن" } },
];

export function ClientMap() {
  const id = useId();
  
  return (
    <div className="relative h-[650px] w-full overflow-hidden rounded-[60px] border border-primary/10 bg-secondary/5 backdrop-blur-3xl shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.03),transparent)] z-0" />
      
      <DottedMap
        markers={markers}
        width={180} // Increased scale to spread dots
        height={90}
        dotColor="#2d4d38"
        markerColor="#00FF88"
        dotRadius={0.25}
        pulse={true}
        renderMarkerOverlay={({ marker, x, y, r, index }) => {
          const { countryCode, label } = marker.overlay;
          const flagHref = `https://flagcdn.com/w40/${countryCode}.png`;
          const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-");
          
          const imgR = r * 0.7; // Smaller flags
          const fontSize = r * 0.9; // Smaller text
          const pillH = r * 1.5;
          const pillW = label.length * (fontSize * 0.7) + r * 1.5;
          const pillX = x + r * 1.2;
          const pillY = y - pillH / 2;

          return (
            <g style={{ pointerEvents: "none" }} className="animate-in fade-in zoom-in duration-700">
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>
              
              <image
                href={flagHref}
                x={x - imgR}
                y={y - imgR}
                width={imgR * 2}
                height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />
              
              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill="rgba(5, 15, 5, 0.6)"
                className="backdrop-blur-sm"
              />
              
              <text
                x={pillX + r * 0.7}
                y={y + fontSize * 0.35}
                fontSize={fontSize}
                fill="#E8FFF0"
                fontWeight="bold"
                fontFamily="Cairo"
                opacity="0.9"
              >
                {label}
              </text>
            </g>
          );
        }}
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md border border-primary/20 px-6 py-2 rounded-full z-10">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_var(--primary)]" />
            <span className="text-primary/80 font-black text-[10px] uppercase tracking-[0.4em]">Global Presence</span>
         </div>
      </div>
    </div>
  );
}
