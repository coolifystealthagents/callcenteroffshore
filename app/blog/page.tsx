import { Header, Footer } from "../components";
import Image from "next/image";
import { allBlogPosts, blogPageCount } from "../blog-catalog";
import { postsPerPage } from "../fleet-data";
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
const fallbackImage = "/images/service-photography/editorial-library-5453808.jpg";
const postImage = (post: unknown) => {
  const hero = (post as { hero?: unknown }).hero;
  return typeof hero === "string" && hero.startsWith("/") ? hero : fallbackImage;
};
export const metadata = {
  title: "Virtual assistant and outsourcing guides",
  description:
    "Practical guides for planning Philippines-based virtual assistants, executive assistants, customer support, and outsourced teams.",
  alternates: { canonical: "https://callcenteroffshore.com/blog" },
};
export default function Blog() {
  const pages = blogPageCount;
  const posts = allBlogPosts.slice(0, postsPerPage);
  const featured = posts[0];
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="cco-kicker">
                <span /> Guides for better delegation
              </p>
              <h1>Build a team that knows what good work looks like.</h1>
              <p className="lead">
                Use these guides to scope roles, protect customer data, create
                handoffs, and manage Philippines-based support without
                guesswork.
              </p>
            </div>
            <div className="page-hero-art">
              <Image src="/images/service-photography/editorial-library-5453808.jpg" alt="Customer support team working across a shared call center floor" width={1600} height={900} sizes="(max-width: 850px) 100vw, 43vw" priority />
            </div>
          </div>
        </section>
        <section className="blog-index">
          <div className="container">
            {featured && (
              <a className="blog-feature" href={`/blog/${featured.slug}`}>
                <Image src={postImage(featured)} alt={`Editorial image for ${featured.title}`} width={1600} height={900} sizes="(max-width: 850px) 100vw, 50vw" />
                <div>
                  <p className="cco-kicker">
                    <span /> Featured guide
                  </p>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  {"published" in featured && typeof featured.published === "string" ? <time dateTime={featured.published}>Published {formatDate(featured.published)}</time> : null}
                  <b>Read the guide ↗</b>
                </div>
              </a>
            )}
            <div className="blog-grid-new">
              {posts.slice(featured ? 1 : 0).map((post) => (
                <a
                  className="blog-card-new"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                >
                  <Image className="editorial-card-image" src={postImage(post)} alt={`Editorial image for ${post.title}`} width={1600} height={900} sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" />
                  <span>Call center operations guide</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  {"published" in post && typeof post.published === "string" ? <time dateTime={post.published}>Published {formatDate(post.published)}</time> : null}
                  <b>Read article ↗</b>
                </a>
              ))}
            </div>
            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, index) => (
                <a
                  aria-current={index === 0 ? "page" : undefined}
                  href={index === 0 ? "/blog" : `/blog/page/${index + 1}`}
                  key={index}
                >
                  {index + 1}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
