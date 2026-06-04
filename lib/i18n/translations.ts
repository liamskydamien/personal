export type Locale = 'en' | 'de';

export type RichPart = { t: string; b?: true };
export type RichText = RichPart[];

export const SUPPORTED_LOCALES: Locale[] = ['en', 'de'];

const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    blog: 'Blog',
    menuLabel: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    getInTouch: 'Get in touch',
    navigationLabel: 'Navigation',
  },
  hero: {
    line1: 'Designer.',
    line2: 'Developer.',
    line3: 'Product Manager.',
    ledePrefix: "I'm",
    ledeSuffix:
      '— a Product Owner who thinks in products, designs in Figma, and builds with code. 3+ years at ZEISS shipping to 200,000+ users. Currently exploring AI as the next layer of how products get made.',
    ctaContact: 'Get in touch',
    ctaWork: 'See my work',
    tabDesigner: 'Designer',
    tabDeveloper: 'Developer',
    tabProduct: 'Product',
    tabAI: 'AI',
  },
  about: {
    eyebrow: '01 / About',
    title: 'From customer service to product owner — through design and code.',
    meta: '// the journey',
    p1: [
      { t: 'I started in ' },
      { t: 'customer service', b: true },
      {
        t: ' at Carl Zeiss Consumer Products in 2020 — answering tickets, tracking issues, and building an internal JIRA workflow when I saw a process gap. That’s where I learned what users actually struggle with.',
      },
    ] as RichText,
    p2: [
      { t: 'While studying ' },
      { t: 'Business Information Systems', b: true },
      {
        t: ', I freelanced as a web designer and developer for four clients — owning everything from requirements to deployment. Design, code, scope — all on me.',
      },
    ] as RichText,
    p3: [
      { t: 'In 2023 I joined the ' },
      { t: 'ZEISS Secacam', b: true },
      {
        t: ' team as a designer and quickly grew into a Proxy Product Owner role. In 2024 I became the official Product Owner for the mobile and web app — a product that now reaches over ',
      },
      { t: '200,000 users', b: true },
      { t: '.' },
    ] as RichText,
    p4: [
      {
        t: 'That journey through every adjacent discipline is the foundation I bring to product: ',
      },
      {
        t: 'I can talk to engineers in their language, design with the team, and still keep my head on the roadmap.',
        b: true,
      },
    ] as RichText,
    statLabels: [
      'users reached across mobile & web at ZEISS',
      'shipping product at ZEISS Group',
      "countries spanned by teams I've led",
      'B.Sc. grade — top 20 in 10 years of program',
    ],
  },
  skills: {
    eyebrow: '02 / Toolkit',
    title: 'What I work with.',
    meta: '// 3 disciplines, 17 tools',
    groupProduct: 'Product',
    groupDesign: 'Design',
    groupEngineering: 'Engineering',
  },
  timeline: {
    eyebrow: '03 / Experience',
    title: 'A timeline of getting here.',
    meta: '// 6 roles · 2018 — present',
  },
  projects: {
    eyebrow: '04 / Work',
    title: 'Selected projects.',
    meta: '// owned, designed or built',
  },
  sideProjects: {
    eyebrow: '05 / Side projects',
    title: 'Things I build outside of work.',
    meta: '// thesis · uni · exploration',
  },
  currentlyExploring: {
    eyebrow: '06 / Now',
    title: 'Currently exploring.',
    meta: '// status: learning',
    heading: 'AI as a layer of how product gets made.',
    p: "I think the next interesting frontier for a PM is figuring out which parts of the discovery, spec-writing, and triage loop benefit from LLMs and agentic tooling — and which don’t. I’m prototyping in this space alongside my day-to-day work.",
    item1: 'Prompt patterns for user interviews and synthesis',
    item2: 'Agentic workflows for ticket triage and PRD drafting',
    item3: 'Evaluating where AI helps a PM vs. gets in the way',
    item4: 'Hands-on with React-based AI UIs and tooling',
  },
  education: {
    eyebrow: '07 / Education',
    title: 'School and study.',
    meta: '// 2012 — 2024',
  },
  contact: {
    eyebrow: "// let’s talk",
    heading: 'Looking for a Product Manager who codes and designs?',
    p: "I’m open to senior PM / Product Owner roles where breadth across design, engineering and product actually matters. Drop me a line — I read everything.",
  },
  footer: {
    copyright: '© 2026 Liam Hess · Built with AI and Passion',
    imprintLink: 'Imprint',
    backgroundLink: 'Experience & Education →',
  },
  background: {
    backLink: '← Back to home',
    eyebrow: 'Experience & Education · the long form',
    heading: 'The full ',
    headingAccent: 'background.',
    lede: 'Every role and every school behind the journey from customer service to Product Owner — start to now.',
  },
};

