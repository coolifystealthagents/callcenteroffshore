export type FleetService = {
  slug: string;
  title: string;
  category: 'Assistants' | 'Customer experience' | 'Operations';
  eyebrow: string;
  desc: string;
  outcome: string;
  image: string;
  tasks: readonly string[];
  controls: readonly string[];
  firstWeek: readonly string[];
  deliverables: readonly string[];
  tools: readonly string[];
};
export type ResearchPost = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  modified: string;
  revision: string;
  readingMinutes: number;
  wordCount: number;
  methodology: string;
  limitations: string;
  keyTakeaways: readonly string[];
  stats: readonly { value: string; label: string; note: string; source: number }[];
  sections: readonly { heading: string; paragraphs: readonly { text: string; citations?: readonly number[] }[] }[];
  table: { caption: string; headers: readonly string[]; rows: readonly (readonly string[])[] };
  buyerChecklist: readonly string[];
  faqs: readonly { q: string; a: string }[];
  related: readonly { title: string; href: string }[];
  sources: readonly { name: string; url: string; note: string; kind: 'Philippines' | 'Global comparison' }[];
};

export const fleetServices: readonly FleetService[] = [
  {
    slug: 'inbound-customer-care', title: 'Virtual Customer Care Assistants', category: 'Customer experience', eyebrow: 'Inbox, phone, chat, and CRM support',
    desc: 'Give customers a helpful first response from a Philippines-based assistant who follows your answers, account rules, and escalation path.',
    outcome: 'A calmer support queue with clear notes, owned next steps, and fewer requests sitting unseen.', image: '/visuals/role-customer-support.svg',
    tasks: ['Answer routine phone, email, and chat requests', 'Update customer records and interaction notes', 'Route refunds, exceptions, and sensitive cases to the right owner'],
    controls: ['Approved answer library and identity checks', 'Named client-side escalation owner', 'Sample-based quality review and coaching'],
    firstWeek: ['Learn the top request types and systems', 'Shadow real examples and draft responses', 'Handle a narrow queue with daily review'],
    deliverables: ['Queue summary', 'Escalation log', 'Customer notes', 'Weekly QA sample'], tools: ['CRM', 'Help desk', 'Phone', 'Shared inbox']
  },
  {
    slug: 'technical-help-desk', title: 'Technical Support Assistants', category: 'Customer experience', eyebrow: 'Tier-one help desk support',
    desc: 'Add a trained Philippines-based assistant for repeatable troubleshooting, ticket updates, account access checks, and clean technical escalations.',
    outcome: 'Users get a clear first response while your technical team keeps ownership of complex fixes.', image: '/visuals/role-customer-support.svg',
    tasks: ['Follow approved diagnostic steps', 'Document device, account, and error details', 'Escalate with a complete reproduction note'],
    controls: ['No unapproved system changes', 'Least-privilege tool access', 'Ticket review for accuracy and next-step clarity'],
    firstWeek: ['Map the top ten ticket types', 'Practice troubleshooting scripts', 'Launch one queue with engineer backup'],
    deliverables: ['Triage notes', 'Ticket updates', 'Known-issue log', 'Escalation packet'], tools: ['Ticketing', 'Knowledge base', 'Chat', 'Remote support']
  },
  {
    slug: 'order-and-billing-support', title: 'Order and Billing Assistants', category: 'Operations', eyebrow: 'Order updates and billing coordination',
    desc: 'Keep order questions, invoice follow-ups, payment-status checks, and account notes organized without handing off financial decisions.',
    outcome: 'Customers receive timely updates and your finance team gets clean exceptions instead of a mixed inbox.', image: '/visuals/role-operations-coordinator.svg',
    tasks: ['Check approved order and invoice status', 'Send routine reminders and updates', 'Prepare exceptions for finance or operations review'],
    controls: ['No money movement or bank-detail changes', 'Approved templates and account verification', 'Manager approval for credits and disputes'],
    firstWeek: ['Map order and billing request types', 'Review safe versus restricted actions', 'Run a supervised update queue'],
    deliverables: ['Status report', 'Exception queue', 'Account notes', 'Follow-up calendar'], tools: ['ERP', 'Billing portal', 'CRM', 'Email']
  },
  {
    slug: 'appointment-scheduling', title: 'Executive and Calendar Assistants', category: 'Assistants', eyebrow: 'Calendar, inbox, and meeting support',
    desc: 'Pair a busy leader with a Philippines-based executive assistant who can protect focus time, coordinate meetings, prepare agendas, and keep follow-ups moving.',
    outcome: 'A cleaner calendar, fewer scheduling loops, and a visible list of commitments after every meeting.', image: '/visuals/role-executive-assistant.svg',
    tasks: ['Manage scheduling rules and meeting requests', 'Prepare agendas, reminders, and briefing notes', 'Track follow-ups and owner commitments'],
    controls: ['Protected personal and confidential calendar items', 'Written priority and rescheduling rules', 'Approval before external promises or travel spend'],
    firstWeek: ['Learn calendar preferences and stakeholders', 'Draft changes before acting', 'Take ownership of repeat meeting types'],
    deliverables: ['Daily agenda', 'Meeting brief', 'Follow-up tracker', 'Calendar health check'], tools: ['Calendar', 'Email', 'Video meetings', 'Project tracker']
  },
  {
    slug: 'after-hours-answering', title: 'After-Hours Virtual Assistants', category: 'Customer experience', eyebrow: 'Extended-hours response coverage',
    desc: 'Use a Philippines-based virtual assistant to watch approved queues, answer routine requests, flag urgent cases, and prepare a clean next-shift handoff.',
    outcome: 'Customers are acknowledged after hours without forcing your local team to stay constantly online.', image: '/visuals/philippines-time-zone-handoff.svg',
    tasks: ['Monitor phone, chat, or inbox queues', 'Use approved answers for routine needs', 'Prepare urgent and next-day handoff notes'],
    controls: ['Written definition of urgent', 'One on-call escalation route', 'No off-script promises or high-risk actions'],
    firstWeek: ['Define coverage window and queue', 'Practice urgent and non-urgent examples', 'Review every handoff before expanding'],
    deliverables: ['Shift handoff', 'Urgent alert', 'Queue count', 'Open-item summary'], tools: ['Phone', 'Shared inbox', 'Chat', 'Ticketing']
  },
  {
    slug: 'outbound-lead-qualification', title: 'Sales Support Assistants', category: 'Assistants', eyebrow: 'Prospecting and appointment support',
    desc: 'Give your sales team a Philippines-based assistant for list research, first-touch outreach, qualification notes, CRM hygiene, and booked-call coordination.',
    outcome: 'Salespeople spend more time on qualified conversations and less time cleaning lists or chasing calendars.', image: '/visuals/role-sales-support.svg',
    tasks: ['Research and clean prospect records', 'Run approved first-touch outreach', 'Capture qualification notes and schedule next steps'],
    controls: ['Approved audience and message library', 'Consent and do-not-contact rules', 'No invented claims or commercial promises'],
    firstWeek: ['Define the ideal prospect and disqualifiers', 'Review sample messages and calls', 'Launch a small list with daily checks'],
    deliverables: ['Clean lead list', 'Outreach log', 'Qualification notes', 'Booked meetings'], tools: ['CRM', 'Email', 'Calendar', 'Prospecting tools']
  },
  {
    slug: 'customer-retention-support', title: 'Customer Success Assistants', category: 'Customer experience', eyebrow: 'Onboarding, check-ins, and renewal support',
    desc: 'Add a Philippines-based customer success assistant for onboarding reminders, routine check-ins, account notes, and early risk flags.',
    outcome: 'Customers get steady attention while account owners focus on decisions, renewals, and sensitive conversations.', image: '/visuals/role-customer-support.svg',
    tasks: ['Track onboarding milestones', 'Send approved check-ins and resource links', 'Flag usage, satisfaction, and renewal risks'],
    controls: ['Account owner keeps scope and contract decisions', 'Approved health signals and escalation rules', 'Recorded customer notes and next steps'],
    firstWeek: ['Map the customer journey', 'Review healthy and at-risk examples', 'Own one repeatable check-in stage'],
    deliverables: ['Onboarding tracker', 'Risk flag', 'Follow-up notes', 'Account summary'], tools: ['CRM', 'Customer success platform', 'Email', 'Project tracker']
  },
  {
    slug: 'ecommerce-contact-center', title: 'Ecommerce Virtual Assistants', category: 'Operations', eyebrow: 'Store, order, and customer operations',
    desc: 'Support your online store with Philippines-based assistants who can answer order questions, update products, coordinate returns, and keep issue notes current.',
    outcome: 'Store operations keep moving while founders and managers focus on products, marketing, and supplier decisions.', image: '/visuals/role-operations-coordinator.svg',
    tasks: ['Handle approved order and delivery questions', 'Update product information and routine store records', 'Prepare return, damage, and supplier exceptions'],
    controls: ['No unapproved refunds or payment changes', 'Store-role permissions by task', 'Daily exception and inventory review'],
    firstWeek: ['Learn products and order policies', 'Practice common customer cases', 'Launch one channel or store queue'],
    deliverables: ['Order queue', 'Product updates', 'Return packet', 'Daily store summary'], tools: ['Shopify', 'Help desk', 'Shipping portal', 'Inventory system']
  },
  {
    slug: 'healthcare-scheduling-support', title: 'Healthcare Admin Assistants', category: 'Operations', eyebrow: 'Scheduling and non-clinical coordination',
    desc: 'Add a Philippines-based administrative assistant for appointment coordination, reminders, records requests, and non-clinical follow-up under your privacy rules.',
    outcome: 'Administrative work moves faster while licensed staff keep every clinical decision.', image: '/visuals/role-executive-assistant.svg',
    tasks: ['Coordinate appointment requests and reminders', 'Collect approved non-clinical intake details', 'Route clinical, urgent, and privacy-sensitive questions'],
    controls: ['No diagnosis, triage, or medical advice', 'Role-based access and identity checks', 'Written privacy and urgent-escalation rules'],
    firstWeek: ['Map appointment types and urgent language', 'Practice verification and routing', 'Start with a narrow scheduling queue'],
    deliverables: ['Schedule update', 'Reminder log', 'Request packet', 'Escalation note'], tools: ['Scheduling', 'Phone', 'Secure messaging', 'Practice system']
  },
  {
    slug: 'call-quality-monitoring', title: 'Quality and Reporting Assistants', category: 'Operations', eyebrow: 'Review, reporting, and process support',
    desc: 'Use a Philippines-based quality assistant to sample work, apply your scorecard, prepare coaching notes, and surface repeat process issues.',
    outcome: 'Managers see where work breaks without manually reviewing every call, ticket, or record.', image: '/visuals/quality-scorecard.svg',
    tasks: ['Sample calls, tickets, or completed records', 'Apply documented review criteria', 'Summarize misses, patterns, and follow-up actions'],
    controls: ['Client-approved scorecard', 'Calibration with managers', 'Sensitive cases stay with authorized reviewers'],
    firstWeek: ['Choose the sample and scorecard', 'Double-score examples with a manager', 'Publish the first calibration report'],
    deliverables: ['QA scorecard', 'Coaching note', 'Trend report', 'Process issue log'], tools: ['Call recordings', 'Help desk', 'Spreadsheet', 'Dashboard']
  }
];

