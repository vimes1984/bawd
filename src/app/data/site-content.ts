// BAWD v2 — Site content model (refreshed 2026 copy, same flipbook structure)
// One content object per section. The 2014 site had 33 near-dup templates;
// v2 renders everything from this file.

export interface SwatchPage {
  slug: string;
  route: string;
  pantone: 'blue' | 'green' | 'red' | 'yellow' | 'black';
  kicker: string;      // the big editorial initial(s), e.g. "SR"
  title: string;
  cards: Card[];
}

export interface Card {
  step?: string;       // ". Step 1" style label
  heading: string;
  sub?: string;
  body: string[];
}

export const PAGES: SwatchPage[] = [
  {
    slug: 'about',
    route: '/about',
    pantone: 'red',
    kicker: 'AB',
    title: 'About — how we work',
    cards: [
      {
        step: '. Step 1',
        heading: 'Let us get to know you…',
        body: [
          'Every engagement starts with a free consultation. We learn your business, your market and what \u201Cgood\u201D looks like for you \u2014 short-term wins and long-term goals.',
          'No templates, no boilerplate. We ask until we understand, then we propose.',
        ],
      },
      {
        step: '. Step 2',
        heading: 'Let us show you the way…',
        body: [
          'You get a full project assessment: scope, timeline, and a fixed quote. No surprise invoices, no scope creep by stealth.',
          'If a solution isn\u2019t worth building, we\u2019ll tell you before you spend money on it.',
        ],
      },
      {
        step: '. Step 3',
        heading: 'A picture is worth a thousand words…',
        body: [
          'Design first, build second. We present real designs \u2014 not wireframe sketches \u2014 and iterate until the direction is right.',
          'The build doesn\u2019t start until you\u2019re happy with what you\u2019re going to get.',
        ],
      },
      {
        step: '. Step 4',
        heading: 'Bricks and mortar…',
        body: [
          'We build on modern foundations: semantic HTML, accessible components, performance budgets, and a content workflow you can actually use.',
          'You get a preview URL throughout construction \u2014 you\u2019ll never wonder what\u2019s happening.',
        ],
      },
      {
        step: '. Step 5',
        heading: 'Launch day and beyond…',
        body: [
          'Launch is the start, not the finish. Every site ships with a support window covering security updates, SEO checks and cross-browser verification.',
          'We stay in the room after the champagne \u2014 because a live site is a living thing.',
        ],
      },
    ],
  },
  {
    slug: 'projects',
    route: '/projects',
    pantone: 'yellow',
    kicker: 'PR',
    title: 'Projects — the craft',
    cards: [
      {
        heading: 'Modern front-end',
        sub: 'Framework-agnostic, standards-first',
        body: [
          'Angular, React or vanilla \u2014 the framework is a means, not the message. Components, typed state and clean boundaries apply everywhere.',
          'Everything we ship is responsive, keyboard-accessible and measured against Core Web Vitals.',
        ],
      },
      {
        heading: 'WordPress & the CMS',
        sub: 'Content teams deserve better',
        body: [
          'From headless WordPress to block themes to flat-file sites \u2014 we pick the CMS that fits the editor, not the one that impresses developers.',
          'If your team can\u2019t publish without calling someone, the build failed.',
        ],
      },
      {
        heading: 'Performance & SEO',
        sub: 'Fast is a feature',
        body: [
          'We set budgets, not hopes: bundle size, image weight, time-to-interactive. Then we defend them in CI.',
          'Technical SEO \u2014 structured data, crawlability, Core Web Vitals \u2014 is part of the build, not an add-on.',
        ],
      },
      {
        heading: 'Design systems',
        sub: 'Tokens, not one-offs',
        body: [
          'Colour, type, spacing and motion as tokens \u2014 one source of truth across pages, emails and dashboards.',
          'Consistency is what makes a brand feel professional. We build the system that keeps it that way.',
        ],
      },
      {
        heading: 'E-commerce',
        sub: 'Stores that convert',
        body: [
          'WooCommerce, Shopify or custom \u2014 checkout flows, payment gateways and inventory that don\u2019t fight the customer.',
          'We sweat the path to purchase, because that\u2019s where the business happens.',
        ],
      },
    ],
  },
  {
    slug: 'services',
    route: '/services',
    pantone: 'blue',
    kicker: 'SR',
    title: 'Services',
    cards: [
      {
        heading: 'Content & Translation',
        sub: 'C & T',
        body: [
          'Professional copy that reflects your brand \u2014 written by people who read it aloud before they ship it.',
          'And why stop at one language? We localise your site for the audiences you actually want to reach.',
        ],
      },
      {
        heading: 'Social media that earns attention',
        sub: 'SSM',
        body: [
          'Organic-first strategy: content calendars, platform-native formats and honest measurement.',
          'We grow audiences you can talk to, not vanity numbers you can screenshot.',
        ],
      },
      {
        heading: 'Design & Logos',
        sub: 'D & L',
        body: [
          'Brands are built on coherence. We design logos and visual identities that work in every size \u2014 favicon to billboard.',
          'Three concepts, honest revisions, and vector files you actually own.',
        ],
      },
      {
        heading: 'Build, maintain, improve',
        sub: 'B & M',
        body: [
          'New builds, rescues and long-term care. We take over broken sites, stabilise them, and keep them secure.',
          'Retainers for updates, monitoring and quarterly improvements \u2014 or one-off projects. Your call.',
        ],
      },
    ],
  },
  {
    slug: 'contact',
    route: '/contact',
    pantone: 'green',
    kicker: 'CT',
    title: 'Contact',
    cards: [
      {
        heading: 'Say hello',
        body: [
          'Tell us what you\u2019re building, fixing or dreaming about. We reply fast \u2014 usually within a day.',
          'Email: hello@buildawebdoctor.com',
        ],
      },
    ],
  },
];

