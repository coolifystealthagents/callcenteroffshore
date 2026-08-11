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
] as Array<{ slug: string; title: string; excerpt: string; minutes: number; focus?: string; question?: string; published?: string }>;

// 2026-08-10 scheduled Blog publication batch. This is intentionally separate from Research.
const scheduledBlogTopics = [
  ['offshore-call-center-call-opening-checklist', 'Offshore call center call opening checklist: a practical standard', 'Set a consistent opening that verifies the reason for the call, protects customer context, and gives the agent a clean path into the queue.', 'call opening standards', 'What should an offshore call center call opening include?'],
  ['call-center-first-call-resolution-workflow', 'Call center first-call resolution: a workflow that stays honest', 'Improve first-call resolution by defining answerable requests, approved next steps, and the cases that need a real handoff.', 'first-call resolution', 'How should a call center improve first-call resolution?'],
  ['philippines-call-center-shift-handoff', 'Philippines call center shift handoff: what the next team needs', 'Build a shift handoff around open customer work, due times, risk flags, and one accountable next owner.', 'shift handoffs', 'What belongs in a Philippines call center shift handoff?'],
  ['offshore-call-center-call-monitoring-plan', 'Offshore call center call monitoring: a buyer planning guide', 'Choose a review sample, score the work consistently, and turn call findings into coaching that agents can use.', 'call monitoring', 'How should a buyer plan offshore call monitoring?'],
  ['call-center-voice-of-customer-notes', 'Call center voice of customer notes: turning calls into useful evidence', 'Capture recurring customer language without losing the operational details managers need to fix the queue.', 'voice of customer notes', 'How should a call center record voice of customer findings?'],
  ['call-center-knowledge-article-review', 'Call center knowledge article review: a simple ownership cycle', 'Keep answers current with named owners, review triggers, change notes, and a clear stop rule for uncertain guidance.', 'knowledge article review', 'How should a call center review knowledge articles?'],
  ['offshore-call-center-customer-verification', 'Offshore call center customer verification: a safer call flow', 'Define the minimum verification steps, failure path, and manager escalation before agents access customer records.', 'customer verification', 'What should an offshore call center customer verification flow include?'],
  ['call-center-refund-escalation-workflow', 'Call center refund escalation: defining the manager boundary', 'Give agents a clear way to document refund requests and hand off decisions without promising an outcome they cannot approve.', 'refund escalation', 'How should a call center handle refund escalations?'],
  ['philippines-call-center-appointment-reminders', 'Philippines call center appointment reminders: a controlled workflow', 'Map reminder timing, confirmation fields, reschedule rules, and exceptions before an outsourced team contacts customers.', 'appointment reminders', 'What should a Philippines call center appointment reminder workflow define?'],
  ['offshore-call-center-callback-queue', 'Offshore call center callback queues: keeping promises visible', 'Use owners, due times, dispositions, and aging checks so promised callbacks do not disappear between shifts.', 'callback queues', 'How should an offshore call center manage callback queues?'],
  ['call-center-call-disposition-guide', 'Call center call dispositions: a guide to useful outcome codes', 'Create outcome codes that explain what happened, what comes next, and which exceptions need review.', 'call dispositions', 'How should a call center design call disposition codes?'],
  ['call-center-agent-coaching-notes', 'Call center agent coaching notes: what good feedback records', 'Write coaching notes that connect a call example to the expected behavior, practice step, and follow-up check.', 'coaching notes', 'What should call center agent coaching notes contain?'],
  ['offshore-call-center-absence-coverage', 'Offshore call center absence coverage: questions for buyers', 'Test how a provider handles absence, queue reassignment, customer updates, and manager visibility before coverage is needed.', 'absence coverage', 'What should an offshore call center absence plan include?'],
  ['call-center-queue-priority-rules', 'Call center queue priority rules: making urgent work visible', 'Separate urgent, aging, scheduled, and routine work with rules agents can apply and supervisors can audit.', 'queue priority rules', 'How should a call center set queue priority rules?'],
  ['philippines-call-center-agent-access-review', 'Philippines call center agent access review: a recurring checklist', 'Review users, permissions, exports, recordings, and leavers so system access stays tied to approved work.', 'agent access reviews', 'How should a Philippines call center review agent access?'],
  ['call-center-customer-note-template', 'Call center customer note template: the fields that matter', 'Create concise notes that preserve customer intent, action taken, promised follow-up, and the next owner.', 'customer note templates', 'What should a call center customer note include?'],
  ['offshore-call-center-agent-listening-skills', 'Offshore call center agent listening skills: a practical coaching guide', 'Improve customer conversations with listening behaviors, confirmation questions, concise notes, and coaching that can be observed in calls.', 'agent listening skills', 'How should an offshore call center coach listening skills?'],
  ['call-center-complaint-ownership', 'Call center complaint ownership: keeping the next step clear', 'Define complaint categories, response ownership, escalation triggers, and evidence so customers do not repeat the story.', 'complaint ownership', 'How should a call center assign complaint ownership?'],
  ['call-center-after-call-work-checklist', 'Call center after-call work checklist: close the record well', 'Standardize dispositions, notes, follow-ups, and exception flags without turning after-call work into busywork.', 'after-call work', 'What belongs on a call center after-call work checklist?'],
  ['offshore-call-center-training-scorecard', 'Offshore call center training scorecard: proving readiness', 'Connect practice calls, tool use, privacy checks, escalation drills, and supervisor sign-off before production access.', 'training scorecards', 'What should an offshore call center training scorecard measure?'],
  ['call-center-service-recovery-script', 'Call center service recovery scripts: giving agents room to act', 'Write recovery language that acknowledges the issue, states the next action, and stops where approval is required.', 'service recovery scripts', 'How should a call center write service recovery scripts?'],
  ['philippines-call-center-backup-connectivity', 'Philippines call center backup connectivity: buyer questions', 'Ask for evidence on backup links, power continuity, location approval, failover ownership, and customer communication.', 'backup connectivity', 'What backup connectivity should a Philippines call center document?'],
  ['call-center-daily-operations-report', 'Call center daily operations report: a manager-ready format', 'Keep the daily report focused on volume, unresolved work, quality findings, staffing, and decisions needed from the manager.', 'daily operations reports', 'What should a call center daily operations report include?'],
] as const;

