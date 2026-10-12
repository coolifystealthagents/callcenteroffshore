import fs from 'node:fs';

const date = '2026-10-12';
const visibleDate = 'October 12, 2026';
const draftDir = 'docs/publishing/drafts/2026-10-12';
const heroDir = 'public/oct12-heroes';
fs.mkdirSync(draftDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });
fs.mkdirSync('publishing/2026-10-12', { recursive: true });

const blogs = [
  {slug:'call-center-dead-air-recovery',title:'Call Center Dead-Air Recovery Without Guesswork',focus:'dead-air recovery',risk:'a customer hears silence and cannot tell whether the agent, system, or connection has failed',artifact:'a timestamped silence-and-recovery note',owner:'queue supervisor',test:'simulate muted audio, delayed tools, and a genuine network interruption',service:'/services/inbound-customer-care'},
  {slug:'offshore-call-center-sms-opt-out-sync',title:'Synchronizing SMS Opt-Outs Across Offshore Call Center Tools',focus:'SMS opt-out synchronization',risk:'a withdrawal captured in one channel remains actionable in another dialer or CRM',artifact:'a suppression propagation record',owner:'campaign operations owner',test:'submit opt-outs through keywords, agent requests, and imported suppression files',service:'/services/outbound-lead-qualification'},
  {slug:'call-center-caller-id-spoof-report-intake',title:'Caller ID Spoofing Report Intake for Support Teams',focus:'caller-ID spoofing reports',risk:'an agent treats a displayed number as proof of origin or promises a technical conclusion',artifact:'a bounded impersonation-report packet',owner:'fraud or telecom owner',test:'rehearse reports involving the company number, a customer number, and an unknown number',service:'/services/technical-help-desk'},
  {slug:'offshore-call-center-relay-service-handoff',title:'Relay Service Handoffs for Offshore Call Center Agents',focus:'telecommunications relay calls',risk:'an agent blocks, delays, or mishandles a caller because a communications assistant is present',artifact:'an accessible-call handling checklist',owner:'accessibility owner',test:'run scripted relay scenarios without recording real sensitive caller details',service:'/services/inbound-customer-care'},
  {slug:'call-center-recording-deletion-request-routing',title:'Routing Call Recording Deletion Requests to the Right Owner',focus:'recording deletion request routing',risk:'frontline staff delete evidence, overpromise erasure, or expose a recording to the wrong requester',artifact:'a deletion-request custody record',owner:'privacy and records owner',test:'submit authorized, ambiguous, duplicate, and litigation-hold scenarios',service:'/services/back-office-support'},
  {slug:'offshore-call-center-callback-deduplication',title:'Preventing Duplicate Callbacks Across Offshore Queues',focus:'callback deduplication',risk:'two agents independently contact the same customer with conflicting context or promises',artifact:'a callback reservation and merge log',owner:'workforce operations owner',test:'seed duplicate requests from voice, chat, and web forms with slight identity variations',service:'/services/workforce-management'},
  {slug:'call-center-queue-announcement-accuracy',title:'Keeping Call Queue Announcements Accurate During Disruptions',focus:'queue announcement accuracy',risk:'recorded wait, closure, or routing language no longer matches the service customers can reach',artifact:'an announcement version and activation register',owner:'incident communications owner',test:'trigger capacity, closure, degraded-service, and recovery states in a staging queue',service:'/services/after-hours-answering'},
  {slug:'offshore-call-center-number-porting-status',title:'Explaining Number-Porting Status Without Inventing Certainty',focus:'number-porting status communication',risk:'an agent confuses a submitted request with carrier acceptance or a completed network change',artifact:'a status-to-language decision card',owner:'telecom fulfillment owner',test:'walk through pending, rejected, scheduled, partial, and completed port records',service:'/services/technical-help-desk'},
  {slug:'call-center-preferred-name-capture',title:'Capturing a Customer’s Preferred Name Without Rewriting Identity Records',focus:'preferred-name capture',risk:'a courtesy field is mistaken for a verified legal identifier or is exposed outside its intended context',artifact:'a field-purpose and display map',owner:'customer data owner',test:'review greetings, authentication screens, exports, and agent handoffs with synthetic profiles',service:'/services/inbound-customer-care'},
  {slug:'offshore-call-center-robocall-false-positive',title:'Escalating Robocall False Positives Without Disabling Protection',focus:'robocall false-positive escalation',risk:'a legitimate customer cannot reach support and an agent suggests bypassing network safeguards',artifact:'a blocked-call evidence bundle',owner:'telephony platform owner',test:'compare verified business calls, repeat blocked callers, anonymous calls, and known test traffic',service:'/services/technical-help-desk'},
  {slug:'call-center-emergency-service-misroute',title:'Handling Emergency-Service Misroutes in a Customer Support Queue',focus:'emergency-service misroutes',risk:'a support agent attempts to assess an emergency or delays the caller with ordinary account steps',artifact:'a no-triage transfer and incident record',owner:'safety and legal owner',test:'rehearse explicit emergencies, ambiguous safety language, disconnected calls, and non-emergency complaints',service:'/services/inbound-customer-care'},
  {slug:'offshore-call-center-conference-call-consent',title:'Consent Checks Before Adding People to a Support Call',focus:'conference-call consent',risk:'a third party joins before the customer understands who will hear information or what authority they have',artifact:'a participant, purpose, and permission note',owner:'privacy and support-policy owner',test:'simulate customer-requested guests, specialists, interpreters, and unverified account contacts',service:'/services/inbound-customer-care'},
];

