import type {ResearchPost} from './fleet-data';

const sources: ResearchPost['sources'] = [
  {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework',note:'Primary framework for governance, protection, response, and recovery controls.',kind:'Global comparison'},
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework',note:'Primary framework for identifying and managing privacy risk.',kind:'Global comparison'},
  {name:'Republic Act No. 10173, Data Privacy Act of 2012',url:'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',note:'Official Philippine statutory text used for operational context, not legal advice.',kind:'Philippines'},
  {name:'National Privacy Commission Philippines',url:'https://privacy.gov.ph/',note:'Official regulator guidance on privacy accountability and data protection.',kind:'Philippines'},
  {name:'ISO 18295-1:2017 overview',url:'https://www.iso.org/standard/64739.html',note:'International contact-centre requirements used as a comparison point.',kind:'Global comparison'},
];

type Study={slug:string;title:string;excerpt:string;question:string;unit:string;evidence:string;groups:string;finding:string;pilot:string;limitations:string;takeaways:readonly string[]};

function makeStudy(s:Study):ResearchPost {
  const sections=[
    {heading:'Question and scope',text:`${s.question} The unit of analysis is ${s.unit}. This September 8, 2026 report describes a bounded record review for a Philippines-based support operation. It does not publish a provider benchmark or claim that one workflow caused an outcome.`},
    {heading:'Method',text:`Select a defined queue and review period before sampling. Preserve ${s.evidence}. Reconstruct the sequence from the source records. Mark missing fields as missing instead of inferring a favorable event. Have a second reviewer examine borderline cases and record disagreements.`},
    {heading:'Comparison groups',text:`Compare ${s.groups}. Keep channel, shift, request type, source version, and client-authority needs visible. Each count must link back to a case. A fast completion can hide an open promise, while a longer case may reflect a correct stop for approval.`},
    {heading:'Scope, privacy, and authority',text:'Use only the operational data needed for the review and limit access to authorized reviewers. The Philippine statute and regulator materials listed below provide context, not a legal opinion. The designated client or specialist owner retains decisions about disclosure, payment, safety, retention, and exceptions.'},
    {heading:'Finding and pilot',text:`The limited finding is that ${s.finding} A practical pilot is to ${s.pilot}. Change one control, retain the same definitions, and repeat the sample. Keep contrary examples and exclusions with the result.`},
    {heading:'Limitations',text:`${s.limitations} This design cannot establish causation, legal compliance, customer satisfaction, financial impact, staffing adequacy, or provider-wide quality. Results depend on the chosen queues, period, definitions, and completeness of the records.`},
  ];
  const wordCount=sections.map(x=>x.text).join(' ').split(/\s+/).length;
  return {slug:s.slug,title:s.title,excerpt:s.excerpt,hero:'/offshore-call-center-agent.jpg',published:'2026-09-08',modified:'2026-09-08',revision:`2026-09-08-${s.slug}-v1`,readingMinutes:8,wordCount,
    methodology:`A bounded record comparison using ${s.unit}, explicit cohorts, counterexamples, a second review of borderline cases, and five named primary or standards sources.`,limitations:s.limitations,keyTakeaways:s.takeaways,stats:[],
    sections:sections.map((section,index)=>({heading:section.heading,paragraphs:[{text:section.text,citations:index===3?[2,3,4]:index===2?[1,5]:[1,2,5]}]})),
    table:{caption:'Evidence and decision boundary',headers:['Record element','What it supports','What it cannot prove','Review action'],rows:[
      [s.evidence.split(',')[0],'Case identification','Correct outcome','Read the source record'],['Accepted owner','Visible accountability','Adequate staffing','Compare acknowledgement'],['Recorded exception','A departure from routine','Legal compliance','Validate authority and scope'],
    ]},
    buyerChecklist:['Define the event and eligible cases.','Preserve source, time, owner, and customer promise.','Sample routine cases and exceptions.','Keep missing evidence and exclusions visible.','Change one control and repeat the review.'],
    faqs:[{q:`What does this report establish about ${s.title.toLowerCase()}?`,a:'It supplies a bounded study design and a management test. It is not a benchmark, legal conclusion, or provider guarantee.'},{q:'Who owns decisions outside the frontline workflow?',a:'The authorized client or specialist owner retains those decisions.'}],
    related:[{title:'Research library',href:'/research'},{title:'Call quality monitoring',href:'/services/call-quality-monitoring'}],sources};
}

export const september8ResearchBatch: readonly ResearchPost[]=[
  makeStudy({
    slug:'offshore-call-center-callback-number-error-study',title:'Callback number errors in offshore call centers: a record-review method',excerpt:'A bounded study of customer-selected numbers, read-backs, wrong-party contact, and callback outcomes.',
    question:'Which record signals separate a bad callback number from a failed identity check or an unanswered call?',unit:'one promised callback from number capture through the first completed or failed attempt',
    evidence:'customer-selected number, read-back result, number type, contact window, voicemail permission, attempt time, answer outcome, identity check, and next owner',
    groups:'customer-confirmed numbers, caller-ID numbers, existing account numbers, wrong-party answers, unanswered attempts, and callbacks completed after identity verification',
    finding:'a ringing or answered phone does not prove that the number was customer-selected or that the person reached was authorized.',pilot:'require a number read-back and voicemail preference in one callback queue, then compare wrong-party and failed-contact records',
    limitations:'Telephony logs may mask forwarded calls, shared phones, or number changes, and the review cannot determine who heard an unrecorded voicemail.',takeaways:['Separate number capture from identity verification.','Preserve the customer\'s contact choice.','Review wrong-party events independently from no answers.'],
  }),
  makeStudy({
    slug:'call-center-policy-version-use-study',title:'Policy-version use in call centers: tracing answers to the source in force',excerpt:'A study design for comparing request dates, source versions, retired articles, and approval stops.',
    question:'How often can a frontline answer be traced to the policy version that applied to the recorded request?',unit:'one policy-dependent customer answer from initial search through the stated decision',
    evidence:'request date, market or product context, search terms, source identifier, version, effective date, replacement notice, answer, exception request, and owner',
    groups:'current-source answers, retired-source answers, effective-date boundary cases, conflicting sources, approved exceptions, and cases with no cited source',
    finding:'an answer that matches familiar wording may still rely on a retired source or ignore an effective-date boundary.',pilot:'display version and effective date in one high-use knowledge workflow and sample citations before and after the change',
    limitations:'Case notes may omit sources that agents actually consulted, and a current source does not by itself prove correct interpretation.',takeaways:['Link the answer to a named source version.','Keep effective-date cases separate.','Route source conflicts to the content owner.'],
  }),
  makeStudy({
    slug:'philippines-call-center-cross-midnight-callback-study',title:'Cross-midnight callback promises in Philippine call centers: a timing study',excerpt:'A method for reconstructing dates and time zones when customer promises cross a Philippine shift boundary.',
    question:'Which time-recording choices appear in early, late, or disputed callbacks near a date boundary?',unit:'one promised callback within three hours of midnight in either the customer or Philippine queue time',
    evidence:'customer-stated date, customer time, named zone, queue date and time, daylight rule, read-back wording, assigned shift, attempt time, and result',
    groups:'dual-time records, relative-date wording, inferred zones, daylight transitions, cross-shift handoffs, in-window attempts, and missed windows',
    finding:'relative words such as tomorrow and tonight cannot identify one calendar date when the customer and queue are on different days.',pilot:'show both calendar dates and require a named-zone read-back for one cross-shift callback flow',
    limitations:'The record may not capture customer travel or later preference changes, and a timely attempt does not prove successful contact.',takeaways:['Record both calendar dates.','Use a named time zone rather than location inference.','Trace misses to capture, conversion, and handoff separately.'],
  }),
  makeStudy({
    slug:'call-center-supervisor-approval-scope-study',title:'Supervisor approval scope in call centers: a case-record study',excerpt:'A bounded comparison of specific requests, decision limits, changed facts, and completed frontline actions.',
    question:'Do recorded supervisor approvals clearly cover the action the agent later completed?',unit:'one frontline request for supervisor authority through the final customer or account action',
    evidence:'proposed action, relevant facts, policy boundary, approver identity, decision time, amount or channel limit, changed facts, completed action, and audit trail',
    groups:'specific approvals, ambiguous chat reactions, denied requests, conditional approvals, changed-fact cases, repeated requests, and actions outside the recorded limit',
    finding:'approval presence is a weak control when the request, limits, and completed action cannot be compared from the case record.',pilot:'use a structured approval note for one exception type and have two reviewers classify whether final actions stayed in scope',
    limitations:'The study may not capture verbal approvals or authority changes outside the case system, and it cannot decide whether the underlying policy is lawful or appropriate.',takeaways:['Tie approval to one specific request.','Record conditions and authority.','Seek a new decision when material facts change.'],
  }),
  makeStudy({
    slug:'offshore-call-center-silent-chat-closure-study',title:'Silent chat closure in offshore call centers: session end versus case resolution',excerpt:'A record study of warning messages, wait periods, unresolved requests, reopen events, and retained ownership.',
    question:'When a customer stops responding, does chat closure preserve any work that remains open?',unit:'one chat closed after customer silence through a return contact or the end of the review window',
    evidence:'last customer message, open question, warning wording, warning time, wait period, closure code, unresolved work, surviving promise, return contact, and owner',
    groups:'completed requests, abandoned chats with no open action, unresolved cases carried forward, premature closures, repeat contacts, and protected workflows requiring escalation',
    finding:'a closed chat session does not establish that the customer request was resolved or that an accepted promise ended.',pilot:'separate session status from case status in one chat queue and review reopened contacts against the original notes',
    limitations:'A customer may return through another channel or identity, and the observation window may miss later contact.',takeaways:['Separate chat closure from case resolution.','Preserve the last open question and owner.','Review repeat contacts with the original session.'],
  }),
];
