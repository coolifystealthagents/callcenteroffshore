export type September8BlogPost = {
  slug: string; title: string; excerpt: string; minutes: number; focus: string; question: string;
  published: '2026-09-08'; modified: '2026-09-08'; body: readonly string[];
};

const post = (slug:string,title:string,excerpt:string,focus:string,question:string,body:readonly string[]):September8BlogPost => ({
  slug,title,excerpt,minutes:9,focus,question,published:'2026-09-08',modified:'2026-09-08',body,
});

export const september8BlogPosts: readonly September8BlogPost[] = [
  post('offshore-call-center-callback-number-verification','Verify a callback number before the offshore call center returns a call','A short read-back routine prevents callbacks from reaching the wrong person or an outdated number.','callback number verification','How should an offshore call center verify a callback number?',[
    'A number displayed on an incoming call is not automatically the right callback number. The customer may be calling from work, using a shared phone, or asking for help on someone else\'s account. Before ending the conversation, the agent should ask which approved number to use and read it back digit by digit.',
    'The case note should show the number type, the customer\'s permitted contact window, the time zone, and whether voicemail is allowed. Keep the number in the approved customer record. Do not copy it into a personal note or an unapproved messaging tool.',
    'Verification of a callback number does not replace identity checks. If the next agent must discuss protected account details, that agent still follows the normal verification steps when contact resumes. A successful ring only proves that someone answered the number.',
    'Quality reviewers can sample promised callbacks and compare the number used with the customer\'s recorded choice. Wrong-number events, unanswered calls, and disputed voicemail messages should remain separate so managers repair the right part of the routine.',
  ]),
  post('call-center-hold-return-check-in','What call center agents should say when a hold takes longer than expected','Set a return interval, explain what is still being checked, and give the customer a choice to keep waiting.','hold return check-ins','How should a call center agent return to a customer during a long hold?',[
    'A customer should not have to wonder whether the line dropped. Before placing a caller on hold, the agent should explain the check being made and set a realistic time for returning. If the work takes longer, come back at that time even when there is no final answer.',
    'The update can be brief: what has been completed, what remains open, and how much more time the next check may take. The customer can then choose to remain on hold, receive an approved callback, or use another available route.',
    'Do not invent progress to fill the silence. If a specialist has not replied, say that the reply is still pending. Keep ownership of the original conversation visible until another agent or queue has accepted it.',
    'Review long holds by listening for the initial expectation and each return. Average hold time alone will not show whether customers received useful updates or whether a transfer quietly replaced a promised check.',
  ]),
  post('philippines-call-center-shift-transport-disruption','Philippines call center handoffs during transport disruption','Protect employee safety and customer commitments when local transport problems affect a shift.','shift transport disruption','How should a Philippines call center handle shift transport disruption?',[
    'Transport disruption can reduce staffing before a shift begins or delay the handoff between teams. Supervisors need one check-in route for employee safety and a separate view of the queues, appointments, and callbacks that may lose coverage.',
    'Set a decision time for moving unaccepted work. The handoff should name each customer promise, its deadline, the checks already completed, and the person who accepted the next action. A general message that the next shift is short-staffed is not enough.',
    'Remote work or schedule changes should follow existing access and workforce rules. A disruption does not justify moving customer data to a personal device or asking an employee to travel through unsafe conditions.',
    'After service stabilizes, compare forecast coverage with actual logins, queue arrivals, missed promises, and backup use. The review should improve the continuity plan and should not treat an external transport problem as individual misconduct.',
  ]),
  post('offshore-call-center-case-note-correction','Correcting an offshore call center case note without hiding the original record','Add a clear correction with an author, time, reason, and downstream notification.','case note correction','How should an offshore call center correct an inaccurate case note?',[
    'An inaccurate note can misdirect the next agent, but silently replacing it removes useful history. Use the system\'s correction or addendum function so the original entry, correction time, author, and reason remain visible.',
    'State the exact fact being corrected and the source used to confirm it. Avoid rewriting the whole story when one date, amount, status, or customer preference is wrong. The corrected note should also identify any promise or decision affected by the error.',
    'If another queue already acted on the original note, notify the current owner through the approved channel. Adding an accurate sentence to the record does not recall an email, reverse a payment, or change a decision already made.',
    'Review corrections for repeated field errors, delayed discovery, and downstream impact. Treat honest corrections as evidence for better forms and coaching. Discouraging them leaves the operational record less trustworthy.',
  ]),
  post('call-center-outbound-voicemail-boundaries','Call center voicemail messages that disclose only what the customer approved','Use a neutral identity, a safe callback route, and the customer\'s recorded voicemail preference.','outbound voicemail boundaries','What can a call center safely include in an outbound voicemail?',[
    'A voicemail may be heard by family members, coworkers, or anyone with access to the device. Before leaving one, the agent should check the customer\'s recorded permission and the approved wording for that queue.',
    'A safe message usually identifies the permitted organization or service name, gives an approved callback number, and states when the line is available. Account details, complaint topics, balances, health information, and verification answers should stay out unless a specific approved process allows them.',
    'The case record should capture the attempt time, number used, whether a message was left, the template or wording category, and the next scheduled action. Do not paste the customer\'s sensitive request into a free-text voicemail note.',
    'Quality review should compare the recording with the customer\'s preference and the queue standard. Separate unauthorized disclosure from a harmless wording variation so any response matches the actual risk.',
  ]),
  post('offshore-call-center-policy-version-check','The policy-version check before an offshore agent gives an answer','Confirm the effective date and customer context instead of relying on a familiar old article.','policy version checks','How can an offshore call center agent confirm the right policy version?',[
    'A familiar article may no longer control the customer\'s request. The agent should check the version, effective date, covered product or market, and any notice that points to a replacement before quoting a rule or promising an outcome.',
    'The case note needs the source title or identifier and the decision it supported. If two current-looking sources conflict, stop and ask the named policy owner which one applies. Personal bookmarks and old training screenshots are not controlled sources.',
    'The customer may have started a transaction under an earlier rule. Effective-date questions should go to the authorized owner when the knowledge article does not address that boundary. Frontline staff should not resolve the ambiguity by choosing the more convenient version.',
    'Managers can review cases around policy changes and compare the cited source with the request date. Repeated use of retired material may point to search ranking, broken links, unclear labels, or a training gap.',
  ]),
  post('call-center-customer-interruption-recovery','Recovering the customer\'s request after a call center interruption','Repeat the last confirmed point and reopen the unfinished question after audio or system disruption.','interruption recovery','How should a call center recover after an interruption?',[
    'A brief audio loss can cause the agent and customer to continue from different assumptions. When contact returns, the agent should name the last point both sides confirmed and ask the customer to repeat anything that may have been missed.',
    'If the interruption happened during identity verification, consent, an amount, an address, or a deadline, repeat the relevant step. Do not record a partial response as complete because the call timer continued running.',
    'For a disconnected call, follow the approved callback rule and use the verified number. The note should show where the conversation stopped, what remained unanswered, whether contact resumed, and who owns the next attempt.',
    'Review interrupted contacts alongside audio and system events. Handle network failure, customer disconnection, agent tool failure, and deliberate call release as different events. Their fixes are not interchangeable.',
  ]),
  post('offshore-call-center-internal-chat-summary','Internal chat summaries that make offshore call center decisions traceable','Move the decision, owner, and source into the case record without copying an entire chat thread.','internal chat summaries','What should an offshore call center copy from internal chat into a case?',[
    'A specialist may answer a case question in internal chat, but the next shift may not have access to that thread. The agent should place the operational decision in the approved case record while the conversation is still open.',
    'Capture the question asked, the answer received, the decision owner, the source or policy referenced, the time, and the customer action that follows. A screenshot of a long chat makes the next agent search for the relevant line and may expose unrelated cases.',
    'Chat advice does not expand the speaker\'s authority. If the answer covers a financial, legal, privacy, safety, or exception decision, confirm that the person giving it is the designated owner before acting.',
    'Review cases that cite internal chat for missing sources and unclear ownership. A repeated question may deserve a controlled knowledge article, but only the content owner should publish or approve that change.',
  ]),
  post('call-center-missed-callback-repair','How a call center should repair a missed callback promise','Acknowledge the missed window, confirm the current need, and assign a new commitment to a named owner.','missed callback repair','What should a call center do after missing a promised callback?',[
    'Start with the missed commitment. The customer should not have to prove that the callback window passed. Confirm whether the original request is still open and whether any consequence has changed since the promise was made.',
    'The case record should show the original window, the reason visible in the record, contact attempts, the customer\'s current preference, and the owner of the repair. Do not offer another exact time unless the receiving queue can accept it.',
    'An apology does not resolve the underlying request. Complete the safe work available now and route any decision that remains outside frontline authority. Keep both the service recovery and the substantive case visible.',
    'Managers should read missed callbacks by cause: bad time conversion, wrong number, absent owner, queue load, tool failure, or an unrecorded attempt. One combined percentage will not tell them which control failed.',
  ]),
  post('philippines-call-center-cross-midnight-date-readback','Cross-midnight date read-backs for Philippine call center teams','Say the date, time, and time zone when a customer promise crosses a Philippine shift boundary.','cross-midnight date read-backs','How should a Philippine call center confirm dates across time zones?',[
    'A customer\'s Tuesday evening may already be Wednesday in the Philippines. Saying tomorrow or later tonight leaves room for two valid interpretations. Read back the calendar date, local time, and named time zone for any deadline or appointment near midnight.',
    'Store the customer-facing time and the queue\'s working time together. The next shift should not have to infer the conversion from a phone prefix or account address. Include the daylight rule used when the customer\'s region observes seasonal changes.',
    'If the scheduling tool changes the displayed date after conversion, confirm the customer-facing version before saving. Escalate any mismatch rather than placing duplicate appointments to cover both possibilities.',
    'Sample bookings near the date boundary and compare what the customer heard with what the receiving queue saw. Early and late attempts should trace back to the source time, conversion, and handoff.',
  ]),
  post('offshore-call-center-supervisor-approval-record','Recording supervisor approval in an offshore call center case','Preserve the request, decision, limits, and approver without turning a chat reaction into authorization.','supervisor approval records','What should an offshore call center record for supervisor approval?',[
    'A supervisor approval should answer a specific request. The case needs the proposed action, relevant customer facts, policy boundary, decision, any limits, approver identity, and approval time. A thumbs-up in a busy chat may not show what was approved.',
    'The agent should read any conditions before acting. Approval for a fee adjustment, disclosure, schedule change, or exception may apply only to the amount, channel, customer, or time described in the request.',
    'If the case changes materially, ask again. Do not stretch an earlier approval to cover a new amount or a different customer request. Keep the original decision in place and add the later decision as a separate entry.',
    'Quality review should test whether the approver had the required authority and whether the completed action stayed within the recorded limit. Counting approvals alone says little about control quality.',
  ]),
  post('call-center-customer-silence-chat-close','Closing a silent customer chat without losing unfinished work','Give a clear warning, record the open question, and distinguish chat closure from case resolution.','silent chat closure','How should a call center close a chat when the customer stops responding?',[
    'A silent chat session may need to close, but the customer\'s request may still be open. The agent should send the approved warning, state the remaining question or next step, and explain how the customer can return.',
    'The note should record the last customer message, checks completed, warning time, closure time, unresolved work, and any promise that survives the session. Do not mark the case resolved merely because the chat platform ended the connection.',
    'If the open issue involves a deadline, safety concern, payment action, complaint, or another protected workflow, follow that queue\'s escalation rule. Customer silence does not cancel duties that the organization has already accepted.',
    'Review silent closures for reasonable wait periods, clear warnings, repeat contacts, and reopened cases. The aim is to distinguish abandoned conversations from work the operation failed to carry forward.',
  ]),
];
