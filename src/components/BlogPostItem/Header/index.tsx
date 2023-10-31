/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import BlogPostItemHeaderTitle from '@site/src/components/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@site/src/components/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@site/src/components/BlogPostItem/Header/Authors';

export default function BlogPostItemHeader(): JSX.Element {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
