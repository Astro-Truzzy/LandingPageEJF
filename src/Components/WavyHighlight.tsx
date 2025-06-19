// components/WavyHighlight.tsx
import type { ReactNode } from "react";

export default function WavyHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <svg
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-6"
      >
        <path
          d="M0,20 C50,40 150,0 200,20 L200,30 L0,30 Z"
          fill="#c7e6ff"
          className="dark:fill-blue-500"
        />
      </svg>
      <span className="relative z-10 font-semibold">{children}</span>
    </span>
  );
}
