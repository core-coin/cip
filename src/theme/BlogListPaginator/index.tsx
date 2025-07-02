import React, {type ReactNode, useState, useEffect} from 'react';
import type BlogListPaginatorType from '@theme/BlogListPaginator';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';
import styles from './custom.module.css';

type Props = WrapperProps<typeof BlogListPaginatorType>;

export default function BlogListPaginatorWrapper(props: Props): ReactNode {
  const {previousPage, nextPage} = props.metadata;
  const items = (props as any).items;

  const [pageInput, setPageInput] = useState('1');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = window.location.pathname.match(/^\/cip(?:\/page\/(\d+))?$/);
      if (match && match[1]) {
        setPageInput(match[1]);
      } else {
        setPageInput('1');
      }
    }
  }, []);

  const handleGo = () => {
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1) {
      if (pageNum === 1) {
        window.location.href = '/cip';
      } else {
        window.location.href = `/cip/page/${pageNum}`;
      }
    }
  };

  return (
    <nav className="pagination-nav" style={{gridTemplateColumns: 'initial'}} aria-label="Blog list page navigation">
      <div className={styles['pagination-nav-row']}>
        <div className={styles['pagination-nav-col'] + ' ' + styles['pagination-nav-left']}>
          {previousPage ? (
            <Link className="pagination-nav__link" style={{width: '100%'}} to={previousPage}>
              Previous
            </Link>
          ) : null}
        </div>
        <div className={styles['pagination-nav-col'] + ' ' + styles['pagination-nav-center']}>
          <input
            type="number"
            min={1}
            step={1}
            className={'pagination-nav__link' + ' ' + styles['pagination-nav__input']}
            value={pageInput}
            onChange={e => setPageInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleGo(); }}
            aria-label="Go to page"
          />
          <button
            type="button"
            className={'pagination-nav__link' + ' ' + styles['pagination-nav__go']}
            onClick={handleGo}
          >
            Go
          </button>
        </div>
        <div className={styles['pagination-nav-col'] + ' ' + styles['pagination-nav-right']}>
          {nextPage ? (
            <Link className="pagination-nav__link" style={{width: '100%'}} to={nextPage}>
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
