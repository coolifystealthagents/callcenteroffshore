#!/usr/bin/env python3
"""Generate the 2026-11-02 callcenteroffshore blog and research surfaces."""
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATE = "2026-11-02"
DISPLAY = "November 2, 2026"

blogs = [
    {
        "slug": "callcenteroffshore-design-the-after-hours-voicemail-triage-rule-2026-11-02",
        "title": "Design the after-hours voicemail triage rule",
        "focus": "after-hours voicemail triage",
        "owner": "call center manager",
        "source": "the approved overnight coverage and callback policy",
        "steps": ["listen to the message once without transcribing sensitive details", "classify the request against the written urgency matrix", "record the customer, channel, and callback window", "route urgent safety or access issues to the named duty owner", "leave the next check and owner in the queue"],
        "stop": "the message reports an emergency, a data breach, a threat, or a request that requires a decision outside the written overnight scope",
        "example": "A caller says a payment failed and asks for an immediate account change. The assistant records the facts, checks the approved rule, and routes the account decision to the morning owner rather than promising a fix.",
        "service": "/services/customer-support",
        "service_label": "Offshore customer support",
    },
    {
        "slug": "callcenteroffshore-check-whether-callback-promises-survive-a-shift-change-2026-11-02",
        "title": "Check whether callback promises survive a shift change",
        "focus": "callback promise continuity",
        "owner": "support operations lead",
        "source": "the callback record and the approved coverage window",
        "steps": ["open the callback from the customer record", "confirm the promised channel and time window", "check that a named owner accepted the next action", "record any dependency or missing contact detail", "hand off the open promise with the next check time"],
        "stop": "the promise conflicts with the published coverage window, the customer requires a different channel, or the case needs a credit or account change",
        "example": "A promise is recorded for 6 p.m., but the assigned owner ends at 5:30 and no backup accepted it. The assistant flags the gap and routes it before the customer has to call again.",
        "service": "/services/operations-support",
        "service_label": "Call center operations support",
    },
    {
        "slug": "callcenteroffshore-build-a-script-exception-library-for-new-agents-2026-11-02",
        "title": "Build a script exception library for new agents",
        "focus": "script exception handling",
        "owner": "quality or training lead",
        "source": "approved scripts and the current escalation matrix",
        "steps": ["collect real exception examples from reviewed calls", "separate wording choices from policy decisions", "write the observable trigger and approved route", "label the owner and evidence required", "review the library with the quality lead before use"],
        "stop": "an example contains customer data, an unapproved promise, or a policy interpretation that has not been approved",
        "example": "A new agent asks what to say when a caller refuses identity verification. The library shows the approved stop phrase and the secure alternative, not a improvised workaround.",
        "service": "/services/reporting-and-qa",
        "service_label": "Call reporting and quality review",
    },
    {
        "slug": "callcenteroffshore-keep-customer-identity-notes-out-of-open-chat-2026-11-02",
        "title": "Keep customer identity notes out of open chat",
        "focus": "identity-note handling",
        "owner": "support manager and privacy owner",
        "source": "the approved identity process and restricted case system",
        "steps": ["verify the requester through the approved channel", "record only the minimum identity status", "keep evidence in the restricted case system", "use a reference instead of copying personal data into chat", "route uncertain matches to the privacy owner"],
        "stop": "a colleague asks for a full identifier in chat, the match is uncertain, or the request requires disclosure to an unverified person",
        "example": "An agent pastes a caller’s full date of birth into a shared channel to ask for help. The assistant removes the detail, records a case reference, and reminds the team to use the restricted field.",
        "service": "/services/customer-support",
        "service_label": "Offshore customer support",
    },
    {
        "slug": "callcenteroffshore-route-a-repeat-contact-before-it-becomes-a-complaint-2026-11-02",
        "title": "Route a repeat contact before it becomes a complaint",
        "focus": "repeat-contact escalation",
        "owner": "customer operations owner",
        "source": "the linked contact history and the written repeat-contact rule",
        "steps": ["link the new contact to the earlier case", "record what changed since the last promise", "check whether the owner or due time is missing", "apply the repeat-contact escalation rule", "route the case with the unresolved question"],
        "stop": "the customer reports harm, threatens legal action, or requests compensation beyond the approved policy",
        "example": "A customer calls three times about the same unanswered question. The assistant links the records, shows the missed owner, and routes the case before another scripted apology is sent.",
        "service": "/services/operations-support",
        "service_label": "Call center operations support",
    },
    {
        "slug": "callcenteroffshore-review-warm-transfer-acceptance-not-just-dialing-2026-11-02",
        "title": "Review warm transfer acceptance, not just dialing",
        "focus": "warm transfer acceptance",
        "owner": "queue supervisor",
        "source": "the transfer record and the receiving owner confirmation",
        "steps": ["record the receiving queue and named owner", "check the acceptance state after transfer", "confirm the minimum context arrived", "record a failed or returned transfer", "route unaccepted cases to the supervisor"],
        "stop": "the receiving area cannot accept the case, the customer needs a decision outside the queue scope, or the transfer would expose unnecessary personal data",
        "example": "A transfer shows dialing success but no acceptance and no note in the receiving queue. The assistant keeps the case open and alerts the supervisor instead of marking it complete.",
        "service": "/services/operations-support",
        "service_label": "Call center operations support",
    },
    {
        "slug": "callcenteroffshore-set-a-safe-rule-for-call-recording-access-2026-11-02",
        "title": "Set a safe rule for call recording access",
        "focus": "recording access control",
        "owner": "quality and security owners",
        "source": "the approved recording policy and access matrix",
        "steps": ["verify the requester and stated purpose", "match the request to the approved access role", "use the controlled review system", "record the review reference and time", "route exceptions to the security owner"],
        "stop": "the request is for personal use, the purpose is unclear, the recording contains restricted data, or access would exceed the reviewer role",
        "example": "A supervisor asks an assistant to export a recording to a personal drive for coaching. The assistant declines the export, records the coaching purpose, and uses the approved review room.",
        "service": "/services/reporting-and-qa",
        "service_label": "Call reporting and quality review",
    },
    {
        "slug": "callcenteroffshore-triage-language-interpreter-requests-without-delay-2026-11-02",
        "title": "Triage language interpreter requests without delay",
        "focus": "interpreter request triage",
        "owner": "support operations lead",
        "source": "the approved language-access and interpreter workflow",
        "steps": ["record the requested language and channel", "confirm the customer is waiting and the queue is open", "route the request through the approved interpreter path", "record the wait and handoff evidence", "escalate when the approved path is unavailable"],
        "stop": "the request requires an unapproved provider, the customer is in immediate danger, or someone asks the assistant to interpret a legal or medical decision",
        "example": "A Spanish-language caller waits while the usual interpreter line is down. The assistant records the outage, uses the approved backup path, and escalates the wait rather than relying on an untrained bilingual agent.",
        "service": "/services/customer-support",
        "service_label": "Offshore customer support",
    },
    {
        "slug": "callcenteroffshore-document-an-outage-fallback-in-the-call-log-2026-11-02",
        "title": "Document an outage fallback in the call log",
        "focus": "outage fallback evidence",
        "owner": "support operations and IT owners",
        "source": "the approved outage procedure and status record",
        "steps": ["record the outage start and affected systems", "switch only to the approved fallback channel", "log each call that could not use the normal path", "record the customer promise and next owner", "reconcile the fallback list after recovery"],
        "stop": "the fallback requires an unapproved tool, the outage affects safety or payment, or a customer was told an unsupported recovery time",
        "example": "The CRM is unavailable, so the team uses the approved callback sheet. After recovery the assistant reconciles every row and routes duplicate or missing entries before closing the incident.",
        "service": "/services/operations-support",
        "service_label": "Call center operations support",
    },
    {
        "slug": "callcenteroffshore-audit-disposition-code-copy-paste-drift-2026-11-02",
        "title": "Audit disposition-code copy-paste drift",
        "focus": "disposition-code consistency",
        "owner": "quality lead",
        "source": "the approved code definitions and sampled call records",
        "steps": ["sample calls across queues and shifts", "compare the selected code with the call facts", "record repeated copy-paste patterns", "separate code ambiguity from agent error", "route definition changes to the quality owner"],
        "stop": "the audit requires listening to restricted content outside the approved scope, or a code change would alter reporting definitions",
        "example": "Half the sampled calls use the same code regardless of outcome. The assistant shows the pattern and asks the quality lead to clarify the definition before coaching individual agents.",
        "service": "/services/reporting-and-qa",
        "service_label": "Call reporting and quality review",
    },
    {
        "slug": "callcenteroffshore-close-the-loop-on-customer-callbacks-2026-11-02",
        "title": "Close the loop on customer callbacks",
        "focus": "callback closure",
        "owner": "customer operations owner",
        "source": "the callback record and customer-visible outcome",
        "steps": ["open the callback and identify the promised outcome", "confirm the customer was reached through an approved channel", "record the decision or next action", "check the destination record for the promised change", "close only with customer-visible evidence"],
        "stop": "the callback would disclose restricted information, the customer requests a new commitment, or the promised change is not visible in the destination system",
        "example": "An agent marks a callback complete after leaving a voicemail. The assistant keeps it open until the promised update is either delivered or the owner approves a different next step.",
        "service": "/services/customer-support",
        "service_label": "Offshore customer support",
    },
    {
        "slug": "callcenteroffshore-prepare-a-shift-handoff-that-names-the-next-check-2026-11-02",
        "title": "Prepare a shift handoff that names the next check",
        "focus": "shift handoff",
        "owner": "queue supervisor",
        "source": "the open queue and the approved handoff template",
        "steps": ["list open cases that cross the shift", "record the last verified fact and next check time", "name the owner who accepted each item", "flag missing context or conflicting promises", "review the handoff with the incoming lead"],
        "stop": "the handoff would expose restricted data outside the receiving team, or the next action requires an approval not yet granted",
        "example": "A callback is due during the handoff but the incoming agent is not told. The assistant adds it to the accepted handoff with the exact due time and owner, then checks that the lead acknowledged it.",
        "service": "/services/operations-support",
        "service_label": "Call center operations support",
    },
]

