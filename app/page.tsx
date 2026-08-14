import { Header, Footer, JsonLd, VisualFigure } from './components';

const roles = [
  { title: 'Executive assistants', text: 'Protect the calendar, prepare meetings, organize the inbox, and keep commitments visible.', image: '/visuals/role-executive-assistant.svg', href: '/services/appointment-scheduling' },
  { title: 'Customer support assistants', text: 'Handle routine phone, email, and chat requests with approved answers and clean notes.', image: '/visuals/role-customer-support.svg', href: '/services/inbound-customer-care' },
  { title: 'Operations coordinators', text: 'Keep recurring tasks, orders, reports, and cross-team follow-ups moving each day.', image: '/visuals/role-operations-coordinator.svg', href: '/services/order-and-billing-support' },
  { title: 'Sales support assistants', text: 'Research leads, clean CRM records, run first-touch outreach, and coordinate booked calls.', image: '/visuals/role-sales-support.svg', href: '/services/outbound-lead-qualification' },
];

const launch = [
  ['01', 'Show us the work', 'Share the tasks, tools, hours, examples, and decisions that should stay with you.'],
  ['02', 'Meet matched talent', 'Review Philippines-based candidates against the actual role, not a generic job title.'],
  ['03', 'Build the playbook', 'Turn good examples into access rules, checklists, handoffs, and quality checks.'],
  ['04', 'Start with one lane', 'Launch a controlled set of work, review it closely, and fix gaps early.'],
  ['05', 'Grow with proof', 'Add duties or team members only after the workflow is steady and visible.'],
];

