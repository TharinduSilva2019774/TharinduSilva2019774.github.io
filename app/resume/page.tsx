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

// const experiences: Experience[] = [
//   {
//     company: "Tillmax",
//     role: "Technical Engineer",
//     period: "Dec 2024 - Present",
//     location: "London, United Kingdom",
//     summary:
//       "Delivering end-to-end technical support for retail point-of-sale systems and precision measurement devices.",
//     highlights: [
//       "Set up and configure computer systems to keep customer operations secure and reliable.",
//       "Install, calibrate, and maintain scales and measurement equipment across client sites.",
//       "Provide front-line troubleshooting for hardware and software issues, resolving incidents quickly.",
//       "Coach customers on best practices so teams can self-diagnose common issues.",
//       "Document incidents, fixes, and customer feedback to drive continuous improvement.",
//       "Collaborate with partner companies when integrated solutions are required.",
//     ],
//     stack: [
//       "Systems diagnostics",
//       "Windows",
//       "Customer enablement",
//       "Knowledge base upkeep",
//     ],
//   },
//   {
//     company: "Rootcode Labs",
//     role: "Intern Software Engineer",
//     period: "MyLeave platform, 2023 - 2024",
//     location: "Colombo, Sri Lanka (hybrid)",
//     summary:
//       "Contributed to a multitenant leave-management product built with Spring Boot services and a ReactJS frontend.",
//     highlights: [
//       "Integrated AWS Cognito OAuth2 authentication into the Spring Boot backend to secure user access.",
//       "Created AWS Lambda functions that synchronised and enriched Cognito user data.",
//       "Maintained over 80 percent test coverage through unit and integration suites.",
//       "Designed the multitenant strategy across application logic and identity management.",
//       "Implemented Route 53 routing to support tenant-specific subdomains.",
//       "Built React components that consumed REST APIs for data retrieval and management.",
//     ],
//     stack: [
//       "Spring Boot",
//       "AWS Cognito",
//       "AWS Lambda",
//       "ReactJS",
//       "MySQL",
//       "Git",
//     ],
//   },
//   {
//     company: "CommercePromote Inc",
//     role: "Summer Intern (Software Engineering)",
//     period: "Jun 2021 - Jul 2023",
//     location: "Colombo, Sri Lanka (Onsite)",
//     summary:
//       "Worked on ServiceTag, an auto repair shop management platform supporting daily operations.",
//     highlights: [
//       "Designed and built RESTful APIs with .NET to power core workflows.",
//       "Implemented responsive UI screens using React and TypeScript.",
//       "Modelled and managed relational data stores to keep the platform consistent and reliable.",
//       "Collaborated across two summer cohorts to extend product functionality.",
//     ],
//     stack: [".NET", "C#", "React", "TypeScript", "SQL"],
//   },
// ];

