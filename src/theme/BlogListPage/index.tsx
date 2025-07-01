import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';

export default function BlogListPageWrapper(props) {
	const sortedItems = [...props.items].sort((a, b) => {
		const cipA = parseInt(a.content.frontMatter.cip, 10);
		const cipB = parseInt(b.content.frontMatter.cip, 10);
		if (isNaN(cipA) && isNaN(cipB)) return 0;
		if (isNaN(cipA)) return 1;
		if (isNaN(cipB)) return -1;
		return cipA - cipB;
	});
	return <BlogListPage {...props} items={sortedItems} />;
}
