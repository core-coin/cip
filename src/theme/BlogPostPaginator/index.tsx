import React from 'react';
import Link from '@docusaurus/Link';

function getCipFromPermalink(permalink: string) {
  const match = permalink.match(/cip\/(?:[a-z0-9-]+\/)?cip-(\d+)/i);
  if (match && match[1]) {
    return `CIP-${match[1].toUpperCase()}`;
  }
  return null;
}

export default function BlogPostPaginator(props) {
  const { prevItem, nextItem } = props as any;

  return (
    <nav className="pagination-nav" aria-label="Blog post navigation">
      <div className="pagination-nav__item">
        {prevItem && (
          <Link className="pagination-nav__link pagination-nav__link--prev" to={prevItem.permalink}>
            ← {getCipFromPermalink(prevItem.permalink) || prevItem.title}
          </Link>
        )}
      </div>
      <div className="pagination-nav__item">
        {nextItem && (
          <Link className="pagination-nav__link pagination-nav__link--next" to={nextItem.permalink}>
            {getCipFromPermalink(nextItem.permalink) || nextItem.title} →
          </Link>
        )}
      </div>
    </nav>
  );
}
