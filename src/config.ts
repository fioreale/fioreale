export const siteConfig = {
  name: "Alessio Fiorentino",
  title: "Technical Architect, Cloud Systems Builder, and Founder",
  description:
    "Portfolio of Alessio Fiorentino — Technical Architect, Cloud Systems Builder, and Founder",
  accentColor: "#E4672D",
  social: {
    linkedin: "https://linkedin.com/in/alessio-fiorentino",
    github: "https://github.com/fioreale",
  },
  aboutMe:
    "I design resilient cloud infrastructure, validate products with rigor, and build software where AI, operations, and human workflows meet. Based between Milan and Bergamo, I operate as a CloudOps Specialist at Brembo, where I enable teams through sound cloud architecture rather than control-heavy processes. What differentiates my profile is the continuity between enterprise execution and venture building.",
  skills: [
    "AWS",
    "Azure",
    "OCI",
    "fly.io",
    "Kubernetes",
    "Docker",
    "Terraform",
    "EKS/ECS",
    "FastAPI",
    "Whisper",
    "Ollama",
    "WeasyPrint",
    "Envoy",
    "WASM (Rust)",
    "OPA",
    "Python",
    "Rust",
    "JavaScript",
    "Bash",
    "PowerShell",
    "CI/CD",
  ],
  projects: [
    {
      name: "PublicLeap",
      description:
        "A GovTech venture built to transform fragmented public data, including interviews and public inputs, into structured policy intelligence for municipal decision-makers under the principle 'AI advises, humans decide.' The product direction is narrow by design, starting from bounded public-sector problems and using ontology coverage, structured interviews, and a six-stage technical architecture to connect raw signals with policy reporting.",
      skills: ["AI", "Policy Intelligence", "Ontology", "Public-Sector"],
      link: "https://publicleap.org",
    },
    {
      name: "RFQ Analyzer",
      description:
        "An AI-assisted workflow concept for extracting structure and signal from procurement documents and reducing the manual burden of requirement analysis. Rather than positioning AI as a generic layer, the idea is to use focused automation where domain complexity is high and decision time is expensive. This project fits my broader interest in building tools that help technical or operational teams move from scattered information to usable decisions.",
      skills: ["AI", "FastAPI", "Procurement", "Automation"],
      link: "https://github.com/fioreale/rfq-deviation-analyzer",
    },
    {
      name: "Paperflow",
      description:
        "A minimal article-to-PDF solution designed to archive web articles into a clean reading format optimized for reMarkable and Dropbox-based workflows. The system is built around FastAPI, WeasyPrint, Fly.io, and a deliberately simple frontend approach, with decisions driven by automation, low complexity, and cost-conscious infrastructure tradeoffs. The product reflects a pattern that appears throughout my work: removing friction from knowledge workflows through precise architecture rather than feature overload.",
      skills: ["FastAPI", "WeasyPrint", "Fly.io", "PDF", "reMarkable"],
      link: "https://github.com/fioreale/PaperFlow",
    },
    {
      name: "Virgilio",
      description:
        "A voice-guided indoor navigation system for complex buildings, created with a multidisciplinary team after a second-place hackathon result and then pushed into structured customer validation across hospitals, universities, corporate offices, malls, and events. The project focuses especially on first-time visitors, accessibility, and measurable outcomes such as time-to-destination, reduced staff interruption, and user satisfaction. Its architecture evolved toward a FastAPI-based local inference stack using Whisper, Ollama, and voice synthesis components.",
      skills: ["FastAPI", "Whisper", "Ollama", "Voice AI", "Navigation"],
    },
    {
      name: "Topya",
      description:
        "A startup effort developed during my transition from corporate leadership toward entrepreneurship, rooted in the ambition to solve fragmented workflows and create a company shaped by strong internal conviction. The broader transition period around Topya also clarified a core founder lesson: product ambition is not enough if team alignment and long-term bet quality are not equally strong. Although the project was brought to a full stop around mid-2025 because of team-level conviction dynamics, it remains central to my entrepreneurial development because it sharpened my standards for commitment, focus, and partnership quality.",
      skills: ["Product Strategy", "Team Alignment", "Entrepreneurship", "Startups"],
    },
  ],
  experience: [
    {
      company: "PublicLeap",
      role: "Founder",
      dateRange: "Feb 2026 - Present",
      description:
        "Building GovTech solutions to transform fragmented public data into structured policy intelligence for municipal decision-makers.",
    },
    {
      company: "Brembo",
      role: "CloudOps Specialist",
      dateRange: "2025 - Feb 2026",
      description:
        "Contributing to digital transformation through cloud architecture, team enablement, and operational clarity. Colleagues frequently rely on me for technical guidance.",
    },
    {
      company: "Hiop",
      role: "Software Engineer & DevSecOps Architect",
      dateRange: "Nov 2023 - Dec 2024",
      description:
        "Secure architecture design and SDLC integration.",
    },
    {
      company: "Hiop",
      role: "Software Engineer & DevOps Architect",
      dateRange: "Nov 2022 - Nov 2023",
      description:
        "Infrastructure optimization achieving 30% cost reduction and delivering client cloud solutions.",
    },
    {
      company: "Atos",
      role: "Cloud Architect",
      dateRange: "Oct 2021 - Oct 2022",
      description:
        "Led migrations to Azure and AWS for enterprise clients.",
    },
    {
      company: "HOPENLY S.R.L.",
      role: "Data Scientist Intern",
      dateRange: "Sep 2020 - Apr 2021",
      description:
        "Backend development and dataset management with edge ML optimization.",
    },
  ],
  education: [
    {
      school: "Politecnico di Milano",
      degree: "Master's degree in Computer Science and Engineering",
      dateRange: "2021",
      achievements: [],
    },
    {
      school: "CNCF",
      degree: "Certified Kubernetes Administrator (CKA)",
      dateRange: "2023",
      achievements: [
        "Kubernetes cluster administration and lifecycle management",
        "Networking, storage, and security configuration",
        "Troubleshooting and maintaining production-grade clusters",
      ],
    },
    {
      school: "Amazon Web Services",
      degree: "AWS Solutions Architect — Associate",
      dateRange: "2022",
      achievements: [
        "Cloud architecture design and best practices",
        "EC2, EKS, ECS, S3 and core AWS services",
        "Infrastructure as Code with CloudFormation",
      ],
    },
    {
      school: "Microsoft",
      degree: "Microsoft Azure Fundamentals",
      dateRange: "2021",
      achievements: [
        "Azure core services and cloud concepts",
        "Security, privacy, and compliance fundamentals",
        "Azure pricing and support models",
      ],
    },
  ],
};
