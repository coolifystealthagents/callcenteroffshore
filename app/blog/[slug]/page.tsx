import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return {
    title: p?.title || 'Guide',
    description: p?.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: p?.title,
      description: p?.excerpt,
      url: `https://callcenteroffshore.com/blog/${slug}`,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const detail = blogDetails[slug as keyof typeof blogDetails];
  const url = `https://callcenteroffshore.com/blog/${p.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: site.brand },
    publisher: { '@type': 'Organization', name: site.brand, url: 'https://callcenteroffshore.com' },
    citation: detail?.sources?.map((source) => source.url),
    hasPart: detail?.sections?.map((section, index) => ({
      '@type': 'WebPageElement',
      name: section.heading,
      position: index + 1,
    })),
  };
  const faqSchema = detail ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://callcenteroffshore.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://callcenteroffshore.com/blog' },
      { '@type': 'ListItem', position: 3, name: p.title, item: url },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={articleSchema} />
        {faqSchema ? <JsonLd data={faqSchema} /> : null}
        <JsonLd data={breadcrumbSchema} />
        <article className="container" style={{ maxWidth: 920 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{p.title}</h1>
          <p className="lead">{detail?.summary || p.excerpt}</p>

          {detail ? (
            <>
              <div className="card" style={{ margin: '28px 0' }}>
                <h2>The short answer</h2>
                <ul>
                  {detail.keyTakeaways.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className="cards" style={{ gridTemplateColumns: '1fr', margin: '28px 0' }}>
                {detail.sections.map((section) => (
                  <section className="card" key={section.heading}>
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>

              <section className="card" style={{ margin: '28px 0', overflowX: 'auto' }}>
                <h2>Weak answer vs strong answer</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                  <thead>
                    <tr>
                      <th style={cellStyle}>Provider question</th>
                      <th style={cellStyle}>Weak answer</th>
                      <th style={cellStyle}>Strong answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.comparison.map((row) => (
                      <tr key={row.question}>
                        <td style={cellStyle}>{row.question}</td>
                        <td style={cellStyle}>{row.weak}</td>
                        <td style={cellStyle}>{row.strong}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section className="card" style={{ margin: '28px 0' }}>
                <h2>Copy-ready questions for your call</h2>
                <div style={{ display: 'grid', gap: 12 }}>
                  {detail.script.map((line) => (
                    <p className="quote" key={line} style={{ margin: 0 }}>"{line}"</p>
                  ))}
                </div>
              </section>

              <section className="card" style={{ margin: '28px 0' }}>
                <h2>Sources used</h2>
                <ul>
                  {detail.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url}>{source.name}</a>: {source.note}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card" style={{ margin: '28px 0' }}>
                <h2>FAQ</h2>
                {detail.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </section>
            </>
          ) : (
            <div className="card">
              <h2>Start with one call queue</h2>
              <p>Choose a queue with repeat call types, real examples, and an available manager. Write down what agents can answer, which calls they must escalate, and what every call record must contain.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Recent call examples and approved answers</li>
                <li>Coverage hours, volume, and overflow rules</li>
                <li>Phone, CRM, inbox, or calendar access</li>
                <li>A manager for refunds, exceptions, and sensitive calls</li>
              </ul>
              <h2>What to ask the provider</h2>
              <ul>
                <li>Who checks an agent's phone skills?</li>
                <li>How are call samples scored?</li>
                <li>Who covers an absence?</li>
                <li>How do you remove access when an agent leaves?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

const cellStyle = {
  border: '1px solid var(--line)',
  padding: '12px',
  textAlign: 'left' as const,
  verticalAlign: 'top' as const,
};
