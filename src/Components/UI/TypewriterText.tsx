// src/components/TypewriterText.tsx
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

type TypewriterTextProps = {
  words: string[];
  prefix?: string;
  className?: string;
  textColor?: string;
};

export default function TypewriterText({
  words,
  prefix = "",
  className = "",
  textColor = "text-blue-600 dark:text-blue-400",
}: TypewriterTextProps) {
  return (
    <h2
      className={`text-3xl font-bold text-slate-800 dark:text-white ${className}`}
    >
      {prefix}{" "}
      <span className={`${textColor}`}>
        <Typewriter
          words={words}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </span>
    </h2>
  );
}
