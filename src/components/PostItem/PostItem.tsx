import React from 'react';
import { Post } from '../../models/Post';
import styles from './styles';

type PostProps = Post;

export const PostItem = ({ title, author, link }: PostProps) => (
  <a href={link} style={styles.link}>
    <div>
      <h2 style={styles.title}>{title}</h2>
      <span style={styles.authorBy}>
        by <span style={styles.author}>{author}</span>
      </span>
    </div>
  </a>
);
