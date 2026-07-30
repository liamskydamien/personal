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
      '— a Product Owner who thinks in products, designs in Figma, and builds with code. 3+ years at ZEISS shipping an app with 200,000+ downloads. Currently exploring AI as the next layer of how products get made.',
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
        t: ' team as a designer and quickly grew into a Proxy Product Owner role. In 2024 I became the official Product Owner for the mobile and web app — an app with over ',
      },
      { t: '200,000 downloads', b: true },
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
      'app downloads across mobile & web at ZEISS',
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
    meta: '// festival app · thesis · uni · exploration',
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
    privacySettingsLink: 'Privacy settings',
  },
  consent: {
    bannerAriaLabel: 'Cookie consent',
    bannerTitle: 'Analytics cookies',
    bannerText:
      'This site uses PostHog to measure how visitors use the site. Accept to allow cookies and full analytics; decline to use cookieless, privacy-preserving analytics only.',
    accept: 'Accept',
    reject: 'Decline',
    modalTitle: 'Privacy settings',
    modalText:
      'Choose whether PostHog may store cookies and use local storage for analytics. If you decline, analytics still runs in cookieless mode without storing data in your browser.',
    statusLabel: 'Current choice:',
    statusGranted: 'Analytics accepted',
    statusDenied: 'Analytics declined (cookieless)',
    statusPending: 'No choice yet',
    close: 'Close',
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
  secacam: {
    appIconAlt: 'ZEISS Secacam app icon',
    meta: {
      title: 'ZEISS Secacam — case study | Liam Hess',
      description:
        'The ZEISS Secacam app with 200,000+ downloads: AI animal recognition, Color the Night, the Activity Center and SecaTrack — and what I own as Product Owner for mobile and web.',
    },
    showcase: {
      eyebrow: '// flagship product',
      title: 'ZEISS Secacam',
      meta: 'iOS · Android · Web — 200,000+ downloads — Product Owner since 2024',
      lede:
        'A trail camera is only as good as the app behind it. Secacam moves every capture from the forest to your pocket in seconds, then lets AI do the sorting — which species, which night, which corner of the territory.',
      ctaPrimary: 'Open the case study',
      ctaSecondary: 'View on the App Store',
    },
    scroller: {
      label: 'ZEISS Secacam app screenshots',
      hint: 'Use the left and right arrow keys to scroll through the screenshots.',
      prev: 'Previous screenshots',
      next: 'Next screenshots',
    },
    shots: {
      manage: {
        caption: 'Every camera, its status and its plan on one screen.',
        alt: 'App Store screenshot: camera overview showing the service plan, remaining transmissions and a grid of subscribed cameras. Headline on the image (English): “Manage & operate your cameras”.',
      },
      settings: {
        caption: 'Capture, photo and video settings changed without leaving the house.',
        alt: 'App Store screenshot: remote camera settings for sensitivity, flash mode, photo size and video recording. Headline on the image (English): “Change your camera settings remotely”.',
      },
      filters: {
        caption: 'The AI filters a full gallery down to the species you care about.',
        alt: 'App Store screenshot: photo gallery grouped by date with an active “Animal & Object” filter and detection boxes on the thumbnails. Headline on the image (English): “Filter based on Animals”.',
      },
      video: {
        caption: 'Full HD video streamed straight into the app.',
        alt: 'App Store screenshot: in-app video player showing two deer at night, with download, share and favourite actions. Headline on the image (English): “Videos directly in your app”.',
      },
      night: {
        caption: 'Color the Night turns a greyscale infrared shot into a lifelike night image.',
        alt: 'App Store screenshot: a colourised night capture of a deer with an AI detection box around it. Headline on the image (English): “Animal Recognition & Color the Night”.',
      },
      track: {
        caption: 'SecaTrack reports the camera’s GPS position every ten minutes.',
        alt: 'App Store screenshot: satellite map view showing the camera’s attachment location with an “Open in Maps” button. Headline on the image (English): “Track your camera”.',
      },
      dark: {
        caption: 'Dark mode, and twenty languages.',
        alt: 'App Store screenshot: the same photo gallery rendered in dark mode. Headline on the image (English): “Darkmode available & in 20 Languages”.',
      },
    },
    hero: {
      back: '← Back to work',
      eyebrow: 'Case study · ZEISS Secacam',
      headingLead: 'The app with ',
      headingAccent: '200,000+ downloads.',
      lede:
        'ZEISS Secacam is a connected trail camera system: the hardware sits in the forest, and the app is where the product actually happens. I own that app — roadmap, discovery, specs and release — across iOS, Android and the browser.',
      metaRole: 'Product Owner, mobile & web',
      metaSince: 'Proxy PO 2023 · PO since 2024',
      metaScale: '200,000+ downloads',
      metaPlatforms: 'iOS · Android · Web',
      ctaAppStore: 'View on the App Store',
      ctaVideos: 'Watch the videos',
    },
    owned: {
      eyebrow: '01 / My role',
      title: 'What I actually own.',
      meta: '// product owner, mobile & web',
      lede:
        'I joined the Secacam team as a designer in 2023, grew into a Proxy Product Owner, and took the official Product Owner role for the mobile and web app in 2024. The job sits between hunters in the field, engineers across two platforms, and the hardware and business stakeholders who all need the same release to land.',
      points: {
        p1: 'Own the roadmap for the mobile and web app — what ships, in what order, and what we deliberately do not build.',
        p2: 'Lead frontend teams across React Native and Next.js, from refinement through release.',
        p3: 'Run discovery with hunters, then turn it into specs engineers can build from without a translation layer.',
        p4: 'Align engineering, hardware and business stakeholders so the app and the camera ship as one product.',
        p5: 'Own localisation across twenty languages, including the German and English source copy.',
        p6: 'Keep a live product healthy at 200,000+ downloads while new AI features land on top of it.',
      },
      stackTitle: 'Stack & tools',
      teamTitle: 'The team shape',
      teamText:
        'Cross-functional and cross-border: frontend on mobile and web, backend and cloud, hardware and firmware, plus design and business. My job is to keep one roadmap legible to all of them.',
    },
    gallery: {
      eyebrow: '02 / The app',
      title: 'Seven screens, one product.',
      meta: '// swipe, or use the arrows',
    },
    features: {
      eyebrow: '03 / Features',
      title: 'What the app can do.',
      meta: '// nine capabilities across four service tiers',
      items: {
        recognition: {
          badge: 'AI',
          title: 'Animal recognition',
          body: 'A deep-learning model classifies the species in a capture within seconds, reading size, shape and fur colour. It was trained on images from real hunting locations, annotated by hunters themselves, and it is retrained continuously as new imagery arrives — so it holds up on night-vision shots and on animals half-hidden behind a bush. That classification is what makes a gallery of thousands of captures filterable at all. Inference runs on ZEISS’s own EU cloud infrastructure, GDPR-compliant.',
        },
        colorNight: {
          badge: 'Patent pending',
          title: 'Color the Night',
          body: 'Infrared night captures are greyscale, and the eye reads a greyscale frame measurably slower than a coloured one. So the camera takes a daytime reference photo of the same spot, which becomes a colour palette for the AI; at night that palette is mapped onto the monochrome infrared frame to produce a lifelike night image. It degrades gracefully by design — a brand-new camera site, fresh snow or heavy rain means the reference is stale, and the result stays cautious until it catches up. Included with the Professional package.',
        },
        activity: {
          badge: 'Data',
          title: 'Activity Center',
          body: 'Every sighting becomes data. Species, time and location are logged per territory and turned into population and distribution views, activity patterns and best time windows — weighted by weather, hunting pressure and moon phase — plus the hotspots and feeding areas where something actually happens.',
        },
        secatrack: {
          badge: 'Basic and up',
          title: 'SecaTrack GPS',
          body: 'Cameras left in the forest get stolen. SecaTrack reports the camera’s coordinates every ten minutes, so a missing camera is a point on a map rather than a write-off.',
        },
        remote: {
          badge: 'All plans',
          title: 'Remote status & settings',
          body: 'Battery, signal and storage at a glance, plus full capture, photo and video settings changed from the app — sensitivity, flash mode, image size, video length. No drive out to the camera to change one value.',
        },
        gallery: {
          badge: 'Premium and up',
          title: 'Gallery, filters & albums',
          body: 'Photos and videos organised by camera and by date, filtered by detected animal or object, and grouped into custom albums by location or setup. Video transmission runs from the Basic plan upward; on prepaid it costs four credits per video.',
        },
        sharing: {
          badge: 'Basic and up',
          title: 'Sharing & roles',
          body: 'Camera access shared with friends, family or a hunting party, with viewer and operator roles — so not everyone who can look can also change settings. Multi-camera management comes with a 30% discount from four cameras up.',
        },
        darkmode: {
          badge: 'Craft',
          title: 'Dark mode & 20 languages',
          body: 'A dark theme that genuinely fits the use case: this app gets opened before dawn and after dusk. Localised into twenty languages, which shapes every layout decision we make.',
        },
        notifications: {
          badge: 'All plans',
          title: 'Instant notifications',
          body: 'A push lands the moment a camera triggers, with the capture attached. For most users this is the product — they rarely open the app cold, they open it from a notification.',
        },
      },
    },
    videos: {
      eyebrow: '04 / On camera',
      title: 'Talking about the product.',
      meta: '// expert talk · brand film · short',
      playLabel: 'Play video',
      ledBadge: 'I drove this one',
      privacyNote:
        'Nothing loads from YouTube until you press play — and then only from youtube-nocookie.com.',
      items: {
        aiExplainer: {
          title: 'Expert Talk: unlocking AI power with the ZEISS Secacam app',
          description:
            'A panel walking through what the AI in Secacam actually does — animal recognition, Color the Night and the Activity Center — and why it matters in the field. I played a major role in this one, from shaping the content to being on camera.',
        },
        conservation: {
          title: 'Digital tools in hunting: how ZEISS technology is shaping wildlife conservation',
          description:
            'The wider picture: how connected cameras and the data they produce feed into wildlife management and conservation, not just hunting.',
        },
        short: {
          title: 'Triggered — Secacam in one notification',
          description:
            'A short on the moment the whole product hangs on: a camera fires, and the capture is on your phone seconds later.',
        },
      },
    },
    refs: {
      eyebrow: '05 / Sources',
      title: 'Read more at ZEISS.',
      meta: '// official product pages & blog',
      items: {
        appFeatures: 'ZEISS Secacam app — full feature and service plan overview',
        activityCenter: 'The Activity Center — turning sightings into territory data',
        colorNight: 'Color the Night — how AI colourises infrared night captures',
        aiRecognition: 'AI animal recognition — how the model is trained and what it detects',
        product: 'The ZEISS Secacam trail camera — hardware, plans and field use',
        appStore: 'ZEISS Secacam on the App Store',
        playStore: 'ZEISS Secacam on Google Play',
      },
    },
  },
  yourt: {
    appIconAlt: 'Yourt app icon',
    meta: {
      title: 'Yourt — case study | Liam Hess',
      description:
        'A festival app that syncs lineups, friends and money: shared set planning, a live map of the grounds, QR invites, expenses and shopping lists — built solo in three weeks with Claude Code, Cursor and Supabase.',
    },
    showcase: {
      eyebrow: '// personal project',
      title: 'Yourt',
      meta: 'iOS · Android · Web — solo build in 3 weeks — zero to one with AI',
      lede:
        '“Which artist are you going to see?” — the one question a festival weekend keeps producing, and the one nobody could answer without a dozen screenshots in a group chat. Yourt puts the lineup, your friends and the shared money in one app.',
      ctaPrimary: 'Open the case study',
      ctaSecondary: 'See the screens',
    },
    scroller: {
      label: 'Yourt app screenshots',
      hint: 'Use the left and right arrow keys to scroll through the screenshots.',
      prev: 'Previous screenshots',
      next: 'Next screenshots',
    },
    shots: {
      home: {
        caption: 'What is on right now, and where the crew is standing.',
        alt: 'App screenshot: home screen with a “Recommended now” card for a live act and a “Friends right now” row showing which friend is at which stage.',
      },
      timetable: {
        caption: 'Mark a set, and see who else in the crew marked it.',
        alt: 'App screenshot: festival timetable by stage and day, with marked sets highlighted and friend avatars on the acts they are attending. Headline on the image (English): “Same festival, same plan.”',
      },
      map: {
        caption: 'Friends, stages and shared pins on the actual festival grounds.',
        alt: 'App screenshot: map of the festival site with stages, food courts, shared pins and live friend positions. Headline on the image (English): “Lost your friends?”',
      },
      lists: {
        caption: 'One shopping list the whole group edits.',
        alt: 'App screenshot: shared shopping list with a progress bar, items still needed and items already bought, each showing who paid. Headline on the image (English): “How much do I owe you?”',
      },
      expenses: {
        caption: 'Group balances and a settle-up flow at the end of the weekend.',
        alt: 'App screenshot: expenses tab showing your balance, total spent, group total, a “Settle up” button and per-person balances.',
      },
      rating: {
        caption: 'Rate each set on music, energy and show.',
        alt: 'App screenshot: rating screen for a single set with star ratings for music, energy and show plus an optional comment field. Headline on the image (English): “Best set of the weekend?”',
      },
    },
    hero: {
      back: '← Back to side projects',
      eyebrow: 'Case study · Yourt',
      headingLead: 'Which artist are ',
      headingAccent: 'you going to see?',
      lede:
        'Yourt is a festival app that syncs the lineup, your friends and the shared weekend budget. It started as a personal challenge — solve the one question that keeps coming up on every festival, and build the whole thing with AI in the loop.',
      metaRole: 'Solo — product, design & code',
      metaSince: 'Idea to working app in 3 weeks',
      metaScale: 'Zero to one with AI',
      metaPlatforms: 'iOS · Android · Web',
      ctaScreens: 'See the screens',
      ctaBuild: 'How it was built',
    },
    build: {
      eyebrow: '01 / The build',
      title: 'A personal challenge, shipped.',
      meta: '// solo, with AI in the loop',
      lede:
        'Aligning which sets you and your friends want to attend used to be a tedious job: screenshots of the timetable, a group chat, and someone always ending up at the wrong stage. I wanted to fix that — and to find out how far AI-assisted development actually gets you on a real, multi-user product rather than a demo.',
      points: {
        p1: 'Took Yourt from idea to a working multi-user app in three weeks, next to a full-time job.',
        p2: 'Designed the data model first — festivals, sets, marks, friendships, groups, expenses — because every social feature stands or falls with the schema.',
        p3: 'Used Claude Code and Cursor as the implementation layer, and kept product decisions, scope and review on my side.',
        p4: 'Built on Supabase for auth, realtime sync and row-level security, so the privacy rules live in the database rather than in the UI.',
        p5: 'Shipped to iOS, Android and the web from a single React Native and Expo codebase.',
        p6: 'Cut everything that was not the core loop: mark a set, see your friends, plan the weekend together.',
      },
      stackTitle: 'Stack & tools',
      teamTitle: 'The team shape',
      teamText:
        'A team of one, with agents doing most of the typing. That shifts the job rather than shrinking it: less time writing code, far more time deciding what should exist, reviewing what came back, and keeping the architecture coherent.',
    },
    gallery: {
      eyebrow: '02 / The app',
      title: 'Six screens, one weekend.',
      meta: '// swipe, or use the arrows',
    },
    features: {
      eyebrow: '03 / Features',
      title: 'What the app can do.',
      meta: '// eight capabilities across planning, social and money',
      items: {
        lineup: {
          badge: 'Core',
          title: 'Shared lineup planning',
          body: 'Every act on the timetable, by stage and by day. Mark the sets you want to see and the app immediately shows who else in your crew marked the same one — the negotiation that used to happen over screenshots now happens inside the schedule itself. Clashes are visible while there is still time to decide, not once you are standing in front of the wrong stage.',
        },
        map: {
          badge: 'Live',
          title: 'Live map of the grounds',
          body: 'Stages, food courts and facilities on a map of the actual site, with your friends’ live positions on top. Shared pins and status notes carry the rest — “meeting at the flag”, “we moved to Mainstage” — so a lost crew is a glance rather than a phone call that will not connect on festival reception.',
        },
        social: {
          badge: 'Social',
          title: 'Friends, groups & QR invites',
          body: 'A full social layer: friend requests, crews and groups, and QR code invites so joining a group at the gate takes one scan instead of a username somebody has to spell out over the bass.',
        },
        privacy: {
          badge: 'Control',
          title: 'Granular privacy',
          body: 'Location, marked sets and lists are shared per person and per group, so you decide what each circle sees. Sharing your position with your crew for an afternoon should not mean broadcasting it to everyone you ever added.',
        },
        expenses: {
          badge: 'Money',
          title: 'Expense tracker',
          body: 'Who paid for the camping gear, who owes what, and one balance per person at the end. Group totals, individual shares and a settle-up flow, so the weekend does not end in mental accounting.',
        },
        shopping: {
          badge: 'Planning',
          title: 'Shared shopping list',
          body: 'The supply run as one list the whole group edits — what is still needed, who added it, who bought it, with progress across the crew. Nobody comes back with the third pack of the same thing.',
        },
        rating: {
          badge: 'Fun',
          title: 'Set ratings',
          body: 'Rate every set on music, energy and show, drop a comment, and settle the only argument that matters on the way home: which act actually won the weekend.',
        },
        crossPlatform: {
          badge: 'Platforms',
          title: 'One codebase, three platforms',
          body: 'React Native and Expo put the same app on iOS, Android and the web, with Supabase behind it for auth, data, realtime sync and row-level security.',
        },
      },
    },
    caseStudy: {
      eyebrow: '04 / Zero to one with AI',
      title: 'Building a real product with AI in the loop.',
      meta: '// full write-up in progress',
      noteBadge: 'Work in progress',
      noteTitle: 'The detailed case study is still being written.',
      noteBody:
        'What follows is the short version: the three-week arc and the first learnings. The full write-up — every challenge, every dead end, and what AI was genuinely good and genuinely bad at — will replace this section.',
      phasesTitle: 'The three weeks',
      phases: {
        week1: {
          title: 'Week 1 — schema & skeleton',
          body: 'Data model, auth and the festival/lineup core. The first week decided how far the rest could go: get festivals, sets and marks wrong and every social feature after it inherits the mistake.',
        },
        week2: {
          title: 'Week 2 — the social layer',
          body: 'Friends, groups, QR invites, privacy rules and live locations — the part where a single-player planner turns into something worth opening with other people.',
        },
        week3: {
          title: 'Week 3 — money, polish & platforms',
          body: 'Expenses, shopping lists and set ratings, then the pass that makes it feel like an app: navigation, empty states, and the same build running on iOS, Android and the web.',
        },
      },
      learningsTitle: 'Early learnings',
      learnings: {
        scope: {
          title: 'Scope is the bottleneck, not code',
          body: 'When implementation stops being the constraint, deciding what not to build becomes the whole job. The three weeks were spent on judgement far more than on syntax.',
        },
        schema: {
          title: 'Own the data model yourself',
          body: 'Agents happily produce a schema that works for the screen in front of them. Privacy rules, group membership and shared expenses need one that works for every screen after it — that part stayed mine.',
        },
        review: {
          title: 'Reviewing beats typing',
          body: 'The quality of the product tracked the quality of my review loop, not the quality of the prompts. Reading every diff carefully was the actual work.',
        },
      },
    },
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
      '— ein Product Owner, der in Produkten denkt, in Figma designed und mit Code baut. 3+ Jahre bei ZEISS, 200.000+ App-Downloads. Aktuell erforsche ich KI als nächste Ebene der Produktentwicklung.',
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
        t: '-Team als Designer und wuchs schnell in eine Proxy-Product-Owner-Rolle. 2024 wurde ich offizieller Product Owner der Mobile- und Web-App — eine App mit über ',
      },
      { t: '200.000 Downloads', b: true },
      { t: '.' },
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
      'App-Downloads über Mobile & Web bei ZEISS',
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
    meta: '// Festival-App · Thesis · Uni · Erkundung',
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
    privacySettingsLink: 'Datenschutz',
  },
  consent: {
    bannerAriaLabel: 'Cookie-Einwilligung',
    bannerTitle: 'Analyse-Cookies',
    bannerText:
      'Diese Website nutzt PostHog, um die Nutzung zu messen. Bei Zustimmung werden Cookies und vollständige Analyse verwendet; bei Ablehnung nur cookielose, datenschutzfreundliche Analyse.',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    modalTitle: 'Datenschutz-Einstellungen',
    modalText:
      'Legen Sie fest, ob PostHog Cookies und lokalen Speicher für Analysen nutzen darf. Bei Ablehnung läuft die Analyse weiterhin cookieless, ohne Daten in Ihrem Browser zu speichern.',
    statusLabel: 'Aktuelle Auswahl:',
    statusGranted: 'Analyse akzeptiert',
    statusDenied: 'Analyse abgelehnt (cookieless)',
    statusPending: 'Noch keine Auswahl',
    close: 'Schließen',
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
  secacam: {
    appIconAlt: 'App-Icon der ZEISS Secacam App',
    meta: {
      title: 'ZEISS Secacam — Case Study | Liam Hess',
      description:
        'Die ZEISS Secacam App mit über 200.000 Downloads: KI-Tiererkennung, Color the Night, Aktivitätscenter und SecaTrack — und wofür ich als Product Owner für Mobile und Web verantwortlich bin.',
    },
    showcase: {
      eyebrow: '// Kernprodukt',
      title: 'ZEISS Secacam',
      meta: 'iOS · Android · Web — 200.000+ Downloads — Product Owner seit 2024',
      lede:
        'Eine Wildkamera ist nur so gut wie die App dahinter. Secacam bringt jede Aufnahme in Sekunden aus dem Revier aufs Handy — und überlässt das Sortieren der KI: welche Tierart, welche Nacht, welche Ecke des Reviers.',
      ctaPrimary: 'Case Study öffnen',
      ctaSecondary: 'Im App Store ansehen',
    },
    scroller: {
      label: 'Screenshots der ZEISS Secacam App',
      hint: 'Mit den Pfeiltasten links und rechts durch die Screenshots blättern.',
      prev: 'Vorherige Screenshots',
      next: 'Nächste Screenshots',
    },
    shots: {
      manage: {
        caption: 'Alle Kameras, ihr Status und ihr Tarif auf einem Screen.',
        alt: 'App-Store-Screenshot: Kameraübersicht mit Service-Tarif, verbleibenden Übertragungen und den abonnierten Kameras. Bildüberschrift (englisch): „Manage & operate your cameras“.',
      },
      settings: {
        caption: 'Aufnahme-, Foto- und Videoeinstellungen ändern, ohne rauszufahren.',
        alt: 'App-Store-Screenshot: Kameraeinstellungen aus der Ferne für Empfindlichkeit, Blitzmodus, Fotogröße und Videoaufnahme. Bildüberschrift (englisch): „Change your camera settings remotely“.',
      },
      filters: {
        caption: 'Die KI filtert die volle Galerie auf die Tierart herunter, die zählt.',
        alt: 'App-Store-Screenshot: nach Datum gruppierte Fotogalerie mit aktivem Filter „Animal & Object“ und Erkennungsrahmen auf den Vorschaubildern. Bildüberschrift (englisch): „Filter based on Animals“.',
      },
      video: {
        caption: 'Full-HD-Video direkt in der App.',
        alt: 'App-Store-Screenshot: Videoplayer in der App mit zwei Rehen bei Nacht sowie Aktionen zum Herunterladen, Teilen und Favorisieren. Bildüberschrift (englisch): „Videos directly in your app“.',
      },
      night: {
        caption: 'Color the Night macht aus einer Graustufen-Infrarotaufnahme ein lebensechtes Nachtbild.',
        alt: 'App-Store-Screenshot: koloriertes Nachtbild eines Rehs mit KI-Erkennungsrahmen. Bildüberschrift (englisch): „Animal Recognition & Color the Night“.',
      },
      track: {
        caption: 'SecaTrack meldet die GPS-Position der Kamera alle zehn Minuten.',
        alt: 'App-Store-Screenshot: Satellitenkarte mit dem Standort der Kamera und einer Schaltfläche „Open in Maps“. Bildüberschrift (englisch): „Track your camera“.',
      },
      dark: {
        caption: 'Dark Mode — und zwanzig Sprachen.',
        alt: 'App-Store-Screenshot: dieselbe Fotogalerie im Dark Mode. Bildüberschrift (englisch): „Darkmode available & in 20 Languages“.',
      },
    },
    hero: {
      back: '← Zurück zur Arbeit',
      eyebrow: 'Case Study · ZEISS Secacam',
      headingLead: 'Die App mit ',
      headingAccent: '200.000+ Downloads.',
      lede:
        'ZEISS Secacam ist ein vernetztes Wildkamera-System: Die Hardware steht im Revier, in der App passiert das eigentliche Produkt. Diese App verantworte ich — Roadmap, Discovery, Spezifikation und Release — für iOS, Android und den Browser.',
      metaRole: 'Product Owner, Mobile & Web',
      metaSince: 'Proxy PO 2023 · PO seit 2024',
      metaScale: '200.000+ Downloads',
      metaPlatforms: 'iOS · Android · Web',
      ctaAppStore: 'Im App Store ansehen',
      ctaVideos: 'Videos ansehen',
    },
    owned: {
      eyebrow: '01 / Meine Rolle',
      title: 'Wofür ich wirklich verantwortlich bin.',
      meta: '// product owner, mobile & web',
      lede:
        'Ich bin 2023 als Designer ins Secacam-Team gekommen, in die Rolle des Proxy Product Owners hineingewachsen und habe 2024 die offizielle Product-Owner-Rolle für die Mobile- und Web-App übernommen. Die Aufgabe liegt zwischen Jägerinnen und Jägern im Revier, Entwicklungsteams auf zwei Plattformen und den Hardware- und Business-Stakeholdern, die alle dasselbe Release brauchen.',
      points: {
        p1: 'Die Roadmap für die Mobile- und Web-App verantworten — was ausgeliefert wird, in welcher Reihenfolge, und was wir bewusst nicht bauen.',
        p2: 'Frontend-Teams über React Native und Next.js hinweg führen, vom Refinement bis zum Release.',
        p3: 'Discovery mit Jägerinnen und Jägern führen und daraus Spezifikationen machen, mit denen Entwicklungsteams ohne Übersetzungsschicht arbeiten können.',
        p4: 'Entwicklung, Hardware und Business so ausrichten, dass App und Kamera als ein Produkt erscheinen.',
        p5: 'Die Lokalisierung in zwanzig Sprachen verantworten, inklusive der deutschen und englischen Quelltexte.',
        p6: 'Ein Live-Produkt mit 200.000+ Downloads stabil halten, während laufend neue KI-Funktionen dazukommen.',
      },
      stackTitle: 'Stack & Tools',
      teamTitle: 'Das Team',
      teamText:
        'Crossfunktional und länderübergreifend: Frontend für Mobile und Web, Backend und Cloud, Hardware und Firmware, dazu Design und Business. Meine Aufgabe ist, eine Roadmap für alle lesbar zu halten.',
    },
    gallery: {
      eyebrow: '02 / Die App',
      title: 'Sieben Screens, ein Produkt.',
      meta: '// wischen oder die Pfeile nutzen',
    },
    features: {
      eyebrow: '03 / Funktionen',
      title: 'Was die App kann.',
      meta: '// neun Funktionen über vier Service-Pakete',
      items: {
        recognition: {
          badge: 'KI',
          title: 'Tiererkennung',
          body: 'Ein Deep-Learning-Modell bestimmt die Tierart auf einer Aufnahme innerhalb von Sekunden — anhand von Größe, Form und Fellfarbe. Trainiert wurde es mit Bildern von echten jagdlichen Standorten, annotiert von Jägerinnen und Jägern selbst, und es wird mit neuem Bildmaterial laufend nachtrainiert. So funktioniert es auch bei Nachtsichtaufnahmen und bei Tieren, die halb hinter einem Busch stehen. Genau diese Klassifizierung macht eine Galerie mit Tausenden Aufnahmen überhaupt filterbar. Die Verarbeitung läuft DSGVO-konform auf der eigenen EU-Cloud-Infrastruktur von ZEISS.',
        },
        colorNight: {
          badge: 'Patent angemeldet',
          title: 'Color the Night',
          body: 'Infrarot-Nachtaufnahmen sind Graustufenbilder — und das Auge liest ein Graustufenbild messbar langsamer als ein farbiges. Deshalb macht die Kamera tagsüber ein Referenzfoto derselben Stelle, das der KI als Farbpalette dient; nachts wird diese Palette auf das monochrome Infrarotbild übertragen und ergibt ein lebensechtes Nachtbild. Das System bleibt bewusst vorsichtig, wenn die Referenz nicht passt: ein frisch aufgehängter Standort, Neuschnee oder starker Regen — bis genug neue Referenzbilder vorliegen. Im Professional-Paket enthalten.',
        },
        activity: {
          badge: 'Daten',
          title: 'Aktivitätscenter',
          body: 'Jede Sichtung wird zu Daten. Tierart, Zeit und Ort werden pro Revier erfasst und zu Auswertungen über Bestand und Verteilung, Aktivitätsmustern und den besten Zeitfenstern — gewichtet nach Wetter, Jagddruck und Mondphase — sowie zu Hotspots und bevorzugten Äsungsflächen verdichtet.',
        },
        secatrack: {
          badge: 'Ab Basic',
          title: 'SecaTrack GPS',
          body: 'Kameras im Revier werden gestohlen. SecaTrack meldet die Koordinaten der Kamera alle zehn Minuten — eine verschwundene Kamera ist damit ein Punkt auf der Karte statt ein Totalverlust.',
        },
        remote: {
          badge: 'Alle Pakete',
          title: 'Status & Einstellungen aus der Ferne',
          body: 'Akku, Empfang und Speicher auf einen Blick, dazu alle Aufnahme-, Foto- und Videoeinstellungen direkt aus der App — Empfindlichkeit, Blitzmodus, Bildgröße, Videolänge. Keine Fahrt ins Revier, um einen Wert zu ändern.',
        },
        gallery: {
          badge: 'Ab Premium',
          title: 'Galerie, Filter & Alben',
          body: 'Fotos und Videos nach Kamera und Datum geordnet, nach erkanntem Tier oder Objekt gefiltert und in eigenen Alben nach Standort oder Aufbau gruppiert. Videoübertragung gibt es ab dem Basic-Paket; im Prepaid-Modell kostet ein Video vier Credits.',
        },
        sharing: {
          badge: 'Ab Basic',
          title: 'Freigabe & Rollen',
          body: 'Kamerazugriff für Freunde, Familie oder die Jagdgesellschaft freigeben — mit Rollen für Betrachten und Bedienen, damit nicht jeder, der schauen darf, auch Einstellungen ändern kann. Ab vier Kameras kommt die Verwaltung mehrerer Kameras mit 30 % Rabatt.',
        },
        darkmode: {
          badge: 'Handwerk',
          title: 'Dark Mode & 20 Sprachen',
          body: 'Ein dunkles Theme, das zum Anwendungsfall passt: Diese App wird vor Sonnenaufgang und nach Einbruch der Dunkelheit geöffnet. Lokalisiert in zwanzig Sprachen — was jede Layout-Entscheidung mitprägt.',
        },
        notifications: {
          badge: 'Alle Pakete',
          title: 'Sofortige Benachrichtigungen',
          body: 'Eine Push-Nachricht kommt in dem Moment an, in dem eine Kamera auslöst — mit der Aufnahme im Anhang. Für die meisten Nutzer ist genau das das Produkt: Sie öffnen die App selten kalt, sondern aus einer Benachrichtigung heraus.',
        },
      },
    },
    videos: {
      eyebrow: '04 / Vor der Kamera',
      title: 'Über das Produkt sprechen.',
      meta: '// expert talk · markenfilm · short',
      playLabel: 'Video abspielen',
      ledBadge: 'Maßgeblich von mir getrieben',
      privacyNote:
        'Vor dem Klick auf Play wird nichts von YouTube geladen — und danach nur von youtube-nocookie.com.',
      items: {
        aiExplainer: {
          title: 'Expert Talk: Unlocking AI Power with the ZEISS Secacam App',
          description:
            'Eine Gesprächsrunde darüber, was die KI in Secacam tatsächlich leistet — Tiererkennung, Color the Night und das Aktivitätscenter — und warum das im Revier zählt. An diesem Video hatte ich einen maßgeblichen Anteil, von der inhaltlichen Ausrichtung bis vor die Kamera.',
        },
        conservation: {
          title: 'Digital Tools in Hunting: How ZEISS Technology is Shaping Wildlife Conservation',
          description:
            'Das größere Bild: wie vernetzte Kameras und die Daten daraus in Wildtiermanagement und Naturschutz einfließen — nicht nur in die Jagd.',
        },
        short: {
          title: 'Ausgelöst — Secacam in einer Benachrichtigung',
          description:
            'Ein Short über den Moment, an dem das ganze Produkt hängt: Die Kamera löst aus, und Sekunden später liegt die Aufnahme auf dem Handy.',
        },
      },
    },
    refs: {
      eyebrow: '05 / Quellen',
      title: 'Mehr dazu bei ZEISS.',
      meta: '// offizielle produktseiten & blog',
      items: {
        appFeatures: 'ZEISS Secacam App — alle Funktionen und Service-Pakete im Überblick',
        activityCenter: 'Das Aktivitätscenter — aus Sichtungen werden Revierdaten',
        colorNight: 'Color the Night — wie die KI Infrarot-Nachtaufnahmen koloriert',
        aiRecognition: 'KI-Tiererkennung — wie das Modell trainiert wird und was es erkennt',
        product: 'Die ZEISS Secacam Wildkamera — Hardware, Pakete und Praxis',
        appStore: 'ZEISS Secacam im App Store',
        playStore: 'ZEISS Secacam bei Google Play',
      },
    },
  },
  yourt: {
    appIconAlt: 'App-Icon der Yourt App',
    meta: {
      title: 'Yourt — Case Study | Liam Hess',
      description:
        'Eine Festival-App, die Line-up, Freunde und Geld synchronisiert: gemeinsame Set-Planung, Live-Karte des Geländes, QR-Einladungen, Ausgaben und Einkaufslisten — solo in drei Wochen mit Claude Code, Cursor und Supabase gebaut.',
    },
    showcase: {
      eyebrow: '// Privatprojekt',
      title: 'Yourt',
      meta: 'iOS · Android · Web — solo in 3 Wochen — Zero to One mit KI',
      lede:
        '„Zu welchem Artist gehst du?“ — die eine Frage, die jedes Festivalwochenende produziert, und die niemand ohne ein Dutzend Screenshots im Gruppenchat beantworten konnte. Yourt bringt Line-up, Freunde und die gemeinsame Kasse in eine App.',
      ctaPrimary: 'Case Study öffnen',
      ctaSecondary: 'Screens ansehen',
    },
    scroller: {
      label: 'Screenshots der Yourt App',
      hint: 'Mit den Pfeiltasten links und rechts durch die Screenshots blättern.',
      prev: 'Vorherige Screenshots',
      next: 'Nächste Screenshots',
    },
    shots: {
      home: {
        caption: 'Was gerade läuft — und wo die Crew steht.',
        alt: 'App-Screenshot: Startseite mit einer Karte „Recommended now“ für einen laufenden Act und einer Reihe „Friends right now“, die zeigt, welcher Freund an welcher Bühne ist.',
      },
      timetable: {
        caption: 'Ein Set markieren und sehen, wer aus der Crew es auch markiert hat.',
        alt: 'App-Screenshot: Festival-Timetable nach Bühne und Tag, mit hervorgehobenen markierten Sets und Avataren der Freunde bei den Acts, zu denen sie gehen. Bildüberschrift (englisch): „Same festival, same plan.“',
      },
      map: {
        caption: 'Freunde, Bühnen und geteilte Pins auf dem echten Festivalgelände.',
        alt: 'App-Screenshot: Karte des Festivalgeländes mit Bühnen, Foodcourts, geteilten Pins und Live-Positionen der Freunde. Bildüberschrift (englisch): „Lost your friends?“',
      },
      lists: {
        caption: 'Eine Einkaufsliste, die die ganze Gruppe bearbeitet.',
        alt: 'App-Screenshot: geteilte Einkaufsliste mit Fortschrittsbalken, noch benötigten und bereits gekauften Artikeln samt Angabe, wer bezahlt hat. Bildüberschrift (englisch): „How much do I owe you?“',
      },
      expenses: {
        caption: 'Gruppensalden und Ausgleich am Ende des Wochenendes.',
        alt: 'App-Screenshot: Ausgaben-Tab mit eigenem Saldo, Gesamtausgaben, Gruppensumme, Schaltfläche „Settle up“ und den Salden aller Beteiligten.',
      },
      rating: {
        caption: 'Jedes Set nach Musik, Energie und Show bewerten.',
        alt: 'App-Screenshot: Bewertungsseite für ein einzelnes Set mit Sternebewertung für Musik, Energie und Show sowie optionalem Kommentarfeld. Bildüberschrift (englisch): „Best set of the weekend?“',
      },
    },
    hero: {
      back: '← Zurück zu den Nebenprojekten',
      eyebrow: 'Case Study · Yourt',
      headingLead: 'Zu welchem Artist ',
      headingAccent: 'gehst du?',
      lede:
        'Yourt ist eine Festival-App, die das Line-up, deine Freunde und die gemeinsame Wochenendkasse synchronisiert. Entstanden ist sie als persönliche Challenge: genau diese eine Frage lösen — und dabei herausfinden, wie weit KI-gestützte Entwicklung bei einem echten Mehrbenutzerprodukt wirklich trägt.',
      metaRole: 'Solo — Produkt, Design & Code',
      metaSince: 'Von der Idee zur App in 3 Wochen',
      metaScale: 'Zero to One mit KI',
      metaPlatforms: 'iOS · Android · Web',
      ctaScreens: 'Screens ansehen',
      ctaBuild: 'Wie es gebaut wurde',
    },
    build: {
      eyebrow: '01 / Der Bau',
      title: 'Eine persönliche Challenge — fertig gebaut.',
      meta: '// solo, mit KI im Loop',
      lede:
        'Abzustimmen, welche Sets man mit seinen Freunden sehen will, war bisher mühsam: Screenshots vom Timetable, ein Gruppenchat, und am Ende steht immer jemand an der falschen Bühne. Das wollte ich lösen — und gleichzeitig herausfinden, wie weit KI-gestützte Entwicklung bei einem echten Produkt kommt und nicht nur bei einem Demo.',
      points: {
        p1: 'Yourt in drei Wochen von der Idee zur funktionierenden Mehrbenutzer-App gebracht — neben dem Vollzeitjob.',
        p2: 'Zuerst das Datenmodell entworfen — Festivals, Sets, Markierungen, Freundschaften, Gruppen, Ausgaben — weil jede soziale Funktion mit dem Schema steht und fällt.',
        p3: 'Claude Code und Cursor als Umsetzungsschicht genutzt und Produktentscheidungen, Scope und Review bei mir behalten.',
        p4: 'Auf Supabase gebaut — Auth, Realtime-Sync und Row Level Security —, damit die Privatsphäre-Regeln in der Datenbank liegen und nicht im UI.',
        p5: 'Aus einer einzigen React-Native- und Expo-Codebasis auf iOS, Android und Web ausgeliefert.',
        p6: 'Alles gestrichen, was nicht zum Kern gehört: Set markieren, Freunde sehen, das Wochenende gemeinsam planen.',
      },
      stackTitle: 'Stack & Tools',
      teamTitle: 'Das Team',
      teamText:
        'Ein Team aus einer Person — das Tippen übernehmen die Agents. Das verschiebt die Arbeit, statt sie zu verkleinern: weniger Code schreiben, deutlich mehr entscheiden, was überhaupt entstehen soll, prüfen, was zurückkommt, und die Architektur zusammenhalten.',
    },
    gallery: {
      eyebrow: '02 / Die App',
      title: 'Sechs Screens, ein Wochenende.',
      meta: '// wischen oder die Pfeile nutzen',
    },
    features: {
      eyebrow: '03 / Funktionen',
      title: 'Was die App kann.',
      meta: '// acht Funktionen aus Planung, Social und Kasse',
      items: {
        lineup: {
          badge: 'Kern',
          title: 'Gemeinsame Line-up-Planung',
          body: 'Jeder Act im Timetable, nach Bühne und Tag. Markiere die Sets, die du sehen willst, und die App zeigt sofort, wer aus deiner Crew dasselbe markiert hat — die Abstimmung, die früher über Screenshots lief, passiert jetzt direkt im Zeitplan. Überschneidungen sind sichtbar, solange man sich noch entscheiden kann, und nicht erst vor der falschen Bühne.',
        },
        map: {
          badge: 'Live',
          title: 'Live-Karte des Geländes',
          body: 'Bühnen, Foodcourts und Sanitäranlagen auf einer Karte des echten Geländes, darüber die Live-Positionen deiner Freunde. Geteilte Pins und Status-Notizen erledigen den Rest — „Treffpunkt Fahne“, „wir sind an der Mainstage“ —, damit eine verlorene Crew ein Blick ist und kein Anruf, der im Festivalnetz ohnehin nicht durchgeht.',
        },
        social: {
          badge: 'Social',
          title: 'Freunde, Gruppen & QR-Einladungen',
          body: 'Eine vollständige soziale Ebene: Freundschaftsanfragen, Crews und Gruppen sowie QR-Code-Einladungen. Am Eingang einer Gruppe beitreten heißt einmal scannen — statt einen Benutzernamen gegen die Bässe zu buchstabieren.',
        },
        privacy: {
          badge: 'Kontrolle',
          title: 'Feingranulare Privatsphäre',
          body: 'Standort, markierte Sets und Listen werden pro Person und pro Gruppe geteilt — du entscheidest, was welcher Kreis sieht. Die Position einen Nachmittag lang mit der Crew zu teilen, darf nicht heißen, sie an alle jemals hinzugefügten Kontakte zu senden.',
        },
        expenses: {
          badge: 'Kasse',
          title: 'Ausgaben-Tracker',
          body: 'Wer das Campingzeug bezahlt hat, wer wem was schuldet, und am Ende ein Saldo pro Person. Gruppensummen, individuelle Anteile und ein Ausgleichs-Flow — damit das Wochenende nicht im Kopfrechnen endet.',
        },
        shopping: {
          badge: 'Planung',
          title: 'Geteilte Einkaufsliste',
          body: 'Der Großeinkauf als eine Liste, die die ganze Gruppe bearbeitet — was noch fehlt, wer es eingetragen hat, wer es gekauft hat, mit Fortschritt über die ganze Crew. Niemand kommt mit der dritten Packung desselben Artikels zurück.',
        },
        rating: {
          badge: 'Spaß',
          title: 'Set-Bewertungen',
          body: 'Jedes Set nach Musik, Energie und Show bewerten, Kommentar dazu — und auf der Heimfahrt die einzige Frage klären, die wirklich zählt: Welcher Act hat das Wochenende gewonnen?',
        },
        crossPlatform: {
          badge: 'Plattformen',
          title: 'Eine Codebasis, drei Plattformen',
          body: 'React Native und Expo bringen dieselbe App auf iOS, Android und ins Web, dahinter Supabase für Auth, Daten, Realtime-Sync und Row Level Security.',
        },
      },
    },
    caseStudy: {
      eyebrow: '04 / Zero to One mit KI',
      title: 'Ein echtes Produkt mit KI im Loop bauen.',
      meta: '// ausführliche Fassung in Arbeit',
      noteBadge: 'In Arbeit',
      noteTitle: 'Die ausführliche Case Study wird gerade geschrieben.',
      noteBody:
        'Hier steht vorerst die Kurzfassung: der Drei-Wochen-Verlauf und die ersten Learnings. Die vollständige Fassung — jede Hürde, jede Sackgasse und wofür KI wirklich taugt und wofür nicht — ersetzt diesen Abschnitt später.',
      phasesTitle: 'Die drei Wochen',
      phases: {
        week1: {
          title: 'Woche 1 — Schema & Grundgerüst',
          body: 'Datenmodell, Auth und der Festival- und Line-up-Kern. Die erste Woche entschied, wie weit der Rest tragen konnte: Sind Festivals, Sets und Markierungen falsch modelliert, erbt jede soziale Funktion danach den Fehler.',
        },
        week2: {
          title: 'Woche 2 — die soziale Ebene',
          body: 'Freunde, Gruppen, QR-Einladungen, Privatsphäre-Regeln und Live-Standorte — der Teil, in dem aus einem Einzelspieler-Planer etwas wird, das man mit anderen öffnet.',
        },
        week3: {
          title: 'Woche 3 — Kasse, Feinschliff & Plattformen',
          body: 'Ausgaben, Einkaufslisten und Set-Bewertungen, dann der Durchgang, der daraus eine App macht: Navigation, leere Zustände und derselbe Build auf iOS, Android und im Web.',
        },
      },
      learningsTitle: 'Erste Learnings',
      learnings: {
        scope: {
          title: 'Der Engpass ist der Scope, nicht der Code',
          body: 'Wenn die Umsetzung nicht mehr die Grenze ist, wird die Entscheidung, was man nicht baut, zur eigentlichen Arbeit. Die drei Wochen gingen viel mehr in Urteilsvermögen als in Syntax.',
        },
        schema: {
          title: 'Das Datenmodell gehört dir',
          body: 'Agents liefern bereitwillig ein Schema, das für den Screen vor ihnen funktioniert. Privatsphäre-Regeln, Gruppenmitgliedschaften und geteilte Ausgaben brauchen eines, das für alle folgenden Screens funktioniert — dieser Teil blieb bei mir.',
        },
        review: {
          title: 'Review schlägt Tippen',
          body: 'Die Qualität des Produkts hing an der Qualität meiner Review-Schleife, nicht an der Qualität der Prompts. Jedes Diff sorgfältig zu lesen war die eigentliche Arbeit.',
        },
      },
    },
  },
};

export const translations: Record<Locale, typeof en> = { en, de };
export type Translations = typeof en;
