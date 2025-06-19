
import { BackgroundLines } from "../Components/UI/Background-Lines";
import BouncyArrow from "./UI/BouncyArrow";


export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[500px]">
      <h2 className="bg-clip-text uppercase text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-[2rem] md:text-3xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-wide">
        Hello friend,
      </h2>

      <p className="bg-clip-text uppercase text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-[2rem] md:text-3xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-wide opacity-30">
        Esosa John Foundation
      </p>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-center">
        The <span className="gritty-grass"> GRASS </span> to{" "}
        <span className="sparkling-gold"> GRACE </span> story, is no longer a{"   "}
        <i className=" line-through"> dream </i> with this new business model. We are here to
        <span> empower </span> you to achieve your goals and make a difference.
      </p>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-center mt-4 capitalize">
        Want to know how?
      </p>
      <BouncyArrow/>
    </BackgroundLines>
  );
}
