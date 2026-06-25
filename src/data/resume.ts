// ─────────────────────────────────────────────────────────────────────────────
// RESUME DATA — edit this file to update the Resume page and the home page intro.
// Everything the site shows about Justin lives here, so it stays in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Justin Daschner",
  title: "Software Engineer · Backend & Cloud",
  tagline: ".NET · Azure · Go · AWS",
  location: "Humble, Texas",
  email: "Daschner02@hotmail.com",
  phone: "+1 (804) 366-1485",
  github: "https://github.com/jdaschner",
  githubHandle: "jdaschner",
  linkedin: "https://www.linkedin.com/in/justin-daschner-b21a92ab/",
  // Drop a PDF named resume.pdf into /public to enable the download button.
  resumePdf: "/resume.pdf",
  summary:
    "Backend and cloud engineer with 7+ years building and shipping production systems. I own services end to end and consistently raise the engineering bar — introducing code reviews, CI/CD pipelines, and modern source control wherever I land. My work spans legacy ERP rewrites to greenfield telehealth platforms, with a current focus on backend services, cloud infrastructure, and system design across .NET, Azure, Go, and AWS.",
};

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Carriage Services",
    location: "Houston, TX",
    start: "May 2025",
    end: "Present",
    bullets: [
      "Extracted 5 financial programs from a monolithic ERP and rewrote them as standalone services, cutting errors from 2–3 daily to roughly 1 per month.",
      "Built 4 CI/CD pipelines in Azure DevOps, cutting deploys from days down to minutes.",
      "Migrated 22 financial functions from the legacy CFSS system to Dynamics 365 Business Central, building 7 API and SFTP integrations to connect internal and third-party services.",
      "Moved a 93-project solution from TFSVC to Git after being told it couldn't be done — added code reviews, branch policies, and a real staging/production workflow. Critical production bugs dropped to near-zero and UAT cycles went from days to minutes.",
    ],
    tech: ["C#", ".NET", "SQL", "Azure DevOps", "Dynamics 365 BC", "Go", "Python"],
  },
  {
    role: "Application Engineer",
    company: "Spring Branch ISD",
    location: "Houston, TX",
    start: "Feb 2024",
    end: "Oct 2024",
    bullets: [
      "Built internal C#/.NET applications and tooling supporting the district's financial systems and staff efficiency.",
    ],
    tech: ["C#", ".NET"],
  },
  {
    role: "Software Engineer II",
    company: "Altron Inc",
    location: "Manassas, VA",
    start: "Sept 2022",
    end: "Jan 2024",
    bullets: [
      "Wrote a forward logger in C++ that was 30–60% faster and handled 40–50% more throughput than existing solutions.",
      "Owned 8–12+ REST APIs pulling data from systems written in C++, Java, Python, Rust, and Bash.",
      "Standardized dev and deployment environments across the team with Docker.",
    ],
    tech: ["C++", "Java", "Python", "Rust", "Bash", "Docker", "REST APIs"],
  },
  {
    role: "Jr. Software Developer",
    company: "Patient First",
    location: "Glen Allen, VA",
    start: "Sept 2019",
    end: "Sept 2022",
    bullets: [
      "Built a telehealth platform (Blazor, SQL Server, Azure) that recovered a third of the patient volume lost during COVID — still running in production today.",
      "Migrated 3 apps to Azure, including the main patient health system, rebuilding the backend around an API-first approach.",
      "Handled code reviews and on-call support for production issues.",
    ],
    tech: ["Blazor", "SQL Server", "Azure", "REST APIs"],
  },
  {
    role: "Software Development Intern",
    company: "CoStar Group",
    location: "Richmond, VA",
    start: "Aug 2018",
    end: "May 2019",
    bullets: [
      "Built an automated website data extraction tool for CoStar's team. Won the Excellence in Design award at the VCU Capstone Expo.",
    ],
    tech: ["C#", ".NET"],
  },
  {
    role: "Software Development Intern",
    company: "Performance Food Group",
    location: "Richmond, VA",
    start: "May 2017",
    end: "Aug 2017",
    bullets: [
      "Wrote a Java app that pulled data from an IBM mainframe via SQL and formatted it into Excel reports for the business team.",
    ],
    tech: ["Java", "SQL"],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Virginia Commonwealth University",
  location: "Richmond, VA",
  date: "May 2019",
  detail: "Minor in Applied Mathematics",
};

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Go", "C#", "Python", "JavaScript", "TypeScript", "Java", "SQL", "C++", "Bash"],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda, EC2, S3, ECS, RDS, IAM)",
      "Azure (Functions, App Services, DevOps)",
      "Terraform",
      "CDK",
      "Docker",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [".NET Framework/Core", "React.js", "Node.js", "Express.js", "REST APIs", "CI/CD", "Git", "Jenkins"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "SQLite"],
  },
];

export const awards = ["2019 VCU Capstone Design Expo — Award for Excellence in Design"];
