import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <section className="section-y section-pad bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">
            What I Do
          </span>
          <span className="hairline flex-1 max-w-[6rem]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10"
        >
          {services.map((s) => (
            <motion.div
              key={s.no}
              variants={fadeInUp}
              className="group bg-background p-8 md:p-10 lg:p-12 hover:bg-surface-2 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono-label text-[0.7rem] text-accent">
                  {s.no}
                </span>
                <span className="h-2 w-2 rounded-full bg-foreground/20 group-hover:bg-accent transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
