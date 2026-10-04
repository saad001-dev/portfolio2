import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profileImage } from "@/data/portfolio";
import { easeOut, revealLine } from "@/lib/motion";

const labels = ["REACT.JS", "UI/UX", "FRONTEND", "MOTION"];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 md:pt-40 pb-16"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* LEFT — editorial type */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono-label text-[0.7rem] text-muted-foreground">
              Frontend Developer · UI/UX Specialist
            </span>
          </motion.div>

          {/* headline */}
          <h1 className="font-display font-semibold tracking-tighter text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.92]">
            <Line delay={0.05}>I BUILD</Line>
            <Line delay={0.13} className="text-gradient">DIGITAL</Line>
            <Line delay={0.21} className="text-outline">EXPERIENCES.</Line>
          </h1>

          {/* supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
            className="mt-7 md:mt-9 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies.
            Passionate about intuitive interfaces and seamless user experiences
            across all platforms.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
            className="mt-9 md:mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => goTo("projects")}
              className="group inline-flex items-center gap-3 pl-6 pr-2 h-12 rounded-full bg-foreground text-background hover:bg-accent hover:text-background transition-colors duration-300"
            >
              <span className="font-mono-label text-[0.72rem]">View My Work</span>
              <span className="grid place-items-center w-8 h-8 rounded-full bg-background/15 group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => goTo("contact")}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:border-accent/60 hover:text-accent transition-colors duration-300 font-mono-label text-[0.72rem]"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 md:mt-10 flex items-center gap-2 font-mono-label text-[0.65rem] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>
        </div>

        {/* RIGHT — profile composition */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* floating labels */}
            <FloatingLabel
              className="left-0 top-10"
              text="REACT.JS"
              delay={0.9}
            />
            <FloatingLabel
              className="right-2 top-1/3"
              text="UI/UX"
              delay={1.05}
            />
            <FloatingLabel
              className="left-4 bottom-16"
              text="FRONTEND"
              delay={1.2}
            />
            <FloatingLabel
              className="right-0 bottom-6"
              text="MOTION"
              delay={1.35}
            />

            {/* image frame */}
            <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden border border-foreground/12">
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 pointer-events-none z-[2]" />
              <img
                src={profileImage}
                alt="RJ.SAAD"
                className="w-full h-full object-cover grayscale-[0.25] contrast-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 grain" />

              {/* corner index */}
              <div className="absolute top-4 left-4 font-mono-label text-[0.6rem] text-foreground/70 mix-blend-difference">
                RJ.SAAD / 2026
              </div>
            </div>

            {/* caption rail */}
            <div className="mt-3 flex items-center justify-between font-mono-label text-[0.6rem] text-muted-foreground">
              <span>FRONTEND · UI/UX</span>
              <span>BASED IN PAKISTAN</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => goTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about"
      >
        <span className="font-mono-label text-[0.6rem]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}

function Line({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={revealLine}
        initial="hidden"
        animate="show"
        transition={{ delay, duration: 0.9, ease: easeOut }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

function FloatingLabel({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: easeOut }}
      className={`absolute z-[5] hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-foreground/12 font-mono-label text-[0.6rem] text-foreground/80 ${
        labels.includes(text) ? "" : ""
      } ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-accent" />
      {text}
    </motion.span>
  );
}
