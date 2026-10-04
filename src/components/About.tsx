import { motion } from "framer-motion";
import { aboutSkills, stats } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce, easeOut } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="section-y section-pad">
      <div className="max-w-7xl mx-auto">
        {/* label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-12 md:mb-16"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">01 — About</span>
          <span className="hairline flex-1 max-w-[6rem]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — large type */}
          <div className="lg:col-span-7">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="font-display font-semibold tracking-tighter text-section leading-[0.98]"
            >
              I turn ideas into{" "}
              <span className="text-gradient">interactive</span> experiences.
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I'm RJ.SAAD, a frontend developer and UI/UX specialist focused on
              building modern, responsive and interactive web experiences. I
              work with React, Tailwind CSS and Framer Motion to translate
              ideas into clean, performant interfaces — crafting intuitive,
              pixel-perfect experiences that feel as good as they look.
            </motion.p>
          </div>

          {/* RIGHT — skills + stats */}
          <div className="lg:col-span-5 lg:pt-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
              className="flex flex-col"
            >
              <span className="font-mono-label text-[0.62rem] text-muted-foreground mb-4">
                Toolset
              </span>
              <div className="flex flex-wrap gap-2">
                {aboutSkills.map((s) => (
                  <motion.span
                    key={s}
                    variants={fadeInUp}
                    className="px-3.5 py-1.5 rounded-full border border-foreground/12 text-sm text-foreground/80 hover:border-accent/50 hover:text-foreground transition-colors"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* stats */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
              className="mt-12 grid grid-cols-2 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeInUp}
                  className="bg-background p-5 md:p-6"
                >
                  <div className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono-label text-[0.58rem] text-muted-foreground leading-relaxed">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
