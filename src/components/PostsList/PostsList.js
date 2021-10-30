import React from 'react';
import { useMediumPosts } from '../../hooks/useMediumPosts';
import { Post } from '../Post/Post';

export const PostsList = () => {
  const posts = useMediumPosts();

  return (
    <div>
      {posts.map(props => (
        <Post {...props} key={props.link} />
      ))}
    </div>
  );
};
