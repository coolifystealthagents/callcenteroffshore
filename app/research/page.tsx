import { Header, Footer } from "../components";
import Image from "next/image";
import { researchPosts } from "../fleet-data";
import { site } from "../data";
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
const fallbackImage = "/images/service-photography/call-quality-monitoring-8117473.jpg";
export const metadata = {
  title: `Research | ${site.brand}`,
  description:
    "Original research and source-backed analysis for planning Philippines-based support.",
  alternates: { canonical: "https://callcenteroffshore.com/research" },
};
export default function Research() {
  return (
    <>
      <Header />
      <main className="research-index-page">
        <section className="research-hero">
          <div className="container research-hero-grid">
            <div>
              <p className="eyebrow">Research Library</p>
              <h1>Source-backed research for better staffing decisions</h1>
              <p className="lead">
                Use these reports to examine customer-support controls, evidence
                boundaries, and operating decisions for a Philippines-based
                support team.
              </p>
              <div className="research-meta">
                <span>{researchPosts.length} reports</span>
                <span>Named sources</span>
                <span>Methodology notes</span>
              </div>
            </div>
            <div className="research-hero-photo"><Image src="/images/service-photography/call-quality-monitoring-8117473.jpg" alt="Colleagues reviewing service records and quality evidence together" width={1600} height={900} sizes="(max-width: 850px) 100vw, 43vw" priority /></div>
          </div>
        </section>
        <section className="section research-library-section">
          <div className="container">
            <div className="research-card-grid">
              {researchPosts.map((p) => (
                <a
                  className="research-library-card"
                  href={`/research/${p.slug}`}
                  key={p.slug}
                >
                  <Image className="research-card-image" src={p.hero || fallbackImage} alt={`Editorial image for ${p.title}`} width={1600} height={900} sizes="(max-width: 700px) 100vw, 33vw" loading="lazy" />
                  <span className="research-card-badge">Research report</span>
                  <h2>{p.title}</h2>
                  <time dateTime={p.published}>Published {formatDate(p.published)}</time>
                  <p className="research-card-highlight">
                    Research question: {p.title.replace(/^[^:]+:\s*/, "")}
                  </p>
                  <p className="research-card-excerpt">{p.excerpt}</p>
                  <div className="research-card-meta">
                    <span>{site.brand} Research</span>
                    <span>{p.readingMinutes} min read</span>
                    <span>{p.sources.length} named sources</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="section research-methodology">
          <div className="container">
            <h2>Methodology and use</h2>
            <p>
              Each report states its question, evidence scope, limitations, and
              conclusion so a buyer can distinguish observed facts from
              interpretation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
