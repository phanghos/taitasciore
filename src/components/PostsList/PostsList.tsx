import React from 'react';
import { useMediumPosts } from '@hooks/useMediumPosts';
import { PostItem } from '../PostItem/PostItem';
import styles from './styles';

export const PostsList = () => {
  const posts = useMediumPosts();

  return (
    <div style={styles.container}>
      {posts.map(props => (
        <PostItem {...props} key={props.link} />
      ))}
    </div>
  );
};
