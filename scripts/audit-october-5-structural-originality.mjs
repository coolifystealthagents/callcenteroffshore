import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const stripHtml=value=>value.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const normalize=value=>value.replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\s+/g,' ').trim();
const sentenceList=value=>(normalize(value).match(/[^.!?]+[.!?]+/g)||[]).map(x=>x.trim()).filter(x=>(x.match(/\b[\w'-]+\b/g)||[]).length>=10);
const paragraphsFromMarkdown=raw=>raw.replace(/^---[\s\S]*?---\s*/,'').split(/\n\n+/).map(normalize).filter(x=>x&&!x.startsWith('#')&&!x.startsWith('- ')&&(x.match(/\b[\w'-]+\b/g)||[]).length>=25);
const headingsFromMarkdown=raw=>[...raw.matchAll(/^## (.+)$/gm)].map(match=>match[1]);

function repeated(items,key,minDocuments=2){
 const seen=new Map();
 for(const item of items)for(const value of new Set(item[key])){
  const docs=seen.get(value)||[];docs.push(item.slug);seen.set(value,docs);
 }
 return [...seen.entries()].filter(([,docs])=>docs.length>=minDocuments).map(([text,documents])=>({text,documents,count:documents.length})).sort((a,b)=>b.count-a.count||b.text.length-a.text.length);
}

const blogDir=path.join(root,'docs/publishing/drafts/2026-10-05');
const blog=fs.readdirSync(blogDir).filter(x=>x.endsWith('.md')).sort().map(file=>{
 const raw=fs.readFileSync(path.join(blogDir,file),'utf8'),paragraphs=paragraphsFromMarkdown(raw);
 return {slug:file.slice(0,-3),title:raw.match(/^title: "([^"]+)"$/m)?.[1],headings:headingsFromMarkdown(raw),paragraphs,sentences:paragraphs.flatMap(sentenceList)};
});

const researchSlugs=['call-center-quality-score-appeal-evidence-study','technical-support-outage-message-approval-study','offshore-call-center-contact-record-merge-study','ecommerce-partial-fulfillment-customer-choice-study','appointment-reminder-channel-consent-study'];
const research=researchSlugs.map(slug=>{
 const html=fs.readFileSync(path.join(root,`.next/server/app/research/${slug}.html`),'utf8');
 const main=html.match(/<div class="research-main">([\s\S]*?)<\/div><\/div><\/article>/)?.[1]||html;
 const title=stripHtml(html.match(/<h1[^>]*>[\s\S]*?<\/h1>/)?.[0]||'');
 const headings=[...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(match=>stripHtml(match[1]));
 const paragraphs=[...main.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)].map(match=>stripHtml(match[1])).filter(x=>(x.match(/\b[\w'-]+\b/g)||[]).length>=25);
 return {slug,title,headings,paragraphs,sentences:paragraphs.flatMap(sentenceList)};
});

const theses={
 'call-center-channel-handoff-email-to-phone':'An email-to-phone handoff should move only the current question and its ownership, while the secured email remains the source for attachments and historical context.',
 'call-center-crm-outage-capture-recovery':'CRM outage continuity succeeds only when every minimal temporary record is reconciled once and then destroyed, not merely when the CRM returns.',
 'call-center-order-cancellation-cutoff':'A call center may promise to submit and track a cancellation request only when fulfillment evidence does not yet support a completed-cancellation claim.',
 'call-center-payment-link-verbal-boundary':'Payment-link support must help a customer navigate without bringing credentials, screen contents, or unconfirmed settlement claims into the call record.',
 'call-center-supervisor-whisper-barge-policy':'A supervisor should enter a live call only to address a defined authority or safety failure, not simply because they prefer different phrasing.',
 'call-center-suspected-account-takeover-call':'Suspected takeover handling should preserve a safe recovery path while freezing risky changes and revealing no reusable verification clues.',
 'call-center-voicemail-transcription-review':'A voicemail transcript is a routing clue whose risky terms must be checked against controlled audio before they become operational facts.',
 'offshore-call-center-interpreter-disconnect-recovery':'When an interpreter disconnects, the decision must restart from the last mutually understood point rather than treating partial comprehension as consent.',
 'offshore-call-center-overflow-provider-failover-drill':'An overflow provider is a real backup only after live routing, capacity, rejection, escalation, and return-of-control behavior survive a bounded drill.',
 'offshore-call-center-return-call-number-validation':'A callback destination proves reachability, not identity or disclosure authority, and temporary numbers require purpose and expiry controls.',
 'offshore-call-center-threatening-caller-response':'Threatening-caller policy must let agents stop abuse immediately while preserving only the specific facts an approved safety owner can act on.',
 'philippines-call-center-typhoon-continuity-check':'Typhoon continuity should reduce demand to safely available capacity instead of turning a business-continuity plan into an attendance target.',
 'call-center-quality-score-appeal-evidence-study':'A QA appeal process is credible only when an independent reviewer can reproduce the original score and propagate any correction to every downstream use.',
 'technical-support-outage-message-approval-study':'Frontline outage messages should assemble approved facts and explicit unknowns without converting symptoms or engineering targets into public conclusions.',
 'offshore-call-center-contact-record-merge-study':'Duplicate-record work should remain reversible until identity, consent, open-case, and downstream effects support an authorized merge.',
 'ecommerce-partial-fulfillment-customer-choice-study':'Partial fulfillment must be explained and reconciled by order line so each customer choice, charge, shipment, and refund retains an owner.',
 'appointment-reminder-channel-consent-study':'Appointment reminders require purpose-limited channel consent and must keep delivery, receipt, confirmation, and attendance as separate events.'
};

const blogRepeatedSentences=repeated(blog,'sentences');
const researchRepeatedSentences=repeated(research,'sentences');
const blogRepeatedParagraphs=repeated(blog,'paragraphs');
const researchRepeatedParagraphs=repeated(research,'paragraphs');
const blogGeneratorPath=path.join(root,'scripts/generate-october-5-blog.mjs');
const blogGenerator=fs.existsSync(blogGeneratorPath)?fs.readFileSync(blogGeneratorPath,'utf8'):'';
const researchSource=fs.readFileSync(path.join(root,'app/research-oct5.ts'),'utf8');
const report={
 generatedAt:new Date().toISOString(),
 candidateSha:'17f78b3e55623dafd0d71d6fe474beed428e77a0',
 disposition:'INVALID_FOR_DEPLOYMENT',
 reason:'Both families retain shared reasoning generators and repeated argument sequences. Added worked examples reduced the shingle score but did not replace the common scaffolding.',
 blog:{
  count:blog.length,
  exactRepeatedSubstantiveParagraphs:blogRepeatedParagraphs,
  exactRepeatedSubstantiveSentences:blogRepeatedSentences,
  sharedSequence:['define an observable decision and authority owner','capture evidence that survives a shift change','state a stop condition and retain client authority','test ordinary, ambiguous, late-shift, unavailable-owner, and correction cases','review diagnostic measures and assign a dated change','ask the buyer to demand a tool/script/access/handoff demonstration'],
  workedExampleStructure:'Every article received one topic-specific worked example inserted into the same six-stage article generated by paragraph(t,h,i). The example did not replace the six shared reasoning paragraphs.',
  generatorEvidence:{removed:!fs.existsSync(blogGeneratorPath),hasSharedParagraphFunction:/function paragraph\(t,h,i\)/.test(blogGenerator),hasSharedSectionMapping:/sectionSets\[idx\]\.map/.test(blogGenerator),hasInsertedWorkedExample:/sectionParts\.splice/.test(blogGenerator)},
  articlePlans:Object.fromEntries(blog.map(item=>[item.slug,{thesis:theses[item.slug],outline:item.headings}])),
 },
 research:{
  count:research.length,
  exactRepeatedSubstantiveParagraphs:researchRepeatedParagraphs,
  exactRepeatedSubstantiveSentences:researchRepeatedSentences,
  sharedSequence:['two shared base research sections','two topic-specific ending sections','decision boundary','record design','comparison groups','pilot controls and stop conditions','buyer review questions','niche-specific conclusion','shared base methodology/limitations and sources'],
  workedExampleStructure:'The five reports are produced by one topics.map callback. Six identically ordered specific sections interpolate topic fields into common prose, and shared base sections surround them.',
  generatorEvidence:{usesSingleMap:/topics\.map\(topic=>/.test(researchSource),usesSharedSpecificArray:/const specific=\[/.test(researchSource),usesSharedBaseSlices:/base\.sections\.slice/.test(researchSource)},
  articlePlans:Object.fromEntries(research.map(item=>[item.slug,{thesis:theses[item.slug],outline:item.headings}])),
 },
 publicationEvidence:{deploymentHeld:true,actualCandidateImageHttpEvidence:'UNAVAILABLE: candidate has not been deployed; local file/signature checks are not HTTP evidence',liveVerification:'NOT_STARTED'},
 requiredRecovery:'Rewrite every Blog and Research article so each has its own thesis, section logic, examples, evidence path, and reader outcome. Remove the shared generators from the candidate before rerunning source-to-render and live evidence gates.'
};

fs.mkdirSync(path.join(root,'docs/publishing/audits'),{recursive:true});
fs.writeFileSync(path.join(root,'docs/publishing/audits/2026-10-05-structural-originality.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({disposition:report.disposition,blog:{repeatedParagraphs:blogRepeatedParagraphs.length,repeatedSentences:blogRepeatedSentences.length},research:{repeatedParagraphs:researchRepeatedParagraphs.length,repeatedSentences:researchRepeatedSentences.length},generatorEvidence:{blog:report.blog.generatorEvidence,research:report.research.generatorEvidence}},null,2));
