import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce, easeOut } from "@/lib/motion";

const featured = projects.find((p) => p.featured)!;

export function FeaturedProject() {
  return (
    <section className="section-pad pt-10 md:pt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono-label text-[0.62rem] text-accent">
            Featured Project
          </span>
          <span className="hairline flex-1 max-w-[6rem]" />
        </motion.div>

        <motion.a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="group relative block overflow-hidden rounded-[1.5rem] border border-foreground/12 bg-surface"
        >
          {/* image */}
          <div className="relative aspect-[16/10] md:aspect-[16/8] overflow-hidden">
            <motion.img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.4, ease: easeOut }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 grain opacity-60" />

            {/* overlay content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-14">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={stagger}
                className="max-w-2xl"
              >
                <motion.span
                  variants={fadeInUp}
                  className="font-mono-label text-[0.62rem] text-accent"
                >
                  Conversational AI · Image Generation · Modern UI
                </motion.span>
                <motion.h3
                  variants={fadeInUp}
                  className="mt-3 font-display font-semibold tracking-tighter text-hero leading-[0.95]"
                >
                  {featured.title.toUpperCase()}
                </motion.h3>
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 inline-flex items-center gap-3 group/btn"
                >
                  <span className="font-mono-label text-[0.72rem] text-foreground">
                    Explore Project
                  </span>
                  <span className="grid place-items-center w-9 h-9 rounded-full border border-foreground/25 group-hover/btn:bg-accent group-hover/btn:border-accent transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
