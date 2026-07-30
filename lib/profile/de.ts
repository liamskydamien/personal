import type { LocalizedProfileContent } from "./types";

export const profileDe: LocalizedProfileContent = {
  location: "Bonn, Deutschland",
  tagline: "Designer · Entwickler · Produkt",
  about:
    "Product Owner, der in Produkten denkt, in Figma designed und mit Code baut.",
  summary:
    "Product Owner mit über 3 Jahren bei der ZEISS Group — Features für 200.000+ Nutzer auf Mobile und Web. Vom Designer zum PO an der Schnittstelle von UX, Engineering und den Menschen, die das Produkt nutzen. Hintergrund in Wirtschaftsinformatik, Frontend und Design — vom Roadmap über Figma bis Code.",
  stats: [
    { num: "200K", unit: "+", label: "Nutzer über Mobile & Web bei ZEISS" },
    { num: "3", unit: "+ J.", label: "Produktentwicklung bei ZEISS" },
    { num: "6", unit: "+", label: "Länder in Teams, die ich geleitet habe" },
    { num: "1,2", unit: "", label: "B.Sc.-Note — Top 20 in 10 Jahren Programm" },
  ],
  roles: {
    designer: {
      title: "Designer",
      sub: "// Figma · UX · UI-Systeme",
      points: [
        "Komplette ZEISS Secacam Mobile-App-UI von Grund auf designed",
        "Design-Systeme aufgebaut, PRDs geschrieben, User Research durchgeführt",
        "Geschultes Auge für Abstände, Typografie und Interaktionsdetails",
      ],
      tools: ["Figma", "UX Research", "Design Systems", "Prototyping"],
    },
    developer: {
      title: "Entwickler",
      sub: "// React · React Native · TypeScript",
      points: [
        "B.Sc. Wirtschaftsinformatik — Abschlussnote 1,2",
        "Dynamisches Lokalisierungssystem in produktivem React Native ausgeliefert",
        "Sicher in der Codebase, wenn ein Feature genaueren Blick braucht",
      ],
      tools: ["React Native", "TypeScript", "Next.js", "Spring Boot", "SQL"],
    },
    product: {
      title: "Product Manager",
      sub: "// Roadmaps · Stakeholder · Outcomes",
      points: [
        "Verantwortlich für die Entwicklungs-Roadmap ZEISS Secacam Mobile + Web",
        "Führt cross-funktionale Teams in 6+ Ländern",
        "Bringt Engineering, Design und Business zusammen — von der Idee bis Release",
      ],
      tools: ["JIRA", "Confluence", "SCRUM", "Stakeholder Mgmt", "Roadmapping"],
    },
    ai: {
      title: "KI — aktuell im Fokus",
      sub: "// LLM-Tools · agentische Workflows · PM-Ergonomie",
      points: [
        "Prototypen für KI-gestützte Product-Discovery-Workflows",
        "Agentic Product aus PM-Perspektive verfolgen",
        "Lernen, wo Modelle helfen — und wo sie stören",
      ],
      tools: ["LLMs", "Prompting", "Agents", "Eval"],
    },
  },
  skills: [
    "Product Management", "UX Design", "Figma", "React Native", "React.js",
    "TypeScript", "Next.js", "JIRA", "Confluence", "Roadmap Management",
    "Stakeholder Management", "User Research", "SCRUM", "Lokalisierung",
    "Java", "Spring Boot", "SQL",
  ],
  work: [
    {
      company: "ZEISS Group",
      title: "Product Owner — ZEISS Secacam App",
      date: "2024 — heute",
      current: true,
      badges: ["Remote", "Mobile", "Web", "Produktmgmt"],
      description:
        "Verantwortlich für die Entwicklungs-Roadmap der ZEISS Secacam Mobile- & Web-App — der digitalen Oberfläche für ZEISS-Wildkameras mit über 200.000 Nutzern.",
      highlights: [
        "Features für 200.000+ Nutzer auf Mobile und Web",
        "Leitung von Frontend-Teams über mehrere Zeitzonen",
        "Abstimmung mit Stakeholdern aus Engineering, Hardware und Business",
        "Produkt von der Idee bis zum Release",
      ],
    },
    {
      company: "ZEISS Group",
      title: "Designer & App Manager",
      date: "2023 — 2024",
      badges: ["Teilzeit", "Figma", "UX", "Proxy PO"],
      description:
        "Als Werkstudent die ZEISS Secacam App von Anfang an mitgestaltet. Komplette App-UI designed, PRDs geschrieben und Proxy Product Owner für das Web-Team übernommen.",
      highlights: [
        "Komplette App-UI in Figma designed",
        "PRDs und Feature-Konzepte, die vom Engineering-Team übernommen wurden",
        "Proxy Product Owner für ein 4-köpfiges Web-Team",
      ],
    },
    {
      company: "ZDH-ZERT GmbH",
      title: "Webdesign und Marketing",
      date: "2022 — 2023",
      badges: ["Hybrid", "WordPress", "UX", "Newsletter"],
      description:
        "Redesign der Unternehmenswebsite von Konzept bis Launch und Newsletter End-to-End — von Inhalten bis Analytics. Automatisierung des Zertifizierungsprozesses mit intelligenten Formularen.",
      highlights: [],
    },
    {
      company: "Freiberuflich",
      title: "Freelance Webdesigner & Entwickler",
      date: "2021 — 2023",
      badges: ["Remote", "WordPress", "Figma", "E-Commerce"],
      description:
        "Websites für vier Kunden aus verschiedenen Branchen — von Konzept bis Deployment, inkl. voll funktionsfähigem E-Commerce-Shop, parallel zum Studium.",
      highlights: [],
    },
    {
      company: "Carl Zeiss Consumer Products",
      title: "Kundenservice",
      date: "2020 — 2022",
      badges: ["Remote", "JIRA", "CRM", "Amazon"],
      description:
        "Kundenservice, Amazon-Kanal-Management und interne Prozessverbesserung. Internen JIRA-Workflow für Problemtracking aufgebaut, der die Reaktionszeiten des Teams verbesserte.",
      highlights: [],
    },
    {
      company: "Tops.net",
      title: "Praktikum Webentwicklung",
      date: "2018",
      badges: ["Vor Ort", "HTML", "SQL"],
      description:
        "Schulpraktikum — erste praktische Erfahrung in Webentwicklung, einfache Websites und Arbeit mit Datenbanken.",
      highlights: [],
    },
  ],
  projects: [
    {
      title: "Etwas Neues mit ZEISS",
      role: "Ankündigung folgt",
      eyebrow: "Bald verfügbar",
      description:
        "Das nächste ZEISS-Projekt ist bereits in Arbeit — dasselbe Team, neues Produkt. Details bleiben noch unter Verschluss.",
      tags: ["ZEISS", "In Arbeit"],
      isMystery: true,
      size: "tall",
    },
    {
      title: "Dynamisches Lokalisierungssystem",
      role: "Bachelorarbeit · Note 1,2",
      eyebrow: "F&E",
      description:
        "System für Echtzeit-Anpassung von UI und Features pro Region ohne App-Store-/Play-Store-Release — Feature Flags + Lokalise + Unleash.",
      tags: ["React Native", "Unleash", "Lokalise", "Feature Flags"],
      size: "half",
    },
    {
      title: "ZDH-ZERT Website-Redesign",
      role: "Alleiniger Designer & Entwickler",
      eyebrow: "Web",
      description:
        "Komplettes Redesign von Konzept bis Launch. Newsletter-Pipeline End-to-End plus automatisierte Zertifizierungsformulare mit weniger manueller Eingabe.",
      tags: ["WordPress", "UX", "Automation"],
      size: "half",
    },
    {
      title: "Freiberuflich — 4 Kundenwebsites",
      role: "Design + Build, End-to-End",
      eyebrow: "Kundenarbeit",
      description:
        "Individuelle Sites in vier Branchen parallel zum Studium — inkl. voll funktionsfähigem E-Commerce. Anforderungen, Design und Umsetzung in eigener Hand.",
      tags: ["WordPress", "Figma", "E-Commerce"],
      size: "half",
    },
    {
      title: "JIRA Issue-Tracking-Prozess",
      role: "Prozessdesign",
      eyebrow: "Internes Tooling",
      description:
        "Internen Problemtracking-Workflow in JIRA bei Carl Zeiss Consumer Products designed und ausgerollt — messbar schnellere Reaktionszeiten im Team.",
      tags: ["JIRA", "Prozess", "Ops"],
      size: "half",
    },
  ],
  sideProjects: [
    {
      title: "Freedom Calc",
      grade: "Austausch · Vietnam",
      description:
        "Webbasierter Finanz-Freiheits-Rechner mit zwei vietnamesischen Studierenden. Visualisiert Vermögenswachstum vs. Lebenshaltungskosten und erzeugt ein optimiertes Portfolio nach Markowitz.",
      tags: ["TypeScript", "React.js", "Financial Modelling"],
      link: { label: "github.com/liamskydamien/freedom-calc", href: "https://github.com/liamskydamien/freedom-calc" },
    },
    {
      title: "Aldavia — Studenten-Job-Plattform",
      grade: "Note 1,0",
      description:
        "Job-Plattform für HBRS in zwei Sprints mit sechs Personen. Rolle: Product Owner Proxy, Software Architect und Programmierer.",
      tags: ["Spring Boot", "Java", "Vaadin", "SCRUM"],
      link: { label: "github.com/liamskydamien/Aldavia", href: "https://github.com/liamskydamien/Aldavia" },
    },
    {
      title: "IW-Junior Voting App",
      grade: "Bundeswettbewerb",
      description:
        "Digitale Engagement-Schicht für einen nationalen Schülerfirmen-Wettbewerb — Voting-App, in der Gäste virtuell in Start-ups investieren konnten.",
      tags: ["Figma", "Design Thinking", "Mobile"],
    },
    {
      title: "Etwas Neues für Freelancer & Agenturen",
      grade: "Bald verfügbar",
      description:
        "Ein KI-fokussiertes Projekt für Freelancer und Agenturen nimmt Form an. Noch nicht zeigbar — die Enthüllung folgt.",
      tags: ["KI", "Freelancer", "Agenturen"],
      isMystery: true,
    },
  ],
  education: [
    {
      date: "2021 — 2024",
      school: "Hochschule Bonn-Rhein-Sieg",
      degree: "B.Sc. Wirtschaftsinformatik — Note 1,2, Top-20-Absolvent in der 10-jährigen Programmgeschichte",
    },
    {
      date: "2023 — 2024",
      school: "Vietnamese-German University",
      degree: "Auslandssemester BWL & Informatik — Note 1,1, DAAD-PROMOS-Stipendiat",
    },
    {
      date: "2020 — 2021",
      school: "Rheinische Friedrich-Wilhelms-Universität Bonn",
      degree: "B.A. (nicht abgeschlossen), Asienwissenschaften / Sinologie",
    },
    {
      date: "2012 — 2020",
      school: "Gymnasium am Ölberg",
      degree: "Abitur — Note 2,0",
    },
  ],
};
