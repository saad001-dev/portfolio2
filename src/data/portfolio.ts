export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Assistant",
    description:
      "AI-powered chatbot with real-time responses, image generation, and a conversational interface.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://gemini-clone-hazel-kappa.vercel.app/",
    image: "/ai.png",
    featured: true,
  },
  {
    id: 2,
    title: "Hotel Room Booking System",
    description:
      "Room reservation platform with real-time availability and payments.",
    tech: ["Tailwind CSS", "JavaScript", "React.js"],
    link: "https://room-booking-kappa-eight.vercel.app/",
    image:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "EventConnect Platform",
    description:
      "A next-generation event networking platform that transforms how professionals connect, collaborate, and grow.",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://eventconnect-zeta.vercel.app/",
    image: "/event.jpg",
  },
  {
    id: 4,
    title: "Karachi Clothes Brand",
    description:
      "A responsive full-stack e-commerce web app for browsing and purchasing fashion products with a clean, modern interface.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    link: "https://karachi-clothes.vercel.app/",
    image: "/kc.png",
  },
  {
    id: 5,
    title: "Meridian Health Clinic",
    description:
      "Modern responsive healthcare website built with React, Tailwind CSS, animations and a clean, user-focused UI.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://health-hub-ruby.vercel.app/",
    image: "/health.png",
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Smart learning experience with adaptive courses and engaging visual content.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://lms-rouge-ten.vercel.app/",
    image: "/lms.jpg",
  },
  {
    id: 7,
    title: "Resume Builder",
    description:
      "Web-based resume builder with real-time preview and customizable resume templates.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://ai-resume-builder-omega-azure.vercel.app/",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    title: "Modern Architecture Web",
    description:
      "Modern architectural designs with conceptual spaces and minimalist planning for residential and commercial projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://arche-olive.vercel.app/",
    image: "/revit.jpg",
  },
];

export const techStack = [
  "REACT.JS",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "HTML5",
  "CSS3",
  "FRAMER MOTION",
  "NODE.JS",
  "EXPRESS.JS",
  "GIT",
  "GITHUB",
  "REST APIs",
];

export type Skill = { name: string; level: number };
export const skills: Skill[] = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 92 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Express JS", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "React JS", level: 88 },
  { name: "Node JS", level: 80 },
  { name: "Git & GitHub", level: 90 },
];

export const aboutSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Tailwind CSS",
  "Git & GitHub",
  "Framer Motion",
];

export type Experience = {
  role: string;
  period: string;
  description: string;
};
export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    period: "2025",
    description:
      "Developed responsive websites using HTML, CSS and JavaScript while building a strong foundation in frontend development.",
  },
  {
    role: "React.js Developer",
    period: "2025",
    description:
      "Built dynamic, component-based user interfaces using React.js and modern development practices.",
  },
  {
    role: "UI/UX Developer",
    period: "2025 – Present",
    description:
      "Focused on creating scalable, responsive and high-performance web applications with clean, maintainable code.",
  },
  {
    role: "Modern Web Developer",
    period: "Present",
    description:
      "Building modern web experiences using React.js, Tailwind CSS and contemporary frontend technologies.",
  },
];

export type Service = {
  no: string;
  title: string;
  description: string;
};
export const services: Service[] = [
  {
    no: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive and scalable interfaces with React.",
  },
  {
    no: "02",
    title: "UI/UX Development",
    description:
      "Turning designs and ideas into intuitive digital experiences.",
  },
  {
    no: "03",
    title: "Responsive Web Design",
    description:
      "Creating experiences that work beautifully across desktop, tablet and mobile.",
  },
  {
    no: "04",
    title: "Interactive Experiences",
    description:
      "Adding thoughtful animations and interactions using Framer Motion.",
  },
];

export const stats = [
  { value: "10+", label: "Live Projects" },
  { value: "1.5+", label: "Years Self-Learning / Practical Experience" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const profileImage = "/mu.png";

export const contact = {
  email: "tomr36428@gmail.com",
  phone: "+92 323 7713864",
  location: "Pakistan / Gujranwala",
  availability: "Mon – Sat · 9AM – 7PM",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/saad001-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saad-ali-a3b1373b0" },
  { label: "Instagram", href: "https://www.instagram.com/black_hat__o/" },
];