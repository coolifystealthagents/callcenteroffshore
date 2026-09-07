export type September7BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  focus: string;
  question: string;
  published: '2026-09-07';
  modified: '2026-09-07';
  body: readonly string[];
};

const post = (slug: string, title: string, excerpt: string, focus: string, question: string, body: readonly string[]): September7BlogPost => ({
  slug, title, excerpt, minutes: 9, focus, question, published: '2026-09-07', modified: '2026-09-07', body,
});

export const september7BlogPosts: readonly September7BlogPost[] = [
  post('offshore-call-center-queue-reopen-reasons', 'Why offshore call center queues reopen, and what to record when they do', 'Use specific reopen reasons to separate unfinished work from new customer needs and system errors.', 'queue reopen reasons', 'What should an offshore call center record when a closed case reopens?', [
    'A reopened ticket can mean several different things. The customer may have returned with the same unresolved request, raised a new question, or replied after the system closed a waiting case. Treating all three as a quality failure makes the report less useful and often sends coaching in the wrong direction.',
    'Give the representative a short set of reasons that describe what actually happened. Useful fields include the earlier resolution, the customer\'s new message, any promise that remained open, the source checked, and the current owner. Let the agent explain an unusual case instead of forcing it into the nearest label.',
    'The receiving queue should decide whether the work continues under the old commitment or needs a separate case. Linking related records can preserve context, but the link must not hide two independent deadlines. Keep both owners visible until each request has an accepted next action.',
    'Review reopen reasons with the underlying conversations. A high count may expose unclear closure wording, an automation rule, a missing specialist response, or a genuinely new request. Fix the control supported by the records, then check the same reason codes again after the change.',
  ]),
  post('call-center-payment-link-verification', 'Call center payment-link checks before an agent sends anything', 'Confirm the approved source, destination, and customer request before sharing a payment link.', 'payment-link verification', 'How should a call center verify a payment link before sending it?', [
    'A familiar-looking URL is not enough. Before an agent sends a payment link, the workflow should identify the approved system that creates it, the customer request it answers, and the account or order context the agent is allowed to use. Saved links in chat history should not become an unofficial template library.',
    'The record needs the link source, generation time, permitted delivery channel, destination confirmed by the customer, and the action expected after payment. Agents should never ask a customer to share a password, one-time code, or full payment credential to prove that a link worked.',
    'If the approved tool is unavailable, the agent should explain the delay and route the request to the payment owner. A temporary outage does not authorize a personal payment account, shortened URL, copied link from another case, or a promise that funds have arrived.',
    'Sample sent links for source, destination, expiry, and case match. Include failed and abandoned attempts, not just completed payments. The review should tell managers whether the problem sits in the approved tool, the instructions, customer contact data, or the handoff to finance.',
  ]),
  post('philippines-call-center-storm-shift-check-in', 'Philippines call center storm check-ins that protect people and open queues', 'Set a practical check-in and handoff routine when severe weather disrupts a Philippine shift.', 'storm shift check-ins', 'How should a Philippines call center manage shift check-ins during severe weather?', [
    'A weather check-in should answer two separate questions: whether each person is safe and whether each customer queue has usable coverage. Attendance pressure can make people minimize a local hazard, so supervisors need a clear way to report safety or connectivity problems without negotiating them in a public channel.',
    'Before the shift, publish the check-in time, approved channel, backup contact, and the point when unconfirmed work moves to another queue. List callbacks, live conversations, appointments, and restricted decisions that cannot wait for the normal handoff.',
    'Supervisors should record who accepted each moved item and what the customer was told. A staffing dashboard may show an agent as logged in while power, audio, or access is unstable. Test the actual work path before counting that seat as available coverage.',
    'After the event, compare the plan with what happened. Note delayed check-ins, failed tools, customer promises at risk, backup use, and work that had no receiver. The review is for repairing the continuity routine, not penalizing an employee for conditions outside their control.',
  ]),
  post('offshore-call-center-customer-time-zone-capture', 'Offshore call center time-zone capture for callbacks customers can actually receive', 'Record a usable local callback window without guessing from an address or phone number.', 'customer time-zone capture', 'How should an offshore call center capture a customer time zone for callbacks?', [
    'A phone prefix or billing address can point to the wrong local time. Customers travel, keep old numbers, and manage services in other regions. Ask for the time zone or local callback window when timing matters, then read it back with the date so daylight and midnight boundaries are clear.',
    'The case should show the customer\'s wording, the normalized time zone, the corresponding queue time, channel permission, and the owner of the attempt. If the system stores only one clock, put both local times in the visible callback note rather than expecting the next shift to calculate them from memory.',
    'Do not turn a preferred window into a guaranteed appointment unless the queue can honor that promise. When the requested time sits outside coverage, offer an approved alternative or route it to the scheduling owner. Keep the unmet preference in the record.',
    'Review early, late, and missed callbacks by the time-zone field used at booking. Read a sample around daylight changes and cross-date handoffs. Those cases reveal whether the form, agent wording, or scheduling conversion needs attention.',
  ]),
  post('call-center-shared-inbox-collision', 'Call center shared-inbox collisions when two agents answer the same customer', 'Prevent duplicate replies by making claim, draft, send, and release states visible.', 'shared-inbox collisions', 'How can a call center prevent two agents from answering the same shared-inbox message?', [
    'Two agents can open the same message before either one sends. A simple assignment rule needs visible states for claimed, drafting, waiting, sent, and released work. The claim should expire or return to the queue when the owner goes offline so a half-written response does not strand the customer.',
    'Before sending, the agent should refresh the conversation and check for a newer reply, internal note, or status change. The case record needs the customer\'s current question, completed checks, proposed answer source, next promise, and any decision still waiting on another owner.',
    'When duplicate messages do go out, acknowledge the confusion and identify the valid instruction. Do not quietly delete one reply or make the customer guess which answer applies. If the messages conflict, stop the affected action and escalate the correction.',
    'Track collisions by queue, overlap period, claim state, and tool behavior. Read the cases rather than blaming whichever agent sent second. The useful fix may be a shorter claim timeout, clearer ownership, a refresh prompt, or a system change.',
  ]),
  post('offshore-call-center-sensitive-screen-share', 'Offshore call center screen-share boundaries for sensitive customer records', 'Limit what agents display, capture, and discuss when a support session includes screen sharing.', 'sensitive screen sharing', 'What boundaries should an offshore call center set for customer screen sharing?', [
    'Screen sharing can expose far more than the support request. Notifications, browser tabs, passwords, payment details, and other people\'s records may appear without warning. The agent should explain the narrow purpose and ask the customer to close unrelated material before the session begins.',
    'The workflow should specify whether the agent may view only, request control, capture an image, or record the session. Those are separate permissions. A customer agreeing to share a screen has not automatically agreed to a recording or to the storage of a screenshot.',
    'If restricted information appears, the agent should pause the task, tell the customer what to hide, and follow the approved incident route when exposure may have been recorded. Notes should describe the event without copying the sensitive value into another system.',
    'Quality review should inspect consent wording, session purpose, controls used, unexpected exposure, and evidence retention. A clean audit is not a collection of screenshots. It is a record that shows the minimum access needed for the support task.',
  ]),
  post('call-center-translation-request-handoff', 'Call center translation-request handoffs without losing the customer\'s meaning', 'Preserve the original request, confirmed facts, and open questions when language support changes.', 'translation-request handoffs', 'How should a call center hand off a customer request for translation support?', [
    'The first agent should preserve the customer\'s original words when a detail affects identity, quantity, date, consent, or a service decision. A rough summary can help route the case, but it should not replace material wording that the language-qualified receiver needs to evaluate.',
    'Record the requested language, channel, confirmed facts, unresolved phrases, urgency basis, and customer promise. Avoid labels such as difficult accent or poor English. Describe the specific part that could not be confirmed and the action waiting on it.',
    'The receiving agent should acknowledge the handoff and confirm the open question with the customer. Do not treat translation support as permission to change policy or make an exception. The normal privacy, verification, and approval boundaries still apply.',
    'Review whether the customer repeated information, whether material details changed, and how long acceptance took. Separate language availability from routing errors and from cases where the original request was ambiguous in any language.',
  ]),
  post('offshore-call-center-knowledge-search-zero-results', 'What an offshore call center agent should do when knowledge search returns nothing', 'Create a safe stop and escalation path for zero-result searches instead of rewarding guesswork.', 'zero-result knowledge searches', 'What should an offshore call center agent do when knowledge search returns no results?', [
    'A zero-result search is an operational signal, not permission to improvise. The agent should try the approved customer terms, product terms, and request category, then record the question and searches used. Repeating random keywords wastes time and makes the knowledge gap harder to diagnose.',
    'If no approved answer appears, give the customer the agreed interim message and route the question to the named content or policy owner. The handoff needs the exact decision requested, the source areas checked, the customer promise, and the deadline for an answer.',
    'An old email, personal note, or search-engine result should not become policy because the knowledge base is silent. The source owner may confirm an existing answer, publish a new one, or state that the request needs specialist review.',
    'Review zero-result records by customer wording and eventual answer. Group close variants only after someone reads them. A useful fix may be a synonym, clearer title, repaired access, retired duplicate, or a genuinely new article.',
  ]),
  post('call-center-customer-name-pronunciation-note', 'Call center pronunciation notes that respect the customer and protect the record', 'Capture a customer\'s preferred pronunciation without turning an interaction note into a personal label.', 'customer name pronunciation notes', 'How should a call center record a customer\'s preferred name pronunciation?', [
    'If a name is unclear, ask the customer how they would like it pronounced. A short phonetic cue can help the next agent, but the customer\'s actual name remains the source record. Do not replace it with a nickname or an agent\'s guess about language or origin.',
    'Keep the note factual and limited to the service need. Record the customer\'s preference, the pronunciation cue they gave, and where the system displays it. Avoid jokes, comparisons, or subjective comments about whether a name is easy or unusual.',
    'Check whether the field is visible in outbound calls and whether the customer can correct or remove it. When the tool lacks a suitable field, follow the approved note location rather than spreading the detail across several private files.',
    'During quality review, listen for respectful confirmation and accurate use. A pronunciation note is helpful only when agents can find it and when it does not expose unrelated personal inference.',
  ]),
  post('philippines-call-center-client-holiday-calendar', 'A shared holiday calendar for Philippine teams and overseas call center clients', 'Map Philippine and client holidays to real coverage, approval windows, and customer promises.', 'shared holiday calendars', 'What should a shared holiday calendar include for Philippine and overseas call center teams?', [
    'A list of holiday names does not show whether a customer queue is open. The shared calendar should show the date in both locations, affected service hours, expected staffing, client decision coverage, and the owner who approved each exception.',
    'Add the promises that can cross the closure: callbacks, appointments, complaints, payment questions, and cases waiting for specialist authority. Give each an acceptance deadline and backup route before the reduced schedule starts.',
    'Publish one controlled version where agents can see changes. A calendar invite, workforce schedule, and client email may disagree after an update. Record the effective time and tell supervisors which source controls the customer message.',
    'After each holiday, compare the calendar with arrivals, unresolved work, missed commitments, and backup use. Keep local holidays and client holidays distinct in the analysis so the next plan addresses the actual gap.',
  ]),
  post('offshore-call-center-escalation-attachment-check', 'Offshore call center attachment checks before an escalation leaves the queue', 'Send the evidence a specialist needs while excluding unrelated customer data.', 'escalation attachment checks', 'What should an offshore call center check before attaching files to an escalation?', [
    'An attachment should answer a named question. Before sending it, the agent should confirm the file belongs to the correct case, opens successfully, uses the approved version, and contains only information the receiving owner needs. A convenient full export often carries unrelated customer data.',
    'The escalation record needs the requested decision, a description of each file, its source, capture time, permitted receiver, and any redaction performed under the approved process. Passwords and access codes belong in the designated secure channel, not beside the attachment.',
    'If the evidence cannot be shared safely, tell the specialist where the authorized source record sits and what access is required. Do not move the file to a personal drive or consumer messaging account to bypass a permission problem.',
    'Sample escalations for file relevance, case match, access, and acknowledgement. Include rejected and missing attachments. Those failures show whether the intake checklist, permissions, file naming, or receiver instructions need repair.',
  ]),
  post('call-center-after-hours-urgent-label', 'Call center after-hours urgent labels with a real response path', 'Define urgency by customer impact and connect each label to a reachable owner.', 'after-hours urgent labels', 'How should a call center define and route urgent work after hours?', [
    'Urgent should describe a consequence and a response route, not an agent\'s anxiety or a customer\'s volume. Define the events covered for each queue, the facts needed to apply the label, and the owner who is actually reachable during the stated period.',
    'The case should show the customer impact, time detected, verification completed, safe interim action, contact attempts, accepted owner, and next update. A red flag without those details can make serious work slower because the receiver has to rebuild the request.',
    'If the on-call owner does not acknowledge the case, use a timed backup path and keep the original commitment visible. Frontline agents should not invent a technical, financial, legal, or safety decision because an escalation contact is unavailable.',
    'Review urgent labels against the underlying records. Track false alarms, missed qualifying events, acknowledgement time, backup use, and customer updates. Adjust the definition when evidence shows it is too broad or too narrow.',
  ]),
];
