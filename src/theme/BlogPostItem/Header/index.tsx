import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './custom.module.css';

export default function BlogPostItemHeader() {
	const {metadata, isBlogPostPage} = useBlogPost();
	const {frontMatter, title, permalink} = metadata;
	const cipNumber = frontMatter.cip;

	const TitleTag = isBlogPostPage ? 'h1' : 'h2';
	const TitleContent = (
		<span>
			{cipNumber && <span className={styles.cipBadge}>{`CIP-${cipNumber}`}</span>}
			<span className={styles.cipTitleText}>{title}</span>
		</span>
	);

	return (
		<header>
			{isBlogPostPage ? (
				<TitleTag className={styles.cipTitle}>{TitleContent}</TitleTag>
			) : (
				<TitleTag className={styles.cipTitle}>
					<Link to={permalink}>{TitleContent}</Link>
				</TitleTag>
			)}
		</header>
	);
}
