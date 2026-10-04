import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="section-y section-pad bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">
            03 — Experience
          </span>
          <span className="hairline flex-1 max-w-[6rem]" />
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="font-display font-semibold tracking-tighter text-section leading-[0.98] mb-14 md:mb-20 max-w-3xl"
        >
          Growing through{" "}
          <span className="text-gradient">real-world building.</span>
        </motion.h2>

        {/* timeline */}
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative flex flex-col gap-12 md:gap-16 pl-6 md:pl-8"
        >
          {/* vertical line */}
          <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-foreground/15 to-transparent" />

          {experiences.map((e, i) => (
            <motion.li
              key={e.role + i}
              variants={fadeInUp}
              className="relative"
            >
              {/* node */}
              <span className="absolute -left-[1.45rem] md:-left-[1.7rem] top-1.5 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-background border border-accent" />
                <span className="absolute h-2.5 w-2.5 rounded-full bg-accent/30 animate-ping" />
              </span>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {e.role}
                </h3>
                <span className="font-mono-label text-[0.65rem] text-muted-foreground whitespace-nowrap">
                  {e.period}
                </span>
              </div>
              <p className="mt-3 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
                {e.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