const comparison = [
  ['Solo freelancer', 'You manage hiring, training, backup, and quality alone', 'Best for a small, flexible task list'],
  ['Direct hire', 'You own the full recruiting and employment process', 'Best when you already have local operating support'],
  ['Managed Philippines team', 'Role matching, launch support, backup planning, and review structure', 'Best for repeatable work that must stay dependable'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', name: 'Call Center Offshore', url: 'https://callcenteroffshore.com', description: 'Philippines-based virtual assistants, executive assistants, customer support specialists, and outsourced teams.' },
      { '@type': 'Organization', '@id': 'https://callcenteroffshore.com/#organization', name: 'Call Center Offshore', url: 'https://callcenteroffshore.com', areaServed: 'Worldwide', knowsAbout: ['Philippines virtual assistants', 'Executive assistants', 'Outsourced support teams'] },
    ],
  };

  return <>
    <Header />
    <main className="cco-command" data-gi-rollout="two-illustration-packs-one-icon-pack">
      <JsonLd data={schema} />
      <section className="cco-hero cco-hero-rework">
        <div className="cco-grid-bg" aria-hidden="true" />
        <div className="container cco-hero-grid">
          <div className="cco-hero-copy">
            <p className="cco-kicker"><span /> Philippines-based virtual assistants</p>
            <h1>Build the support team your goals have been waiting for.</h1>
            <p className="cco-lead">Hire virtual assistants, executive assistants, and outsourced teams from the Philippines. Give them clear work, safe access, and a system that keeps you in control.</p>
            <div className="cco-actions"><a className="cco-btn cco-btn-primary" href="/contact-us">Plan my team <span>↗</span></a><a className="cco-btn cco-btn-ghost" href="#roles">See the roles</a></div>
            <div className="cco-hero-points"><span><i><img src="/icons/getillustrations/soft-color-icons-svg/global-travel-navigation-map-icon.svg" alt="Philippines talent location icon" width="24" height="24" /></i> Philippines-only talent</span><span><i><img src="/icons/getillustrations/soft-color-icons-svg/target-employee-hiring-user-icon.svg" alt="Role-first matching icon" width="24" height="24" /></i> Role-first matching</span><span><i><img src="/icons/getillustrations/soft-color-icons-svg/team-work-employee-transfer-icon.svg" alt="Manager handoff icon" width="24" height="24" /></i> Clear manager handoffs</span></div>
          </div>
          <div className="cco-hero-art">
            <img src="/illustrations/getillustrations/communication-illustrations-pack-svg/philippines-support-team.webp" alt="Illustration of a Philippines-based assistant managing customer conversations" />
            <div className="cco-floating-card cco-float-one"><b>INBOX</b><span>Sorted and owned</span></div>
            <div className="cco-floating-card cco-float-two"><b>NEXT STEP</b><span>Visible to the team</span></div>
          </div>
        </div>
        <div className="container cco-proofline"><span>ONE SUPPORT SYSTEM</span><b>Calendar</b><b>Inbox</b><b>Customers</b><b>Sales</b><b>Operations</b><b>Reporting</b></div>
      </section>

      <section className="cco-section cco-story">
        <div className="container cco-split">
          <div><p className="cco-kicker cco-dark"><span /> More than extra hands</p><h2>Turn a busy list into owned work.</h2><p className="cco-section-lead">A good assistant does not just wait for tasks. They learn the rhythm, keep the queue clean, and make sure the right person sees each exception.</p><div className="cco-mini-metrics"><div><b>01</b><span>Clear owner</span></div><div><b>02</b><span>Clear next step</span></div><div><b>03</b><span>Clear review</span></div></div></div>
          <VisualFigure src="/illustrations/getillustrations/inkdex-team-illustrations-svg/managed-team-workflow.svg" alt="Managed team work loop" caption="A simple work loop: receive, organize, approve, complete." className="cco-supporting-art" />
        </div>
      </section>

      <section className="cco-section cco-role-section" id="roles">
        <div className="container"><div className="cco-heading-row"><div><p className="cco-kicker cco-dark"><span /> Choose your support lane</p><h2>Start with the role that removes the biggest bottleneck.</h2></div><p>Your first role should own repeatable work with clear inputs and a visible finish line. Add more only when the first lane runs well.</p></div>
          <div className="cco-role-grid">{roles.map((role, index) => <a className="cco-role-card" href={role.href} key={role.title}><img src={role.image} alt={`Filipina professional working as a ${role.title.toLowerCase()}`} loading="lazy" /><div><span>0{index + 1}</span><h3>{role.title}</h3><p>{role.text}</p><b>Explore this role ↗</b></div></a>)}</div>
        </div>
      </section>

      <section className="cco-control cco-team-section">
        <div className="container cco-control-grid">
          <VisualFigure src="/visuals/philippines-outsourced-team.svg" alt="Philippines-based outsourced team of assistants and coordinators" />
          <div className="cco-control-copy"><p className="cco-kicker"><span /> One assistant or a full team</p><h2>Build around the outcome, not a seat count.</h2><p>Some businesses need one executive assistant. Others need a small team across support, sales, and operations. The same rule applies: define ownership before adding people.</p><ul><li><b>One named lane</b><span>Each person knows what they own and where it ends.</span></li><li><b>One review rhythm</b><span>Managers see open work, quality misses, and blockers.</span></li><li><b>One safe handoff</b><span>High-risk decisions stay with the right client owner.</span></li></ul></div>
        </div>
      </section>

      <section className="cco-section cco-comparison-section">
        <div className="container"><div className="cco-heading-row"><div><p className="cco-kicker cco-dark"><span /> Compare the setup</p><h2>Pick the support model you can manage well.</h2></div><p>No model is right for every job. The better choice is the one that matches your task volume, management time, need for backup, and quality risk.</p></div>
          <div className="cco-comparison-layout"><VisualFigure src="/visuals/managed-team-comparison.svg" alt="Visual comparison of freelancer, direct hire, and managed Philippines team models" /><div className="cco-compare-list">{comparison.map(([name, support, fit], index) => <article className={index === 2 ? 'recommended' : ''} key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{support}</p><small>{fit}</small></div></article>)}</div></div>
        </div>
      </section>

      <section className="cco-section cco-launch">
        <div className="container"><div className="cco-heading-row"><div><p className="cco-kicker cco-dark"><span /> A safer launch</p><h2>From role brief to reliable support.</h2></div><p>A controlled first month makes weak instructions, access gaps, and hiring mismatch easier to spot before the role gets bigger.</p></div>
          <VisualFigure src="/visuals/launch-roadmap.svg" alt="Five-stage roadmap for launching a Philippines virtual assistant" className="cco-wide-visual" />
          <div className="cco-launch-grid cco-launch-five">{launch.map(([num, title, body]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="cco-dark-feature"><div className="container cco-split reverse"><div><p className="cco-kicker"><span /> Visibility without micromanaging</p><h2>See the work without living in every task.</h2><p className="cco-section-lead">A useful dashboard does not need dozens of vanity numbers. Start with open work, overdue items, quality misses, escalations, and the next owner.</p><div className="cco-stat-bars"><div><span>Work owned</span><i style={{ width: '92%' }} /></div><div><span>Handoffs recorded</span><i style={{ width: '78%' }} /></div><div><span>Exceptions reviewed</span><i style={{ width: '86%' }} /></div><small>Illustrative operating view, not performance claims.</small></div></div><VisualFigure src="/visuals/operations-dashboard.svg" alt="Virtual assistant operations dashboard showing tasks, trends, and reviews" /></div></section>

      <section className="cco-research-feature"><div className="container cco-research-card"><div><p className="cco-kicker"><span /> Evidence before promises</p><h2>What Philippine outsourcing data can and cannot tell you.</h2><p>Use direct sources to understand the market, then test the provider, person, workflow, and controls that will touch your customers.</p></div><div className="cco-research-facts"><span><b>6</b> direct sources</span><span><b>8</b> buyer checks</span><span><b>12</b> minute read</span></div><a className="cco-btn cco-btn-primary" href="/research/call-center-outsourcing-philippines-evidence-guide">Read the evidence guide <span>↗</span></a></div></section>

      <section className="cco-final"><div className="container cco-final-inner"><div><p className="cco-kicker"><span /> Your next hire starts here</p><h2>Show us what is slowing the team down.</h2><p>Tell us the recurring work, tools, schedule, and decisions involved. We will shape a practical Philippines-based staffing plan around it.</p></div><a className="cco-btn cco-btn-primary" href="/contact-us">Plan my team <span>↗</span></a></div></section>
    </main>
    <Footer />
  </>;
}
