import React from 'react';

export const Post = ({ title, author, link }) => (
  <a href={link} style={{ color: '#334756', textDecoration: 'none' }}>
    <div>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>
      <span style={{ fontStyle: 'italic' }}>
        by{' '}
        <span style={{ color: '#334756', fontWeight: 'bold' }}>{author}</span>
      </span>
    </div>
  </a>
);