const de: typeof en = {
  nav: {
    about: 'Über mich',
    skills: 'Toolkit',
    work: 'Arbeit',
    projects: 'Projekte',
    contact: 'Kontakt',
    cv: 'CV',
    blog: 'Blog',
    menuLabel: 'Menü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    getInTouch: 'Kontakt aufnehmen',
    navigationLabel: 'Navigation',
  },
  hero: {
    line1: 'Designer.',
    line2: 'Entwickler.',
    line3: 'Product Manager.',
    ledePrefix: 'Ich bin',
    ledeSuffix:
      '— ein Product Owner, der in Produkten denkt, in Figma designed und mit Code baut. 3+ Jahre bei ZEISS, 200.000+ Nutzer. Aktuell erforsche ich KI als nächste Ebene der Produktentwicklung.',
    ctaContact: 'Kontakt aufnehmen',
    ctaWork: 'Meine Projekte',
    tabDesigner: 'Designer',
    tabDeveloper: 'Entwickler',
    tabProduct: 'Produkt',
    tabAI: 'KI',
  },
  about: {
    eyebrow: '01 / Über mich',
    title: 'Vom Kundenservice zum Product Owner — durch Design und Code.',
    meta: '// der Weg',
    p1: [
      { t: 'Ich begann im ' },
      { t: 'Kundenservice', b: true },
      {
        t: ' bei Carl Zeiss Consumer Products 2020 — beantwortete Tickets, verfolgte Probleme und baute einen internen JIRA-Workflow, als ich eine Prozesslücke entdeckte. So lernte ich, womit Nutzer wirklich kämpfen.',
      },
    ] as RichText,
    p2: [
      { t: 'Während meines Studiums der ' },
      { t: 'Wirtschaftsinformatik', b: true },
      {
        t: ' arbeitete ich freiberuflich als Webdesigner und -entwickler für vier Kunden — alles von den Anforderungen bis zur Bereitstellung. Design, Code, Scope — alles in meiner Hand.',
      },
    ] as RichText,
    p3: [
      { t: '2023 wechselte ich zum ' },
      { t: 'ZEISS Secacam', b: true },
      {
        t: '-Team als Designer und wuchs schnell in eine Proxy-Product-Owner-Rolle. 2024 wurde ich offizieller Product Owner der Mobile- und Web-App — ein Produkt, das jetzt über ',
      },
      { t: '200.000 Nutzer', b: true },
      { t: ' erreicht.' },
    ] as RichText,
    p4: [
      {
        t: 'Diese Reise durch alle angrenzenden Disziplinen ist das Fundament, das ich in die Produktarbeit einbringe: ',
      },
      {
        t: 'Ich kann mit Ingenieuren in ihrer Sprache sprechen, mit dem Team designen und trotzdem den Blick auf die Roadmap behalten.',
        b: true,
      },
    ] as RichText,
    statLabels: [
      'Nutzer über Mobile & Web bei ZEISS erreicht',
      'Jahre Produktentwicklung bei ZEISS',
      'Länder in Teams, die ich geleitet habe',
      'B.Sc. Note — Top 20 in 10 Jahren Programm',
    ],
  },
  skills: {
    eyebrow: '02 / Toolkit',
    title: 'Womit ich arbeite.',
    meta: '// 3 Bereiche, 17 Tools',
    groupProduct: 'Produkt',
    groupDesign: 'Design',
    groupEngineering: 'Engineering',
  },
  timeline: {
    eyebrow: '03 / Erfahrung',
    title: 'Ein Zeitstrahl des Weges.',
    meta: '// 6 Stationen · 2018 — heute',
  },
  projects: {
    eyebrow: '04 / Arbeit',
    title: 'Ausgewählte Projekte.',
    meta: '// geleitet, designed oder gebaut',
  },
  sideProjects: {
    eyebrow: '05 / Nebenprojekte',
    title: 'Was ich außerhalb der Arbeit baue.',
    meta: '// Thesis · Uni · Erkundung',
  },
  currentlyExploring: {
    eyebrow: '06 / Aktuell',
    title: 'Aktuell erkunde ich.',
    meta: '// Status: Lernen',
    heading: 'KI als Schicht der Produktentwicklung.',
    p: 'Ich glaube, die nächste interessante Grenze für einen PM ist herauszufinden, welche Teile des Discovery-, Spec-Writing- und Triage-Loops von LLMs und agentischen Werkzeugen profitieren — und welche nicht. Ich prototypisiere in diesem Bereich parallel zu meiner täglichen Arbeit.',
    item1: 'Prompt-Patterns für Nutzerinterviews und Synthese',
    item2: 'Agentische Workflows für Ticket-Triage und PRD-Entwurf',
    item3: 'Evaluierung, wo KI einem PM hilft vs. im Weg steht',
    item4: 'Praktische Arbeit mit React-basierten KI-UIs und Tools',
  },
  education: {
    eyebrow: '07 / Bildung',
    title: 'Schule und Studium.',
    meta: '// 2012 — 2024',
  },
  contact: {
    eyebrow: '// lass uns reden',
    heading: 'Suchen Sie einen Product Manager, der coden und designen kann?',
    p: 'Ich bin offen für Senior-PM / Product-Owner-Stellen, bei denen die Breite über Design, Engineering und Produkt wirklich zählt. Schreiben Sie mir — ich lese alles.',
  },
  footer: {
    copyright: '© 2026 Liam Hess · Mit KI und Leidenschaft gebaut',
    imprintLink: 'Impressum',
    backgroundLink: 'Erfahrung & Bildung →',
  },
  background: {
    backLink: '← Zurück zur Startseite',
    eyebrow: 'Erfahrung & Bildung · die ausführliche Version',
    heading: 'Der vollständige ',
    headingAccent: 'Hintergrund.',
    lede: 'Jede Rolle und jede Schule hinter dem Weg vom Kundenservice zum Product Owner — von Anfang bis heute.',
  },
};

export const translations: Record<Locale, typeof en> = { en, de };
export type Translations = typeof en;
