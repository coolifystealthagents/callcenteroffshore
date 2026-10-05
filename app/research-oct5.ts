import type {ResearchPost} from './fleet-data';
import records from './research-oct5.json';

// October 5 Research is stored as five literal records. Do not replace this
// corpus with a topic interpolator, shared prose factory, or section template.
export const october5ResearchBatch=records as ResearchPost[];
