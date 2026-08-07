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
    slug: '24-7-call-center-outsourcing-philippines',
    title: '24/7 call center outsourcing Philippines: coverage and continuity guide',
    excerpt: 'Plan Philippines-based 24/7 call center coverage with shift maps, handoff controls, continuity tests, call QA, and a narrow launch.',
    minutes: 13,
  },
  {
    slug: 'healthcare-call-center-outsourcing-companies-philippines',
    title: 'Healthcare call center outsourcing companies: a Philippines buyer checklist',
    excerpt: 'Compare Philippines-based healthcare call center teams through queue fit, patient-data controls, scored calls, and a controlled launch.',
    minutes: 12,
  },
  { slug: 'offshore-call-center-provider-questions', title: 'Questions to ask an offshore call center provider', excerpt: 'A practical shortlist for testing scripts, QA, access controls, coaching, backup coverage, and escalation ownership.', minutes: 10 },
  { slug: 'offshore-call-center-cost-drivers', title: 'What drives offshore call center costs?', excerpt: 'Understand the operational factors behind call coverage costs without relying on public rate cards or vague savings claims.', minutes: 9 },
  { slug: 'call-center-outsourcing-pilot-plan', title: 'How to run a call center outsourcing pilot', excerpt: 'Use a narrow queue, shared scorecard, limited access, and daily review to test a support partner before expanding.', minutes: 11 },
  { slug: 'call-center-qa-scorecard', title: 'Call center QA scorecard: what to measure', excerpt: 'Build a usable scorecard for greeting, verification, accuracy, tone, notes, resolution, and escalation.', minutes: 10 },
  { slug: 'after-hours-call-answering-workflow', title: 'After-hours call answering workflow', excerpt: 'Design coverage windows, urgent-call rules, handoffs, and manager escalation for calls outside local business hours.', minutes: 9 },
  { slug: 'call-center-escalation-rules', title: 'Call center escalation rules that protect customers', excerpt: 'Separate routine answers from refunds, account changes, sensitive requests, and decisions that belong with a manager.', minutes: 10 },
  { slug: 'call-center-script-writing-guide', title: 'Call center script writing guide for better handoffs', excerpt: 'Create short scripts that help agents answer consistently while leaving room for listening and judgment.', minutes: 9 },
  { slug: 'appointment-setting-call-center-guide', title: 'Appointment setting call center guide', excerpt: 'Plan qualification questions, calendar rules, confirmation messages, and clean ownership of booked meetings.', minutes: 9 },
  { slug: 'customer-support-call-center-launch', title: 'Launching an offshore customer support queue', excerpt: 'Map request types, approved answers, system access, review samples, and the first controlled queue.', minutes: 10 },
  { slug: 'call-center-handoff-checklist', title: 'Call center shift handoff checklist', excerpt: 'Keep open calls, urgent issues, promised follow-ups, and unresolved exceptions visible between shifts.', minutes: 8 },
  { slug: 'call-center-agent-training-plan', title: 'Call center agent training plan for a new queue', excerpt: 'Sequence product learning, role play, tool practice, escalation drills, and supervised calls before launch.', minutes: 11 },
  { slug: 'call-center-data-access-controls', title: 'Call center data access controls for remote teams', excerpt: 'Use named accounts, least privilege, MFA, verification steps, and an access removal checklist.', minutes: 10 },
  { slug: 'call-center-coverage-planning', title: 'Call center coverage planning by queue and hour', excerpt: 'Match volume, service windows, breaks, overflow, backup coverage, and manager availability to one written plan.', minutes: 10 },
  { slug: 'call-center-customer-complaint-handling', title: 'Customer complaint handling for call center teams', excerpt: 'Give agents a calm process for listening, documenting, acknowledging, and escalating complaints without making promises.', minutes: 9 },
  { slug: 'call-center-callback-management', title: 'Call center callback management system', excerpt: 'Turn missed calls and promised callbacks into an owned queue with due times, notes, and review rules.', minutes: 8 },
  { slug: 'call-center-reporting-dashboard-guide', title: 'Call center reporting dashboard guide', excerpt: 'Choose a small set of volume, answer, disposition, QA, and unresolved-issue measures managers can act on.', minutes: 9 },
  { slug: 'call-center-outsourcing-contract-checklist', title: 'Call center outsourcing contract checklist', excerpt: 'Review scope, service levels, access, QA, backup, confidentiality, coaching, and replacement language before signing.', minutes: 11 },
  { slug: 'call-center-overflow-support-plan', title: 'Call center overflow support plan', excerpt: 'Prepare a repeatable way to route spikes, define capacity triggers, and return work to the primary team.', minutes: 9 },
  { slug: 'call-center-manager-review-rhythm', title: 'Call center manager review rhythm', excerpt: 'Set daily, weekly, and monthly checkpoints for queue health, call quality, coaching, and process changes.', minutes: 8 },
  { slug: 'philippines-call-center-team-launch', title: 'Philippines call center team launch checklist', excerpt: 'Coordinate role scope, schedule, tools, training, quality review, and escalation ownership for a measured start.', minutes: 10 },
] as const;

export type BlogPost = (typeof blogPosts)[number];

export const blogDetails = {
  'offshore-call-center-provider-questions': {
    summary: 'Ask about scripts, coaching, data access, QA, and replacement rules before you compare terms. A cheap seat gets expensive fast when no one owns call quality.',
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
        a: 'Keep refunds, account changes, legal questions, medical judgment, commercial exceptions, and angry high-value customer issues with a manager unless you have a written approval rule.',
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
