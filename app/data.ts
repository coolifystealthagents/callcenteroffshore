export const site = {
  domain: 'CallCenterOffshore.com',
  slug: 'callcenteroffshore',
  brand: 'Call Center Offshore',
  primary: 'offshore call center',
  audience: 'teams that need offshore call answering, appointment setting, and support coverage',
  angle: 'call flows, scripts, QA scorecards, coverage windows, and escalation rules',
  style: 'SLA operations board',
  dark: '#03101a',
  color: '#06b6d4',
  accent: '#facc15',
  heroImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  alt: 'call center agent wearing headset in support office',
  badge: 'Call flow',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Operations Support',
    desc: 'Operations Support for teams using offshore call center with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    desc: 'Customer Support for teams using offshore call center with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    desc: 'Admin Support for teams using offshore call center with clear SOPs, weekly review, and measurable handoffs.',
  },
  {
    slug: 'reporting-and-qa',
    title: 'Reporting and QA',
    desc: 'Reporting and QA for teams using offshore call center with clear SOPs, weekly review, and measurable handoffs.',
  },
] as const;

export const blogPosts = [
  {
    slug: 'offshore-call-center-planning',
    title: 'Call Center Offshore: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
  },
  {
    slug: 'offshore-call-center-tasks-to-outsource',
    title: 'Call Center Offshore: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'offshore-call-center-provider-questions',
    title: 'Call Center Offshore: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'offshore-call-center-onboarding-checklist',
    title: 'Call Center Offshore: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];

export const blogDetails = {
  'offshore-call-center-provider-questions': {
    summary: 'Ask about scripts, coaching, data access, QA, and replacement rules before you compare price. A cheap seat gets expensive fast when no one owns call quality.',
    keyTakeaways: [
      'Ask who writes and updates scripts after real calls start.',
      'Require sample QA scorecards before you sign.',
      'Limit CRM, inbox, and payment access during the pilot.',
      'Get the replacement and coaching rules in writing.',
    ],
    sections: [
      {
        heading: 'Start with the call type, not the seat price',
        body: 'A sales line, billing line, and after-hours support line should not use the same hiring brief. Give each provider 20 real call examples, the hours you need covered, and the kind of answer you expect. Then ask how they would staff it. If every answer sounds the same, you probably have a vendor selling seats instead of solving call flow.',
      },
      {
        heading: 'Ask how quality is checked each week',
        body: 'Do not settle for "we monitor calls." Ask for the scorecard. Good QA should grade greeting, verification, accuracy, tone, next step, notes, and escalation. For the first 14 days, review a small call sample every day. After that, move to a weekly review with misses, coaching notes, and one fix for the next week.',
      },
      {
        heading: 'Set data and access rules before training',
        body: 'Offshore agents may need CRM, phone, help desk, scheduling, and inbox access. Start with the least access that lets them do the work. Use named accounts, MFA, role based permissions, and a written rule for payment, refund, medical, legal, and account-change questions. If the provider cannot explain access controls in plain English, pause the deal.',
      },
      {
        heading: 'Test coaching, backup, and replacement rules',
        body: 'A call center pilot should include a bad-day plan. Ask who covers absences, who coaches a weak agent, and how fast a replacement can start if fit is poor. Put the answer in the service agreement. The best providers are calm about this because they already have a process.',
      },
    ],
    comparison: [
      { question: 'Who updates scripts?', weak: 'The client sends scripts.', strong: 'Provider reviews call misses and suggests script fixes weekly.' },
      { question: 'How is QA scored?', weak: 'Calls are monitored.', strong: 'Scorecard has clear fields, call samples, and coaching notes.' },
      { question: 'How is data protected?', weak: 'Agents are trained on privacy.', strong: 'Named users, MFA, limited roles, and an access removal checklist.' },
      { question: 'What if fit is poor?', weak: 'We will work with you.', strong: 'Written coaching window, backup coverage, and replacement path.' },
    ],
    script: [
      'Can you show me the QA scorecard you use for this exact call type?',
      'Which tools will the agent need on day one, and which tools should stay manager-only?',
      'If the first agent is not a fit, what happens in the first 10 business days?',
    ],
    sources: [
      {
        name: 'CISA MFA guidance',
        url: 'https://www.cisa.gov/resources-tools/resources/multi-factor-authentication-mfa',
        note: 'CISA recommends MFA as a basic protection for accounts that access business systems.',
      },
      {
        name: 'FTC Safeguards Rule',
        url: 'https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act',
        note: 'The FTC explains why companies need written controls for customer information.',
      },
      {
        name: 'NIST incident response guide',
        url: 'https://csrc.nist.gov/pubs/sp/800/61/r2/final',
        note: 'NIST recommends clear response roles before a security issue happens.',
      },
    ],
    faqs: [
      {
        q: 'Should I hire the lowest cost offshore call center?',
        a: 'Only if the provider can prove training, QA, backup, and data controls. Low hourly cost is not enough if missed calls, bad notes, or weak access rules create cleanup work.',
      },
      {
        q: 'How long should the first offshore call center pilot run?',
        a: 'Run a narrow 14-day pilot when possible. That gives you enough calls to review scripts, QA, attendance, notes, and escalation habits before you add more work.',
      },
      {
        q: 'What should stay with the business owner or manager?',
        a: 'Keep refunds, account changes, legal questions, medical judgment, pricing exceptions, and angry high-value customer issues with a manager unless you have a written approval rule.',
      },
    ],
  },
} as const;

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