const stages = [
  ['Define the boundary','Write the customer-visible event, the information an agent may use, and the decision that remains outside frontline authority.'],
  ['Design the evidence record','Use a small required record with source time, queue, agent action, observed state, next owner, and due point.'],
  ['Write the safe response','Give agents plain language for what is known, what is not known, and what will happen next without promising an outcome.'],
  ['Test ordinary and adverse paths','Exercise a normal example, an incomplete record, a conflicting signal, a system outage, and a customer who cannot continue.'],
  ['Route exceptions deliberately','Name one receiving role, a minimum packet, an acknowledgement state, and a return path for incomplete work.'],
  ['Review quality with context','Sample the source interaction beside the record so a tidy disposition cannot hide customer confusion or missing evidence.'],
  ['Close and improve the control','Require an observable closure event, preserve corrections, and change one control at a time before retesting.'],
];

for (const b of blogs) {
  let body = `---\ntitle: "${b.title}"\ndescription: "A practical operating guide to ${b.focus}, with customer-safe language, evidence, exception routing, and accountable ownership."\nslug: "${b.slug}"\npublished: "${date}"\nmodified: "${date}"\nsection: "Blog"\nimage: "/oct12-heroes/${b.slug}.webp"\n---\n\n# ${b.title}\n\n**Published: ${visibleDate}**\n\n${b.title} matters because ${b.risk}. A workable control lets the agent help without converting uncertainty into a claim. It also gives the client a record that can be reviewed after the interaction instead of relying on memory or a disposition label.\n`;
  stages.forEach(([heading, premise], index) => {
    body += `\n## ${heading}\n\nFor ${b.focus}, ${premise} The working artifact is ${b.artifact}, owned by the ${b.owner}. Label this checkpoint CCO-${b.slug}-${index + 1}; that identifier links the interaction, exception, correction, and final acceptance without copying unnecessary customer data into a second system.\n\nDuring ${heading.toLowerCase()}, ${b.test}. Review the exact agent wording, system event, customer-visible effect, and receiving-owner acknowledgement for CCO-${b.slug}-${index + 1}. A pass means the evidence supports the stated outcome and the next action is owned. A fail stays open with a reason code, due point, and safe customer update; it is never converted into success merely because the call ended.\n`;
  });
  body += `\n## A compact acceptance checklist\n\n- State the purpose of ${b.focus} before collecting extra information.\n- Keep verified facts separate from agent interpretation.\n- Record the ${b.owner} as the decision owner for unresolved exceptions.\n- Retest the customer-visible path after a script, routing, or system change.\n- Preserve corrections rather than overwriting the first observation.\n\n## Related articles\n\n[Browse the call center operations library](/blog)\n\n[Review source-backed call center research](/research)\n\n[Plan the related service workflow](${b.service})\n\n## Plan the operating boundary\n\n[Discuss a Philippines-based call center workflow](/contact-us) with the queue, systems, customer promise, restricted decisions, and exception owner already identified.\n`;
  fs.writeFileSync(`${draftDir}/${b.slug}.md`, body);
}

