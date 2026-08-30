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
    heading: 'Lab experiments',
    sub: 'the homelab behind this site',
    body: [
      'This site is a lab experiment itself — a 2014 Pantone flipbook rebuilt on Angular 21. But it\u2019s also running from the lab: served off a Proxmox container on the home LAN, next to the trading bot, the agent fleet and the Pi-hole.',
      'The lab runs a small fleet of agents — Kevin, Hermes, Waku and friends — that do real work around the house: DNS, backups, monitoring, security sweeps, content farms, and the occasional accidental DDoS. This page is their story.',
      'Current lab roster: Proxmox hosts (Eva, Fuji), an OpenClaw gateway container, a hermes agent, a trading bot (NexusTrader v2) and a memory API. Everything is self-hosted, backed up weekly, and monitored by cron + a rotating heartbeat.',
      'The flipbook you\u2019re flipping through is served from one of those containers. The logo drew itself, the frame painted itself — that\u2019s the same easing curve the bot uses to decide when to trade.',
    ],
  },
];
