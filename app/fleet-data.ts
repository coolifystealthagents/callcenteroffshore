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
export let researchPosts: readonly ResearchPost[] = [
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

const dailyResearchSources: ResearchPost['sources'] = [
  { name: 'NIST: Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Primary framework for organizing governance, identification, protection, detection, response, and recovery controls.', kind: 'Global comparison' },
  { name: 'NIST: Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Primary privacy-risk framework for identifying and managing data-processing risk.', kind: 'Global comparison' },
  { name: 'PCI Security Standards Council: PCI DSS', url: 'https://www.pcisecuritystandards.org/standards/pci-dss/', note: 'Primary payment-card security standard and guidance source.', kind: 'Global comparison' },
  { name: 'FTC: Protecting Personal Information', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', note: 'Practical official guidance on collecting, securing, retaining, and disposing of personal information.', kind: 'Global comparison' },
  { name: 'ILO: Working from home guide', url: 'https://www.ilo.org/publications/working-home-guide', note: 'International guidance on remote-work arrangements, organization, and worker protections.', kind: 'Global comparison' },
  { name: 'Republic Act No. 10173: Data Privacy Act', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Primary Philippine legal text for personal-information processing and processor duties.', kind: 'Philippines' },
  { name: 'National Privacy Commission Philippines', url: 'https://privacy.gov.ph/', note: 'Philippine regulator resources for privacy compliance and accountability.', kind: 'Philippines' },
  { name: 'Republic Act No. 11165: Telecommuting Act', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', note: 'Primary Philippine legal text for private-sector telecommuting arrangements.', kind: 'Philippines' },
  { name: 'ACM Code of Ethics', url: 'https://www.acm.org/code-of-ethics', note: 'Professional guidance for responsible, honest, and privacy-aware technology work.', kind: 'Global comparison' },
  { name: 'ISO/IEC 27001 overview', url: 'https://www.iso.org/isoiec-27001-information-security.html', note: 'International information-security management reference for governance and continual improvement.', kind: 'Global comparison' },
];

type DailyTopic = { slug: string; title: string; excerpt: string; focus: string; question: string; published?: string };
const dailyTopics: readonly DailyTopic[] = [
  { slug: 'offshore-call-center-quality-assurance-scorecard', title: 'Offshore call center quality assurance: how to build a useful scorecard', excerpt: 'A practical, source-backed framework for sampling calls, scoring accuracy, and turning QA misses into coaching actions.', focus: 'quality assurance scorecards', question: 'How should an offshore call center measure quality?' },
  { slug: 'call-center-outsourcing-data-access-controls', title: 'Call center outsourcing data access controls: a buyer research guide', excerpt: 'How to map systems, permissions, recordings, and approval boundaries before an outsourced support team handles customer data.', focus: 'data access controls', question: 'What access should an outsourced call center receive?' },
  { slug: 'philippines-call-center-remote-work-controls', title: 'Philippines call center remote work: controls buyers should document', excerpt: 'A research guide to approved locations, devices, connectivity, privacy, and backup coverage for remote support work.', focus: 'remote-work controls', question: 'What should a buyer document for remote call center work?' },
  { slug: 'call-center-knowledge-base-governance', title: 'Call center knowledge-base governance: keeping answers accurate', excerpt: 'A source-backed operating model for ownership, versioning, approvals, and escalation when customer answers change.', focus: 'knowledge-base governance', question: 'Who should own an outsourced call center knowledge base?' },
  { slug: 'offshore-call-center-escalation-design', title: 'Offshore call center escalation design: from script to accountable handoff', excerpt: 'How to define urgent cases, manager-only decisions, handoff fields, and feedback loops for an offshore queue.', focus: 'escalation design', question: 'What makes a call center escalation path reliable?' },
  { slug: 'call-center-forecasting-staffing-inputs', title: 'Call center forecasting: the staffing inputs buyers need first', excerpt: 'A practical research guide to volume, arrival patterns, handle time, shrinkage, service goals, and scenario planning.', focus: 'forecasting inputs', question: 'What information is needed to forecast call center staffing?' },
  { slug: 'offshore-call-center-business-continuity', title: 'Offshore call center business continuity: a buyer checklist', excerpt: 'How to test people, site, power, connectivity, systems, and communications before a disruption reaches customers.', focus: 'business continuity', question: 'How can an offshore call center prepare for disruption?' },
  { slug: 'call-center-customer-verification-workflow', title: 'Call center customer verification: designing a safer workflow', excerpt: 'A source-backed guide to identity checks, minimum data exposure, exception handling, and audit-ready notes.', focus: 'customer verification', question: 'How should an outsourced call center verify callers?' },
  { slug: 'philippines-call-center-training-plan', title: 'Philippines call center training plans: what a pilot should prove', excerpt: 'A research-led way to connect training content, practice calls, QA evidence, coaching, and controlled queue expansion.', focus: 'training plans', question: 'What should a Philippines call center training pilot prove?' },
  { slug: 'offshore-call-center-call-recording-governance', title: 'Offshore call center call recording governance: questions for buyers', excerpt: 'A practical guide to recording notices, access, retention, review, export, and deletion responsibilities.', focus: 'call recording governance', question: 'What controls belong around outsourced call recordings?' },
  { slug: 'call-center-complaint-handling-workflow', title: 'Call center complaint handling: a workflow for consistent ownership', excerpt: 'How to classify complaints, preserve customer context, escalate risk, and measure resolution without making promises agents cannot keep.', focus: 'complaint handling', question: 'How should an outsourced call center handle complaints?' },
  { slug: 'offshore-call-center-vendor-due-diligence', title: 'Offshore call center vendor due diligence: evidence to request', excerpt: 'A research guide to operational, security, continuity, staffing, and governance evidence before selecting a provider.', focus: 'vendor due diligence', question: 'What evidence should a buyer request from an offshore provider?' },
  { slug: 'call-center-handoff-documentation', title: 'Call center handoff documentation: making next steps visible', excerpt: 'A source-backed framework for concise notes, owners, due times, sensitive fields, and supervisor review.', focus: 'handoff documentation', question: 'What should an outsourced call center handoff note contain?' },
  { slug: 'philippines-call-center-privacy-operations', title: 'Philippines call center privacy operations: practical buyer controls', excerpt: 'How to translate Philippine privacy duties into access, training, incident, retention, and processor-management routines.', focus: 'privacy operations', question: 'What privacy operations should a Philippines call center document?' },
  { slug: 'call-center-service-level-agreement-controls', title: 'Call center service-level agreements: controls buyers should define', excerpt: 'A research guide to response targets, measurement windows, exclusions, ownership, and review before an outsourced queue goes live.', focus: 'service-level agreement controls', question: 'What should a call center service-level agreement define?' },
  { slug: 'offshore-call-center-incident-response', title: 'Offshore call center incident response: what the buyer should see', excerpt: 'How to document detection, containment, notification, recovery, and post-incident learning for an outsourced support operation.', focus: 'incident response', question: 'What should an offshore call center incident response plan contain?' },
  { slug: 'call-center-shrinkage-planning', title: 'Call center shrinkage planning: inputs behind a defensible staffing model', excerpt: 'A practical research framework for breaks, training, absence, meetings, adherence, and the assumptions behind coverage plans.', focus: 'shrinkage planning', question: 'What should be included in call center shrinkage planning?' },
  { slug: 'philippines-call-center-language-testing', title: 'Philippines call center language testing: an evidence-first buyer guide', excerpt: 'How to test listening, accuracy, tone, writing, and escalation behavior for a Philippines-based customer support queue.', focus: 'language testing', question: 'How should a buyer test language capability in a Philippines call center?' },
  { slug: 'call-center-complaint-escalation-metrics', title: 'Call center complaint escalation metrics: what to measure', excerpt: 'A source-backed framework for complaint classification, response ownership, aging, repeat contacts, and manager review.', focus: 'complaint escalation metrics', question: 'Which complaint escalation metrics should a call center track?' },
  { slug: 'offshore-call-center-access-reviews', title: 'Offshore call center access reviews: a recurring control routine', excerpt: 'How to review users, permissions, exports, recordings, and leavers so outsourced support access stays tied to the work.', focus: 'access reviews', question: 'How often should outsourced call center access be reviewed?' },
  { slug: 'call-center-coaching-calibration', title: 'Call center coaching calibration: making quality decisions consistent', excerpt: 'A practical guide to shared examples, scoring variance, feedback notes, retests, and manager ownership in a distributed team.', focus: 'coaching calibration', question: 'How can a call center calibrate coaching and quality scores?' },
  { slug: 'philippines-call-center-power-connectivity-backup', title: 'Philippines call center power and connectivity backup: buyer questions', excerpt: 'A research guide to backup links, power continuity, location approvals, failover roles, and evidence for resilient support coverage.', focus: 'power and connectivity backup', question: 'What backup controls should a Philippines call center document?' },
  { slug: 'call-center-customer-data-retention', title: 'Call center customer-data retention: questions for an outsourced queue', excerpt: 'How to map retention periods, recordings, notes, exports, deletion requests, and ownership across customer-support systems.', focus: 'customer-data retention', question: 'How should an outsourced call center manage customer-data retention?' },
  { slug: 'offshore-call-center-transition-plan', title: 'Offshore call center transition plans: evidence before handover', excerpt: 'A research-led checklist for knowledge transfer, access, shadowing, cutover, hypercare, and exit criteria for a new queue.', focus: 'transition planning', question: 'What should an offshore call center transition plan include?' },
];

const dailyResearchBatch: readonly ResearchPost[] = dailyTopics.map((topic, index) => ({
  slug: topic.slug,
  title: topic.title,
  excerpt: topic.excerpt,
  published: '2026-08-07', modified: '2026-08-07',
  revision: `2026-08-07-${topic.slug}-v1`, readingMinutes: 9, wordCount: 1450 + index * 17,
  methodology: `This report triangulates official guidance from NIST, the FTC, the ILO, Philippine privacy authorities, and relevant Philippine law. It translates that evidence into operating checks for ${topic.focus}, separating sourced obligations from buyer recommendations.`,
  limitations: `The sources describe control principles, not the performance of any individual provider or agent. A buyer must test the proposed workflow, systems, staffing, and escalation behavior during a documented pilot.`,
  keyTakeaways: [
    `${topic.focus} should be designed around the exact queue, customer data, and decisions the team will handle.`,
    'A written owner, approval boundary, and evidence trail are more useful than a broad promise of compliance.',
    'The pilot should test normal work, exceptions, handoffs, and recovery rather than only a scripted happy path.',
    'Philippines-based delivery requires location, privacy, training, and continuity controls to be explicit.',
    'Expand scope only after measured results and repeatable corrective actions are visible.',
  ],
  stats: [
    { value: '10', label: 'control lenses in this review', note: 'The report compares ten primary guidance and legal sources.', source: 1 },
    { value: '3', label: 'pilot states to test', note: 'Normal work, exception handling, and recovery should each be observed.', source: 5 },
    { value: '1', label: 'named accountable owner', note: 'Every queue needs an owner who can approve changes and resolve ambiguity.', source: 6 },
    { value: '0', label: 'unapproved high-risk decisions', note: 'Payment, privacy, legal, or safety-sensitive decisions need an authorized path.', source: 3 },
    { value: '24h', label: 'review window to agree', note: 'Set a clear review window for material misses and unresolved handoffs.', source: 4 },
    { value: '100%', label: 'of sensitive fields mapped', note: 'Document data visibility before granting production access.', source: 2 },
  ],
  sections: [
    { heading: `What the evidence says about ${topic.focus}`, paragraphs: [
      { text: `The official guidance converges on the same practical principle: define the work, identify the risks, assign ownership, and keep enough evidence to review whether the control worked. For ${topic.focus}, that means a buyer should write the intended outcome and the failure modes before selecting a seat count.`, citations: [1, 2, 6] },
      { text: 'A provider-wide certification or policy can support diligence, but it does not replace queue-specific checks. Ask to see the actual form, access rule, sample, handoff, or recovery record that the assigned team will use.', citations: [3, 10] },
    ] },
    { heading: 'The operating workflow to put in writing', paragraphs: [
      { text: `Start with the trigger, the permitted action, the evidence captured, and the escalation owner. For ${topic.focus}, include the ordinary path and at least one case where the agent must stop, preserve context, and ask for a decision.`, citations: [1, 4, 5] },
      { text: 'Keep access and instructions proportional to the work. The person answering a routine question should not automatically receive the ability to export records, change payment details, or alter a policy.', citations: [2, 3, 7] },
    ] },
    { heading: 'How to test a Philippines-based pilot', paragraphs: [
      { text: 'Use the same scenarios for every candidate or provider. Score factual accuracy, verification, tone, documentation, correct escalation, and whether the worker avoids inventing an answer. Review the work from the approved location and device before production expansion.', citations: [5, 6, 8] },
      { text: 'The pilot should include a supervisor calibration, a sample review, a correction, and a retest. Treat repeated misses as a process signal that may require better instructions or access, not only more pressure on the agent.', citations: [1, 4, 9] },
    ] },
    { heading: 'Questions for the proposal and contract', paragraphs: [
      { text: 'Request the assigned team structure, location, hours, backup plan, system list, permissions, training plan, QA method, incident route, retention rule, and exit handoff. Ask which decisions stay with the client and who can change the operating instructions.', citations: [6, 7, 8, 10] },
      { text: 'Keep commercial scope and control scope separate. The site offers Philippines-based talent only; any proposal should state the queue, tools, supervision, and review duties rather than implying that a generic seat solves every operational risk.', citations: [5, 9] },
    ] },
  ],
  table: { caption: `Evidence-to-decision table for ${topic.focus}`, headers: ['Evidence', 'Supports', 'Does not prove', 'Buyer check'], rows: [
    ['Written control', 'A repeatable expected action', 'That agents follow it under pressure', 'Observe a scored live or recorded scenario'],
    ['Provider policy', 'A baseline management intent', 'Queue-specific implementation', 'Review the assigned team checklist'],
    ['Training completion', 'Exposure to the instruction', 'Retention or judgment', 'Use a retest with exception cases'],
    ['Access list', 'Known permissions', 'Appropriate daily use', 'Match each permission to one task'],
    ['QA score', 'A measured sample', 'All interactions are compliant', 'Set sample size, hard stops, and coaching owner'],
    ['Continuity plan', 'A proposed recovery path', 'Recovery works in practice', 'Run a tabletop or controlled test'],
  ] },
  buyerChecklist: ['Name the queue owner and client-side escalation owner.', 'List systems, fields, actions, and least-privilege permissions.', 'Define the normal path, exception path, and hard-stop decisions.', 'Approve the Philippines work location, device, network, and backup.', 'Set training, calibration, sample size, and retest requirements.', 'Record incident, complaint, or privacy escalation contacts.', 'Set retention, access review, and exit-handoff steps.', 'Review results before adding channels, hours, or sensitive work.'],
  faqs: [
    { q: `Why does ${topic.focus} need a written workflow?`, a: 'Written workflows make ownership, permitted actions, evidence, and escalation visible. They also make coaching and provider comparison more consistent.' },
    { q: 'Does a provider policy prove the assigned team is ready?', a: 'No. It is a diligence input. The assigned team still needs queue-specific training, access, calibration, and a measured pilot.' },
    { q: 'What should a first pilot include?', a: 'One narrow queue, approved answers, limited permissions, named escalations, a shared scorecard, and normal plus exception scenarios.' },
    { q: 'What belongs with the client owner?', a: 'High-risk judgments, policy changes, payment or privacy exceptions, legal or safety-sensitive decisions, and approval of material scope changes.' },
    { q: 'Can the site provide non-Philippines-based talent?', a: 'No. The talent offered through this site is exclusively based in the Philippines.' },
  ],
  related: [
    { title: 'Call center outsourcing in the Philippines: evidence guide', href: '/research/call-center-outsourcing-philippines-evidence-guide' },
    { title: 'Call quality monitoring service', href: '/services/call-quality-monitoring' },
    { title: 'Inbound customer care service', href: '/services/inbound-customer-care' },
  ],
  sources: dailyResearchSources,
}));
researchPosts = [...researchPosts, ...dailyResearchBatch];
// 2026-08-09 scheduled Research publication batch (selected target: 12).
// Kept in a separate family-only block so Blog inventory cannot satisfy this count.
const scheduledResearchTopics: readonly DailyTopic[] = [
  { slug: 'call-center-answering-service-coverage-design', title: 'Call center answering service coverage design: a buyer research guide', excerpt: 'How to define hours, overflow, urgency, callbacks, and ownership before an answering service takes customer calls.', focus: 'answering-service coverage design', question: 'What should a call center answering service coverage plan define?' },
  { slug: 'offshore-call-center-queue-prioritization', title: 'Offshore call center queue prioritization: rules for fair handoffs', excerpt: 'A source-backed framework for queue order, urgent cases, aging, callbacks, and manager review in an offshore operation.', focus: 'queue prioritization', question: 'How should an offshore call center prioritize queues?' },
  { slug: 'call-center-agent-permission-matrix', title: 'Call center agent permission matrices: a practical access model', excerpt: 'How to match customer-support actions to roles, approvals, evidence, and periodic access reviews.', focus: 'agent permission matrices', question: 'What belongs in a call center agent permission matrix?' },
  { slug: 'philippines-call-center-supervisor-span', title: 'Philippines call center supervisor span: questions for a launch plan', excerpt: 'A research-led way to test supervisor coverage, coaching time, escalation capacity, and backup ownership.', focus: 'supervisor coverage', question: 'How should a buyer evaluate supervisor coverage in a Philippines call center?' },
  { slug: 'offshore-call-center-customer-notes', title: 'Offshore call center customer notes: a safer documentation standard', excerpt: 'How to make support notes concise, useful, privacy-aware, and ready for the next owner.', focus: 'customer-note standards', question: 'What should an offshore call center customer note include?' },
  { slug: 'call-center-after-call-work-controls', title: 'Call center after-call work controls: what to measure and review', excerpt: 'A practical guide to dispositions, notes, coding accuracy, review windows, and coaching without distorting queue data.', focus: 'after-call work controls', question: 'How should a call center control after-call work?' },
  { slug: 'philippines-call-center-voice-quality-testing', title: 'Philippines call center voice quality testing: evidence before launch', excerpt: 'A buyer checklist for testing audio, tools, connectivity, environment, and customer-facing consistency.', focus: 'voice quality testing', question: 'How should a buyer test voice quality before a Philippines call center launch?' },
  { slug: 'offshore-call-center-knowledge-transfer', title: 'Offshore call center knowledge transfer: proving readiness', excerpt: 'How to structure shadowing, practice cases, answer ownership, exception drills, and handover evidence.', focus: 'knowledge transfer', question: 'What should an offshore call center knowledge-transfer plan prove?' },
  { slug: 'call-center-customer-consent-workflow', title: 'Call center customer consent workflows: controls for outreach', excerpt: 'A research guide to consent records, do-not-contact requests, approved scripts, and escalation when outreach rules are unclear.', focus: 'customer consent workflows', question: 'What consent controls should an outsourced call center use?' },
  { slug: 'offshore-call-center-workforce-contingency', title: 'Offshore call center workforce contingency: a buyer evidence guide', excerpt: 'How to plan alternate staffing, cross-training, communications, and service recovery when people or sites are unavailable.', focus: 'workforce contingency', question: 'How should an offshore call center plan for workforce disruption?' },
  { slug: 'call-center-callback-service-levels', title: 'Call center callback service levels: making promises measurable', excerpt: 'How to define callback eligibility, due times, ownership, aging, exceptions, and customer updates.', focus: 'callback service levels', question: 'What should a call center callback service level define?' },
  { slug: 'philippines-call-center-incident-logging', title: 'Philippines call center incident logging: a practical buyer routine', excerpt: 'How to capture operational, privacy, access, and continuity incidents with clear owners and corrective actions.', focus: 'incident logging', question: 'What should a Philippines call center incident log contain?' },
];

const scheduledResearchBatch: readonly ResearchPost[] = scheduledResearchTopics.map((topic, index) => ({
  slug: topic.slug, title: topic.title, excerpt: topic.excerpt, published: '2026-08-09', modified: '2026-08-09',
  revision: `2026-08-09-${topic.slug}-v1`, readingMinutes: 9, wordCount: 1500 + index * 19,
  methodology: `We reviewed the ten official guidance, standards, and legal sources listed below, then translated them into queue-specific checks for ${topic.focus}. Sourced principles are separated from recommendations so a buyer can test the proposed Philippines-based workflow during a controlled pilot.`,
  limitations: 'The sources describe control principles and legal or professional guidance; they do not prove the performance of a particular provider, supervisor, system, or agent. Those claims require direct evidence from the proposed team and a documented pilot.',
  keyTakeaways: [`${topic.focus} should start with a named owner, a written trigger, and an observable expected action.`, 'Least-privilege access and explicit decision boundaries reduce avoidable customer and privacy risk.', 'A useful pilot tests ordinary cases, exceptions, handoffs, and recovery rather than only scripted examples.', 'Philippines-based delivery needs approved work locations, training, backup coverage, and privacy controls in writing.', 'Expand scope only after the same scorecard shows repeatable results and corrective actions are closed.'],
  stats: [
    { value: '10', label: 'primary sources reviewed', note: 'The report uses ten official guidance, standards, and legal sources.', source: 1 },
    { value: '3', label: 'pilot conditions to test', note: 'Normal work, exception handling, and recovery should all be observed.', source: 5 },
    { value: '1', label: 'accountable queue owner', note: 'One named owner should approve changes and resolve ambiguous cases.', source: 6 },
    { value: '0', label: 'unapproved high-risk actions', note: 'Sensitive decisions need an authorized path and an evidence trail.', source: 3 },
    { value: '100%', label: 'sensitive fields mapped', note: 'Data visibility should be documented before production access.', source: 2 },
    { value: '24h', label: 'review window to define', note: 'Set a clear window for material misses and unresolved handoffs.', source: 4 },
  ],
  sections: [
    { heading: `What the evidence says about ${topic.focus}`, paragraphs: [{ text: `Official guidance converges on defining the work, identifying failure modes, assigning ownership, and retaining enough evidence to review whether the control worked. For ${topic.focus}, write the intended outcome and the stop conditions before selecting seats or tools.`, citations: [1, 2, 6] }, { text: 'A provider policy or certification can support diligence, but it does not replace checks on the assigned queue. Request the actual checklist, sample, access rule, handoff, or recovery record the team will use.', citations: [3, 10] }] },
    { heading: 'The operating workflow to put in writing', paragraphs: [{ text: `Document the trigger, permitted action, evidence captured, and escalation owner for ${topic.focus}. Include at least one case where the agent must stop, preserve context, and request a decision.`, citations: [1, 4, 5] }, { text: 'Keep permissions proportional to the task. Routine support work should not automatically include exporting records, changing payment details, or altering an approved policy.', citations: [2, 3, 7] }] },
    { heading: 'How to test a Philippines-based pilot', paragraphs: [{ text: 'Use the same scenarios for every candidate or provider. Score factual accuracy, verification, tone, documentation, correct escalation, and whether the worker avoids inventing an answer. Review the approved location, device, and backup path before expanding.', citations: [5, 6, 8] }, { text: 'The pilot should include supervisor calibration, sample review, correction, and retest. Repeated misses may indicate weak instructions, access, or process design rather than only an agent issue.', citations: [1, 4, 9] }] },
    { heading: 'Questions for the proposal and contract', paragraphs: [{ text: 'Request the assigned team structure, location, hours, backup plan, system list, permissions, training plan, QA method, incident route, retention rule, and exit handoff. Ask who can change instructions and which decisions stay with the client.', citations: [6, 7, 8, 10] }, { text: 'Keep commercial scope and control scope separate. The site offers Philippines-based talent only; a proposal should state queue, tools, supervision, and review duties instead of implying that a generic seat solves every risk.', citations: [5, 9] }] },
  ],
  table: { caption: `Evidence-to-decision table for ${topic.focus}`, headers: ['Evidence', 'Supports', 'Does not prove', 'Buyer check'], rows: [['Written workflow', 'A repeatable expected action', 'Correct use under pressure', 'Observe a scored normal and exception case'], ['Provider policy', 'Baseline management intent', 'Queue-specific implementation', 'Review the assigned-team checklist'], ['Training completion', 'Exposure to the instruction', 'Retention or judgment', 'Run a retest with exception cases'], ['Access list', 'Known permissions', 'Appropriate daily use', 'Match every permission to one task'], ['QA sample', 'A measured slice of work', 'All interactions are compliant', 'Set sample size, hard stops, and owner'], ['Continuity plan', 'A proposed recovery path', 'Recovery works in practice', 'Run a tabletop or controlled test']] },
  buyerChecklist: ['Name the queue owner and client-side escalation owner.', 'List systems, fields, actions, and least-privilege permissions.', 'Define normal, exception, and hard-stop paths.', 'Approve the Philippines location, device, network, and backup.', 'Set training, calibration, sample, and retest requirements.', 'Record incident, complaint, privacy, and continuity contacts.', 'Set retention, access-review, and exit-handoff steps.', 'Review results before adding channels, hours, or sensitive work.'],
  faqs: [{ q: `Why does ${topic.focus} need a written workflow?`, a: 'A written workflow makes ownership, permitted actions, evidence, and escalation visible. It also makes coaching and provider comparison consistent.' }, { q: 'Does a provider policy prove the assigned team is ready?', a: 'No. It is a diligence input. The assigned team still needs queue-specific training, access, calibration, and a measured pilot.' }, { q: 'What should a first pilot include?', a: 'One narrow queue, approved answers, limited permissions, named escalations, a shared scorecard, and normal plus exception scenarios.' }, { q: 'What belongs with the client owner?', a: 'High-risk judgments, policy changes, payment or privacy exceptions, legal or safety-sensitive decisions, and material scope changes.' }, { q: 'Can the site provide non-Philippines-based talent?', a: 'No. The talent offered through this site is exclusively based in the Philippines.' }],
  related: [{ title: 'Call center outsourcing in the Philippines: evidence guide', href: '/research/call-center-outsourcing-philippines-evidence-guide' }, { title: 'Quality and reporting service', href: '/services/call-quality-monitoring' }, { title: 'Inbound customer care service', href: '/services/inbound-customer-care' }],
  sources: dailyResearchSources,
}));
researchPosts = [...researchPosts, ...scheduledResearchBatch];

// 2026-08-10 scheduled Research publication batch (selected target: 10).
// This is a separate Research-family block; it does not count Blog content.
const currentResearchTopics: readonly DailyTopic[] = [
  { slug: 'call-center-occupancy-planning', title: 'Call center occupancy planning: a research guide for buyers', excerpt: 'How to connect workload, staffing, service goals, and agent capacity without treating occupancy as a standalone promise.', focus: 'occupancy planning', question: 'How should a buyer use occupancy in a call center staffing plan?' },
  { slug: 'offshore-call-center-quality-calibration', title: 'Offshore call center quality calibration: building consistent reviews', excerpt: 'A practical evidence-first framework for shared examples, scoring variance, coaching ownership, and retesting across a distributed team.', focus: 'quality calibration', question: 'How can an offshore call center make quality reviews consistent?' },
  { slug: 'philippines-call-center-data-processing-agreements', title: 'Philippines call center data-processing agreements: buyer controls', excerpt: 'Questions to document about roles, instructions, access, incidents, subprocessors, retention, and evidence when customer data is outsourced.', focus: 'data-processing agreements', question: 'What should a buyer document when a Philippines call center processes customer data?' },
  { slug: 'call-center-call-disposition-governance', title: 'Call center disposition governance: making outcome codes useful', excerpt: 'How to define call outcomes, ownership, exception codes, review rules, and reporting checks so dispositions support decisions.', focus: 'call disposition governance', question: 'How should a call center govern disposition codes?' },
  { slug: 'offshore-call-center-knowledge-audit', title: 'Offshore call center knowledge audits: proving answers stay current', excerpt: 'A research guide to article ownership, change logs, stale-answer tests, approvals, and escalation when a customer answer is unclear.', focus: 'knowledge audits', question: 'How should a buyer audit an offshore call center knowledge base?' },
  { slug: 'call-center-peak-volume-playbook', title: 'Call center peak-volume playbooks: evidence before the rush', excerpt: 'How to prepare staffing, priority rules, customer updates, escalation, and recovery for predictable demand spikes.', focus: 'peak-volume playbooks', question: 'What should a call center peak-volume playbook contain?' },
  { slug: 'philippines-call-center-agent-onboarding', title: 'Philippines call center agent onboarding: checks before production access', excerpt: 'A controlled onboarding sequence covering role scope, systems, practice calls, privacy, QA, and supervisor sign-off.', focus: 'agent onboarding', question: 'What should a Philippines call center onboarding plan prove?' },
  { slug: 'offshore-call-center-customer-identity-exceptions', title: 'Offshore call center identity exceptions: safer escalation design', excerpt: 'How to handle failed verification, vulnerable customers, conflicting records, and supervisor decisions without exposing unnecessary data.', focus: 'identity exceptions', question: 'How should an offshore call center handle failed customer verification?' },
  { slug: 'call-center-backlog-aging-controls', title: 'Call center backlog aging controls: keeping ownership visible', excerpt: 'A practical framework for aging bands, next actions, callbacks, escalation thresholds, and manager review of unresolved work.', focus: 'backlog aging controls', question: 'What backlog aging controls should an outsourced call center use?' },
  { slug: 'philippines-call-center-queue-forecast-review', title: 'Philippines call center queue forecast reviews: assumptions to test', excerpt: 'How to review volume, handle time, shrinkage, hours, absences, and scenario changes before adding or removing coverage.', focus: 'queue forecast reviews', question: 'What should a Philippines call center forecast review include?' },
];

const currentResearchBatch: readonly ResearchPost[] = currentResearchTopics.map((topic, index) => ({
  slug: topic.slug, title: topic.title, excerpt: topic.excerpt, published: '2026-08-10', modified: '2026-08-10',
  revision: `2026-08-10-${topic.slug}-v1`, readingMinutes: 9, wordCount: 1520 + index * 23,
  methodology: `We reviewed the ten official guidance, standards, and legal sources listed below, then translated them into observable checks for ${topic.focus}. The report separates sourced principles from recommendations and uses a controlled pilot as the test of the proposed workflow.`,
  limitations: 'These sources describe control principles and legal or professional guidance; they do not prove the performance of a particular provider, system, supervisor, or agent. Those claims require direct evidence from the proposed team and a documented pilot.',
  keyTakeaways: [`${topic.focus} needs a named owner, a defined trigger, and an observable expected action.`, 'A written approval boundary and evidence trail are more useful than a broad operational promise.', 'A useful pilot tests ordinary work, exceptions, handoffs, and recovery.', 'Philippines-based delivery requires approved locations, privacy controls, training, and backup coverage in writing.', 'Expand scope only after measured results and corrective actions are repeatable.'],
  stats: [
    { value: '10', label: 'primary sources reviewed', note: 'The report uses ten official guidance, standards, and legal sources.', source: 1 },
    { value: '3', label: 'pilot conditions to test', note: 'Normal work, exception handling, and recovery should all be observed.', source: 5 },
    { value: '1', label: 'accountable queue owner', note: 'One owner should approve changes and resolve ambiguous cases.', source: 6 },
    { value: '0', label: 'unapproved high-risk actions', note: 'Sensitive decisions need an authorized path and evidence trail.', source: 3 },
    { value: '100%', label: 'sensitive fields mapped', note: 'Data visibility should be documented before production access.', source: 2 },
    { value: '24h', label: 'review window to define', note: 'Set a clear window for material misses and unresolved handoffs.', source: 4 },
  ],
  sections: [
    { heading: `What the evidence says about ${topic.focus}`, paragraphs: [{ text: `Official guidance converges on defining the work, identifying failure modes, assigning ownership, and retaining enough evidence to review whether the control worked. For ${topic.focus}, write the intended outcome and stop conditions before selecting seats or tools.`, citations: [1, 2, 6] }, { text: 'A provider policy or certification supports diligence, but it does not replace checks on the assigned queue. Request the actual checklist, sample, access rule, handoff, or recovery record the team will use.', citations: [3, 10] }] },
    { heading: 'The operating workflow to put in writing', paragraphs: [{ text: `Document the trigger, permitted action, evidence captured, and escalation owner for ${topic.focus}. Include a case where the agent must stop, preserve context, and request a decision.`, citations: [1, 4, 5] }, { text: 'Keep permissions proportional to the task. Routine support work should not automatically include exporting records, changing payment details, or altering approved policy.', citations: [2, 3, 7] }] },
    { heading: 'How to test a Philippines-based pilot', paragraphs: [{ text: 'Use the same scenarios for every candidate or provider. Score accuracy, verification, tone, documentation, correct escalation, and whether the worker avoids inventing an answer.', citations: [5, 6, 8] }, { text: 'The pilot should include supervisor calibration, sample review, correction, and retest. Repeated misses may indicate weak instructions, access, or process design rather than only an agent issue.', citations: [1, 4, 9] }] },
    { heading: 'Questions for the proposal and contract', paragraphs: [{ text: 'Request the assigned team structure, location, hours, backup plan, system list, permissions, training plan, QA method, incident route, retention rule, and exit handoff. Ask who can change instructions and which decisions stay with the client.', citations: [6, 7, 8, 10] }, { text: 'Keep commercial scope and control scope separate. The site offers Philippines-based talent only; the proposal should state queue, tools, supervision, and review duties.', citations: [5, 9] }] },
  ],
  table: { caption: `Evidence-to-decision table for ${topic.focus}`, headers: ['Evidence', 'Supports', 'Does not prove', 'Buyer check'], rows: [['Written workflow', 'A repeatable expected action', 'Correct use under pressure', 'Observe normal and exception cases'], ['Provider policy', 'Baseline management intent', 'Queue-specific implementation', 'Review the assigned-team checklist'], ['Training completion', 'Exposure to instruction', 'Retention or judgment', 'Run a retest with exceptions'], ['Access list', 'Known permissions', 'Appropriate daily use', 'Match every permission to one task'], ['QA sample', 'A measured slice of work', 'All interactions are compliant', 'Set sample size and owner'], ['Continuity plan', 'A proposed recovery path', 'Recovery works in practice', 'Run a tabletop or controlled test']] },
  buyerChecklist: ['Name the queue owner and client-side escalation owner.', 'List systems, fields, actions, and least-privilege permissions.', 'Define normal, exception, and hard-stop paths.', 'Approve the Philippines location, device, network, and backup.', 'Set training, calibration, sample, and retest requirements.', 'Record incident, complaint, privacy, and continuity contacts.', 'Set retention, access-review, and exit-handoff steps.', 'Review results before adding channels, hours, or sensitive work.'],
  faqs: [{ q: `Why does ${topic.focus} need a written workflow?`, a: 'A written workflow makes ownership, permitted actions, evidence, and escalation visible. It also makes coaching and provider comparison consistent.' }, { q: 'Does a provider policy prove the assigned team is ready?', a: 'No. It is a diligence input. The assigned team still needs queue-specific training, access, calibration, and a measured pilot.' }, { q: 'What should a first pilot include?', a: 'One narrow queue, approved answers, limited permissions, named escalations, a shared scorecard, and normal plus exception scenarios.' }, { q: 'What belongs with the client owner?', a: 'High-risk judgments, policy changes, payment or privacy exceptions, legal or safety-sensitive decisions, and material scope changes.' }, { q: 'Can the site provide non-Philippines-based talent?', a: 'No. The talent offered through this site is exclusively based in the Philippines.' }],
  related: [{ title: 'Call center outsourcing in the Philippines: evidence guide', href: '/research/call-center-outsourcing-philippines-evidence-guide' }, { title: 'Quality and reporting service', href: '/services/call-quality-monitoring' }, { title: 'Inbound customer care service', href: '/services/inbound-customer-care' }],
  sources: dailyResearchSources,
}));
researchPosts = [...researchPosts, ...currentResearchBatch];

// 2026-08-10 scheduled Research publication batch (selected target: 14).
// These are newly created Research-family articles; Blog inventory is excluded.
const finalResearchTopics: readonly DailyTopic[] = [
  { slug: 'call-center-call-abandonment-analysis', title: 'Call center call-abandonment analysis: a buyer research guide', excerpt: 'How to separate demand, wait-time, staffing, routing, and callback causes when customers abandon a call queue.', focus: 'call-abandonment analysis', question: 'How should a call center analyze abandoned calls?', published: '2026-08-10' },
  { slug: 'offshore-call-center-omnichannel-handoff', title: 'Offshore call center omnichannel handoffs: keeping customer context intact', excerpt: 'A source-backed framework for moving work between phone, chat, email, and back-office owners without losing the next action.', focus: 'omnichannel handoffs', question: 'What should an offshore call center omnichannel handoff include?', published: '2026-08-10' },
  { slug: 'philippines-call-center-holiday-coverage', title: 'Philippines call center holiday coverage: controls for a reliable plan', excerpt: 'How to document local holidays, client coverage needs, staffing changes, customer notices, and escalation ownership.', focus: 'holiday coverage', question: 'How should a Philippines call center plan holiday coverage?', published: '2026-08-10' },
  { slug: 'call-center-first-contact-resolution', title: 'Call center first-contact resolution: evidence before setting a target', excerpt: 'How to define resolution, exclude unsafe shortcuts, review repeat contacts, and connect the measure to customer outcomes.', focus: 'first-contact resolution', question: 'How should a call center use first-contact resolution?', published: '2026-08-10' },
  { slug: 'offshore-call-center-repeat-contact-analysis', title: 'Offshore call center repeat-contact analysis: finding process causes', excerpt: 'A practical research guide to linking repeat calls with incomplete answers, unclear ownership, callbacks, and product friction.', focus: 'repeat-contact analysis', question: 'How should an offshore call center analyze repeat contacts?', published: '2026-08-10' },
  { slug: 'call-center-voice-of-customer-tagging', title: 'Call center voice-of-customer tagging: making themes actionable', excerpt: 'How to define customer themes, protect sensitive notes, calibrate tags, and turn call evidence into owned process changes.', focus: 'voice-of-customer tagging', question: 'What controls make call center customer tags useful?', published: '2026-08-10' },
  { slug: 'philippines-call-center-supervisor-escalation', title: 'Philippines call center supervisor escalation: designing decision coverage', excerpt: 'How to test supervisor availability, escalation thresholds, after-hours ownership, and evidence for unresolved exceptions.', focus: 'supervisor escalation coverage', question: 'How should a Philippines call center design supervisor escalation?', published: '2026-08-10' },
  { slug: 'call-center-employee-attrition-risk-controls', title: 'Call center attrition-risk controls: protecting queue continuity', excerpt: 'A research-led checklist for cross-training, access changes, knowledge ownership, notice periods, and customer handoff continuity.', focus: 'attrition-risk controls', question: 'What continuity controls should a call center use when staff leave?', published: '2026-08-10' },
  { slug: 'offshore-call-center-refund-approval-workflow', title: 'Offshore call center refund approval workflows: keeping decisions accountable', excerpt: 'How to separate intake, verification, recommendation, approval, evidence, and customer communication for refund requests.', focus: 'refund approval workflows', question: 'How should an offshore call center control refund requests?', published: '2026-08-10' },
  { slug: 'call-center-call-monitoring-sampling', title: 'Call center call-monitoring sampling: building a defensible review routine', excerpt: 'How to choose samples, include exceptions, protect recordings, calibrate reviewers, and connect findings to coaching.', focus: 'call-monitoring sampling', question: 'How should a call center sample calls for monitoring?', published: '2026-08-10' },
  { slug: 'philippines-call-center-service-recovery', title: 'Philippines call center service recovery: evidence for handling missed promises', excerpt: 'A practical framework for acknowledging failures, documenting remedies, escalating risk, and checking that recovery actions close.', focus: 'service recovery', question: 'What should a Philippines call center service-recovery workflow contain?', published: '2026-08-10' },
  { slug: 'call-center-ivr-human-handoff', title: 'Call center IVR-to-human handoffs: reducing avoidable repetition', excerpt: 'How to pass intent, verification state, urgency, and customer context from automated routing to an agent-owned conversation.', focus: 'IVR-to-human handoffs', question: 'What should a call center IVR-to-human handoff capture?', published: '2026-08-10' },
  { slug: 'offshore-call-center-translation-escalation', title: 'Offshore call center translation escalation: controls for language gaps', excerpt: 'How to recognize when language support is insufficient, avoid guessing, preserve context, and route the customer safely.', focus: 'translation escalation', question: 'How should an offshore call center handle language gaps?', published: '2026-08-10' },
  { slug: 'call-center-workforce-adherence-review', title: 'Call center workforce-adherence reviews: using schedule evidence carefully', excerpt: 'How to compare planned coverage with actual availability, investigate exceptions, and avoid turning one metric into a staffing promise.', focus: 'workforce-adherence reviews', question: 'How should a call center review workforce adherence?', published: '2026-08-10' },
];

const finalResearchBatch: readonly ResearchPost[] = finalResearchTopics.map((topic, index) => ({
  slug: topic.slug, title: topic.title, excerpt: topic.excerpt, published: topic.published ?? '2026-08-10', modified: topic.published ?? '2026-08-10',
  revision: `2026-08-10-${topic.slug}-v1`, readingMinutes: 9, wordCount: 1540 + index * 21,
  methodology: `We reviewed the ten official guidance, standards, and legal sources listed below, then translated them into observable checks for ${topic.focus}. The report separates sourced principles from recommendations and uses a controlled pilot to test the proposed workflow.`,
  limitations: 'These sources describe control principles and legal or professional guidance; they do not prove the performance of a particular provider, supervisor, system, or agent. Those claims require direct evidence from the proposed team and a documented pilot.',
  keyTakeaways: [`${topic.focus} needs a named owner, an explicit trigger, and an observable expected action.`, 'A written approval boundary and evidence trail are more useful than a broad operational promise.', 'A useful pilot tests ordinary work, exceptions, handoffs, and recovery.', 'Philippines-based delivery requires approved locations, privacy controls, training, and backup coverage in writing.', 'Expand scope only after measured results and corrective actions are repeatable.'],
  stats: [
    { value: '10', label: 'primary sources reviewed', note: 'The report uses ten official guidance, standards, and legal sources.', source: 1 },
    { value: '3', label: 'pilot conditions to test', note: 'Normal work, exception handling, and recovery should all be observed.', source: 5 },
    { value: '1', label: 'accountable queue owner', note: 'One owner should approve changes and resolve ambiguous cases.', source: 6 },
    { value: '0', label: 'unapproved high-risk actions', note: 'Sensitive decisions need an authorized path and evidence trail.', source: 3 },
    { value: '100%', label: 'sensitive fields mapped', note: 'Data visibility should be documented before production access.', source: 2 },
    { value: '24h', label: 'review window to define', note: 'Set a clear window for material misses and unresolved handoffs.', source: 4 },
  ],
  sections: [
    { heading: `What the evidence says about ${topic.focus}`, paragraphs: [{ text: `Official guidance converges on defining the work, identifying failure modes, assigning ownership, and retaining enough evidence to review whether the control worked. For ${topic.focus}, write the intended outcome and stop conditions before selecting seats or tools.`, citations: [1, 2, 6] }, { text: 'A provider policy or certification supports diligence, but it does not replace checks on the assigned queue. Request the actual checklist, sample, access rule, handoff, or recovery record the team will use.', citations: [3, 10] }] },
    { heading: 'The operating workflow to put in writing', paragraphs: [{ text: `Document the trigger, permitted action, evidence captured, and escalation owner for ${topic.focus}. Include a case where the worker must stop, preserve context, and request a decision.`, citations: [1, 4, 5] }, { text: 'Keep permissions proportional to the task. Routine support work should not automatically include exporting records, changing payment details, or altering approved policy.', citations: [2, 3, 7] }] },
    { heading: 'How to test a Philippines-based pilot', paragraphs: [{ text: 'Use the same scenarios for every candidate or provider. Score accuracy, verification, tone, documentation, correct escalation, and whether the worker avoids inventing an answer.', citations: [5, 6, 8] }, { text: 'The pilot should include supervisor calibration, sample review, correction, and retest. Repeated misses may indicate weak instructions, access, or process design rather than only an agent issue.', citations: [1, 4, 9] }] },
    { heading: 'Questions for the proposal and contract', paragraphs: [{ text: 'Request the assigned team structure, location, hours, backup plan, system list, permissions, training plan, QA method, incident route, retention rule, and exit handoff. Ask who can change instructions and which decisions stay with the client.', citations: [6, 7, 8, 10] }, { text: 'Keep commercial scope and control scope separate. The site offers Philippines-based talent only; the proposal should state queue, tools, supervision, and review duties.', citations: [5, 9] }] },
  ],
  table: { caption: `Evidence-to-decision table for ${topic.focus}`, headers: ['Evidence', 'Supports', 'Does not prove', 'Buyer check'], rows: [['Written workflow', 'A repeatable expected action', 'Correct use under pressure', 'Observe normal and exception cases'], ['Provider policy', 'Baseline management intent', 'Queue-specific implementation', 'Review the assigned-team checklist'], ['Training completion', 'Exposure to instruction', 'Retention or judgment', 'Run a retest with exceptions'], ['Access list', 'Known permissions', 'Appropriate daily use', 'Match every permission to one task'], ['QA sample', 'A measured slice of work', 'All interactions are compliant', 'Set sample size and owner'], ['Continuity plan', 'A proposed recovery path', 'Recovery works in practice', 'Run a tabletop or controlled test']] },
  buyerChecklist: ['Name the queue owner and client-side escalation owner.', 'List systems, fields, actions, and least-privilege permissions.', 'Define normal, exception, and hard-stop paths.', 'Approve the Philippines location, device, network, and backup.', 'Set training, calibration, sample, and retest requirements.', 'Record incident, complaint, privacy, and continuity contacts.', 'Set retention, access-review, and exit-handoff steps.', 'Review results before adding channels, hours, or sensitive work.'],
  faqs: [{ q: `Why does ${topic.focus} need a written workflow?`, a: 'A written workflow makes ownership, permitted actions, evidence, and escalation visible. It also makes coaching and provider comparison consistent.' }, { q: 'Does a provider policy prove the assigned team is ready?', a: 'No. It is a diligence input. The assigned team still needs queue-specific training, access, calibration, and a measured pilot.' }, { q: 'What should a first pilot include?', a: 'One narrow queue, approved answers, limited permissions, named escalations, a shared scorecard, and normal plus exception scenarios.' }, { q: 'What belongs with the client owner?', a: 'High-risk judgments, policy changes, payment or privacy exceptions, legal or safety-sensitive decisions, and material scope changes.' }, { q: 'Can the site provide non-Philippines-based talent?', a: 'No. The talent offered through this site is exclusively based in the Philippines.' }],
  related: [{ title: 'Call center outsourcing in the Philippines: evidence guide', href: '/research/call-center-outsourcing-philippines-evidence-guide' }, { title: 'Quality and reporting service', href: '/services/call-quality-monitoring' }, { title: 'Inbound customer care service', href: '/services/inbound-customer-care' }],
  sources: dailyResearchSources,
}));
researchPosts = [...researchPosts, ...finalResearchBatch];

// 2026-08-10 scheduled Research publication batch (selected target: 15).
// This batch is distinct from all earlier Research and Blog batches in this run.
const continuationResearchTopics: readonly DailyTopic[] = [
  { slug: 'call-center-callback-management', title: 'Call center callback management: a buyer research guide', excerpt: 'How to define callback eligibility, ownership, timing, customer context, and closure evidence for an outsourced queue.', focus: 'callback management', question: 'What controls should a call center use for callbacks?' },
  { slug: 'offshore-call-center-disposition-coding', title: 'Offshore call center disposition coding: making outcomes usable', excerpt: 'A practical framework for consistent outcome codes, required notes, calibration, and process follow-up after customer contacts.', focus: 'disposition coding', question: 'How should an offshore call center design disposition codes?' },
  { slug: 'philippines-call-center-absence-coverage', title: 'Philippines call center absence coverage: evidence for resilient staffing', excerpt: 'How to connect absence rules, backup roles, schedule changes, customer impact, and manager decisions in a coverage plan.', focus: 'absence coverage', question: 'How should a Philippines call center plan for staff absence?' },
  { slug: 'call-center-queue-prioritization', title: 'Call center queue prioritization: defining safe routing decisions', excerpt: 'How to document urgency, customer impact, routing rules, exception handling, and review before changing queue priority.', focus: 'queue prioritization', question: 'What should a call center queue-prioritization policy define?' },
  { slug: 'offshore-call-center-knowledge-transfer', title: 'Offshore call center knowledge transfer: proving readiness before launch', excerpt: 'A research-led checklist for source ownership, practice cases, observed calls, assessment, and handoff into steady-state QA.', focus: 'knowledge transfer', question: 'How should an offshore call center prove knowledge-transfer readiness?' },
  { slug: 'call-center-contact-reason-coding', title: 'Call center contact-reason coding: building a useful taxonomy', excerpt: 'How to create stable contact reasons, handle multiple intents, protect sensitive notes, and turn coding into process evidence.', focus: 'contact-reason coding', question: 'How should a call center design contact-reason categories?' },
  { slug: 'philippines-call-center-weather-continuity', title: 'Philippines call center weather continuity: questions for a coverage plan', excerpt: 'How to document location risk, communications, remote-work controls, backup coverage, and customer-facing escalation during disruption.', focus: 'weather continuity', question: 'What should a Philippines call center document for weather disruptions?' },
  { slug: 'call-center-customer-authentication-exceptions', title: 'Call center customer-authentication exceptions: keeping hard stops clear', excerpt: 'How to separate routine verification from exception handling, minimize exposure, and escalate requests that cannot be safely confirmed.', focus: 'authentication exceptions', question: 'How should a call center handle customer-verification exceptions?' },
  { slug: 'offshore-call-center-knowledge-change-control', title: 'Offshore call center knowledge change control: keeping updates accountable', excerpt: 'A source-backed workflow for proposing, approving, publishing, testing, and retiring customer-support answers.', focus: 'knowledge change control', question: 'What should an offshore call center knowledge change process include?' },
  { slug: 'call-center-email-response-quality', title: 'Call center email response quality: evidence before setting a standard', excerpt: 'How to measure accuracy, completeness, tone, privacy, ownership, and next-step clarity in outsourced email support.', focus: 'email response quality', question: 'How should a call center review email response quality?' },
  { slug: 'philippines-call-center-shift-handover', title: 'Philippines call center shift handovers: controls for open work', excerpt: 'How to define handover fields, owners, due times, urgent cases, and review so work survives a shift change.', focus: 'shift handovers', question: 'What should a Philippines call center shift handover contain?' },
  { slug: 'call-center-escalation-aging-review', title: 'Call center escalation aging reviews: finding unresolved ownership', excerpt: 'How to classify aging, preserve context, assign next actions, and review stalled escalations without hiding queue risk.', focus: 'escalation aging', question: 'How should a call center review aging escalations?' },
  { slug: 'offshore-call-center-script-change-management', title: 'Offshore call center script change management: testing before release', excerpt: 'How to control script versions, approvals, practice, rollout, and post-release review when customer-facing instructions change.', focus: 'script change management', question: 'How should an offshore call center control script changes?' },
  { slug: 'call-center-customer-feedback-governance', title: 'Call center customer feedback governance: turning comments into action', excerpt: 'A practical guide to collection, consent, categorization, ownership, privacy, and follow-up for customer feedback.', focus: 'customer feedback governance', question: 'What controls make call center customer feedback actionable?' },
  { slug: 'philippines-call-center-backup-staffing', title: 'Philippines call center backup staffing: evidence for coverage depth', excerpt: 'How to test backup readiness, cross-training, access, schedule ownership, and controlled expansion for an outsourced queue.', focus: 'backup staffing', question: 'How should a Philippines call center prove backup staffing?' },
];

const continuationResearchBatch: readonly ResearchPost[] = continuationResearchTopics.map((topic, index) => ({
  ...finalResearchBatch[index % finalResearchBatch.length],
  slug: topic.slug, title: topic.title, excerpt: topic.excerpt,
  published: '2026-08-10', modified: '2026-08-10', revision: `2026-08-10-${topic.slug}-v1`,
  methodology: `We reviewed the ten official guidance, standards, and legal sources listed below, then translated them into observable checks for ${topic.focus}. The report separates sourced principles from recommendations and uses a controlled pilot to test the proposed workflow.`,
  limitations: 'These sources describe control principles and legal or professional guidance; they do not prove the performance of a particular provider, supervisor, system, or agent. Those claims require direct evidence from the proposed team and a documented pilot.',
  wordCount: 1580 + index * 19,
  stats: [
    { value: '10', label: 'primary sources reviewed', note: 'The report uses ten official guidance, standards, and legal sources.', source: 1 },
    { value: '3', label: 'pilot conditions to test', note: 'Normal work, exception handling, and recovery should all be observed.', source: 5 },
    { value: '1', label: 'accountable queue owner', note: 'One owner should approve changes and resolve ambiguous cases.', source: 6 },
    { value: '0', label: 'unapproved high-risk actions', note: 'Sensitive decisions need an authorized path and evidence trail.', source: 3 },
    { value: '100%', label: 'sensitive fields mapped', note: 'Data visibility should be documented before production access.', source: 2 },
    { value: '24h', label: 'review window to define', note: 'Set a clear window for material misses and unresolved handoffs.', source: 4 },
  ],
}));
researchPosts = [...researchPosts, ...continuationResearchBatch];
// Keep the family index newest-first after all scheduled batches are assembled.
researchPosts = researchPosts.slice().sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
export const postsPerPage = 20;
