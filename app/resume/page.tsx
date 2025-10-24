import Link from "next/link";

type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
};

type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  grade?: string;
  details: string[];
  location?: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  name: string;
  context: string;
  highlights: string[];
  tech: string[];
};

type Course = {
  title: string;
  provider: string;
  link: string;
  description: string;
};

const summary = [
  "First-class Software Engineering graduate with hands-on experience delivering production-ready features across web, mobile, and cloud platforms.",
  "Comfortable spanning frontend and backend work, with a focus on secure AWS-backed architectures and polished user experiences.",
];

const experiences: Experience[] = [
  {
    company: "Tillmax",
    role: "Technical Engineer",
    period: "Dec 2024 - Present",
    location: "London, United Kingdom",
    summary:
      "Delivering end-to-end technical support for retail point-of-sale systems and precision measurement devices.",
    highlights: [
      "Set up and configure computer systems to keep customer operations secure and reliable.",
      "Install, calibrate, and maintain scales and measurement equipment across client sites.",
      "Provide front-line troubleshooting for hardware and software issues, resolving incidents quickly.",
      "Coach customers on best practices so teams can self-diagnose common issues.",
      "Document incidents, fixes, and customer feedback to drive continuous improvement.",
      "Collaborate with partner companies when integrated solutions are required.",
    ],
    stack: [
      "Systems diagnostics",
      "Windows",
      "Customer enablement",
      "Knowledge base upkeep",
    ],
  },
  {
    company: "Rootcode Labs",
    role: "Intern Software Engineer",
    period: "MyLeave platform, 2023 - 2024",
    location: "Colombo, Sri Lanka (hybrid)",
    summary:
      "Contributed to a multitenant leave-management product built with Spring Boot services and a ReactJS frontend.",
    highlights: [
      "Integrated AWS Cognito OAuth2 authentication into the Spring Boot backend to secure user access.",
      "Created AWS Lambda functions that synchronised and enriched Cognito user data.",
      "Maintained over 80 percent test coverage through unit and integration suites.",
      "Designed the multitenant strategy across application logic and identity management.",
      "Implemented Route 53 routing to support tenant-specific subdomains.",
      "Built React components that consumed REST APIs for data retrieval and management.",
    ],
    stack: [
      "Spring Boot",
      "AWS Cognito",
      "AWS Lambda",
      "ReactJS",
      "MySQL",
      "Git",
    ],
  },
  {
    company: "CommercePromote Inc",
    role: "Summer Intern (Software Engineering)",
    period: "Jun 2021 - Jul 2023",
    location: "Colombo, Sri Lanka (Onsite)",
    summary:
      "Worked on ServiceTag, an auto repair shop management platform supporting daily operations.",
    highlights: [
      "Designed and built RESTful APIs with .NET to power core workflows.",
      "Implemented responsive UI screens using React and TypeScript.",
      "Modelled and managed relational data stores to keep the platform consistent and reliable.",
      "Collaborated across two summer cohorts to extend product functionality.",
    ],
    stack: [".NET", "C#", "React", "TypeScript", "SQL"],
  },
];

