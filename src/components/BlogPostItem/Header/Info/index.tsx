import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/BlogPostItem/Header/Info';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

function ReadingTime({readingTime}: {readingTime: number}) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}

function Date({date, formattedDate}: {date: string; formattedDate: string}) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}

function Spacer() {
  return <>{' ● '}</>;
}

export default function BlogPostItemHeaderInfo({
  className,
}: Props): JSX.Element {
  const {metadata} = useBlogPost();
  const {date, formattedDate, readingTime, frontMatter} = metadata;

  const renderCategory = () => {
    if (Array.isArray(frontMatter.categories)) {
      const categories = (frontMatter.categories as string[]).map((cat, index, arr) => (
        <React.Fragment key={cat}>
          <Link to={`/docs/cip-categories#${cat.toLowerCase()}`}>
            {cat.toUpperCase()}
          </Link>
          {index !== arr.length - 1 && ', '}
        </React.Fragment>
      ));
      return <>{categories}</>;
    }
    return <Link to={`/docs/cip-categories#${(frontMatter.categories as string).toLowerCase()}`}>
             {(frontMatter.categories as string).toUpperCase()}
           </Link>;
  };

  const renderTag = () => {
    if (Array.isArray(frontMatter.tags)) {
      const tags = (frontMatter.tags as string[]).map((tag, index, arr) => (
        <React.Fragment key={tag}>
          <Link to={`/cip/tags/${tag.toLowerCase()}`}>
            {tag.toUpperCase()}
          </Link>
          {index !== arr.length - 1 && ', '}
        </React.Fragment>
      ));
      return <>{tags}</>;
    }
    return <Link to={`/cip/tags/${(frontMatter.tags as string).toLowerCase()}`}>
             {(frontMatter.tags as string).toUpperCase()}
           </Link>;
  };

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {frontMatter.cip && (
        <>
          CIP-{frontMatter.cip}
          <Spacer />
        </>
      )}
      {frontMatter.categories && (
        <>
          Category: {renderCategory()}
          <Spacer />
        </>
      )}
      {frontMatter.tags && (
        <>
          Tag: {renderTag()}
          <Spacer />
        </>
      )}
      <Date date={date} formattedDate={formattedDate} />
      {typeof readingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
      {frontMatter['discussion-to'] && (
        <>
          <Spacer />
          <Link to={frontMatter['discussion-to'] as string} target="_blank" rel="noopener noreferrer">
            Discussion
          </Link>
        </>
      )}
    </div>
  );
}
