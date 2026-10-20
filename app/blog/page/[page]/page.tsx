import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header, Footer } from "../../../components";
import { blogPosts, site } from "../../../data";
import { postsPerPage } from "../../../fleet-data";
import { FeaturedComparison } from "../../FeaturedComparison";
import aug20Meta from "../../../aug20-meta.json";
import aug21Meta from "../../../aug21-meta.json";
import aug23Meta from "../../../aug23-meta.json";

const allPosts = [
  ...blogPosts,
  ...Object.entries(aug23Meta).map(([slug, p]) => ({ slug, title: p.title, excerpt: p.description })),
  ...Object.entries(aug21Meta).map(([slug, p]) => ({ slug, title: p.title, excerpt: p.description })),
  ...Object.entries(aug20Meta).map(([slug, p]) => ({ slug, title: p.title, excerpt: p.description })),
];

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Virtual assistant and outsourcing guides, page ${page}`,
    description: `Practical Call Center Offshore staffing and operations guides, page ${page}.`,
    alternates: { canonical: page === '1' ? 'https://callcenteroffshore.com/blog' : `https://callcenteroffshore.com/blog/page/${page}` },
  };
}
export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(allPosts.length / postsPerPage));
  return Array.from({ length: Math.max(0, pages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const current = Number(page);
  const pages = Math.max(1, Math.ceil(allPosts.length / postsPerPage));
  if (!Number.isInteger(current) || current < 1 || current > pages) notFound();
  const posts = allPosts.slice(
    (current - 1) * postsPerPage,
    current * postsPerPage,
  );
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="cco-kicker">
                <span /> Guide library / page {current}
              </p>
              <h1>{site.brand} guides.</h1>
              <p className="lead">
                Practical articles for scoping and managing Philippines-based
                assistants and outsourced teams.
              </p>
            </div>
            <div className="page-hero-art">
              <img
                src="/visuals/operations-dashboard.svg"
                alt="Assistant workflow dashboard"
              />
            </div>
          </div>
        </section>
        <section className="blog-index">
          <div className="container">
            <div className="blog-grid-new">
              {posts.map((post) => (
                <a
                  className="blog-card-new"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                >
                  <span>Call center operations guide</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <b>Read article ↗</b>
                </a>
              ))}
            </div>
            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, index) => (
                <a
                  aria-current={index + 1 === current ? "page" : undefined}
                  href={index === 0 ? "/blog" : `/blog/page/${index + 1}`}
                  key={index}
                >
                  {index + 1}
                </a>
              ))}
            </nav>
          </div>
        </section>
        {current === 2 && <FeaturedComparison />}
      </main>
      <Footer />
    </>
  );
}
