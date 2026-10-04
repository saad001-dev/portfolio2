import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { fadeInUp, viewportOnce, easeOut } from "@/lib/motion";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Projects() {
  // exclude featured (shown above)
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-y section-pad">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">
            02 — Selected Work
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
          Projects that solve{" "}
          <span className="text-gradient">real problems.</span>
        </motion.h2>

        {/* editorial stacked showcases */}
        <div className="flex flex-col gap-2">
          {rest.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} flip={i % 2 === 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => goTo("contact")}
            className="group inline-flex items-center gap-3 h-12 px-6 rounded-full border border-foreground/20 hover:border-accent/60 hover:text-accent transition-colors font-mono-label text-[0.72rem]"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  flip,
}: {
  project: (typeof projects)[number];
  index: number;
  flip: boolean;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeInUp}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-12 border-t border-foreground/10"
    >
      {/* number */}
      <div className="md:col-span-1">
        <span className="font-mono-label text-[0.7rem] text-muted-foreground">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* image */}
      <div
        className={`md:col-span-7 ${flip ? "md:order-3" : ""}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-foreground/12">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[900ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* info */}
      <div className={`md:col-span-4 ${flip ? "md:order-2" : ""}`}>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full border border-foreground/12 font-mono-label text-[0.55rem] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 font-mono-label text-[0.7rem] text-foreground group-hover:text-accent transition-colors">
          View Project
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </motion.a>
  );
}