const blogPublicationDates: Record<string, string> = {
  'offshore-call-center-call-opening-checklist': '2026-08-10',
  'call-center-first-call-resolution-workflow': '2026-08-10',
  'philippines-call-center-shift-handoff': '2026-08-10',
  'offshore-call-center-call-monitoring-plan': '2026-08-10',
  'call-center-voice-of-customer-notes': '2026-08-10',
  'call-center-knowledge-article-review': '2026-08-10',
  'offshore-call-center-customer-verification': '2026-08-10',
  'call-center-refund-escalation-workflow': '2026-08-10',
  'philippines-call-center-appointment-reminders': '2026-08-10',
  'offshore-call-center-callback-queue': '2026-08-10',
  'call-center-call-disposition-guide': '2026-08-10',
  'call-center-agent-coaching-notes': '2026-08-10',
  'offshore-call-center-absence-coverage': '2026-08-10',
  'call-center-queue-priority-rules': '2026-08-10',
  'philippines-call-center-agent-access-review': '2026-08-10',
  'call-center-customer-note-template': '2026-08-10',
  'offshore-call-center-agent-listening-skills': '2026-08-10',
  'call-center-complaint-ownership': '2026-08-10',
  'call-center-after-call-work-checklist': '2026-08-10',
  'offshore-call-center-training-scorecard': '2026-08-10',
  'call-center-service-recovery-script': '2026-08-10',
  'philippines-call-center-backup-connectivity': '2026-08-10',
  'call-center-daily-operations-report': '2026-08-10',
};
const fallbackBlogPublicationDate = { published: '2026-08-10' }.published;

blogPosts.push(...scheduledBlogTopics.map(([slug, title, excerpt, focus, question]) => ({ slug, title, excerpt, minutes: 9, focus, question, published: blogPublicationDates[slug] ?? fallbackBlogPublicationDate })));

