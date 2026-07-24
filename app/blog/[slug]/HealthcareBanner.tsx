'use client';

import {useEffect,useState} from 'react';

const variants = {
  scope: [
    ['Turn one call flow into a hiring brief','List the caller, allowed actions, banned decisions, systems, hours, and handoff owner before matching agents.','Build the brief'],
    ['Make the first queue clear','Show each company one call type, real examples, approved answers, and the people who take hard handoffs.','Map the queue'],
    ['Test the work, not the sales pitch','Give each company the same call flow and ask how it will hire, train, score, and guide the team.','Plan the test'],
  ],
  controls: [
    ['Map patient data before system access','Give each field and action an owner, access rule, reason, save time, and removal step before an agent signs in.','Map access'],
    ['Set safe limits before training','Write what agents may view, say, change, record, and send. Name the person who takes all other work.','Set the limits'],
    ['Use named access for every agent','Start with the fewest rights needed, test the login flow, and write down how access is removed.','Check controls'],
  ],
  proof: [
    ['Compare providers with the same proof','Use one role-play, one scorecard, one access list, and one fix test across every company on your list.','Compare proof'],
    ['Ask for a call you can score','Use the same hard case for each company, keep the recording, and check each result with one pass rule.','Build the scorecard'],
    ['Grow only after the fix holds','Start with one queue and add work only after the team can show safe calls, clear notes, and fixed misses.','Plan the launch'],
  ],
} as const;

type Position=keyof typeof variants;

function weeklyVariant(position:Position){
  const now=new Date();
  const week=Math.floor(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate())/604800000);
  const seed=`healthcare-call-center-outsourcing-companies-philippines:${position}:${week}`;
  let hash=0;
  for(const char of seed)hash=(hash*31+char.charCodeAt(0))>>>0;
  return hash%variants[position].length;
}

export default function HealthcareBanner({position,label}:{position:Position;label:string}){
  const [variant,setVariant]=useState(0);
  useEffect(()=>setVariant(weeklyVariant(position)),[position]);
  const [title,body,action]=variants[position][variant];
  return <aside className="health-article-banner" data-banner-position={position} data-banner-variant={variant}>
    <p>{label}</p><h2>{title}</h2><span>{body}</span>
    <a href={`/contact?utm_source=blog&utm_medium=article_banner&utm_campaign=healthcare_buyer_guide&utm_content=${position}_v${variant+1}`}>{action} →</a>
  </aside>;
}