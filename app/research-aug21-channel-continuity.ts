import type {ResearchPost} from './fleet-data';
import {august21ResearchBatch} from './research-aug21';
const source=august21ResearchBatch[2];
// Route evidence sources: https://www.nist.gov/cyberframework https://www.nist.gov/privacy-framework https://privacy.gov.ph/data-privacy-act/
export const august21ChannelContinuity:readonly ResearchPost[]=[{...source,slug:'offshore-call-center-channel-handoff-continuity-study',title:'Offshore call center channel handoffs: evidence that customer context survived',published:'2026-08-21',modified:'2026-08-21',revision:'2026-08-21-offshore-call-center-channel-handoff-continuity-study-v1'}];