// 2026-08-11 Blog publication batch. Each record carries its own public date.
const augustElevenBlogPosts = [
  { slug: 'offshore-call-center-service-level-agreement-guide', title: 'Offshore call center service levels: what buyers should define', excerpt: 'Set practical service levels around answer handling, callbacks, escalations, and reporting before an offshore team takes a queue.', minutes: 10, focus: 'offshore call center service levels', question: 'What should an offshore call center service level agreement define?', published: '2026-08-11' },
  { slug: 'call-center-call-recording-policy', title: 'Call center call recording policy: questions for a support team', excerpt: 'Decide when calls are recorded, who can access them, how exceptions are handled, and how recordings support quality review.', minutes: 9, focus: 'call recording policies', question: 'What should a call center call recording policy cover?', published: '2026-08-11' },
  { slug: 'philippines-call-center-night-shift-handover', title: 'Philippines call center night shift handover guide', excerpt: 'Give the next shift a clear view of open calls, time-sensitive promises, customer risks, and the owner for each follow-up.', minutes: 9, focus: 'night shift handovers', question: 'What belongs in a Philippines call center night shift handover?', published: '2026-08-11' },
  { slug: 'call-center-appointment-scheduling-quality', title: 'Call center appointment scheduling quality checks', excerpt: 'Check identity, availability, service fit, time zone, confirmation details, and the follow-up record before calling a booking complete.', minutes: 9, focus: 'appointment scheduling quality', question: 'How should a call center check appointment scheduling quality?', published: '2026-08-11' },
  { slug: 'offshore-call-center-language-coverage', title: 'Offshore call center language coverage: a planning guide', excerpt: 'Match caller needs to language support, script clarity, escalation help, and the quality checks that catch misunderstood requests.', minutes: 10, focus: 'language coverage', question: 'How should a buyer plan language coverage for an offshore call center?', published: '2026-08-11' },
  { slug: 'call-center-customer-verification-questions', title: 'Call center customer verification questions to review', excerpt: 'Use a small, approved set of verification questions and a clear stop path when the caller cannot complete the check.', minutes: 8, focus: 'verification questions', question: 'What should a call center review when choosing customer verification questions?', published: '2026-08-11' },
  { slug: 'call-center-queue-aging-report', title: 'Call center queue aging report: what managers need to see', excerpt: 'Track how long work waits, which requests are near breach, and where an owner needs to make a decision.', minutes: 9, focus: 'queue aging reports', question: 'What should a call center queue aging report show?', published: '2026-08-11' },
  { slug: 'offshore-call-center-call-transfer-rules', title: 'Offshore call center call transfer rules', excerpt: 'Define when a representative may transfer, what context must travel with the call, and how abandoned or failed transfers are reviewed.', minutes: 9, focus: 'call transfer rules', question: 'How should an offshore call center set call transfer rules?', published: '2026-08-11' },
  { slug: 'call-center-sensitive-call-escalation', title: 'Call center sensitive call escalation: a practical boundary guide', excerpt: 'Separate everyday support from privacy, safety, legal, payment, and account decisions that need a named manager.', minutes: 10, focus: 'sensitive call escalation', question: 'Which call center requests should move to a manager?', published: '2026-08-11' },
  { slug: 'philippines-call-center-holiday-coverage', title: 'Philippines call center holiday coverage questions', excerpt: 'Plan holiday schedules around customer demand, local staffing, backup ownership, notices, and the queues that cannot pause.', minutes: 9, focus: 'holiday coverage', question: 'What should buyers ask about Philippines call center holiday coverage?', published: '2026-08-11' },
  { slug: 'call-center-callback-due-time-rules', title: 'Call center callback due-time rules that customers can trust', excerpt: 'Set due times from the customer promise, record the reason for delay, and review aging callbacks before they become complaints.', minutes: 8, focus: 'callback due-time rules', question: 'How should a call center set callback due-time rules?', published: '2026-08-11' },
  { slug: 'offshore-call-center-knowledge-transfer', title: 'Offshore call center knowledge transfer plan', excerpt: 'Move product and policy knowledge into practice calls, approved answers, exception drills, and a supervisor check.', minutes: 10, focus: 'knowledge transfer', question: 'What should an offshore call center knowledge transfer plan include?', published: '2026-08-11' },
  { slug: 'call-center-customer-consent-records', title: 'Call center customer consent records: a workflow guide', excerpt: 'Record the customer choice, the channel, the permitted follow-up, and the owner who handles an uncertain case.', minutes: 9, focus: 'customer consent records', question: 'How should a call center manage customer consent records?', published: '2026-08-11' },
  { slug: 'call-center-peak-volume-response', title: 'Call center peak volume response plan', excerpt: 'Prepare queue triggers, overflow routes, manager decisions, customer messages, and a review after the spike passes.', minutes: 9, focus: 'peak volume response', question: 'What should a call center peak volume response plan define?', published: '2026-08-11' },
  { slug: 'offshore-call-center-call-quality-calibration', title: 'Offshore call center call quality calibration', excerpt: 'Have reviewers score the same calls, discuss the differences, and keep one shared interpretation of each scorecard field.', minutes: 9, focus: 'call quality calibration', question: 'How should an offshore call center calibrate call quality reviewers?', published: '2026-08-11' },
  { slug: 'call-center-customer-follow-up-ownership', title: 'Call center customer follow-up ownership guide', excerpt: 'Assign every promise to a person, a due time, a record, and a review point that survives shift changes.', minutes: 8, focus: 'customer follow-up ownership', question: 'How should a call center assign customer follow-up ownership?', published: '2026-08-11' },
  { slug: 'philippines-call-center-supervisor-coverage', title: 'Philippines call center supervisor coverage checklist', excerpt: 'Confirm who handles exceptions, coaching, queue decisions, access questions, and urgent customer issues on every shift.', minutes: 9, focus: 'supervisor coverage', question: 'What should a Philippines call center supervisor coverage checklist include?', published: '2026-08-11' },
  { slug: 'call-center-call-avoidance-warning-signs', title: 'Call center call avoidance warning signs', excerpt: 'Use dispositions, repeat contacts, abandoned transfers, and QA notes to spot work that is being passed around instead of resolved.', minutes: 9, focus: 'call avoidance warning signs', question: 'How can a call center identify call avoidance?', published: '2026-08-11' },
  { slug: 'offshore-call-center-customer-empathy-coaching', title: 'Offshore call center customer empathy coaching', excerpt: 'Coach representatives to acknowledge the customer, confirm the request, explain the next step, and avoid language that inflames a difficult call.', minutes: 9, focus: 'customer empathy coaching', question: 'How should an offshore call center coach customer empathy?', published: '2026-08-11' },
  { slug: 'call-center-missed-call-recovery', title: 'Call center missed-call recovery process', excerpt: 'Turn missed calls into an owned follow-up queue with contact rules, urgency flags, notes, and a manager review for aging work.', minutes: 8, focus: 'missed-call recovery', question: 'What should a call center missed-call recovery process include?', published: '2026-08-11' },
  { slug: 'call-center-outsourcing-transition-plan', title: 'Call center outsourcing transition plan for a narrow queue', excerpt: 'Move one queue at a time with call examples, access limits, training checks, supervised handling, and a clear rollback decision.', minutes: 11, focus: 'outsourcing transition plans', question: 'How should a team plan a call center outsourcing transition?', published: '2026-08-11' },
  { slug: 'offshore-call-center-manager-scorecard', title: 'Offshore call center manager scorecard', excerpt: 'Review queue health, customer outcomes, quality findings, unresolved work, staffing coverage, and decisions that need attention.', minutes: 9, focus: 'manager scorecards', question: 'What should an offshore call center manager scorecard measure?', published: '2026-08-11' },
] as const;

blogPosts.push(...augustElevenBlogPosts);

export const newestFirstBlogPosts = blogPosts
  .map((post, index) => ({ post, index }))
  .sort((a, b) => (b.post.published ?? '').localeCompare(a.post.published ?? '') || a.index - b.index)
  .map(({ post }) => post);

// Keep all existing consumers (index, pagination, and sitemap) on the same order.
blogPosts.splice(0, blogPosts.length, ...newestFirstBlogPosts);

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