const experiences: Experience[] = [
{
  company: "Tillmax",
  role: "Technical Engineer",
  period: "Dec 2024 – Present",
  location: "London, United Kingdom",
  summary:
    "Delivering reliable retail technology solutions through expert installation, system optimization, and client enablement across POS and weighing platforms.",
  highlights: [
    "Improved retail uptime by configuring and deploying POS systems tailored to client infrastructure.",
    "Enhanced accuracy of weighing devices by calibrating and maintaining precision Magellan scales used in high-volume retail environments.",
    "Resolved 95%+ of technical incidents on first contact through methodical diagnostics and remote support tools.",
    "Reduced recurring faults by creating internal documentation and contributing to a shared troubleshooting knowledge base.",
    "Increased customer self-sufficiency through one-on-one coaching on system operations and maintenance best practices.",
    "Collaborated with partner vendors to integrate multi-system POS and weighing solutions, improving cross-device reliability.",
  ],
  stack: [
    "POS Systems",
    "Windows",
    "Hardware Diagnostics",
    "Networking",
    "Customer Enablement",
    "Knowledge Base Optimization",
  ],
},
   {
    company: "Rootcode Labs",
    role: "Intern Software Engineer",
    period: "Jun 2022 – Jul 2023",
    location: "Colombo, Sri Lanka (Hybrid)",
    summary:
      "Contributed to MyLeave, a multi-tenant business workflow platform built with Spring Boot and AWS, focusing on backend architecture, automation, and secure authentication.",
    highlights: [
      "Built 50+ REST APIs in Java using Spring Boot with 80%+ unit and integration test coverage.",
      "Managed AWS Cognito (OAuth2) authentication for 100+ users within a multi-tenant setup.",
      "Designed multi-tenant architecture leveraging AWS Cognito and Route 53 for automatic subdomain provisioning.",
      "Developed AWS Lambda functions to handle dynamic user data and automate backend operations.",
      "Collaborated in an Agile 10-member engineering team, contributing to sprint planning, code reviews, and documentation.",
    ],
    stack: [
      "Spring Boot",
      "Java",
      "AWS Cognito",
      "AWS Lambda",
      "AWS Route 53",
      "MySQL",
      "JPA",
      "Git",
      "Agile",
    ],
  },
  {
    company: "CommercePromote Inc.",
    role: "Summer Intern (Software Engineering)",
    period: "Jun 2021 – Sep 2021",
    location: "Colombo, Sri Lanka (Onsite)",
    summary:
      "Supported the development of ServiceTag, an auto repair shop management platform using .NET Core, React, and SQL technologies.",
    highlights: [
      "Developed and integrated REST APIs in .NET Core to support core system modules.",
      "Built customer and repair management modules with React and TypeScript.",
      "Designed and optimized relational SQL databases ensuring performance and data integrity.",
      "Worked within a small agile team to deliver a functional product prototype within 3 months.",
    ],
    stack: [".NET Core", "C#", "ReactJS", "TypeScript", "SQL", "Git", "Agile"],
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
    {
    title: "Agentic AI",
    provider: "deeplearning.ai",
    link: "https://learn.deeplearning.ai/certificates/a9716eda-1449-4d60-8554-95d381edfd0a?usp=sharing",
    description:
      "Building agentic AI systems that take action through iterative, multi-step workflows.",
  },
];

const projects: Project[] = [
  {
    name: "SlimFit Weight Loss Companion",
    context: "Academic project",
    highlights: [
      "Developed a cross-platform fitness app using React Native and Spring Boot to help users achieve personalized weight-loss goals.",
      "Built and integrated a regression model that accurately estimated calorie expenditure based on user activity data.",
      "Implemented secure authentication and authorization workflows with Spring Security, ensuring user privacy and data integrity.",
      "Optimized backend endpoints for faster data retrieval, improving overall app responsiveness by over 25%.",
    ],
    tech: ["React Native", "Spring Boot", "Java", "Python", "MySQL", "Spring Security", "Machine Learning"],
  },
  {
    name: "SEN Chat Application",
    context: "Passion project",
    highlights: [
      "Built a real-time messaging platform with Next.js and Spring Boot, enabling instant chat updates, typing indicators, and notifications through webhooks.",
      "Integrated Clerk authentication for secure user sign-in and seamless onboarding.",
      "Containerized frontend and backend with Docker and deployed on Google Cloud Run using automated CI/CD pipelines.",
      "Enhanced user engagement metrics by optimizing socket communication and reducing message latency under 100 ms.",
    ],
    tech: ["Next.js", "Spring Boot", "Java", "MySQL", "Docker", "Google Cloud Run", "Cloud Build"],
  },
  {
    name: "BMHealth BMI and BMR Analysis",
    context: "Academic project",
    highlights: [
      "Developed an AI-driven health application that predicts BMI and BMR from facial images using a VGG16 deep-learning model.",
      "Achieved a mean absolute error below 3 kg/m² on test data, demonstrating strong model precision.",
      "Integrated AWS Cognito with two-factor authentication to ensure secure user access.",
      "Deployed backend Flask services through AWS Elastic Beanstalk with an RDS database and automated CI/CD via CodePipeline.",
    ],
    tech: ["React Native", "Flask", "Python", "AWS Cognito", "AWS RDS", "Elastic Beanstalk", "CodePipeline", "Deep Learning"],
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
