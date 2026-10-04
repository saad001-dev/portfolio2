import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems, socials } from "@/data/portfolio";
import { fadeInUp, viewportOnce } from "@/lib/motion";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="section-pad pt-16 pb-10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        {/* big wordmark */}
        <motion.button
          onClick={() => go("home")}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="block w-full text-left"
        >
          <span className="font-display font-semibold tracking-tighter leading-[0.85] text-[clamp(3rem,18vw,16rem)] text-gradient-soft">
            RJ.SAAD
          </span>
        </motion.button>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Building digital experiences with code, creativity and attention to
            detail.
          </p>

          {/* nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="font-mono-label text-[0.65rem] text-foreground/70 hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>

          {/* socials */}
        
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-label text-[0.58rem] text-muted-foreground">
            © 2026 RJ.SAAD — All Rights Reserved
          </p>
          <p className="font-mono-label text-[0.58rem] text-muted-foreground">
            Frontend Developer & UI/UX Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
