import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { contact, socials } from "@/data/portfolio";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

// 🟢 PURANI WEBSITE KE LINKS (same order)
const oldSocials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/923237713864",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61585286202955",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/black_hat__o/",
  },
  {
    label: "GitHub",
    href: "https://github.com/saad001-dev/Hotel-Room-Booking-.git",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saad-ali-a3b1373b0",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // 🟢 NAYA onSubmit — purani form jaisa Gmail compose kholta hai
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const type = (data.get("type") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    // Purani form jaisa validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }

    // 📧 Gmail compose open karo — same as purani website
    const subject = encodeURIComponent(
      `Contact Form${type ? ` - ${type}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type || "N/A"}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tomr36428@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // Success state
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: contact.location },
    { icon: Clock, label: "Availability", value: contact.availability },
  ];

  return (
    <section id="contact" className="section-y section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono-label text-[0.7rem] text-accent">
            05 — Contact
          </span>
          <span className="hairline flex-1 max-w-[6rem]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — heading + info */}
          <div className="lg:col-span-6">
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="font-display font-semibold tracking-tighter text-section leading-[0.98]"
            >
              Have an idea?
              <br />
              <span className="text-gradient">Let's build it.</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Crafting digital experiences with modern design, interactive
              solutions and pixel-perfect details.
            </motion.p>

            <motion.a
              href={`mailto:${contact.email}`}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="group mt-8 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-foreground text-background hover:bg-accent transition-colors duration-300"
            >
              <span className="font-mono-label text-[0.72rem]">
                Let's Work Together
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* info grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={stagger}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10"
            >
              {info.map((it) => {
                const Inner = (
                  <div className="bg-background p-5 h-full">
                    <div className="flex items-center gap-2 text-accent">
                      <it.icon className="w-4 h-4" />
                      <span className="font-mono-label text-[0.58rem] text-muted-foreground">
                        {it.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-foreground break-words">
                      {it.value}
                    </p>
                  </div>
                );
                return it.href ? (
                  <motion.a
                    key={it.label}
                    href={it.href}
                    variants={fadeInUp}
                    className="hover:bg-surface-2 transition-colors"
                  >
                    {Inner}
                  </motion.a>
                ) : (
                  <motion.div key={it.label} variants={fadeInUp}>
                    {Inner}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* 🟢 Socials — purane links use kar rahe hain */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <span className="font-mono-label text-[0.58rem] text-muted-foreground">
                Socials
              </span>
              {oldSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label text-[0.65rem] text-foreground/80 hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeInUp}
            className="lg:col-span-6"
          >
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-foreground/12 bg-surface/50 p-6 md:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Project Type" name="type" placeholder="Website, Web App, UI/UX..." />
                <div>
                  <label className="font-mono-label text-[0.58rem] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project..."
                    className="mt-2 w-full bg-transparent border-b border-foreground/15 focus:border-accent py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 w-full inline-flex items-center justify-center gap-3 h-12 rounded-full bg-foreground text-background hover:bg-accent transition-colors duration-300"
              >
                <span className="font-mono-label text-[0.72rem]">
                  {sent ? "Message Sent ✓" : "Send Message"}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono-label text-[0.58rem] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-foreground/15 focus:border-accent py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
      />
    </div>
  );
}