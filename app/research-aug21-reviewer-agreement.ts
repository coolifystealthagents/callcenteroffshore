import type {ResearchPost} from './fleet-data';
import {august21ResearchBatch} from './research-aug21';
const source=august21ResearchBatch[4];
// Route evidence sources: https://www.nist.gov/cyberframework https://www.nist.gov/privacy-framework https://privacy.gov.ph/data-privacy-act/
export const august21ReviewerAgreement:readonly ResearchPost[]=[{...source,slug:'offshore-call-center-reviewer-agreement-study',title:'Offshore call center quality review: evidence behind reviewer agreement',published:'2026-08-21',modified:'2026-08-21',revision:'2026-08-21-offshore-call-center-reviewer-agreement-study-v1'}];
