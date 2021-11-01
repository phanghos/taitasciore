import React from 'react';
import moment from 'moment';
import { Post } from '../../models/Post';
import styles from './styles';
import './styles.css';

type PostProps = Post;

export const PostItem = ({ title, author, link, date }: PostProps) => (
  <a href={link} style={styles.link}>
    <div>
      <h2 id="title" style={styles.title}>
        {title}
      </h2>
      <span id="description">
        Published by <span style={styles.author}>{author}</span>{' '}
        {moment(date).format('ll')}
      </span>
    </div>
  </a>
);
