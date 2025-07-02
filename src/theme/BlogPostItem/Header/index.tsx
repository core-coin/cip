import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './custom.module.css';

export default function BlogPostItemHeader() {
	const {metadata, isBlogPostPage} = useBlogPost();
	const {frontMatter, title, permalink} = metadata;
	const cipNumber = frontMatter.cip;
	const requires = frontMatter.requires;
	const status = frontMatter.status;

	const TitleTag = isBlogPostPage ? 'h1' : 'h2';

	function renderRequires() {
		if (!requires) return null;
		const reqs = Array.isArray(requires) ? requires : [requires];
		return (
			<div style={{marginTop: '0.2em', marginBottom: '0.2em'}}>
				<strong>Requires:</strong>{' '}
				{reqs.map((req, i) => {
					const match = typeof req === 'string' && req.match(/^cip-(\d+)$/i);
					return match ? (
						<React.Fragment key={req}>
							{req.toUpperCase()}{i < reqs.length - 1 ? ', ' : ''}
						</React.Fragment>
					) : (
						<span key={req}>{req}{i < reqs.length - 1 ? ', ' : ''}</span>
					);
				})}
			</div>
		);
	}

	function renderStatus() {
		if (!status) return null;
		return (
			<div style={{marginTop: '0.2em', marginBottom: '0.2em'}}>
				<strong>Status:</strong>{' '}
				{(Array.isArray(status) ? status : [status]).map((stat, i, arr) => (
					<React.Fragment key={stat}>
						{stat.charAt(0).toUpperCase() + stat.slice(1)}{i < arr.length - 1 ? ', ' : ''}
					</React.Fragment>
				))}
			</div>
		);
	}

	return (
		<header style={{marginBottom: '1em'}}>
			<TitleTag className={styles.cipTitle}>
				{isBlogPostPage ? (
					title
				) : (
					<Link to={permalink}>{title}</Link>
				)}
			</TitleTag>
			{cipNumber && (
				<div className={styles.cipBadgeRow}>
					<Link to={permalink}>
						<span className={styles.cipBadge}>{`CIP-${cipNumber}`}</span>
					</Link>
				</div>
			)}
			{renderStatus()}
			{renderRequires()}
		</header>
	);
}
