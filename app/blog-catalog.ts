import aug20Meta from './aug20-meta.json';
import aug21Meta from './aug21-meta.json';
import aug23Meta from './aug23-meta.json';
import { blogPosts } from './data';
import { postsPerPage } from './fleet-data';

const metadataPosts = [aug23Meta, aug21Meta, aug20Meta].flatMap((records) =>
  Object.entries(records).map(([slug, post]) => ({
    slug,
    title: post.title,
    excerpt: post.description,
  })),
);

export const allBlogPosts = [...blogPosts, ...metadataPosts];
export const blogPageCount = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));

export function parseBlogPage(value: string) {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  if (!Number.isSafeInteger(page) || page < 2 || page > blogPageCount) return null;
  return page;
}
