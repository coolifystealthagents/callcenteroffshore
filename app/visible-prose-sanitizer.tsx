'use client';

import { useEffect } from 'react';

const clean = (value: string) => value.replace(/[—–]/g, ' - ').replace(/\s--\s/g, ' - ').replace(/\s{2,}/g, ' ');

function sanitize(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(parent.tagName)) continue;
    const next = clean(node.data);
    if (next !== node.data) node.data = next;
  }
}

export function VisibleProseSanitizer() {
  useEffect(() => {
    sanitize(document.body);
    const observer = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => sanitize(node))));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
