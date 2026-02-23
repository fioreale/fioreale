export const siteConfig = {
  name: "Alessio Fiorentino",
  title: "Technical Architect & Founder",
  description: "Portfolio of Alessio Fiorentino — Technical Architect & Founder",
  accentColor: "#E4672D",
  social: {
    linkedin: "https://linkedin.com/in/alessio-fiorentino",
    github: "https://github.com/fioreale",
  },
  aboutMe:
    "Architecting scalable, secure cloud infrastructure with expertise in microservices, service mesh, and API gateway engineering. Passionate about building elegant systems that balance performance, security, and operational excellence.",
  skills: [
    "AWS",
    "Azure",
    "fly.io",
    "Kubernetes",
    "Docker",
    "Terraform",
    "EKS/ECS",
    "Envoy",
    "WASM (Rust)",
    "OPA",
    "Python",
    "Rust",
    "JavaScript",
    "CI/CD",
  ],
  projects: [
    {
      name: "Custom API Gateway",
      description:
        "Developed a specialized Envoy-based gateway with custom Rust WASM filters for advanced security and access control, enabling fine-grained RBAC and SSO at the edge.",
      skills: ["Envoy", "Rust", "WASM", "OPA"],
    },
    {
      name: "Cloud Native Transformations",
      description:
        "Architected and implemented enterprise-scale microservices solutions prioritizing scalability, security, and operational excellence across multi-team organizations.",
      skills: ["Kubernetes", "AWS", "Terraform", "Docker"],
    },
    {
      name: "Infrastructure as Code",
      description:
        "Built automated IaC solutions for complex multi-cloud deployments, enabling repeatable, auditable infrastructure provisioning across AWS, Azure, and fly.io.",
      skills: ["Terraform", "AWS", "Azure", "fly.io"],
    },
  ],
  experience: [],
  education: [
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
