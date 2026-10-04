import { techStack } from "@/data/portfolio";

export function Marquee() {
  const items = [...techStack, ...techStack];
  return (
    <section
      aria-label="Technology stack"
      className="relative border-y border-foreground/10 py-6 md:py-8 overflow-hidden marquee-pause"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-display text-2xl md:text-4xl font-medium tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            {t}
            <span className="text-accent/50">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
