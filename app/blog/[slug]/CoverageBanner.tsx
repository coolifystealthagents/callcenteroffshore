'use client';

import {useEffect,useState} from 'react';

const variants = {
  map: [
    ['Map every hour before you add agents','Write the offered hours, expected call pattern, break cover, handoff times, and manager-only decisions for one queue.','Map the coverage'],
    ['Build the clock around one queue','Show the provider when calls arrive, when they spill over, and who owns unresolved work at each shift change.','Plan the shifts'],
    ['Give each hour a named owner','List the Philippines agent, team lead, client manager, and backup contact for every live coverage window.','Name the owners'],
  ],
  continuity: [
    ['Test the backup before the busy hour','Run a planned phone, internet, power, or staffing failure and keep the dated result with the launch record.','Test the backup'],
    ['Make the fallback visible','Write the trigger, backup route, decision owner, caller message, and return-to-normal check before service begins.','Build the fallback'],
    ['Protect the queue when a shift breaks','Use a reserve roster, limited access, and a clear takeover note so backup coverage does not create a second problem.','Plan continuity'],
  ],
  proof: [
    ['Review the handoffs, not only the calls','Sample unresolved work at every shift change and check whether the next owner received enough detail to act.','Build the scorecard'],
    ['Expand after the night shift holds','Keep one queue narrow until two shift cycles show clean notes, safe handoffs, and working escalation paths.','Plan the pilot'],
    ['Ask for proof from your own queue','Use the same call sample, handoff test, outage drill, and pass rule before you add hours or call types.','Review the evidence'],
  ],
} as const;

type Position=keyof typeof variants;

function weeklyVariant(position:Position){
  const now=new Date();
  const week=Math.floor(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate())/604800000);
  const seed=`24-7-call-center-outsourcing-philippines:${position}:${week}`;
  let hash=0;
  for(const char of seed)hash=(hash*31+char.charCodeAt(0))>>>0;
  return hash%variants[position].length;
}

export default function CoverageBanner({position,label}:{position:Position;label:string}){
  const [variant,setVariant]=useState(0);
  useEffect(()=>setVariant(weeklyVariant(position)),[position]);
  const [title,body,action]=variants[position][variant];
  return <aside className="health-article-banner" data-banner-position={position} data-banner-variant={variant}>
    <p>{label}</p><h2>{title}</h2><span>{body}</span>
    <a href={`/contact?utm_source=blog&utm_medium=article_banner&utm_campaign=24_7_philippines_coverage&utm_content=${position}_v${variant+1}`}>{action} →</a>
  </aside>;
}
