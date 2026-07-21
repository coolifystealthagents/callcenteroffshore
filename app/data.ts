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
  heroImage: '/offshore-call-center-agent.jpg',
  serviceImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  alt: 'call center agent wearing headset in support office',
  badge: 'Call flow',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'Call Center Operations Support',
    desc: 'Keep schedules, queue rules, agent handoffs, and daily issue logs in order across your call center.',
    tasks: ['Update queue and shift notes', 'Track unresolved calls and handoffs', 'Prepare daily volume and issue summaries'],
    controls: ['Named owner for each queue', 'Written overflow and escalation rules', 'Manager review of exceptions'],
    firstWeek: ['Map queues and coverage hours', 'Set disposition and handoff rules', 'Review the first daily report'],
  },
  {
    slug: 'customer-support',
    title: 'Offshore Customer Support',
    desc: 'Handle inbound questions, order updates, account help, and approved follow-ups with a clear escalation path.',
    tasks: ['Answer approved customer questions', 'Log notes and call outcomes', 'Escalate refunds, account changes, and exceptions'],
    controls: ['Approved answers and call scripts', 'Limited access to customer systems', 'Call samples reviewed against a scorecard'],
    firstWeek: ['Study real customer calls', 'Practice scripts and escalation cases', 'Start with a narrow call queue'],
  },
  {
    slug: 'admin-support',
    title: 'Call Center Admin Support',
    desc: 'Take care of appointment updates, callback lists, CRM cleanup, and the follow-up work created by calls.',
    tasks: ['Update appointments and callback lists', 'Clean up CRM notes and dispositions', 'Send approved follow-up messages'],
    controls: ['Required fields for every call record', 'No unapproved account or calendar changes', 'Daily check for missing follow-ups'],
    firstWeek: ['Confirm the fields agents must complete', 'Run sample updates in a test queue', 'Check the first batch with a manager'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Call Reporting and Quality Review',
    desc: 'Turn call samples, scorecards, coaching notes, and queue trends into a report your managers can use.',
    tasks: ['Sample calls by queue and agent', 'Score calls against agreed criteria', 'Summarize misses, coaching, and repeat issues'],
    controls: ['Fixed sample rules', 'Evidence linked to each score', 'Manager sign-off on process changes'],
    firstWeek: ['Agree on the scorecard', 'Score the same calls together', 'Set the weekly review format'],
  },
] as const;

export const blogPosts = [
  {
    slug: 'offshore-call-center-planning',
    title: 'How to plan offshore call center coverage',
    excerpt: 'Map call types, coverage hours, scripts, access, and manager decisions before you compare providers.',
    minutes: 6,
  },
  {
    slug: 'offshore-call-center-tasks-to-outsource',
    title: 'Which call center tasks should you outsource first?',
    excerpt: 'Start with a narrow call queue that has real examples, approved answers, and clear escalation rules.',
    minutes: 7,
  },
  {
    slug: 'offshore-call-center-provider-questions',
    title: 'Questions to ask an offshore call center provider',
    excerpt: 'Ask how the provider handles scripts, call reviews, system access, backup coverage, and poor agent fit.',
    minutes: 8,
  },
  {
    slug: 'offshore-call-center-onboarding-checklist',
    title: 'First-week offshore call center checklist',
    excerpt: 'Prepare phone access, scripts, sample calls, escalation owners, QA reviews, and daily reports.',
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
        body: 'A call center pilot needs a bad-day plan. Ask who covers absences, who coaches an agent who is struggling, and what happens if the agent is a poor fit. Put those answers in the service agreement instead of relying on a sales call.',
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

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get an offshore call center plan based on your call types, hours, tools, and review needs.',
  fit: [
    'teams that need inbound, overflow, appointment, or after-hours call coverage',
    'managers who want scripts, call reviews, and escalation rules in place before launch',
    'companies that need agents plus a clear way to track call quality and unresolved issues',
  ],
  included: [
    'a queue planning call covering call types, hours, volume, languages, and manager-only decisions',
    'agent matching based on phone skills, schedule, systems, and the calls they will handle',
    'launch help for scripts, sample calls, scorecards, reporting, and limited system access',
    'a clear contact for attendance, coaching, backup coverage, and agent replacement questions',
  ],
  proof: [
    'a defined call queue before agents start',
    'a regular call-review schedule',
    'a named owner for escalations',
    'written rules for scripts, systems, and handoffs',
  ],
} as const;

export const leadQuestions = [
  'Which calls should the offshore team answer first?',
  'What hours, overflow rules, languages, and expected volume do you have?',
  'Which phone, CRM, help-desk, calendar, or inbox systems will agents use?',
  'Who will review calls during the first two weeks?',
  'Which refunds, account changes, exceptions, or sensitive calls must go to a manager?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the queue', body: 'List the call types, hours, volume, systems, approved answers, and decisions that stay with your managers.' },
  { step: '2', title: 'Match the agents', body: 'Match phone skills, schedule, language needs, and system experience to the queue they will handle.' },
  { step: '3', title: 'Practice before launch', body: 'Use real call examples, script practice, limited access, and shared scoring before agents answer a live queue.' },
  { step: '4', title: 'Expand after review', body: 'Add calls or coverage hours only after notes, escalations, attendance, and call quality are holding up.' },
] as const;

export const staffingFitNote = 'Call center plans depend on call type, volume, hours, languages, systems, and the amount of manager review needed. Share those details so the staffing team can scope the queue.';
