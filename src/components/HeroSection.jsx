import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  // show the hint only when the page is at the very top
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    // Use requestAnimationFrame to avoid jank on heavy scrolls
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // hide as soon as the user has scrolled even a little
          // threshold 10px to avoid tiny layout nudges — change to 1 for stricter behavior
          setShowScrollHint(window.scrollY < 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Profile Picture */}
          <img
            src="/frank.jpg"   // <-- put your image in public/frank.jpg or adjust path
            alt="ISHIMWE Frank"
            className="w-32 h-32 md:w-100 md:h-100 rounded-full mx-auto shadow-lg border-4 border-primary/20 opacity-0 animate-fade-in"
          />

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              ISHIMWE
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Frank
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a passionate software and web developer with experience in
            building responsive, user-friendly, and scalable applications. I
            enjoy turning ideas into functional solutions using modern
            technologies and constantly learning to improve my craft.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* the scroll hint: show only when showScrollHint === true */}
      <div
        className={
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center " +
          (showScrollHint
            ? "animate-bounce opacity-100 pointer-events-auto"
            : "hidden pointer-events-none")
        }
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
