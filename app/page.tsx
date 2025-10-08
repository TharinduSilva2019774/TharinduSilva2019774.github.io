"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

function Reveal({ children, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}

const projectPlaceholders = [
  {
    title: "SlimFit Wellness Platform",
    description:
      "Mobile-first companion that will track progress, personalise workouts, and visualise insights for fitness-focused users.",
    tech: ["React Native", "Spring Boot", "AWS"],
  },
  {
    title: "SEN Realtime Chat",
    description:
      "A cross-platform messaging experience that highlights real-time features, notifications, and seamless onboarding.",
    tech: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "BMHealth Deep Learning",
    description:
      "Face-to-BMI/BMR analysis pipeline showcasing applied machine learning, inference services, and cloud deployment.",
    tech: ["Python", "Flask", "AWS"],
  },
  {
    title: "CommercePromote Suite",
    description:
      "Toolkit for service businesses with scheduling, inventory, and analytics modules built for operational efficiency.",
    tech: [".NET", "TypeScript", "SQL"],
  },
];

const recommendations = [
  {
    name: "Sapumal Wijekoon",
    quote:
      "Tharindu's deep expertise in backend development, AWS, and system architecture made him an exceptional mentor and teammate. His problem-solving skills and ability to guide others set him apart as a truly talented and driven professional.",
  },
  {
    name: "Shabina Farveen",
    quote:
      "Tharindu quickly became an inspiration to me during our internship. His professionalism in conducting knowledge transfer sessions, combined with his dedication to excellence and approachable nature, left a lasting impact. He consistently delivered high-quality work on time, making him an invaluable asset to any team.",
  },
  {
    name: "Kalsara Magamage",
    quote:
      "Working with Tharindu at Rootcode Labs was a pleasure. His mastery of AWS, Spring Boot, and backend architecture consistently impressed the team. He's not only technically brilliant but also highly collaborative and dependable a rare combination that makes him stand out.",
  },
];

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tharindu-sembakutti-64a8781b8/",
    description: "Connect on LinkedIn",
    symbol: "??",
  },
  {
    label: "GitHub",
    href: "https://github.com/TharinduSilva2019774",
    description: "Explore GitHub projects",
    symbol: "??",
  },
  {
    label: "Email",
    href: "mailto:tsembakutti@gmail.com",
    description: "Send an email",
    symbol: "??",
  },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeRecommendation, setActiveRecommendation] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  const contactPanelRef = useRef<HTMLDivElement | null>(null);
  const contactButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("ts-portfolio-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("ts-portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const changeInterval = 2200;
    const id = window.setInterval(() => {
      setActiveRecommendation((prev) => (prev + 1) % recommendations.length);
    }, changeInterval);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (!contactOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        contactPanelRef.current?.contains(target) ||
        contactButtonRef.current?.contains(target)
      ) {
        return;
      }
      setContactOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contactOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleContact = () => {
    setContactOpen((prev) => !prev);
  };

  const isDark = theme === "dark";
  const currentRecommendation = useMemo(
    () => recommendations[activeRecommendation] ?? recommendations[0],
    [activeRecommendation]
  );

  const mainClass = `flex min-h-screen flex-col ${
    isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
  }`;
  const heroClass = `relative flex min-h-screen flex-col items-center justify-center px-6 py-24 ${
    isDark
      ? "bg-gradient-to-b from-slate-900 via-slate-950 to-black"
      : "bg-gradient-to-b from-white via-slate-100 to-slate-50"
  }`;
  const heroBadgeClass = `text-sm uppercase tracking-[0.3em] ${
    isDark ? "text-slate-400" : "text-slate-500"
  }`;
  const heroBodyText = `max-w-xl text-base sm:text-lg ${
    isDark ? "text-slate-300" : "text-slate-600"
  }`;
  const primaryButtonClass = isDark
    ? "rounded-full bg-slate-100 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white hover:text-black"
    : "rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800";
  const secondaryButtonClass = isDark
    ? "rounded-full border border-slate-500 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:text-white"
    : "rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:text-slate-600";
  const aboutCardClass = `mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl px-8 py-10 text-center md:text-left ${
    isDark
      ? "bg-slate-900/60 shadow-xl shadow-black/30"
      : "border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
  }`;
  const sectionBadgeClass = `text-sm uppercase tracking-[0.3em] ${
    isDark ? "text-slate-400" : "text-slate-500"
  }`;
  const sectionHeadingClass = `text-3xl font-semibold sm:text-4xl ${
    isDark ? "text-slate-100" : "text-slate-900"
  }`;
  const sectionBodyText = `text-base sm:text-lg ${
    isDark ? "text-slate-300" : "text-slate-600"
  }`;
  const projectsIntroText = `text-base sm:text-lg ${
    isDark ? "text-slate-400" : "text-slate-600"
  }`;
  const projectCardClass = `flex min-h-[240px] flex-col gap-4 rounded-3xl p-6 text-left shadow-lg transition-colors ${
    isDark
      ? "border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80 shadow-black/25"
      : "border border-slate-200 bg-white shadow-slate-200/60"
  }`;
  const projectTitleClass = `text-lg font-semibold ${
    isDark ? "text-slate-100" : "text-slate-900"
  }`;
  const projectCopyClass = `mt-2 text-sm ${
    isDark ? "text-slate-300" : "text-slate-600"
  }`;
  const projectStackLabelClass = `text-xs uppercase tracking-[0.25em] ${
    isDark ? "text-slate-500" : "text-slate-500"
  }`;
  const techChipClass = `rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
    isDark
      ? "border-slate-700 bg-slate-900/70 text-slate-200"
      : "border-slate-200 bg-slate-100 text-slate-600"
  }`;
  const techIconShellClass = `flex h-12 w-12 items-center justify-center rounded-full border ${
    isDark ? "border-slate-700 bg-slate-900/80" : "border-slate-200 bg-white"
  }`;
  const recommendationCardClass = `mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl px-8 py-10 text-center transition-all ${
    isDark
      ? "border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/30"
      : "border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
  }`;
  const recommendationNameClass = `text-lg font-semibold ${
    isDark ? "text-slate-100" : "text-slate-900"
  }`;
  const recommendationQuoteClass = `text-base italic ${
    isDark ? "text-slate-300" : "text-slate-600"
  }`;
  const contactButtonClass = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
    isDark
      ? "border-slate-700 bg-slate-900/80 text-slate-200 hover:border-slate-500 hover:text-white"
      : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:text-slate-900"
  }`;
  const contactPanelClass = `mt-3 w-64 rounded-3xl border p-4 shadow-lg transition ${
    isDark
      ? "border-slate-800 bg-slate-900/80 text-slate-200 shadow-black/30"
      : "border-slate-200 bg-white text-slate-700 shadow-slate-300/60"
  }`;
  const contactLinkClass = `flex items-start gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition ${
    isDark ? "hover:bg-slate-800/70" : "hover:bg-slate-100"
  }`;

  const renderTechIcon = () => (
    <svg
      className={`h-5 w-5 ${isDark ? "text-slate-200" : "text-slate-600"}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.75 5.75C4.75 4.784 5.534 4 6.5 4h11c.966 0 1.75.784 1.75 1.75v11.5c0 .966-.784 1.75-1.75 1.75h-11A1.75 1.75 0 0 1 4.75 17.25V5.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 8.5h14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 3.5v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 3.5v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <main className={mainClass}>
      <section className={heroClass}>
        <button
          type="button"
          onClick={toggleTheme}
          className={`absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            isDark
              ? "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500 hover:text-white"
              : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:text-slate-900"
          }`}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <span>{isDark ? "??" : "??"}</span>
          <span>{isDark ? "Dark" : "Light"} mode</span>
        </button>
        <Reveal className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
          <div
            className={`relative flex h-40 w-40 items-center justify-center rounded-full shadow-lg ${
              isDark
                ? "bg-slate-800 shadow-slate-900/40"
                : "bg-slate-200 shadow-slate-400/40"
            }`}
          >
            <span
              className={`text-4xl font-semibold tracking-wide ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              TS
            </span>
          </div>
          <div className="space-y-2">
            <p className={heroBadgeClass}>Software Engineer</p>
            <h1
              className={`text-4xl font-bold sm:text-5xl ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Tharindu Silva
            </h1>
          </div>
          <p className={heroBodyText}>
            Passionate Software Engineer skilled in building scalable, secure
            applications using Java, Python, and AWS. Focused on crafting clean,
            efficient code and delivering modern full-stack solutions that make
            an impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/resume" className={primaryButtonClass}>
              View Resume
            </Link>
            <Link href="#projects" className={secondaryButtonClass}>
              See Projects
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="about" className="px-6 py-24">
        <Reveal className={aboutCardClass}>
          <p className={sectionBadgeClass}>About Me</p>
          <h2 className={sectionHeadingClass}>
            Passionate About Building User-Centred Solutions
          </h2>
          <p className={sectionBodyText}>
            I’m Tharindu Sembakutti, a Software Engineering graduate from the
            University of Westminster with first-class honours. I have hands-on
            experience in AWS technologies, Java Spring Boot, React, and Python
            frameworks such as Django and Flask. My work includes developing
            end-to-end systems, integrating cloud services, and implementing
            machine learning models. I’ve contributed to multiple projects from
            chat applications and workflow automation tools to health and
            fitness apps where I focused on creating reliable backends,
            intuitive user interfaces, and seamless deployments using AWS and
            Google Cloud. Driven by curiosity and problem-solving, I thrive in
            collaborative environments and enjoy transforming complex challenges
            into elegant software solutions.
          </p>
        </Reveal>
      </section>

      <section id="projects" className="px-6 pb-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <Reveal className="flex flex-col gap-4 text-center md:text-left">
            <p className={sectionBadgeClass}>Projects</p>
            <h2 className={sectionHeadingClass}>Featured Work</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectPlaceholders.map((project, index) => (
              <Reveal
                key={project.title}
                className={projectCardClass}
                style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
              >
                <div>
                  <h3 className={projectTitleClass}>{project.title}</h3>
                  <p className={projectCopyClass}>{project.description}</p>
                </div>
                <div className="mt-auto">
                  <p className={projectStackLabelClass}>Tech Stack</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.tech.map((techLabel) => (
                      <span
                        key={techLabel}
                        className={techIconShellClass}
                        title={techLabel}
                      >
                        {renderTechIcon()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className={techChipClass}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="recommendations" className="px-6 pb-32">
        <Reveal className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
          <div className="space-y-2">
            <p className={sectionBadgeClass}>Recommendations</p>
            <h2 className={sectionHeadingClass}>What Colleagues Say</h2>
            <p className={projectsIntroText}>
              Single spotlight rotates every couple of seconds so you can
              highlight personable endorsements.
            </p>
          </div>
          <div className="relative w-full">
            <aside className={recommendationCardClass}>
              <blockquote className={recommendationQuoteClass}>
                &ldquo;{currentRecommendation.quote}&rdquo;
              </blockquote>
              <span className={recommendationNameClass}>
                {currentRecommendation.name}
              </span>
            </aside>
            <div className="mt-6 flex justify-center gap-2">
              {recommendations.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-6 rounded-full transition ${
                    idx === activeRecommendation
                      ? isDark
                        ? "bg-slate-100"
                        : "bg-slate-900"
                      : isDark
                      ? "bg-slate-700/60"
                      : "bg-slate-300"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <button
          type="button"
          ref={contactButtonRef}
          onClick={toggleContact}
          className={contactButtonClass}
          aria-expanded={contactOpen}
          aria-controls="contact-links-panel"
        >
          <span>??</span>
          <span>Contact</span>
        </button>
        {contactOpen ? (
          <div
            id="contact-links-panel"
            ref={contactPanelRef}
            className={contactPanelClass}
          >
            <ul className="space-y-1">
              {contactLinks.map((link) => {
                const isMail = link.href.startsWith("mailto:");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noreferrer"}
                      className={contactLinkClass}
                    >
                      <span className="text-lg" aria-hidden>
                        {link.symbol}
                      </span>
                      <span className="text-left">
                        <span className="block font-semibold">
                          {link.label}
                        </span>
                        <span className="block text-xs opacity-80">
                          {link.description}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </main>
  );
}
