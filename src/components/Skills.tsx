import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="section-y section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">
            04 — Expertise
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
          Tools I use to{" "}
          <span className="text-gradient">bring ideas to life.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6"
        >
          {skills.map((s) => (
            <motion.div key={s.name} variants={fadeInUp}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-base md:text-lg text-foreground">{s.name}</span>
                <span className="font-mono-label text-[0.65rem] text-muted-foreground">
                  {s.level}%
                </span>
              </div>
              <div className="relative h-px bg-foreground/12 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: s.level / 100 }}
                  viewport={viewportOnce}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-accent to-accent-2"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