const education: EducationItem[] = [
  {
    institution: "University of Westminster",
    period: "Sep 2020 - Sep 2024",
    degree: "BEng (Hons) Software Engineering",
    grade: "First Class Honours",
    location: "London, United Kingdom",
    details: [
      "Coursework included object-oriented programming, databases, machine learning, concurrent programming, and mobile app development.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend and Mobile",
    items: [
      "ReactJS",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend and APIs",
    items: ["Spring Boot", ".NET", "Flask", "Django", "REST API design"],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS Lambda",
      "AWS Cognito",
      "Route 53",
      "RDS",
      "EC2",
      "CodePipeline",
    ],
  },
  {
    title: "Data and Analytics",
    items: [
      "MySQL",
      "SQL",
      "H2 Database",
      "Regression modelling",
      "Deep learning with VGG16",
    ],
  },
  {
    title: "Practices and Tooling",
    items: ["Git", "GitHub pipelines", "Unit testing", "Integration testing"],
  },
];

const courses: Course[] = [
  {
    title: "AI Python for Beginners",
    provider: "deeplearning.ai",
    link: "https://learn.deeplearning.ai/accomplishments/d8e5d841-2db1-4692-82f8-4cd20977af9e?usp=sharing",
    description:
      "Learn Python programming with AI support to enhance your coding workflow. Build strong skills in writing, testing, and debugging code efficiently, and apply your knowledge to develop real-world AI-powered applications.",
  },
];

const projects: Project[] = [
  {
    name: "SlimFit Weight Loss Companion",
    context: "Academic project",
    highlights: [
      "Created a cross-platform coaching app with React Native and Spring Boot to guide users through weight loss goals.",
      "Built a regression model to estimate calorie burn for daily activities.",
      "Implemented authentication and authorisation flows with Spring Security.",
    ],
    tech: ["React Native", "Spring Boot", "Java", "Python", "MySQL"],
  },
  {
    name: "SEN Chat Application",
    context: "Passion project",
    highlights: [
      "Engineered real-time messaging, notifications, and typing indicators using webhooks.",
      "Integrated Google Single Sign-On to streamline onboarding.",
      "Deployed frontend and backend services with automated Git-based pipelines.",
    ],
    tech: ["ReactJS", "Spring Boot", "Java", "MySQL", "Render", "Cyclic"],
  },
  {
    name: "BMHealth BMI and BMR Analysis",
    context: "Academic project",
    highlights: [
      "Implemented a face-to-BMI/BMR inference pipeline with React Native and Flask.",
      "Secured accounts with AWS Cognito and multi-factor authentication.",
      "Trained a VGG16 model that achieved a mean absolute error under 3 kg/m2.",
      "Deployed backend services on AWS Elastic Beanstalk with RDS and CodePipeline.",
    ],
    tech: ["React Native", "Flask", "Python", "AWS", "Machine learning"],
  },
];

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <header className="bg-slate-900 text-slate-100">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Curriculum Vitae
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tharindu Silva
            </h1>
            <h2 className="text-lg font-medium text-slate-300">
              Software Engineer - Full Stack and Cloud
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/60 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-200 hover:text-white"
            >
              Back to portfolio
            </Link>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-800/40 p-6 text-sm text-slate-200">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Location
              </span>
              <p className="mt-1 font-medium">London, United Kingdom</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
        <section className="space-y-8">
          <SectionHeading
            title="Experience"
            description="Recent roles and internships focused on full-stack delivery and customer-facing support."
          />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {experience.role}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p className="font-medium text-slate-600">
                      {experience.period}
                    </p>
                    {experience.location ? <p>{experience.location}</p> : null}
                  </div>
                </div>
                {experience.summary ? (
                  <p className="mt-4 text-sm text-slate-600">
                    {experience.summary}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {experience.stack ? (
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
                    Focus: {experience.stack.join(", ")}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            title="Education"
            description="Academic foundation and key areas of study."
          />
          <div className="space-y-6">
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">
                      {item.institution}
                    </p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p className="font-medium text-slate-600">{item.period}</p>
                    {item.location ? <p>{item.location}</p> : null}
                  </div>
                </div>
                {item.grade ? (
                  <p className="mt-3 text-sm font-medium text-slate-600">
                    {item.grade}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Skills"
            description="Technologies and practices applied across projects."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-200 px-3 py-1 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Courses"
            description="Recent professional development and certifications."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {course.provider}
                </h3>
                <Link
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center text-base font-semibold text-slate-900 hover:text-slate-600"
                >
                  {course.title}
                </Link>
                <p className="mt-3 text-sm text-slate-600">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            title="Selected Projects"
            description="Case studies that highlight delivery, impact, and tooling."
          />
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {project.context}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600">
          <p>
            Open to software engineering roles focused on full-stack
            development, cloud platforms, machine learning, and AI.
          </p>
          <a
            className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
            href="mailto:tsembakutti@gmail.com"
          >
            Contact me
          </a>
        </div>
      </footer>
    </main>
  );
}

type SectionHeadingProps = {
  title: string;
  description?: string;
};

function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {description ? (
        <p className="text-sm text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
