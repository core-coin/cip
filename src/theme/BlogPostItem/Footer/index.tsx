import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from '../Header/custom.module.css';
import Link from '@docusaurus/Link';

function getAuthorLinkAndName(name) {
	// Email: First Last <email>
	const emailMatch = name.match(/<([^@<>]+@[^<>]+)>/);
	if (emailMatch) {
		return { link: `mailto:${emailMatch[1]}`, display: name.replace(/<[^<>]+>/, '').trim() };
	}
	// Website/URL/ENS/IPFS: First Last <url>
	const urlMatch = name.match(/<((https?:\/\/|[\w.-]+\.[a-z]{2,}|[\w-]+\.eth|ipfs:\/\/)[^<>]*)>/i);
	if (urlMatch) {
		let url = urlMatch[1];
		if (!url.match(/^https?:\/\//) && !url.startsWith('ipfs://')) {
			url = url.endsWith('.eth') ? `https://${url}.link` : `https://${url}`;
		}
		return { link: url, display: name.replace(/<[^<>]+>/, '').trim() };
	}
	// GitHub: First Last (@github)
	const githubMatch = name.match(/\(@([a-zA-Z0-9_-]+)\)/);
	if (githubMatch) {
		return { link: `https://github.com/${githubMatch[1]}`, display: name.replace(/\(@[^)]+\)/, '').trim() };
	}
	// Pod: First Last (@nickname@pod.tld)
	const podMatch = name.match(/\(@([a-zA-Z0-9_-]+@[\w.]+)\)/);
	if (podMatch) {
		const [nick, pod] = podMatch[1].split('@');
		return { link: `https://${pod}/@${nick}`, display: name.replace(/\(@[^)]+\)/, '').trim() };
	}
	// CorePass: [cb00…@coreid] or <corepass:cb[0-9]{2}[0-9a-f]{40}>
	const corepassMatch = name.match(/<corepass:(cb[0-9]{2}[0-9a-f]{40})>/i);
	if (corepassMatch) {
		const shortened = corepassMatch[1].slice(0, 4) + '…' + corepassMatch[1].slice(-4);
		return { link: `corepass:${corepassMatch[1]}`, display: `[${shortened}@coreid]` };
	}
	const coreidMatch = name.match(/\[cb[0-9]{2}[0-9a-f]{4,}@coreid\]/i);
	if (coreidMatch) {
		return { link: undefined, display: coreidMatch[0] };
	}
	// Default: no link
	return { link: undefined, display: name };
}

export default function BlogPostItemFooter() {
	const {metadata} = useBlogPost();
	const {tags, authors} = metadata;

	function renderAuthors() {
		if (!authors || authors.length === 0) return null;
		return (
			<div style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
				{authors.length === 1 ? 'Author: ' : 'Authors: '}
				{authors.map((author, i) => {
					const { link, display } = getAuthorLinkAndName(author.name || '');
					return (
						<span key={author.name || i}>
							{link ? <Link to={link}>{display}</Link> : display}
							{i < authors.length - 1 ? ', ' : ''}
						</span>
					);
				})}
			</div>
		);
	}

	return (
		<>
			{renderAuthors()}
			{tags && tags.length > 0 && (
				<div className={styles.cipTagsRow}>
					<strong>Tags:</strong>
					{tags.map(tag => (
						<Link
							key={tag.label}
							to={`/cip/tags/${tag.label}`}
							style={{
								display: 'inline-block',
								background: 'rgba(67, 233, 123, 0.15)',
								border: '1px solid #43e97b',
								borderRadius: '1em',
								padding: '0.1em 0.8em',
								fontSize: '0.85em',
								fontWeight: 500,
								color: '#43e97b',
								marginLeft: '0.2em',
								textDecoration: 'none',
								transition: 'background 0.2s',
							}}
						>
							{tag.label.toUpperCase()}
						</Link>
					))}
				</div>
			)}
		</>
	);
}