// Add reviewed, source-backed original research here. The templates and sitemap update automatically.
export const researchPosts: readonly ResearchPost[] = [
  {
    slug: 'call-center-outsourcing-philippines-evidence-guide',
    title: 'Call center outsourcing in the Philippines: an evidence guide for buyers',
    excerpt: 'A source-led guide to the size, export base, language coverage, work setup, and data duties behind Philippines-based call center outsourcing.',
    published: '2026-07-22',
    modified: '2026-07-22',
    revision: '2026-07-22-call-center-outsourcing-philippines-v1',
    readingMinutes: 12,
    wordCount: 2054,
    methodology: 'We reviewed current first-party figures from the IT and Business Process Association of the Philippines, two World Bank data series, and the text of two Philippine laws. We then translated those facts into questions a buyer can test during scoping, contracting, and a pilot.',
    limitations: 'The broad IT-BPM figures include more than voice support, while the World Bank ICT-service series does not equal call center revenue. Provider-level staffing, language skill, security, attendance, and call quality still need direct proof, so no industry total should be treated as a promise about one team.',
    keyTakeaways: [
      'The Philippines has a large service base, but market size does not prove that a provider fits your queue.',
      'IBPAP reports 1.9 million people in the wider IT-BPM workforce and $40 billion in generated revenue.',
      'World Bank export data supports the wider digital-services story, but it must not be mislabeled as call center revenue.',
      'Language coverage should be tested with real calls, not accepted from an industry-wide percentage.',
      'Hybrid delivery makes site, home, backup-power, and data-access controls part of the buying decision.',
      'A narrow paid pilot with a shared scorecard gives better evidence than a long sales deck.',
    ],
    stats: [
      { value: '1.9 million', label: 'IT-BPM talent workforce', note: 'Current industry figure shown by IBPAP; it covers the wider IT-BPM market, not only call center agents.', source: 1 },
      { value: '$40 billion', label: 'IT-BPM revenue generated', note: 'Current industry figure shown by IBPAP; it is not a quote, price, or savings claim.', source: 1 },
      { value: '$8.83 billion', label: 'Philippine ICT service exports in 2025', note: 'World Bank balance-of-payments series, rounded from the reported current-dollar value.', source: 3 },
      { value: '$51.49 billion', label: 'Philippine service exports in 2025', note: 'World Bank balance-of-payments series, used as a broad comparison base.', source: 4 },
      { value: '17.1%', label: 'ICT exports as a share of service exports', note: 'Our calculation from the two 2025 World Bank series; this is not a call center market-share figure.', source: 3 },
      { value: '60–70%', label: 'IBPAP member staff working on-site', note: 'IBPAP says this was the common member setup as of July 2023, with 30–40% working remotely.', source: 2 },
    ],
    sections: [
      {
        heading: 'What the market numbers do and do not prove',
        paragraphs: [
          { text: 'The strongest top-line evidence is about the wider Philippine IT-BPM industry. IBPAP currently shows a 1.9 million-person talent workforce and $40 billion in generated revenue, which points to a deep service market with established employers, training paths, and support businesses.', citations: [1] },
          { text: 'Those totals do not tell you how many people can handle your exact call type. They also do not show whether one provider has low turnover, useful supervisors, clear escalation rules, or enough trained backup staff for your hours.', citations: [1] },
          { text: 'A buyer should use market size as a reason to investigate, not as a reason to skip checks. Ask the provider to separate total company headcount from people who have worked on a queue like yours, then ask how many are available for the planned start date.' },
        ],
      },
      {
        heading: 'The export data supports the location, not a provider promise',
        paragraphs: [
          { text: 'World Bank data records $8.83 billion in Philippine ICT service exports for 2025. The same database records $51.49 billion in total Philippine service exports for that year, so ICT services were about 17.1% of the broader service-export value in these two series.', citations: [3, 4] },
          { text: 'This is global comparison evidence because the World Bank uses a common balance-of-payments framework across countries. It helps show that the Philippines has a meaningful export-services base, but the ICT category includes services that are not call center work.', citations: [3, 4] },
          { text: 'Do not let a vendor relabel the $8.83 billion number as call center revenue or as proof of quality. The useful buying question is smaller: what share of the provider\'s current work matches your channel, customer type, hours, systems, and decision limits?' },
        ],
      },
      {
        heading: 'English coverage still needs a live test',
        paragraphs: [
          { text: 'IBPAP says its industry supports English and reports that 65% of companies provide Spanish support, 40% have Mandarin capability, and 25% support Japanese. These are industry-level availability figures, not measured accent, listening, writing, or call-resolution scores for each agent.', citations: [2] },
          { text: 'For an English queue, test the work that callers will actually hear. Give candidates a short product note, two approved answers, one unclear request, and one required escalation, then score accuracy, pace, listening, tone, notes, and whether the agent avoids making up an answer.' },
          { text: 'A recorded role-play is more useful than asking whether an agent is fluent. Use the same prompt and scorecard for every candidate so a warm personality does not hide missed facts, weak verification, or poor call notes.' },
        ],
      },
      {
        heading: 'Hybrid delivery changes the control questions',
        paragraphs: [
          { text: 'IBPAP says that, as of July 2023, most member companies had 60–70% of employees on-site and 30–40% working remotely. That mix means a buyer should learn where the assigned team will work, who can approve a location change, and what happens when power or internet fails.', citations: [2] },
          { text: 'Philippine law allows telecommuting as an alternative private-sector work arrangement and places data-protection duties on the employer. The law also says the employer must inform telecommuting staff about relevant laws and company rules, while workers must protect confidential and proprietary information.', citations: [6] },
          { text: 'Ask for separate answers for office and home delivery. The plan should name the approved device, headset, network, backup connection, screen privacy rule, call-recording path, incident contact, and the time allowed to move work to a backup person or site.' },
        ],
      },
      {
        heading: 'Customer data needs written boundaries before the first call',
        paragraphs: [
          { text: 'The Philippine Data Privacy Act applies to personal-information processing and defines a personal information processor as a person or organization that may receive outsourced processing work. It also covers collection, recording, storage, use, updating, retrieval, blocking, erasure, and destruction, which are common actions in call center tools.', citations: [5] },
          { text: 'A contract line saying the provider follows privacy law is not a complete operating control. Buyers should list each system, the data visible in it, the actions an agent may take, the fields that must be masked, and the decisions that always go to a client-side manager.' },
          { text: 'Start with named accounts and the least access needed for the pilot. Review access when an agent changes queues, leaves the team, works from a new place, or needs temporary help, and keep a dated record of who approved each change.' },
        ],
      },
      {
        heading: 'Turn the evidence into a paid pilot',
        paragraphs: [
          { text: 'A good pilot is narrow enough to diagnose. Choose one call type, one coverage window, a fixed set of approved answers, a named escalation owner, and a daily sample of calls to review before adding more queues.' },
          { text: 'Set the scorecard before the provider selects agents. A practical first version can grade identity checks, answer accuracy, tone, next-step clarity, disposition, notes, and correct escalation, with any privacy or payment breach treated as a hard stop.' },
          { text: 'Review misses by cause instead of blaming the agent by default. A bad result may come from a poor script, missing product facts, weak system access, unclear manager rules, low training time, or a genuine hiring mismatch, and each cause needs a different fix.' },
          { text: 'After the pilot, compare evidence from the same period: attendance, offered and answered calls, escalations, sampled calls, scorecard results, repeat errors, and unresolved handoffs. Expand only when the provider can explain misses, show the correction, and repeat the improved result.' },
        ],
      },
      {
        heading: 'What a buyer should ask for in the proposal',
        paragraphs: [
          { text: 'Request a queue plan, not a generic seat count. It should state the Philippines work location, coverage hours, expected call volume, overflow rule, hiring profile, supervisor span, training time, QA sample size, backup plan, systems used, and manager-only decisions.' },
          { text: 'Ask the provider to mark which points are included in the quoted terms and which trigger another fee. This prevents a low headline rate from hiding charges for telephony, call recording, training, supervisor time, reports, after-hours cover, public holidays, setup, or replacement.' },
          { text: 'The site offers Philippines-based talent only. If your queue needs another language or a special license, ask whether qualified Philippines-based candidates are available and keep regulated advice, refunds, account changes, and other high-risk judgments with an authorized client owner.' },
        ],
      },
    ],
    table: {
      caption: 'Evidence-to-decision table for a Philippines call center proposal',
      headers: ['Evidence', 'What it supports', 'What it does not prove', 'Buyer check'],
      rows: [
        ['1.9 million IT-BPM workers', 'A large national talent and employer base', 'Available agents for your launch', 'Ask for role-matched headcount and start dates'],
        ['$40 billion IT-BPM revenue', 'An established export-service industry', 'Your provider\'s stability or quality', 'Review current operations, references, and continuity plan'],
        ['$8.83 billion ICT exports', 'A meaningful digital-service export base', 'Call center revenue or savings', 'Ask for the provider\'s channel and client mix'],
        ['English support across the industry', 'Broad English service availability', 'An individual agent\'s call skill', 'Run one scored, recorded role-play'],
        ['60–70% on-site member staffing', 'Office delivery remains common', 'Where your assigned team will work', 'Write the approved location and backup rule into the plan'],
        ['Philippine privacy and telework laws', 'A local legal base for data and remote work', 'Your own foreign-law compliance', 'Map each system, data field, action, and accountable owner'],
      ],
    },
    buyerChecklist: [
      'Define one starting queue, expected volume, coverage hours, and overflow rule.',
      'List every approved answer and every decision that must reach a manager.',
      'Score the same recorded role-play for all shortlisted agents.',
      'Confirm the assigned Philippines work location and backup location.',
      'Map user accounts, permissions, recording access, retention, and access removal.',
      'Set the daily and weekly QA sample, scorecard, and hard-stop errors.',
      'Separate quoted seat cost from telephony, setup, training, supervision, and after-hours fees.',
      'Agree on attendance, coaching, replacement, and exit handoff steps before launch.',
    ],
    faqs: [
      { q: 'How large is the Philippine call center talent market?', a: 'IBPAP reports 1.9 million people in the wider IT-BPM talent workforce. That number includes more than call center roles, so buyers should ask a provider for current role-matched availability.' },
      { q: 'Does the $40 billion figure mean call centers earned $40 billion?', a: 'No. IBPAP presents $40 billion as revenue generated by the wider Philippine IT-BPM industry, which includes several kinds of digital and business services.' },
      { q: 'Is English ability guaranteed when outsourcing to the Philippines?', a: 'No individual result is guaranteed by an industry statistic. Test shortlisted agents with the same real call sample and score listening, accuracy, tone, notes, and escalation.' },
      { q: 'Can Philippines-based call center staff work remotely?', a: 'Philippine law permits telecommuting as an alternative private-sector arrangement, and IBPAP reports a mix of on-site and remote work among members. The buyer and provider should still agree on approved locations, devices, networks, data rules, and backup cover.' },
      { q: 'What should be included in a first call center pilot?', a: 'Start with one queue, written answers, named escalations, limited system access, and a shared QA scorecard. Review a fixed call sample each day and expand only after repeat errors and unresolved handoffs are under control.' },
    ],
    related: [
      { title: 'Questions to ask an offshore call center provider', href: '/blog' },
      { title: 'Inbound customer care service', href: '/services/inbound-customer-care' },
      { title: 'Call quality monitoring service', href: '/services/call-quality-monitoring' },
    ],
    sources: [
      { name: 'IT & Business Process Association of the Philippines: industry overview', url: 'https://ibpap.org/', note: 'Current first-party industry page showing the 1.9 million workforce and $40 billion revenue figures.', kind: 'Philippines' },
      { name: 'IBPAP Knowledge Hub: industry FAQs', url: 'https://ibpap.org/knowledge-hub', note: 'First-party industry FAQ with language-support percentages and the July 2023 hybrid-work split.', kind: 'Philippines' },
      { name: 'World Bank: ICT service exports, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.CCIS.CD?format=json&per_page=10', note: 'Global balance-of-payments series used for the 2025 ICT service export value.', kind: 'Global comparison' },
      { name: 'World Bank: service exports, Philippines', url: 'https://api.worldbank.org/v2/country/PHL/indicator/BX.GSR.NFSV.CD?format=json&per_page=10', note: 'Global balance-of-payments series used for the 2025 total service export value.', kind: 'Global comparison' },
      { name: 'Republic Act No. 10173: Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Primary legal text for personal-information processing and outsourced processors.', kind: 'Philippines' },
      { name: 'Republic Act No. 11165: Telecommuting Act', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', note: 'Primary legal text for private-sector telecommuting and data-protection duties.', kind: 'Philippines' },
    ],
  },
];
export const postsPerPage = 20;