export const EXPERIMENTS: Card[] = [
  {
    step: '. The site',
    heading: 'This page is the lab',
    sub: 'a 2014 Pantone flipbook, rebuilt on Angular 21',
    body: [
      'The original BAWD was a 2014 concept: 33 hand-tuned templates, lazylinepainter logo draw, colour-card navigation. The rebuild keeps the flipbook and the hand-drawn logo (every stroke is the original path data) but runs on a modern stack \u2014 Angular 21, signals, Web Animations API, one content model instead of 33 files.',
      'It is served from a Proxmox container on the home LAN, next to the trading bot, the agent fleet and the DNS server. The whole site is ~60KB of JavaScript. The logo drew itself, the frame painted itself \u2014 that is the same easing curve the trading bot uses to decide when to act.',
    ],
  },
  {
    step: '. The hardware',
    heading: 'Proxmox cluster \u201Call\u201D',
    sub: 'three hypervisors, one menu',
    body: [
      'Eva \u2014 a Dell R730 with twin Xeon E5-2687W v3 (40 cores, 94GB RAM) \u2014 runs most of the containers. Fuji and Proxmox round out the cluster. Everything is virtualised: application code lives in containers, never on the hypervisor hosts.',
      'The workstation (chris-System) hosts the local LLM stack: Ollama for embeddings and a llama-server running the 3B trading model. The 2014 site and this rebuild run side-by-side on the gateway box \u2014 old on :8090, new on :8091 \u2014 until the new one wins.',
    ],
  },
  {
    step: '. The agents',
    heading: 'A small fleet of assistants',
    sub: 'Kevin, Hermes, Waku and friends',
    body: [
      'An OpenClaw gateway runs a council of minion agents \u2014 Kevin (that\u2019s me), Hermes the owl, Waku, and a parliament of sisters \u2014 each with its own identity, model and lane. They read a shared board, bid on tenders, audit each other\u2019s work, and post trip reports after heroic doses of caffeine.',
      'They do real chores: DNS, backups, monitoring, security sweeps, content farms, and the occasional accidental DDoS (we do not speak of it). Every heartbeat poll checks the fleet, and the whole board is archived to a local database.',
    ],
  },
  {
    step: '. The money',
    heading: 'NexusTrader v2',
    sub: 'a trading bot that lives in a container',
    body: [
      'A momentum-rotation bot trades on Kraken, with funding-carry paper lanes and an ML lane that keeps improving its champion model. It connects to the local llama-server for its decisions \u2014 no cloud APIs, no latency, no token bills.',
      'It runs in its own container (nexus-v2), restarts cleanly after deploys, and has a watchdog that cancels stuck scans and keeps the lanes honest. The lab keeps an eye on it; it keeps an eye on the market.',
    ],
  },
  {
    step: '. The plumbing',
    heading: 'House infrastructure',
    sub: 'DNS, routing, monitoring, backups',
    body: [
      'Pi-hole on .200 resolves every LAN name (bumble.bcottage, movies, hermes, the whole .arr stack) and blocks roughly 40% of ~100k daily queries. Two Cudy routers split the house: the trusted LAN and the IoT network \u201Cgru\u2019s gizmos\u201D.',
      'Weekly backups with retention rules (learned the hard way when a hypervisor filled its disk), daily security sweeps across every host, and a rotating heartbeat that pages nobody unless something is actually wrong. A lab is only as good as its chores.',
    ],
  },
];
