import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header,Footer} from '../../components';
import {researchPosts,ResearchPost} from '../../fleet-data';
import {site} from '../../data';

const baseUrl = 'https://callcenteroffshore.com';

export function generateStaticParams(){
  return researchPosts.map(post=>({slug:post.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const post=researchPosts.find(item=>item.slug===slug);
  if(!post)return {};
  const canonical=`${baseUrl}/research/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates:{canonical},
    openGraph:{
      title:post.title,
      description:post.excerpt,
      url:canonical,
      siteName:site.brand,
      type:'article',
      publishedTime:post.published,
      modifiedTime:post.modified,
    },
    twitter:{card:'summary_large_image',title:post.title,description:post.excerpt},
  };
}

function SourceRefs({numbers,post}:{numbers?:readonly number[];post:ResearchPost}){
  if(!numbers?.length)return null;
  return <>{numbers.map(number=><sup key={number} className="research-citation"><a href={`#source-${number}`} aria-label={`Read source ${number}: ${post.sources[number-1]?.name}`}>[{number}]</a></sup>)}</>;
}

function displayDate(value:string){
  return new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${value}T00:00:00Z`));
}

export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post:ResearchPost|undefined=researchPosts.find(item=>item.slug===slug);
  if(!post)notFound();
  const canonical=`${baseUrl}/research/${post.slug}`;
  const articleId=`${canonical}#report`;
  const schema={
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'Report',
        '@id':articleId,
        headline:post.title,
        description:post.excerpt,
        url:canonical,
        datePublished:post.published,
        dateModified:post.modified,
        inLanguage:'en',
        articleSection:'Call center outsourcing research',
        wordCount:post.wordCount,
        author:{'@type':'Organization','@id':`${baseUrl}/#organization`,name:site.brand,url:baseUrl},
        publisher:{'@type':'Organization','@id':`${baseUrl}/#organization`,name:site.brand,url:baseUrl},
        mainEntityOfPage:{'@type':'WebPage','@id':canonical},
        citation:post.sources.map(source=>source.url),
        about:[
          {'@type':'Thing',name:'Call center outsourcing in the Philippines'},
          {'@type':'Place',name:'Philippines'},
        ],
      },
      {
        '@type':'BreadcrumbList',
        '@id':`${canonical}#breadcrumb`,
        itemListElement:[
          {'@type':'ListItem',position:1,name:'Home',item:baseUrl},
          {'@type':'ListItem',position:2,name:'Research',item:`${baseUrl}/research`},
          {'@type':'ListItem',position:3,name:post.title,item:canonical},
        ],
      },
      {
        '@type':'FAQPage',
        '@id':`${canonical}#faq`,
        mainEntity:post.faqs.map(faq=>({'@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}})),
      },
    ],
  };

  return <>
    <Header/>
    <main className="research-report" data-article-revision={post.revision}>
      <article>
        <header className="research-hero">
          <div className="container research-narrow">
            <nav className="research-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/research">Research</a><span>/</span><span aria-current="page">Evidence guide</span></nav>
            <p className="eyebrow">{site.brand} research</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <div className="research-meta"><time dateTime={post.published}>Published {displayDate(post.published)}</time><span>{post.readingMinutes} min read</span><span>{post.sources.length} direct sources</span></div>
          </div>
        </header>

        <div className="container research-layout">
          <div className="research-main">
            <section className="research-panel research-takeaways" aria-labelledby="takeaways-heading">
              <p className="research-label">The short answer</p>
              <h2 id="takeaways-heading">Key takeaways</h2>
              <ul>{post.keyTakeaways.map(item=><li key={item}>{item}</li>)}</ul>
            </section>

            <section aria-labelledby="headline-numbers-heading">
              <p className="research-label">Philippines and global comparison evidence</p>
              <h2 id="headline-numbers-heading">Six numbers to read with care</h2>
              <div className="research-stats">{post.stats.map(stat=><article className="research-stat" key={stat.label}>
                <strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.note} <SourceRefs numbers={[stat.source]} post={post}/></p>
              </article>)}</div>
            </section>

            {post.sections.slice(0,2).map(section=><section className="research-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph,index)=><p key={index}>{paragraph.text} <SourceRefs numbers={paragraph.citations} post={post}/></p>)}
            </section>)}

            <section className="research-table-section" aria-labelledby="evidence-table-heading">
              <h2 id="evidence-table-heading">How to turn the evidence into checks</h2>
              <div className="research-table-wrap"><table>
                <caption>{post.table.caption}</caption>
                <thead><tr>{post.table.headers.map(header=><th scope="col" key={header}>{header}</th>)}</tr></thead>
                <tbody>{post.table.rows.map((row,index)=><tr key={index}>{row.map((cell,cellIndex)=>cellIndex===0?<th scope="row" key={cell}>{cell}</th>:<td data-label={post.table.headers[cellIndex]} key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table></div>
            </section>

            {post.sections.slice(2).map(section=><section className="research-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph,index)=><p key={index}>{paragraph.text} <SourceRefs numbers={paragraph.citations} post={post}/></p>)}
            </section>)}

            <section className="research-panel" aria-labelledby="buyer-checklist-heading">
              <p className="research-label">Proposal checklist</p>
              <h2 id="buyer-checklist-heading">Eight items to put in writing</h2>
              <ol className="research-checklist">{post.buyerChecklist.map(item=><li key={item}>{item}</li>)}</ol>
            </section>

            <section className="research-method" aria-labelledby="method-heading">
              <h2 id="method-heading">Methodology and limitations</h2>
              <h3>How we built this guide</h3><p>{post.methodology}</p>
              <h3>What the evidence cannot tell you</h3><p>{post.limitations}</p>
            </section>

            <section className="research-cta" aria-labelledby="research-cta-heading">
              <p className="research-label">Plan a Philippines-based queue</p>
              <h2 id="research-cta-heading">Bring your call types, hours, and systems</h2>
              <p>We can help you turn them into a staffing brief with clear agent work, manager decisions, access limits, and a first-call review plan. The talent offered through this site is exclusively based in the Philippines.</p>
              <a className="btn primary" href="/contact">Plan your call center team</a>
            </section>

            <section className="research-faq" aria-labelledby="faq-heading">
              <p className="research-label">Common buyer questions</p>
              <h2 id="faq-heading">Frequently asked questions</h2>
              {post.faqs.map(faq=><details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
            </section>

            <section className="research-sources" aria-labelledby="sources-heading">
              <p className="research-label">Claim-level references</p>
              <h2 id="sources-heading">Sources</h2>
              <ol>{post.sources.map((source,index)=><li id={`source-${index+1}`} key={source.url}>
                <span className="source-kind">{source.kind}</span><a href={source.url} rel="noreferrer">{source.name}</a><p>{source.note}</p>
              </li>)}</ol>
            </section>

            <section className="research-related" aria-labelledby="related-heading">
              <h2 id="related-heading">Related planning guides</h2>
              <div>{post.related.map(item=><a className="card" href={item.href} key={item.href}>{item.title}<span>Read next →</span></a>)}</div>
              <p>Need help turning this research into a real queue plan? <a href="/contact">Contact the Philippines staffing team</a>.</p>
            </section>
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
    </main>
    <Footer/>
  </>;
}