sources = [
    {"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Frames employment and recordkeeping expectations in general terms.", "kind": "Global comparison"},
    {"name": "Federal Trade Commission", "url": "https://www.ftc.gov/business-guidance", "note": "Frames consumer communication and data handling expectations.", "kind": "Global comparison"},
    {"name": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework", "note": "Frames access and incident recordkeeping practice.", "kind": "Global comparison"},
    {"name": "Cybersecurity and Infrastructure Security Agency", "url": "https://www.cisa.gov/audiences/small-and-medium-businesses", "note": "Frames small-business security hygiene.", "kind": "Global comparison"},
    {"name": "U.S. Small Business Administration", "url": "https://www.sba.gov/business-guide/manage-your-business", "note": "Frames operating records for small teams.", "kind": "Global comparison"},
    {"name": "U.S. Government Accountability Office", "url": "https://www.gao.gov/products/gao-14-704g", "note": "Frames internal control and evidence expectations.", "kind": "Global comparison"},
]

research = [
    {
        "slug": "callcenteroffshore-how-reliable-are-callback-promises-at-shift-change-2026-11-02",
        "title": "How reliable are callback promises at shift change?",
        "excerpt": "A measurement protocol for testing whether callback promises survive a shift boundary with a named owner, due point, and customer-visible outcome.",
        "topic": "callback promise continuity",
        "owner": "support operations lead",
        "unit": "callback promise",
        "decision": "where a shift handoff causes avoidable callback misses",
        "method": "Sample callbacks that cross a shift boundary across routine, urgent, and rescheduled cohorts. Record the promise source, due point, assigned owner, acceptance evidence, customer contact attempt, and outcome.",
        "example": "A callback is due at 6 p.m., but the assigned agent leaves at 5:30 and no one accepts it. The elapsed time looks short, yet the customer promise fails because ownership disappeared at the boundary.",
        "limits": "A callback may be missed because the customer is unavailable, the contact detail is wrong, or the promised action depends on another owner. The protocol does not decide whether a service-level breach has legal consequences.",
        "conclusion": "A useful report separates acceptance, contact, and outcome. Shift handoffs should be judged by whether the next owner can act from the record, not by whether a ticket was moved.",
    },
    {
        "slug": "callcenteroffshore-how-often-do-warm-transfers-lack-acceptance-evidence-2026-11-02",
        "title": "How often do warm transfers lack acceptance evidence?",
        "excerpt": "A repeatable audit design for comparing dialing success with the receiving owner’s acceptance, context, and customer-visible next step.",
        "topic": "warm transfer acceptance",
        "owner": "queue supervisor",
        "unit": "warm transfer",
        "decision": "whether transfer reporting proves handoff or only an outbound dial",
        "method": "Stratify transfers by queue, shift, and urgency. Compare the dial event, receiving owner, acceptance time, minimum context fields, return rate, and customer outcome. Read the records behind every failed acceptance.",
        "example": "A transfer shows a completed dial and a zero-second wait, but the receiving queue has no accepted case. The transfer should count as unaccepted, not as a successful handoff.",
        "limits": "The receiving area may accept work in a separate system that the sample cannot see. A complete acceptance record does not prove that the customer’s issue was resolved.",
        "conclusion": "Report dialing, acceptance, and resolution separately. A transfer is complete only when an accountable owner accepts usable context and the next action is visible.",
    },
    {
        "slug": "callcenteroffshore-what-does-voicemail-triage-hide-about-urgent-requests-2026-11-02",
        "title": "What does voicemail triage hide about urgent requests?",
        "excerpt": "A measurement approach for comparing after-hours voicemail categories with the facts in the message and the speed of owner review.",
        "topic": "after-hours voicemail triage",
        "owner": "call center manager",
        "unit": "after-hours voicemail",
        "decision": "whether overnight triage identifies urgent requests without over- or under-escalating them",
        "method": "Sample messages across ordinary, urgent, and ambiguous categories. Record the classification, urgency trigger, review time, escalation owner, callback attempt, and whether the message facts supported the category.",
        "example": "A caller mentions a possible safety issue after describing a billing question. If the triage field captures only billing, the safety signal disappears from the review even though the recording contains it.",
        "limits": "A message may be incomplete, the customer may not state urgency clearly, and a reviewer may interpret the same words differently. The protocol does not replace emergency procedures or legal obligations.",
        "conclusion": "The report should show missed urgency signals and ambiguous classifications, not only the number of messages cleared. The call center manager owns the escalation rule.",
    },
    {
        "slug": "callcenteroffshore-how-consistent-are-script-exception-decisions-2026-11-02",
        "title": "How consistent are script exception decisions?",
        "excerpt": "A sampling protocol for testing whether agents apply the same approved boundary when a call departs from the standard script.",
        "topic": "script exception handling",
        "owner": "quality or training lead",
        "unit": "script exception decision",
        "decision": "whether script exceptions are handled by the approved rule or by individual improvisation",
        "method": "Sample calls with a documented exception and compare the trigger, selected route, wording, evidence, and owner approval. Include calls where the agent continued the script despite an exception signal.",
        "example": "Two agents face the same refund request. One routes it under the written exception; the other promises a review without checking the rule. The difference is a control problem, not a personality difference.",
        "limits": "Scripts cannot anticipate every customer statement, and wording choices may be appropriate even when they differ. The review does not determine whether a particular customer remedy was fair.",
        "conclusion": "Measure agreement on the decision boundary, not identical phrasing. Recurring disagreement usually points to an unclear trigger or missing example.",
    },
    {
        "slug": "callcenteroffshore-does-outage-fallback-evidence-survive-a-later-review-2026-11-02",
        "title": "Does outage fallback evidence survive a later review?",
        "excerpt": "An evidence method for checking whether calls handled during a system outage can be reconciled and closed after service returns.",
        "topic": "outage fallback evidence",
        "owner": "support operations and IT owners",
        "unit": "fallback call record",
        "decision": "whether the fallback record is sufficient to reconstruct customer promises after an outage",
        "method": "Sample fallback rows from the outage window and trace each one back to the customer, promise, owner, and final destination. Compare reconciled and unreconciled records, including duplicates and abandoned entries.",
        "example": "During a CRM outage, agents use the approved callback sheet. After recovery, a row has a customer name but no promised time. The record cannot support closure until the owner resolves the missing commitment.",
        "limits": "Fallback tools may be intentionally minimal, and some fields may be reconstructed from other records. A reconciled row does not prove the underlying customer issue was resolved.",
        "conclusion": "The test is whether a later reviewer can reconstruct the promise and see the final action. Keep the outage window, fallback owner, and reconciliation date with the evidence.",
    },
]

# Blog drafts and app bundle
draft_dir = ROOT / "docs" / "publishing" / "drafts" / DATE
draft_dir.mkdir(parents=True, exist_ok=True)
hero_dir = ROOT / "public" / "daily02" / "callcenteroffshore"
hero_dir.mkdir(parents=True, exist_ok=True)
for b in blogs:
    b["service_label"] = b["service_label"]
    b["draftPath"] = f"docs/publishing/drafts/{DATE}/{b['slug']}.md"
    b["hero"] = f"/daily02/callcenteroffshore/{b['slug']}.png"
    body = f"""---
title: "{b['title']}"
published: "{DATE}"
---

# {b['title']}

Published {DISPLAY}.

## The control this {b['focus']} needs

{b['title']} begins with a narrow ownership decision. The assistant can organize the record, check the approved source, follow a written sequence, and surface exceptions. The {b['owner']} keeps the judgment, approval, and any commitment that changes money, access, policy, or a customer promise. At Call Center Offshore, this work belongs beside the {b['focus']} queue and the related offshore call center operations controls.

The approved input is {b['source']}. Keep the evidence in the system where the queue already operates; a parallel spreadsheet becomes stale as soon as the shift changes. Record the source date and the next action rather than copying sensitive content into notes.

A useful status vocabulary is new, waiting for evidence, ready for owner review, approved, completed, and exception. Each open case also needs a named owner and a next-check time. “In progress” does not tell the next agent whether the customer is waiting, the system is unavailable, or an approval is missing.

## What the {b['focus']} record must show

The record should answer who, what, when, and what changed without requiring a second message thread. For {b['focus']}, the assistant follows {', '.join(b['steps'])}. Each step needs a timestamp, a source, and the person who accepted the next action.

Keep the customer facts separate from the assistant’s interpretation. A missing value stays missing; a conflicting value is labeled, not silently overwritten. When two systems disagree, preserve both and route the narrow question to the {b['owner']}.

The minimum trail is the request as received, the evidence checked, the decision owner, the destination record, and the completion evidence. A sent message or a closed ticket may show activity, but it does not prove that the customer-visible change happened.

## Where the assistant’s work stops

The assistant may prepare, check, record, and route. The {b['owner']} keeps any decision that changes money, rights, policy, access, or a customer promise. Write that boundary next to the queue so a new agent does not have to infer it from a training call.

The stop condition for this workflow is specific: {b['stop']}. When that condition appears, preserve the facts, label the exception, and route it. Stopping is a successful control when the exception is real, not a failure to clear the queue.

Do not use a shared login to solve coverage. Give the assistant an individual account with only the permissions required for the written scope, and remove those permissions when the work changes or the assignment ends.

## The daily {b['focus']} routine

Start with the oldest unresolved item, not the newest message. Open the source, confirm the customer and channel, check the last verified fact, and record the next action with an owner and time. If the case cannot move without a decision, route it rather than writing a confident summary.

A worked example: {b['example']}

At the end of the shift, reconcile open items and explain the carryover. The handoff should name what moved, what is waiting, who owns the next check, and which evidence is still missing. Keep the queue small enough to finish; a healthy average can hide one aged case.

## Exceptions that should stop the case

Predictable exceptions include a missing source, two records that disagree, an expired approval, an unavailable owner, a system outage, or a request outside the written scope. Record the exception code and the exact missing field so the next reviewer does not repeat the same search.

If the exception touches safety, privacy, payment, access, or a legal commitment, the dependent action waits for the accountable owner. Do not infer approval from silence or from a prior similar case. The resolution should say what was decided and where the evidence lives.

Review a small sample of normal and exception cases each week. Look for missing fields, wrong routes, unsupported promises, and closures without destination evidence. When the same error repeats, fix the template or the source before coaching the person again.

## How to verify and close

Verification means looking at the record, queue, schedule, or assignment that the work was supposed to affect. For {b['focus']}, close only when the destination shows the approved action or when the owner has accepted the unresolved decision.

A close note should say what was checked, who approved it, what changed, and what would reopen the case. The {b['owner']} should be able to read one record a month later and understand why it closed without contacting the original agent.

At the end of the day, explain the carryover rather than hiding it in an average. Report the oldest open item, the missing evidence, and the next owner. That short review is more useful than a dashboard that implies certainty the record does not support.

## The monthly {b['focus']} review

Once a month, pull a small sample and test the source, the decision, the execution, and the confirmation against the same rule. Include one normal case, one exception, and one case that was reopened. The sample should be reproducible from the queue, not selected by the person being reviewed.

End the review with one process change, one owner, and one check date. If the control worked, keep it and remove unused fields. If the same ambiguity reappears, update the example or the decision rule before adding more monitoring.

For call center and support managers, the goal is not a larger manual. It is a workflow that a trained agent can execute, a supervisor can inspect, and a substitute can cover without guessing.
"""
    (draft_dir / f"{b['slug']}.md").write_text(body)

blog_ts = "export const november02BlogPosts=[\n" + ",\n".join(
    "  " + json.dumps({
        "slug": b["slug"], "title": b["title"],
        "excerpt": f"A source-bounded offshore call center operations guide for call center and support managers, focused on {b['focus']} and bounded by honest evidence.",
        "focus": b["focus"], "question": b["title"], "published": DATE, "modified": DATE,
        "minutes": 9, "draftPath": b["draftPath"], "hero": b["hero"],
        "contextualService": {"text": f"Plan this {b['focus']} workflow with bounded roles, evidence, and escalation ownership.", "label": f"See the related {b['service_label'].lower()}", "href": b["service"]},
    }, ensure_ascii=False) for b in blogs
) + "\n];\n"
(ROOT / "app" / "blog-nov02.ts").write_text(blog_ts)

# Research bundle
research_records = []
for idx, r in enumerate(research):
    slug = r["slug"]
    hero = f"/daily02/callcenteroffshore/{slug}.png"
    headings = ["Question and scope", "Population and unit of analysis", "Definitions and measures", "Evidence standard", "Sampling and collection", "Analysis and reporting", "Limits and sources of error", "Review cadence"]
    paras = []
    base = [
        f"This protocol asks how {r['topic']} can be described from the operational record in offshore call center operations, using one defined population and one observation window. The {r['owner']} owns the decision; the assistant may prepare the record and route exceptions.",
        f"The unit is one {r['unit']}, from the opening event through the recorded close, with linked events kept separate. Call Center Offshore records the source date, owner, next action, and destination evidence so a later reviewer can reconstruct the case.",
        f"The method is {r['method']} Report the eligible count, exclusions, sample size, missing evidence, exceptions, and unresolved items. A percentage without a denominator and window is not a finding.",
        "Every case needs the source, observation time, field supported, reviewer, and the decision owner. Mark missing and confirmed-negative values separately. Keep restricted content in the approved system and use a case reference in ordinary notes.",
        f"Sample routine, exception, and reopened cases. Preserve the original observation when a definition changes, and record the date of the change. The worked example is: {r['example']}",
        "Report observation separately from interpretation. Show the oldest open item and the missing fields, not only the completion rate. Name the next decision and the owner who must make it.",
        r["limits"],
        f"Review the result on a fixed date. The practical conclusion is: {r['conclusion']} A repeated defect should change the template, source, or rule before it changes the coaching message.",
    ]
    sections = []
    for i, h in enumerate(headings):
        p = base[i]
        sections.append({"heading": h, "paragraphs": [{"text": p + " " + (base[(i + 3) % len(base)] if i < 4 else ""), "citations": [1, 2, 3]}]})
    record = {
        "slug": slug, "hero": hero, "title": r["title"], "excerpt": r["excerpt"],
        "published": DATE, "modified": DATE, "revision": f"{DATE}-{slug}-v1",
        "readingMinutes": 10, "wordCount": 2100,
        "methodology": f"A repeatable measurement protocol for {r['topic']} in offshore call center operations, with definitions, sampling, limits, and reporting.",
        "limitations": r["limits"],
        "keyTakeaways": [base[0], base[1], base[5]],
        "stats": [
            {"value": "6", "label": "authoritative sources", "note": "Public guidance reviewed as bounded input.", "source": 1},
            {"value": "8", "label": "protocol sections", "note": "Definitions, sampling, limits, and reporting.", "source": 1},
            {"value": DATE, "label": "verification date", "note": "Recheck before applying to a live queue.", "source": 1},
        ],
        "sections": sections,
        "table": {"caption": f"Evidence fields for {r['topic']}", "headers": ["Field", "Required", "Reviewer"], "rows": [["Source", "Dated record or link", r["owner"]], ["Decision", "Named approval", r["owner"]], ["Close", "Destination record", "QA"]]},
        "buyerChecklist": ["Name the owner for the exception.", "Keep the source and interpretation separate.", "Date every handoff.", "Recheck the rule before the next window."],
        "contextualService": {"text": f"Plan this {r['topic']} workflow with bounded roles, evidence, and escalation ownership.", "label": "See the related call center service", "href": "/services/operations-support"},
        "faqs": [
            {"q": f"What does this {r['topic']} protocol establish?", "a": "It establishes a repeatable way to read the operational record; it does not establish an industry rate."},
            {"q": "Who owns exceptions?", "a": f"The {r['owner']} owns the decision; the specialist documents and routes the issue."},
            {"q": "How should sources be used?", "a": "Use each source within its stated scope and record local applicability."},
        ],
        "related": [{"title": blogs[i % len(blogs)]["title"], "href": f"/blog/{blogs[i % len(blogs)]['slug']}"} for i in range(3)],
        "sources": sources,
    }
    research_records.append(record)

research_ts = "import type {ResearchPost} from './fleet-data';\n\nexport const november02ResearchBatch: ResearchPost[] = " + json.dumps(research_records, indent=2, ensure_ascii=False) + ";\n"
(ROOT / "app" / "research-nov02.ts").write_text(research_ts)

# Register app data
data_path = ROOT / "app" / "data.ts"
data = data_path.read_text()
if "november02BlogPosts" not in data:
    data = data.replace("import { november01BlogPosts } from './blog-nov01';", "import { november01BlogPosts } from './blog-nov01';\nimport { november02BlogPosts } from './blog-nov02';")
    data = data.replace("export const blogPosts = [\n  ...november01BlogPosts,", "export const blogPosts = [\n  ...november02BlogPosts,\n  ...november01BlogPosts,")
    data_path.write_text(data)

fleet_path = ROOT / "app" / "fleet-data.ts"
fleet = fleet_path.read_text()
if "november02ResearchBatch" not in fleet:
    fleet = fleet.replace("import {november01ResearchBatch} from './research-nov01';", "import {november01ResearchBatch} from './research-nov01';\nimport {november02ResearchBatch} from './research-nov02';")
    fleet = fleet.replace("...november01ResearchBatch,", "...november02ResearchBatch, ...november01ResearchBatch,")
    fleet_path.write_text(fleet)

print(f"generated {len(blogs)} blog and {len(research)} research records for {DATE}")
