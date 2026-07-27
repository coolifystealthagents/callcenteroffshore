from pathlib import Path

path = Path(__file__).resolve().parents[1] / 'app' / 'fleet-data.ts'
text = path.read_text()
marker = '// Add reviewed, source-backed original research here.'
suffix = text[text.index(marker):]
prefix = r'''export type FleetService = {
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
    controls: ['Approved audience and message library', 'Consent and do-not-contact rules', 'No invented claims or pricing promises'],
    firstWeek: ['Define the ideal prospect and disqualifiers', 'Review sample messages and calls', 'Launch a small list with daily checks'],
    deliverables: ['Clean lead list', 'Outreach log', 'Qualification notes', 'Booked meetings'], tools: ['CRM', 'Email', 'Calendar', 'Prospecting tools']
  },
  {
    slug: 'customer-retention-support', title: 'Customer Success Assistants', category: 'Customer experience', eyebrow: 'Onboarding, check-ins, and renewal support',
    desc: 'Add a Philippines-based customer success assistant for onboarding reminders, routine check-ins, account notes, and early risk flags.',
    outcome: 'Customers get steady attention while account owners focus on decisions, renewals, and sensitive conversations.', image: '/visuals/role-customer-support.svg',
    tasks: ['Track onboarding milestones', 'Send approved check-ins and resource links', 'Flag usage, satisfaction, and renewal risks'],
    controls: ['Account owner keeps pricing and contract decisions', 'Approved health signals and escalation rules', 'Recorded customer notes and next steps'],
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

'''
path.write_text(prefix + suffix)
print('updated fleet service data')
