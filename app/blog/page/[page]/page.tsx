import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "../../../components";
import { site } from "../../../data";
import { postsPerPage } from "../../../fleet-data";
import { allBlogPosts, blogPageCount, parseBlogPage } from "../../../blog-catalog";
import { FeaturedComparison } from "../../FeaturedComparison";
export const dynamicParams = false;
const fallbackImage = "/images/service-photography/editorial-library-5453808.jpg";
const postImage = (post: unknown) => {
  const hero = (post as { hero?: unknown }).hero;
  return typeof hero === "string" && hero.startsWith("/") ? hero : fallbackImage;
};

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const current = parseBlogPage(page);
  if (current === null) notFound();
  return {
    title: `Virtual assistant and outsourcing guides, page ${current}`,
    description: `Practical Call Center Offshore staffing and operations guides, page ${current}.`,
    alternates: { canonical: `https://callcenteroffshore.com/blog/page/${current}` },
  };
}
export function generateStaticParams() {
  return Array.from({ length: Math.max(0, blogPageCount - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const current = parseBlogPage(page);
  if (current === null) notFound();
  const pages = blogPageCount;
  const posts = allBlogPosts.slice(
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
              <Image src="/images/service-photography/editorial-library-5453808.jpg" alt="Customer support team working across a shared call center floor" width={1600} height={900} sizes="(max-width: 850px) 100vw, 43vw" priority />
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
                  <Image className="editorial-card-image" src={postImage(post)} alt={`Editorial image for ${post.title}`} width={1600} height={900} sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" />
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
