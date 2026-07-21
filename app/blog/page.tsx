import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';

export default function Blog() {
  return <>
    <Header />
    <main className="section">
      <div className="container">
        <p className="eyebrow">{site.brand} guides</p>
        <h1>Plan offshore call center coverage</h1>
        <p className="lead">Practical notes on choosing a call queue, checking providers, training agents, and reviewing call quality.</p>
        <div className="cards">
          {blogPosts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <span className="pill">{post.minutes} min read</span>
          </a>)}
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
