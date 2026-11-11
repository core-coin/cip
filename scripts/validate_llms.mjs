import fs from 'node:fs/promises';
import path from 'node:path';
import {glob} from 'glob';
import matter from 'gray-matter';

const candidatePaths = await glob(['docs/**/*.{md,mdx}', 'cip/**/*.{md,mdx}'], {nodir: true});
const sourcePaths = [];
for (const sourcePath of candidatePaths) {
	if (sourcePath.startsWith('docs/')) {
		sourcePaths.push(sourcePath);
		continue;
	}
	const parsed = matter(await fs.readFile(sourcePath, 'utf8'));
	if (String(parsed.data.status).toLowerCase() === 'final') sourcePaths.push(sourcePath);
}
const index = await fs.readFile(path.join('static', 'llms.txt'), 'utf8');
const errors = [];

if (!index.startsWith('# Core Improvement Proposals\n\n> ')) {
	errors.push('static/llms.txt does not have the required title and summary.');
}

for (const sourcePath of sourcePaths) {
	const route = `https://cip.coreblockchain.net/${sourcePath.replace(/\\/g, '/').replace(/\.(md|mdx)$/u, '')}/`;
	if (!index.includes(`](${route})`)) errors.push(`static/llms.txt does not reference ${sourcePath}.`);
}

for (const candidatePath of candidatePaths.filter((value) => !sourcePaths.includes(value))) {
	const route = `https://cip.coreblockchain.net/${candidatePath.replace(/\\/g, '/').replace(/\.(md|mdx)$/u, '')}/`;
	if (index.includes(`](${route})`)) errors.push(`Non-final proposal ${candidatePath} must not be in llms.txt.`);
}

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Validated ${sourcePaths.length} llms.txt entries.`);
