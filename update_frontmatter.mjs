import { glob } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

function parseDate(dateStr) {
	if (!dateStr) {
		console.warn('No date found in frontmatter');
		return null;
	}
	const date = new Date(dateStr);
	if (isNaN(date.getTime())) {
		console.warn(`Invalid date format: ${dateStr}`);
		return null;
	}
	return date;
}

function updateTags(fileContent, today) {
	try {
		const post = matter(fileContent);

		// Check if frontmatter exists and has required fields
		if (!post.data || !post.data.date) {
			console.warn('No frontmatter or date found');
			return null;
		}

		if (!post.data.tags || !Array.isArray(post.data.tags)) {
			console.warn('No tags array found in frontmatter');
			return null;
		}

		const creationDate = parseDate(post.data.date);
		if (!creationDate) {
			return null;
		}

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
	} catch (error) {
		console.error(`Error processing file: ${error.message}`);
		return null;
	}
}

async function processMarkdownFiles() {
	try {
		const files = await glob('cip/**/*.md');
		console.log(`Found ${files.length} markdown files to process`);

		for (const file of files) {
			try {
				const content = fs.readFileSync(file, 'utf8');
				const today = new Date();
				const updatedContent = updateTags(content, today);

				if (updatedContent) {
					fs.writeFileSync(file, updatedContent, 'utf8');
					console.log(`Updated tags in: ${file}`);
				}
			} catch (error) {
				console.error(`Error processing file ${file}: ${error.message}`);
			}
		}
	} catch (error) {
		console.error(`Error finding markdown files: ${error.message}`);
		process.exit(1);
	}
}

processMarkdownFiles().catch(error => {
	console.error(`Script failed: ${error.message}`);
	process.exit(1);
});