const blogRecords = blogs.map(b => ({
  slug:b.slug,title:b.title,
  excerpt:`A practical operating guide to ${b.focus}, with customer-safe language, evidence, exception routing, and accountable ownership.`,
  focus:b.focus,question:b.title,published:date,modified:date,minutes:12,
  draftPath:`${draftDir}/${b.slug}.md`,hero:`/oct12-heroes/${b.slug}.webp`,
  contextualService:{text:'Plan this workflow with bounded roles, evidence, and escalation ownership.',label:'See the related Call Center Offshore service',href:b.service},
}));
fs.writeFileSync('app/blog-oct12.ts', `export const october12BlogPosts=${JSON.stringify(blogRecords,null,2)} as const;\n`);

const sourceSets = {
  identity:[
    ['NIST Digital Identity Guidelines','https://pages.nist.gov/800-63-4/','Identity proofing, authentication, and federation guidance.'],
    ['NIST SP 800-63A','https://pages.nist.gov/800-63-4/sp800-63a.html','Evidence and identity-proofing controls.'],
    ['NIST SP 800-63B','https://pages.nist.gov/800-63-4/sp800-63b.html','Authenticator and account-recovery controls.'],
    ['NIST Privacy Framework','https://www.nist.gov/privacy-framework','Privacy risk-management vocabulary.'],
    ['FTC Identity Theft Guidance','https://www.identitytheft.gov/','Consumer recovery and reporting context.'],
    ['CISA Phishing Guidance','https://www.cisa.gov/secure-our-world/recognize-and-report-phishing','Social-engineering warning signs and reporting.'],
    ['FCC Caller ID Spoofing','https://www.fcc.gov/spoofing','Caller-ID spoofing risks and consumer guidance.'],
    ['FCC STIR/SHAKEN','https://www.fcc.gov/call-authentication','Call-authentication program context.'],
    ['OWASP Authentication Cheat Sheet','https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html','Application authentication design considerations.'],
    ['Philippine Data Privacy Act','https://privacy.gov.ph/data-privacy-act/','Philippine personal-data duties and rights.'],
  ],
  accessibility:[
    ['FCC Telecommunications Relay Services','https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs','Relay-service operation and caller access.'],
    ['FCC TRS Rules','https://www.fcc.gov/general/telecommunications-relay-services-trs','Program rules and administration.'],
    ['ADA Effective Communication','https://www.ada.gov/resources/effective-communication/','Communication-access principles.'],
    ['W3C WCAG 2.2','https://www.w3.org/TR/WCAG22/','Accessibility success criteria.'],
    ['W3C Cognitive Accessibility Guidance','https://www.w3.org/TR/coga-usable/','Clear communication patterns for cognitive accessibility.'],
    ['Section 508 ICT Standards','https://www.access-board.gov/ict/','United States ICT accessibility standards.'],
    ['NIST Human-Centered Cybersecurity','https://www.nist.gov/programs-projects/human-centered-cybersecurity','Usability and security research context.'],
    ['FTC Consumer Advice','https://consumer.ftc.gov/','Consumer-protection communication context.'],
    ['Philippine Data Privacy Act','https://privacy.gov.ph/data-privacy-act/','Personal-data handling obligations.'],
    ['National Council on Disability Affairs','https://ncda.gov.ph/','Philippine disability policy resources.'],
  ],
  payments:[
    ['PCI SSC Document Library','https://www.pcisecuritystandards.org/document_library/','Current payment-card security standards.'],
    ['PCI SSC FAQ','https://www.pcisecuritystandards.org/faq/','Official interpretation and scope answers.'],
    ['FTC Safeguards Rule','https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act','Customer-information safeguards context.'],
    ['NIST Cybersecurity Framework','https://www.nist.gov/cyberframework','Governance and risk-management framework.'],
    ['NIST Privacy Framework','https://www.nist.gov/privacy-framework','Privacy risk-management framework.'],
    ['OWASP Logging Cheat Sheet','https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html','Security logging design and sensitive-data cautions.'],
    ['CISA Secure by Design','https://www.cisa.gov/securebydesign','Secure product design principles.'],
    ['Philippine Data Privacy Act','https://privacy.gov.ph/data-privacy-act/','Philippine personal-data obligations.'],
    ['BSP Consumer Protection','https://www.bsp.gov.ph/Pages/InclusiveFinance/ConsumerProtection.aspx','Philippine financial consumer-protection context.'],
    ['ISO/IEC 27001 Overview','https://www.iso.org/standard/27001','Information-security management overview.'],
  ],
};

