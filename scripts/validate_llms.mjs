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
const full = await fs.readFile(path.join('static', 'llms-full.txt'), 'utf8');
const errors = [];

if (!index.startsWith('# Core Improvement Proposals\n\n> ')) {
	errors.push('static/llms.txt does not have the required title and summary.');
}

for (const sourcePath of sourcePaths) {
	const machinePath = path.join('static', 'llms', sourcePath);
	try {
		const [source, machineCopy] = await Promise.all([
			fs.readFile(sourcePath, 'utf8'),
			fs.readFile(machinePath, 'utf8'),
		]);
		if (source.trimEnd() !== machineCopy.trimEnd()) errors.push(`${machinePath} is stale.`);
	} catch {
		errors.push(`${machinePath} is missing.`);
	}

	if (!index.includes(`/llms/${sourcePath}`)) errors.push(`static/llms.txt does not reference ${sourcePath}.`);
	if (!full.includes(`Repository path: ${sourcePath}`)) {
		errors.push(`static/llms-full.txt does not include ${sourcePath}.`);
	}
}

const generatedCopies = await glob('static/llms/**/*.{md,mdx}', {nodir: true});
if (generatedCopies.length !== sourcePaths.length) {
	errors.push(`Expected ${sourcePaths.length} generated source files, found ${generatedCopies.length}.`);
}

for (const candidatePath of candidatePaths.filter((value) => !sourcePaths.includes(value))) {
	if (generatedCopies.includes(path.join('static', 'llms', candidatePath))) {
		errors.push(`Non-final proposal ${candidatePath} must not be in the generated corpus.`);
	}
}

if (errors.length > 0) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Validated ${sourcePaths.length} machine-readable sources.`);
