'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

type TocItem = { id: string; label: string; level: 2 | 3 };

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section';
}

export function EditorialRouteSidebar() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState('');
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const isArticle = /^\/(blog|research)\/[^/]+\/?$/.test(pathname) && !/\/page\//.test(pathname);

  useEffect(() => {
    document.body.classList.toggle('has-editorial-sidebar', isArticle);
    if (!isArticle) return () => document.body.classList.remove('has-editorial-sidebar');
    const timer = window.setTimeout(() => {
      const root = document.querySelector<HTMLElement>('main');
      if (!root) return;
      const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>('h2, h3'));
      const target = document.createElement('div');
      target.className = 'editorial-sidebar-mount';
      const opening = root.querySelector('h1')?.parentElement;
      if (opening?.parentElement) opening.parentElement.insertBefore(target, opening.nextSibling);
      else root.insertBefore(target, root.firstChild);
      setMount(target);
      const used = new Set<string>();
      const next = headings.map(heading => {
        const base = heading.id || slugify(heading.textContent || 'section');
        let id = base;
        let count = 2;
        while (used.has(id)) id = `${base}-${count++}`;
        used.add(id);
        heading.id = id;
        return { id, label: heading.textContent?.trim() || 'Section', level: heading.tagName === 'H3' ? 3 as const : 2 as const };
      });
      setItems(next);
      setActive(next[0]?.id || '');
    }, 0);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('has-editorial-sidebar');
      document.querySelector('.editorial-sidebar-mount')?.remove();
      setMount(null);
    };
  }, [isArticle, pathname]);

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    items.forEach(item => { const heading = document.getElementById(item.id); if (heading) observer.observe(heading); });
    return () => observer.disconnect();
  }, [items]);

  if (!isArticle || !mount) return null;
  return createPortal(<aside className="global-article-sidebar" aria-label="Article table of contents">
    <div><p>On this page</p><nav>{items.map(item => <a className={`toc-level-${item.level}${active === item.id ? ' is-active' : ''}`} href={`#${item.id}`} key={item.id} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
      <section><strong>Call Center Offshore editorial desk</strong><span>Use this guide to evaluate queue ownership, controls, evidence, and staffing fit.</span><a href="/services">Related services</a><a href="/contact-us">Discuss your workflow</a></section>
    </div>
  </aside>, mount);
}
