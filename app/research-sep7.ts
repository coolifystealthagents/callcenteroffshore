import type {ResearchPost} from './fleet-data';

const sources: ResearchPost['sources'] = [
  {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework',note:'Primary framework for governance, protection, response, and recovery controls.',kind:'Global comparison'},
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework',note:'Primary framework for identifying and managing privacy risk.',kind:'Global comparison'},
  {name:'Republic Act No. 10173, Data Privacy Act of 2012',url:'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html',note:'Official Philippine statutory text used for operational context, not legal advice.',kind:'Philippines'},
  {name:'National Privacy Commission Philippines',url:'https://privacy.gov.ph/',note:'Official regulator guidance on privacy accountability and data protection.',kind:'Philippines'},
  {name:'ISO 18295-1:2017 overview',url:'https://www.iso.org/standard/64739.html',note:'International contact-centre requirements used as a comparison point.',kind:'Global comparison'},
];

type Study = {
  slug:string; title:string; excerpt:string; question:string; unit:string; evidence:string;
  groups:string; finding:string; pilot:string; limitations:string; takeaways:readonly string[];
};

function makeStudy(s: Study): ResearchPost {
  const sections = [
    {heading:'Question and evidence boundary', text:`${s.question} The unit of analysis is ${s.unit}. This September 7, 2026 report sets out a record-review method for a Philippines-based support operation. It does not report a provider benchmark or claim that the proposed pattern caused an outcome.`},
    {heading:'How to reconstruct each case', text:`Reviewers should preserve ${s.evidence}. Reconstruct what the customer requested, what the representative could verify, which instruction applied, and who accepted the next action. When a field is missing, record the gap. Do not fill it with a favorable assumption.`},
    {heading:'Comparison groups', text:`Compare ${s.groups}. Keep channel, shift, request type, source version, and client-authority needs visible. Counts should lead back to the individual records. A quick close can conceal an unresolved promise, while a longer case may reflect a careful and appropriate stop.`},
    {heading:'Privacy and authority', text:'Use only the operational information needed for the review and restrict the sample to authorized reviewers. The Philippine law and regulator materials in the source list provide context, not a legal opinion. Account, payment, disclosure, retention, safety, and exception decisions remain with the designated client or specialist owner.'},
    {heading:'Finding and limited pilot', text:`The narrow finding is that ${s.finding} A defensible next step is to ${s.pilot}. Change one control, retain the same definitions, and repeat the review. Record contrary examples and exclusions beside the result.`},
    {heading:'Limitations', text:`${s.limitations} The design cannot establish causation, legal compliance, customer satisfaction, financial impact, staffing adequacy, or provider-wide quality. Results depend on the selected queues, period, definitions, and completeness of the underlying records.`},
  ];
  const wordCount = sections.map(x=>x.text).join(' ').split(/\s+/).length;
  return {
    slug:s.slug,title:s.title,excerpt:s.excerpt,hero:'/offshore-call-center-agent.jpg',published:'2026-09-07',modified:'2026-09-07',
    revision:`2026-09-07-${s.slug}-v1`,readingMinutes:8,wordCount,
    methodology:`A bounded record comparison using ${s.unit}, explicit cohorts, counterexamples, and five named primary or standards sources.`,
    limitations:s.limitations,keyTakeaways:s.takeaways,stats:[],
    sections:sections.map((section,index)=>({heading:section.heading,paragraphs:[{text:section.text,citations:index===3?[2,3,4]:index===2?[1,5]:[1,2,5]}]})),
    table:{caption:'Evidence and decision boundary',headers:['Record element','What it supports','What it cannot prove','Review action'],rows:[
      [s.evidence.split(',')[0],'Case identification','Correct outcome','Read the source record'],
      ['Accepted owner','Visible accountability','Adequate staffing','Compare acknowledgement'],
      ['Recorded stop','Authority boundary','Legal compliance','Validate with the owner'],
    ]},
    buyerChecklist:['Define the event and eligible cases.','Preserve source, time, owner, and customer promise.','Sample routine cases and exceptions.','Keep missing evidence and exclusions visible.','Change one control and repeat the review.'],
    faqs:[
      {q:`What does this report establish about ${s.title.toLowerCase()}?`,a:'It provides a bounded study design and a management test. It is not a benchmark, legal conclusion, or provider guarantee.'},
      {q:'Who owns decisions outside the frontline workflow?',a:'The authorized client or specialist owner retains those decisions.'},
    ],
    related:[{title:'Research library',href:'/research'},{title:'Call quality monitoring',href:'/services/call-quality-monitoring'}],sources,
  };
}

export const september7ResearchBatch: readonly ResearchPost[] = [
  makeStudy({
    slug:'call-center-shared-inbox-collision-research',
    title:'Shared-inbox collisions in call centers: a record study of duplicate replies',
    excerpt:'A bounded method for separating tool overlap, stale views, claim failures, and genuinely separate customer requests.',
    question:'Which record signals explain why two representatives answer the same conversation?',
    unit:'one customer conversation from first open through the final accepted reply',
    evidence:'message identifier, open times, claim state, drafts, refresh events, sent replies, customer response, correction, and final owner',
    groups:'single-owner conversations, overlapping opens without duplicate sends, duplicate consistent replies, conflicting replies, and newly separated requests',
    finding:'a duplicate reply count alone cannot distinguish agent error from stale system state, an expired claim, or a second valid request.',
    pilot:'test a visible claim state and pre-send refresh prompt in one shared inbox',
    limitations:'System logs may omit local drafts or delayed synchronization, and customer replies may arrive through a different channel.',
    takeaways:['Study the conversation sequence, not just send counts.','Separate consistent duplicates from conflicting instructions.','Keep correction ownership visible.'],
  }),
  makeStudy({
    slug:'offshore-call-center-zero-result-search-research',
    title:'Zero-result knowledge searches in offshore call centers: what happens next?',
    excerpt:'Research design for tracing empty searches through escalation, source repair, and the eventual customer answer.',
    question:'When knowledge search returns no result, which next steps lead to a controlled answer?',
    unit:'one customer question from the first zero-result search through an approved answer or documented stop',
    evidence:'customer wording, search terms, filters, access state, source areas checked, interim message, escalation, accepted owner, and final answer',
    groups:'resolved synonym gaps, access failures, missing articles, conflicting sources, specialist-only questions, and cases with no accepted owner',
    finding:'zero results describe a search event, not the reason for it; the cause becomes visible only after the eventual source or stop decision is traced.',
    pilot:'capture search terms and final disposition for one queue before changing titles or adding articles',
    limitations:'Search platforms expose different logs, and the selected questions may not represent rare or seasonal requests.',
    takeaways:['Preserve the words the customer and agent used.','Do not treat an empty result as permission to guess.','Tie each repair to the eventual approved source.'],
  }),
  makeStudy({
    slug:'philippines-call-center-time-zone-callback-study',
    title:'Callback time-zone errors in Philippines call centers: a cross-shift study design',
    excerpt:'A method for reviewing callback promises when customer location, queue time, and Philippine shifts differ.',
    question:'Which time-recording choices are associated with early, late, or missed callback attempts?',
    unit:'one promised callback from customer agreement through the first completed or failed attempt',
    evidence:'customer-stated zone or window, promise date, normalized zone, queue time, daylight rule, assigned shift, attempt time, result, and next owner',
    groups:'customer-confirmed zones, inferred zones, daylight-change dates, cross-midnight promises, in-window attempts, and missed windows',
    finding:'a phone prefix or account address is weak evidence of the time the customer agreed to receive a call.',
    pilot:'require a customer-confirmed zone and display both customer and queue times for one callback workflow',
    limitations:'The record may not show travel or a changed customer preference, and a timely attempt does not prove successful contact.',
    takeaways:['Use the customer-confirmed zone when timing matters.','Keep both local times visible across shifts.','Study missed windows with the source field used at booking.'],
  }),
  makeStudy({
    slug:'call-center-escalation-attachment-minimization-study',
    title:'Escalation attachments in call centers: measuring relevance and excess data',
    excerpt:'A privacy-aware review method for checking whether specialist attachments are usable, necessary, and correctly matched.',
    question:'How can managers test whether escalation files contain the evidence needed without unrelated customer data?',
    unit:'one escalation package from file selection through specialist acknowledgement or rejection',
    evidence:'case identifier, decision requested, file description, source, capture time, redaction record, receiver permission, open result, rejection reason, and accepted owner',
    groups:'accepted relevant files, unreadable files, wrong-case files, missing evidence, excessive exports, secure source links, and rejected packages',
    finding:'attachment presence does not prove evidentiary value; relevance, case match, receiver access, and data minimization require separate checks.',
    pilot:'use a file-purpose checklist for one escalation type and compare rejections before and after',
    limitations:'A reviewer may not know every downstream use, and the study cannot determine statutory retention or disclosure requirements.',
    takeaways:['Every file should answer the named decision request.','Check case match and receiver access separately.','Do not copy full exports when a narrower source will do.'],
  }),
  makeStudy({
    slug:'offshore-call-center-after-hours-urgency-calibration',
    title:'After-hours urgency labels in offshore call centers: a calibration study',
    excerpt:'A bounded comparison of qualifying events, false alarms, missed urgency, acknowledgement, and backup routing.',
    question:'Do after-hours urgent labels identify cases that match the approved consequence and response path?',
    unit:'one after-hours case from initial label decision through owner acknowledgement and customer update',
    evidence:'request class, customer consequence, qualifying facts, label time, interim action, primary contact, acknowledgement, backup use, decision, and next update',
    groups:'correctly labeled cases, false alarms, missed qualifying events, unavailable owners, backup activations, and labels lacking required facts',
    finding:'an urgent flag has little operational value unless the definition names observable consequences and connects to a reachable decision owner.',
    pilot:'calibrate supervisors on a small set of ordinary, borderline, and qualifying records, then retest agreement',
    limitations:'Rare high-impact events may be absent from the sample, and agreement on a label does not prove that the response capacity is adequate.',
    takeaways:['Define urgency with observable consequences.','Measure acknowledgement and backup use.','Read false alarms and missed cases together.'],
  }),
];
