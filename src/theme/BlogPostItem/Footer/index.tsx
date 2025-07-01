import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from '../Header/custom.module.css';

export default function BlogPostItemFooter() {
	const {metadata} = useBlogPost();
	const {tags} = metadata;
	if (!tags || tags.length === 0) return null;
	return (
		<div className={styles.cipTagsRow}>
			<strong>Tags:</strong>
			{tags.map(tag => (
				<span key={tag.label} className={styles.cipTag}>{tag.label}</span>
			))}
		</div>
	);
}
