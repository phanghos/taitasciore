import React from 'react';
import { MainHeader } from '@components/MainHeader/MainHeader';
import { PostsList } from '@components/PostsList/PostsList';

const Blog = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Roboto, sans-serif, serif',
      alignItems: 'center',
    }}
  >
    <MainHeader />
    <PostsList />
  </div>
);

export default Blog;
