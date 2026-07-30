import type { LocalizedProfileContent } from "./types";

export const profileEn: LocalizedProfileContent = {
  location: "Cologne, Germany",
  tagline: "Designer · Developer · Product",
  about:
    "Product Owner who thinks in products, designs in Figma, and builds with code.",
  summary:
    "Product Owner with 3+ years at ZEISS Group, shipping features to 200,000+ users across mobile and web. I've grown from Designer to PO and sit at the intersection of sharp UX, solid engineering, and a deep understanding of the people using the product. My background across business informatics, frontend development, and design lets me work fluently across disciplines — from roadmap to Figma to code.",
  stats: [
    { num: "200K", unit: "+", label: "users reached across mobile & web at ZEISS" },
    { num: "3", unit: "+ yrs", label: "shipping product at ZEISS Group" },
    { num: "6", unit: "+", label: "countries spanned by teams I've led" },
    { num: "1.2", unit: "", label: "B.Sc. grade — top 20 in 10 years of program" },
  ],
  roles: {
    designer: {
      title: "Designer",
      sub: "// Figma · UX · UI systems",
      points: [
        "Designed the full ZEISS Secacam mobile app UI from the ground up",
        "Built design systems, wrote PRDs, ran user research",
        "Trained eye for spacing, typography, and interaction polish",
      ],
      tools: ["Figma", "UX Research", "Design Systems", "Prototyping"],
    },
    developer: {
      title: "Developer",
      sub: "// React · React Native · TypeScript",
      points: [
        "Bachelor's in Business Information Systems — graduated 1.2",
        "Shipped a dynamic localisation system in production React Native",
        "Comfortable in the codebase when a feature needs a closer look",
      ],
      tools: ["React Native", "TypeScript", "Next.js", "Spring Boot", "SQL"],
    },
    product: {
      title: "Product Manager",
      sub: "// Roadmaps · Stakeholders · Outcomes",
      points: [
        "Owns the development roadmap for ZEISS Secacam mobile + web",
        "Leads cross-functional teams across 6+ countries",
        "Aligns engineering, design, and business — concept to release",
      ],
      tools: ["JIRA", "Confluence", "SCRUM", "Stakeholder Mgmt", "Roadmapping"],
    },
    ai: {
      title: "AI — currently exploring",
      sub: "// LLM tooling · agentic workflows · PM ergonomics",
      points: [
        "Prototyping AI-assisted workflows for product discovery",
        "Following the agentic-product wave from a PM lens",
        "Learning where models help and where they get in the way",
      ],
      tools: ["LLMs", "Prompting", "Agents", "Eval"],
    },
  },
  skills: [
    "Product Management", "UX Design", "Figma", "React Native", "React.js",
    "TypeScript", "Next.js", "JIRA", "Confluence", "Roadmap Management",
    "Stakeholder Management", "User Research", "SCRUM", "Localisation",
    "Java", "Spring Boot", "SQL",
  ],
  work: [
    {
      company: "ZEISS Group",
      title: "Product Owner — ZEISS Secacam App",
      date: "2024 — Now",
      current: true,
      badges: ["Remote", "Mobile", "Web", "Product Mgmt"],
      description:
        "Own the development roadmap for the ZEISS Secacam Mobile & Web App — the digital interface for ZEISS trail cameras, with 200,000+ combined users.",
      highlights: [
        "Shipping features to 200,000+ users across mobile and web",
        "Leading frontend development teams across multiple time zones",
        "Aligning stakeholders from engineering, hardware and business",
        "Driving the product from concept to release",
      ],
    },
    {
      company: "ZEISS Group",
      title: "Designer & App Manager",
      date: "2023 — 2024",
      badges: ["Part-time", "Figma", "UX", "Proxy PO"],
      description:
        "Joined as a working student supporting the ZEISS Secacam App from the ground up. Designed the full app UI, wrote PRDs, and grew into Proxy Product Owner for the web team.",
      highlights: [
        "Designed the full app UI in Figma",
        "Wrote PRDs and feature concepts adopted by the engineering team",
        "Took on Proxy Product Owner for a 4-developer web team",
      ],
    },
    {
      company: "ZDH-ZERT GmbH",
      title: "Webdesign and Marketing",
      date: "2022 — 2023",
      badges: ["Hybrid", "WordPress", "UX", "Newsletter"],
      description:
        "Led the redesign of the company website from concept to launch and ran the newsletter end-to-end — content through analytics. Helped automate the certification process with smart form inputs.",
      highlights: [],
    },
    {
      company: "Freelance",
      title: "Freelance Web Designer & Developer",
      date: "2021 — 2023",
      badges: ["Remote", "WordPress", "Figma", "E-Commerce"],
      description:
        "Designed and built custom websites for four clients across different industries — concept to deployment — starting with a fully functional e-commerce store, all while studying.",
      highlights: [],
    },
    {
      company: "Carl Zeiss Consumer Products",
      title: "Customer Service",
      date: "2020 — 2022",
      badges: ["Remote", "JIRA", "CRM", "Amazon"],
      description:
        "Supported customer service operations, Amazon channel management, and internal process improvement. Built an internal problem-tracking process in JIRA that streamlined issue resolution across the team.",
      highlights: [],
    },
    {
      company: "Tops.net",
      title: "Web Development Intern",
      date: "2018",
      badges: ["On-site", "HTML", "SQL"],
      description:
        "School internship — first hands-on exposure to web development, building simple websites and working with databases.",
      highlights: [],
    },
  ],
  projects: [
    {
      title: "200K+ users",
      role: "Reach across mobile & web",
      eyebrow: "Scale",
      isStat: true,
      size: "tall",
    },
    {
      title: "Dynamic Localisation System",
      role: "Bachelor's Thesis · Grade 1.2",
      eyebrow: "R&D",
      description:
        "Built a system enabling real-time UI and feature adaptation per region without an App Store / Play Store release — feature flags + Lokalise + Unleash.",
      tags: ["React Native", "Unleash", "Lokalise", "Feature Flags"],
      size: "half",
    },
    {
      title: "ZDH-ZERT Website Redesign",
      role: "Sole designer & developer",
      eyebrow: "Web",
      description:
        "Led the full redesign from concept to launch. Newsletter pipeline end-to-end, plus automated certification forms that cut manual entry.",
      tags: ["WordPress", "UX", "Automation"],
      size: "half",
    },
    {
      title: "Freelance — 4 client sites",
      role: "Design + build, end-to-end",
      eyebrow: "Client work",
      description:
        "Custom sites across four industries while studying — including a fully functional e-commerce store. Owned requirements, design and implementation.",
      tags: ["WordPress", "Figma", "E-Commerce"],
      size: "half",
    },
    {
      title: "JIRA Issue Tracking Process",
      role: "Process design",
      eyebrow: "Internal tooling",
      description:
        "Designed and rolled out an internal problem-tracking workflow in JIRA at ZEISS Consumer Products that measurably improved team response times.",
      tags: ["JIRA", "Process", "Ops"],
      size: "half",
    },
  ],
  sideProjects: [
    {
      title: "Freedom Calc",
      grade: "Exchange · Vietnam",
      description:
        "Web-based financial freedom calculator built with two Vietnamese students. Visualises wealth growth vs. life costs over time and generates an optimised asset portfolio based on Markowitz Portfolio Theory.",
      tags: ["TypeScript", "React.js", "Financial Modelling"],
      link: { label: "github.com/liamskydamien/freedom-calc", href: "https://github.com/liamskydamien/freedom-calc" },
    },
    {
      title: "Aldavia — Student Job Platform",
      grade: "Grade 1.0",
      description:
        "Student job platform built for HBRS in two sprints with a team of six. I served as Product Owner Proxy, Software Architect, and Programmer.",
      tags: ["Spring Boot", "Java", "Vaadin", "SCRUM"],
      link: { label: "github.com/liamskydamien/Aldavia", href: "https://github.com/liamskydamien/Aldavia" },
    },
    {
      title: "IW-Junior Voting App",
      grade: "National competition",
      description:
        "Designed a digital engagement layer for a national student company competition — a voting app where event guests could virtually invest in participating startups.",
      tags: ["Figma", "Design Thinking", "Mobile"],
    },
    {
      title: "AI Workflows for PMs",
      grade: "In progress",
      description:
        "Currently exploring LLM-assisted product workflows: prompt patterns for discovery interviews, agentic ticket triage, and where AI helps a PM versus where it doesn't.",
      tags: ["LLMs", "Agents", "PM tooling"],
    },
  ],
  education: [
    {
      date: "2021 — 2024",
      school: "Hochschule Bonn-Rhein-Sieg",
      degree: "B.Sc. Business Information Systems — Grade 1.2, top 20 graduate in the program's 10-year history",
    },
    {
      date: "2023 — 2024",
      school: "Vietnamese-German University",
      degree: "Exchange Semester, Business Administration & Computer Science — Grade 1.1, DAAD PROMOS Scholar",
    },
    {
      date: "2020 — 2021",
      school: "Rheinische Friedrich-Wilhelms-Universität Bonn",
      degree: "B.A. (incomplete), Asian Studies / Sinology",
    },
    {
      date: "2012 — 2020",
      school: "Gymnasium am Ölberg",
      degree: "Abitur — Grade 2.0",
    },
  ],
};
