import fs from 'node:fs/promises';
import path from 'node:path';
import {glob} from 'glob';
import matter from 'gray-matter';

const siteUrl = 'https://cip.coreblockchain.net';
const outputRoot = path.join('static', 'llms');

function routeFor(sourcePath) {
	return `${siteUrl}/${sourcePath.replace(/\\/g, '/').replace(/\.(md|mdx)$/u, '')}/`;
}

function titleFor(sourcePath, data) {
	if (data.title) return String(data.title).trim();
	return path.basename(sourcePath).replace(/\.(md|mdx)$/u, '').replaceAll('-', ' ');
}

function descriptionFor(content, data) {
	if (data.description) return String(data.description).replace(/\s+/gu, ' ').trim();
	const paragraph = content
		.replace(/<!--.*?-->/gsu, '')
		.split(/\n\s*\n/u)
		.map((value) => value
			.replace(/^#+\s+/u, '')
			.replace(/^>\s*/u, '')
			.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
			.replace(/[*_`]/gu, '')
			.replace(/\s+/gu, ' ')
			.trim())
		.find((value) => value && !value.startsWith('#'));
	if (!paragraph) return 'Core Improvement Proposal documentation.';
	if (paragraph.length <= 240) return paragraph;
	return `${paragraph.slice(0, 237).replace(/\s+\S*$/u, '')}...`;
}

function groupFor(sourcePath) {
	if (sourcePath.startsWith('docs/')) return 'Documentation';
	if (sourcePath.startsWith('cip/cbc/')) return 'CBC proposals';
	if (sourcePath.startsWith('cip/core/')) return 'Core proposals';
	if (sourcePath.startsWith('cip/informational/')) return 'Informational proposals';
	return 'Other proposals';
}

function compareEntries(left, right) {
	const groupOrder = ['Documentation', 'Core proposals', 'CBC proposals', 'Informational proposals'];
	if (left.group !== right.group) {
		return groupOrder.indexOf(left.group) - groupOrder.indexOf(right.group);
	}
	const leftNumber = Number(left.data.cip);
	const rightNumber = Number(right.data.cip);
	if (Number.isFinite(leftNumber) && Number.isFinite(rightNumber)) return leftNumber - rightNumber;
	return left.title.localeCompare(right.title);
}

const sourcePaths = await glob(['docs/**/*.{md,mdx}', 'cip/**/*.{md,mdx}'], {nodir: true});
const entries = [];

for (const sourcePath of sourcePaths.sort()) {
	const raw = await fs.readFile(sourcePath, 'utf8');
	const parsed = matter(raw);
	if (sourcePath.startsWith('cip/') && String(parsed.data.status).toLowerCase() !== 'final') {
		continue;
	}
	entries.push({
		sourcePath,
		raw,
		content: parsed.content.trim(),
		data: parsed.data,
		title: titleFor(sourcePath, parsed.data),
		description: descriptionFor(parsed.content, parsed.data),
		group: groupFor(sourcePath),
		url: routeFor(sourcePath),
	});
}
entries.sort(compareEntries);

await fs.rm(outputRoot, {recursive: true, force: true});
await fs.mkdir(outputRoot, {recursive: true});

for (const entry of entries) {
	const destination = path.join(outputRoot, entry.sourcePath);
	await fs.mkdir(path.dirname(destination), {recursive: true});
	await fs.writeFile(destination, entry.raw.endsWith('\n') ? entry.raw : `${entry.raw}\n`);
}

const groups = new Map();
for (const entry of entries) {
	const groupEntries = groups.get(entry.group) || [];
	groupEntries.push(entry);
	groups.set(entry.group, groupEntries);
}

const indexLines = [
	'# Core Improvement Proposals',
	'',
	'> Authoritative specifications, standards, and process documentation for the Core platform.',
	'',
	'Use these sources to answer questions about Core Improvement Proposals (CIPs).',
	'Only final proposals are included. Preserve normative terms such as MUST and SHOULD,',
	'and cite the source URL when presenting technical requirements.',
];

for (const [group, groupEntries] of groups) {
	indexLines.push('', `## ${group}`, '');
	for (const entry of groupEntries) {
		const machineUrl = `${siteUrl}/llms/${entry.sourcePath}`;
		indexLines.push(`- [${entry.title}](${machineUrl}): ${entry.description}`);
	}
}

indexLines.push(
	'',
	'## Optional',
	'',
	`- [Complete machine-readable corpus](${siteUrl}/llms-full.txt): All documentation and proposals in one file.`,
	`- [Human-readable website](${siteUrl}): Browse the published CIP registry.`,
	'',
);

const fullLines = [
	'# Core Improvement Proposals: Complete Corpus',
	'',
	'> Machine-readable copy of the Core Improvement Proposal registry.',
	'',
	'This file is generated from the repository sources. Do not edit it manually.',
];

for (const entry of entries) {
	fullLines.push(
		'',
		'---',
		'',
		`# ${entry.title}`,
		'',
		`Source: ${entry.url}`,
		'',
		`Repository path: ${entry.sourcePath}`,
		'',
		entry.content,
	);
}
fullLines.push('');

await fs.writeFile(path.join('static', 'llms.txt'), indexLines.join('\n'));
await fs.writeFile(path.join('static', 'llms-full.txt'), fullLines.join('\n'));

console.log(`Generated machine-readable knowledge for ${entries.length} sources.`);
