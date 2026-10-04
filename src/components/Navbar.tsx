import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 inset-x-0 z-[70] flex justify-center px-4 md:px-6 pt-4 md:pt-5"
      >
        <nav
          className={cn(
            "w-full max-w-6xl flex items-center justify-between rounded-full transition-all duration-500 px-5 md:px-7 h-14 md:h-16",
            scrolled
              ? "glass border border-foreground/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground"
          >
            RJ<span className="text-gradient">.</span>SAAD
          </button>

          {/* Center nav (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors duration-300 font-mono-label text-[0.7rem]",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent-2"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA (desktop) */}
          <button
            onClick={() => go("contact")}
            className="hidden md:inline-flex items-center gap-2 pl-5 pr-2 h-9 rounded-full border border-foreground/15 text-sm text-foreground hover:border-accent/60 hover:text-accent transition-colors duration-300 group"
          >
            Let's Talk
            <span className="grid place-items-center w-7 h-7 rounded-full bg-foreground text-background group-hover:bg-accent group-hover:text-background transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center w-10 h-10 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] md:hidden glass"
          >
            <div className="flex flex-col h-full pt-28 px-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                  onClick={() => go(item.id)}
                  className="text-left font-display text-5xl font-semibold tracking-tight py-3 border-b border-foreground/10"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => go("contact")}
                className="mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-foreground text-background font-mono-label text-xs"
              >
                Let's Talk <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
