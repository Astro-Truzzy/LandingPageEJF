// src/components/Hero.tsx
"use client";
import { BackgroundLinesDemo } from "./Background-Lines-Demo";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black" id="home">
      {/* Gradient overlay or animation could go here */}
      <div className="max-w-5xl  mx-auto text-center mt-5">
        <BackgroundLinesDemo/>
      </div>
    </section>
  );
}
