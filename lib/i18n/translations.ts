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
    product: [
      'Product Management',
      'Roadmap Management',
      'Stakeholder Management',
      'User Research',
      'SCRUM',
      'JIRA',
      'Confluence',
    ],
    design: ['UX Design', 'Figma', 'Prototyping', 'Design Systems', 'Localisation'],
    engineering: ['React Native', 'React.js', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'SQL'],
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
    backgroundLink: 'CV',
  },
  background: {
    backLink: '← Back to home',
    eyebrow: 'Experience & Education · the long form',
    heading: 'The full ',
    headingAccent: 'background.',
    lede: 'Every role and every school behind the journey from customer service to Product Owner — start to now.',
  },
  imprint: {
    metaTitle: 'Imprint — Liam Hess',
    metaDescription:
      'Provider identification under § 5 German Digital Services Act (DDG): name, address, and contact details.',
    backLink: '← Back to home',
    eyebrow: 'Legal information · § 5 DDG',
    heading: 'Imprint',
    lede:
      'Provider identification under the German Digital Services Act (DDG) — easy to find, directly reachable, and always available.',
    legalForm: 'Natural person',
    addressCountry: 'Germany',
    providerTitle: 'Information pursuant to § 5 DDG',
    providerIntro:
      'Service provider within the meaning of the Digital Services Act (DDG) is:',
    contactTitle: 'Contact',
    emailLabel: 'Email',
    websiteLabel: 'Website',
    contactNote:
      'Email is available for quick, direct contact.',
    vatTitle: 'VAT',
    vatText: 'VAT identification number pursuant to § 27a German VAT Act:',
    disputeTitle: 'Consumer dispute resolution',
    disputeP1:
      'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    disputeP2Prefix:
      'The European Commission provides a platform for online dispute resolution (ODR):',
    liabilityContentTitle: 'Liability for content',
    liabilityContent: [
      'As a service provider, we are responsible for our own content on these pages under general law pursuant to § 7 (1) DDG. However, pursuant to §§ 8 to 10 DDG, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.',
      'Obligations to remove or block the use of information under general law remain unaffected. Liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding infringements, we will remove such content immediately.',
    ],
    liabilityLinksTitle: 'Liability for links',
    liabilityLinks: [
      'Our offer contains links to external third-party websites over whose content we have no influence. We therefore cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
      'Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
    ],
    copyrightTitle: 'Copyright',
    copyright: [
      'The content and works created by the site operator on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are permitted only for private, non-commercial use.',
      'Insofar as content on this page was not created by the operator, third-party copyrights are respected. Third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please notify us. Upon becoming aware of legal violations, we will remove such content immediately.',
    ],
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
    product: [
      'Product Management',
      'Roadmap Management',
      'Stakeholder Management',
      'User Research',
      'SCRUM',
      'JIRA',
      'Confluence',
    ],
    design: ['UX Design', 'Figma', 'Prototyping', 'Design Systems', 'Lokalisierung'],
    engineering: ['React Native', 'React.js', 'TypeScript', 'Next.js', 'Java', 'Spring Boot', 'SQL'],
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
    backgroundLink: 'Lebenslauf',
  },
  background: {
    backLink: '← Zurück zur Startseite',
    eyebrow: 'Erfahrung & Bildung · die ausführliche Version',
    heading: 'Der vollständige ',
    headingAccent: 'Hintergrund.',
    lede: 'Jede Rolle und jede Schule hinter dem Weg vom Kundenservice zum Product Owner — von Anfang bis heute.',
  },
  imprint: {
    metaTitle: 'Impressum — Liam Hess',
    metaDescription:
      'Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG): Name, Anschrift und Kontaktdaten.',
    backLink: '← Zur Startseite',
    eyebrow: 'Rechtliche Angaben · § 5 DDG',
    heading: 'Impressum',
    lede:
      'Anbieterkennzeichnung nach dem Digitale-Dienste-Gesetz (DDG) — leicht erkennbar, unmittelbar erreichbar und ständig verfügbar.',
    legalForm: 'Natürliche Person',
    addressCountry: 'Deutschland',
    providerTitle: 'Angaben gemäß § 5 DDG',
    providerIntro:
      'Diensteanbieter im Sinne des Digitale-Dienste-Gesetzes (DDG) ist:',
    contactTitle: 'Kontakt',
    emailLabel: 'E-Mail',
    websiteLabel: 'Website',
    contactNote:
      'Für eine schnelle, unmittelbare Erreichbarkeit steht die E-Mail zur Verfügung.',
    vatTitle: 'Umsatzsteuer',
    vatText: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:',
    disputeTitle: 'Verbraucherstreitbeilegung',
    disputeP1:
      'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    disputeP2Prefix:
      'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    liabilityContentTitle: 'Haftung für Inhalte',
    liabilityContent: [
      'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    ],
    liabilityLinksTitle: 'Haftung für Links',
    liabilityLinks: [
      'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
      'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    ],
    copyrightTitle: 'Urheberrecht',
    copyright: [
      'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    ],
  },
};

export const translations: Record<Locale, typeof en> = { en, de };
export type Translations = typeof en;
