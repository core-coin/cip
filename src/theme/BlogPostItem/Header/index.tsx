import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './custom.module.css';

export default function BlogPostItemHeader() {
	const {metadata, isBlogPostPage} = useBlogPost();
	const {frontMatter, title, permalink} = metadata;
	const cipNumber = frontMatter.cip;

	const TitleTag = isBlogPostPage ? 'h1' : 'h2';

	return (
		<header>
			<TitleTag className={styles.cipTitle}>
				{isBlogPostPage ? (
					title
				) : (
					<Link to={permalink}>{title}</Link>
				)}
			</TitleTag>
			{cipNumber && (
				<div className={styles.cipBadgeRow}>
					<span className={styles.cipBadge}>{`CIP-${cipNumber}`}</span>
				</div>
			)}
		</header>
	);
}
