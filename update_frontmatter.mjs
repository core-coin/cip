import { glob } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

async function parseDate(dateStr) {
	return new Date(dateStr);
}

function updateTags(fileContent, today) {
	const post = matter(fileContent);
	const creationDate = parseDate(post.data.date);
	const diff = (today - creationDate) / (1000 * 60 * 60 * 24); // Difference in days
	let newTag = null;

	if (diff >= 42) {
		newTag = 'final';
	} else if (diff >= 28) {
		newTag = 'accepted';
	} else if (diff >= 14) {
		newTag = 'last call';
	}

	if (newTag && !post.data.tags.includes(newTag)) {
		post.data.tags = post.data.tags.filter(tag => !['draft', 'last call', 'accepted', 'final'].includes(tag));
		post.data.tags.push(newTag);
		return matter.stringify(post.content, post.data);
	}
	return null;
}

async function processMarkdownFiles() {
	const files = await glob('cip/**/*.md');

	for (const file of files) {
		const content = fs.readFileSync(file, 'utf8');
		const today = new Date();
		const updatedContent = updateTags(content, today);

		if (updatedContent) {
			fs.writeFileSync(file, updatedContent, 'utf8');
		}
	}
}

processMarkdownFiles();