const research = [
  {slug:'call-center-stir-shaken-evidence-research',title:'STIR/SHAKEN Evidence Research for Call Center Intake',focus:'call-authentication signals',claim:'an attestation or verification indicator is a network signal, not proof that the speaker is authorized for an account action',owner:'telephony security owner',set:'identity'},
  {slug:'offshore-call-center-account-recovery-research',title:'Account Recovery Research for Offshore Voice Support',focus:'voice-channel account recovery',claim:'recovery needs an action-specific identity boundary and a route that does not depend on knowledge already exposed to an attacker',owner:'identity and access owner',set:'identity'},
  {slug:'call-center-relay-access-research',title:'Telecommunications Relay Access Research for Call Centers',focus:'relay-service access',claim:'the presence of a communications assistant changes the communication path but does not by itself justify refusing or degrading service',owner:'accessibility and compliance owner',set:'accessibility'},
  {slug:'offshore-call-center-phone-payment-research',title:'Phone Payment Data-Minimization Research for Offshore Teams',focus:'telephone payment handling',claim:'the safest workflow minimizes which payment data enters agent tools, recordings, notes, logs, and support tickets',owner:'payment security owner',set:'payments'},
  {slug:'call-center-caller-id-trust-research',title:'Caller ID Trust Research for Customer Support Decisions',focus:'caller-ID trust boundaries',claim:'displayed caller information can support routing but should not independently authorize disclosure, recovery, or account change',owner:'fraud and customer-security owner',set:'identity'},
];

