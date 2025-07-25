import React from 'react';
import clsx from 'clsx';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import styles from './custom.module.css';

export default function BlogPostItem({children, className}) {
	return (
		<BlogPostItemContainer className={clsx(className, styles.cipItem)}>
			<BlogPostItemHeader />
			<BlogPostItemContent>{children}</BlogPostItemContent>
			<BlogPostItemFooter />
		</BlogPostItemContainer>
	);
}
