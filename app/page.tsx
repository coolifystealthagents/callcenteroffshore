import { Header, Footer, JsonLd } from './components';

const channels = [
  { icon: '01', title: 'Inbound customer care', text: 'Route product questions, order updates, account support, and priority issues through a defined call flow.' },
  { icon: '02', title: 'Appointment setting', text: 'Give agents qualification prompts, calendar rules, disposition codes, and a clean handoff to your sales team.' },
  { icon: '03', title: 'After-hours coverage', text: 'Extend response windows with approved answers, on-call escalation paths, and a next-day summary for your team.' },
  { icon: '04', title: 'Reporting and QA', text: 'Review call samples, score against agreed criteria, document coaching, and track the issues that need a process fix.' },
];

const launch = [
  ['01', 'Map the queue', 'Define call types, expected volume, coverage windows, languages, tools, and the decisions that stay with your team.'],
  ['02', 'Build the playbook', 'Turn real calls into scripts, knowledge notes, disposition rules, escalation paths, and QA criteria.'],
  ['03', 'Shadow and calibrate', 'Start with sample calls and daily review so agents and managers agree on what a good interaction sounds like.'],
  ['04', 'Go live with control', 'Launch a narrow queue, review misses, coach the team, and expand only after the operating rhythm is stable.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Call Center Offshore',
    url: 'https://callcenteroffshore.com',
    description: 'Independent planning resource for offshore call center coverage, scripts, quality assurance, and escalation design.',
  };

  return <>
    <Header />
    <main className="cco-command">
      <JsonLd data={schema} />
      <section className="cco-hero">
        <div className="cco-grid-bg" aria-hidden="true" />
        <div className="container cco-hero-grid">
          <div className="cco-hero-copy">
            <p className="cco-kicker"><span /> Offshore coverage, designed to run cleanly</p>
            <h1>Offshore call center teams built around your call flow.</h1>
            <p className="cco-lead">Plan inbound support, appointment setting, and after-hours coverage with the scripts, QA scorecards, reporting, and escalation rules your operation needs.</p>
            <div className="cco-actions">
              <a className="cco-btn cco-btn-primary" href="/contact">Request a coverage plan <span>↗</span></a>
              <a className="cco-btn cco-btn-ghost" href="#services">Explore service lanes</a>
            </div>
            <p className="cco-fine">Share the queue first. We will scope the work before discussing staffing.</p>
          </div>

          <div className="cco-ops-shell" aria-label="Example offshore coverage plan">
            <div className="cco-photo">
              <img src="/offshore-call-center-agent.jpg" alt="Offshore call center agent working at a support desk" />
              <div className="cco-live"><i /> COVERAGE DESK</div>
            </div>
            <div className="cco-console">
              <div className="cco-console-head"><span>QUEUE BLUEPRINT</span><b>PLANNING VIEW</b></div>
              <div className="cco-signal"><span>Inbound support</span><strong>Business + overflow</strong></div>
              <div className="cco-signal"><span>Escalation owner</span><strong>Named manager</strong></div>
              <div className="cco-signal"><span>Quality review</span><strong>Sample + coaching note</strong></div>
              <div className="cco-wave" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
            </div>
          </div>
        </div>
        <div className="container cco-proofline">
          <span>OPERATING MODEL</span>
          <b>Scope before seats</b><b>Scripts before launch</b><b>QA before scale</b><b>Escalation by design</b>
        </div>
      </section>

      <section className="cco-section cco-services" id="services">
        <div className="container">
          <div className="cco-heading-row">
            <div><p className="cco-kicker cco-dark"><span /> Service lanes</p><h2>Coverage for the conversations that keep work moving.</h2></div>
            <p>Choose a focused starting queue. Each lane should have an owner, approved actions, tool access, and a clear definition of a successful handoff.</p>
          </div>
          <div className="cco-channel-grid">
            {channels.map((channel) => <a href="/contact" className="cco-channel" key={channel.icon}>
              <div><span>{channel.icon}</span><i>↗</i></div>
              <h3>{channel.title}</h3><p>{channel.text}</p><b>Scope this lane</b>
            </a>)}
          </div>
        </div>
      </section>

      <section className="cco-control">
        <div className="container cco-control-grid">
          <div className="cco-scorecard">
            <div className="cco-score-head"><span>CALL REVIEW / SAMPLE</span><b>QA FRAME</b></div>
            {[['Greeting and verification','Pass'],['Accurate resolution','Review'],['CRM notes and disposition','Pass'],['Escalation and next step','Pass']].map(([label,status],i)=><div className="cco-score-row" key={label}><span><i>{String(i+1).padStart(2,'0')}</i>{label}</span><b className={status==='Review'?'warn':''}>{status}</b></div>)}
            <p>Example criteria only. Your scorecard should match the queue, risk, and customer promise.</p>
          </div>
          <div className="cco-control-copy">
            <p className="cco-kicker"><span /> The control layer</p>
            <h2>Outsource the queue. Keep visibility.</h2>
            <p>Agents need a management system around them. Your team should be able to see call quality, open risks, and the customer issues that keep coming back.</p>
            <ul>
              <li><b>Approved response boundaries</b><span>Agents know what they can resolve and what must move to a manager.</span></li>
              <li><b>Visible coaching loop</b><span>Call samples turn into specific feedback and one documented improvement.</span></li>
              <li><b>Useful handoff records</b><span>Every interaction ends with notes, a disposition, and an accountable next step.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cco-section cco-launch">
        <div className="container">
          <div className="cco-heading-row">
            <div><p className="cco-kicker cco-dark"><span /> Launch sequence</p><h2>Move from queue map to live coverage.</h2></div>
            <p>A controlled launch makes quality easier to diagnose. Start narrow, calibrate with real examples, and add complexity after the basics hold.</p>
          </div>
          <div className="cco-launch-grid">{launch.map(([num,title,body])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="cco-fit">
        <div className="container cco-fit-grid">
          <div><p className="cco-kicker"><span /> Better-fit brief</p><h2>Bring a call queue instead of a vague request for more agents.</h2></div>
          <div className="cco-fit-list">
            {['Call types and sample interactions','Coverage hours and overflow rules','CRM, phone, inbox, and help-desk access','Escalations that stay with your managers','The call-review rhythm for the first weeks'].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}
          </div>
        </div>
      </section>

      <section className="cco-research-feature" aria-labelledby="research-feature-title">
        <div className="container cco-research-card">
          <div>
            <p className="cco-kicker"><span /> New evidence guide</p>
            <h2 id="research-feature-title">What Philippine call center market data can and cannot prove.</h2>
            <p>Read six direct sources, compare the headline numbers, and turn them into eight checks for your next provider proposal.</p>
          </div>
          <div className="cco-research-facts" aria-label="Guide details"><span><b>6</b> direct sources</span><span><b>8</b> buyer checks</span><span><b>12</b> minute read</span></div>
          <a className="cco-btn cco-btn-primary" href="/research/call-center-outsourcing-philippines-evidence-guide">Read the evidence guide <span>↗</span></a>
        </div>
      </section>

      <section className="cco-final">
        <div className="container cco-final-inner">
          <div><p className="cco-kicker"><span /> Build the coverage brief</p><h2>Start with the calls you need handled well.</h2><p>Tell us the queue, hours, tools, and quality expectations. Get a practical staffing scope for the next conversation.</p></div>
          <a className="cco-btn cco-btn-primary" href="/contact">Request a coverage plan <span>↗</span></a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