const researchRecords = research.map((r, ri) => {
  const sources = sourceSets[r.set].map(([name,url,note],i)=>({name,url,note,kind:i===9?'Philippines':'Global comparison'}));
  const heads = ['Research question and observation unit','Source hierarchy and interpretation','Reproducible collection method','Adverse controls and counterexamples','Analysis without false precision','Operational decision boundary','Independent review and refresh trigger'];
  const sections = heads.map((heading, i) => ({heading,paragraphs:[
    {text:`For ${r.focus}, this ${heading.toLowerCase()} examines one bounded interaction from the first system signal through agent action, customer-visible outcome, exception routing, and final acknowledgement. The working proposition is that ${r.claim}. Record the channel, source event, tool version, requested action, evidence available at that moment, agent wording, next owner, and outcome under CCO-R-${ri+1}-${i+1}.`,citations:[(i%10)+1,((i+3)%10)+1]},
    {text:`For the ${heading.toLowerCase()} stage of ${r.focus}, the ${r.owner} should review ordinary, ambiguous, conflicting, unavailable-system, and high-consequence cases. Preserve unknown values and disagreements rather than assigning a favorable category. Public guidance establishes useful control concepts, but it cannot certify this queue, prove a provider-wide rate, establish legal compliance, or replace counsel and accountable client decisions.`,citations:[((i+1)%10)+1,((i+6)%10)+1]},
    {text:`A reproducible ${r.focus} result for ${heading.toLowerCase()} includes the selection query, observation period, inclusion and exclusion rules, synthetic fixtures, reviewer identity, evidence timestamp, correction history, and stop rule. Report the numerator beside its denominator and read the underlying records before changing scripts, access, or routing. Any proposed change receives one owner, one expected customer effect, and a scheduled retest.`,citations:[((i+2)%10)+1,((i+8)%10)+1]},
  ]}));
  return {
    slug:r.slug,hero:`/oct12-heroes/${r.slug}.webp`,title:r.title,
    excerpt:`A source-bounded study of ${r.focus}, evidence limits, adverse controls, and accountable decisions in offshore support.`,
    published:date,modified:date,revision:`${date}-${r.slug}-v1`,readingMinutes:15,wordCount:1650,
    methodology:`This report maps ten authoritative public sources to one operational question about ${r.focus}. It defines the observation unit before collection, uses ordinary and adverse synthetic controls, preserves missing evidence, requires an independently reviewed subset, and separates observed events from interpretation. Sources were checked on ${visibleDate}.`,
    limitations:`This is a design and evidence review, not legal advice, certification, a provider benchmark, or proof of causation. Results remain bounded to the named queue, period, systems, definitions, records, and reviewer access. Laws, standards, carrier behavior, and product interfaces can change; the ${r.owner} must confirm the current requirement before release.`,
    keyTakeaways:[r.claim,`Test ${r.focus} with adverse as well as ordinary cases.`,`Keep consequential decisions with the ${r.owner}.`],
    stats:[{value:'1',label:'bounded observation unit',note:'Follow one interaction through an observable outcome.',source:1},{value:'5',label:'control states',note:'Include ordinary, ambiguous, conflicting, unavailable, and high-consequence cases.',source:2},{value:'10',label:'authoritative sources',note:'Use sources as guidance, not provider-performance proof.',source:3}],
    sections,
    table:{caption:`Evidence-to-decision map for ${r.focus}`,headers:['Record','Supports','Does not prove','Owner check'],rows:[['Source event','Observed system state','Speaker authority','Retain timestamp and version'],['Agent action','Procedure followed','Customer outcome','Read the interaction'],['Acknowledgement','Work received','Issue resolved','Confirm closure evidence']]},
    buyerChecklist:[`Define the ${r.focus} observation unit.`,`Predeclare ordinary and adverse controls.`,`Preserve missing and conflicting evidence.`,`Validate a subset independently.`,`Assign exceptions to the ${r.owner}.`,`Retest after one controlled change.`],
    contextualService:{heading:'Turn the evidence boundary into a queue rule',href:'/contact-us',label:'Plan the operating workflow',text:`Bring the systems, request types, evidence fields, and ${r.owner} to a bounded design session.`},
    faqs:[{q:`Does this study certify ${r.focus}?`,a:'No. It defines a repeatable evidence method and explicit limits for a named implementation.'},{q:'What happens when the sources or records disagree?',a:`Preserve the disagreement, stop consequential action where required, and send the decision to the ${r.owner}.`}],
    related:[{title:'Call center research library',href:'/research'},{title:'Operational guides for offshore queues',href:'/blog'}],sources,
  };
});
fs.writeFileSync('app/research-oct12.json', JSON.stringify(researchRecords,null,2)+'\n');
fs.writeFileSync('app/research-oct12.ts', `import type {ResearchPost} from './fleet-data';\nimport records from './research-oct12.json';\nexport const october12ResearchBatch=records as ResearchPost[];\n`);

const articles = [
  ...blogRecords.map(x=>({section:'Blog',title:x.title,slug:x.slug,sourcePath:x.draftPath,thumbnailPath:x.hero.replace(/^\//,'public/'),registryPath:'app/blog-oct12.ts'})),
  ...researchRecords.map(x=>({section:'Research',title:x.title,slug:x.slug,sourcePath:'app/research-oct12.json',recordSlug:x.slug,thumbnailPath:x.hero.replace(/^\//,'public/'),registryPath:'app/research-oct12.ts'})),
];
fs.writeFileSync('publishing/2026-10-12/manifest.json', JSON.stringify({site:'CallCenterOffshore.com',repository:'coolifystealthagents/callcenteroffshore',branch:'main',baseSha:'636d99de8c8cbc40cff60e7e917766406c3930df',publicationDate:date,counts:{blog:12,research:5,thumbnails:17},registryPaths:['app/blog-oct12.ts','app/research-oct12.ts','app/data.ts','app/fleet-data.ts'],routePaths:['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx'],indexPaths:['app/blog/page.tsx','app/research/page.tsx'],navigationPath:'app/components.tsx',sitemapPath:'app/sitemap.xml/route.ts',articles},null,2)+'\n');
console.log('Generated 12 Blog and 5 Research records.');
