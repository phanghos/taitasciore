import React from 'react';
import { Link } from 'gatsby';
import profileImage from '../../images/profile.jpg';
import styles from './styles';

export const MainHeader = () => (
  <div style={styles.container}>
    <Link to="/" style={styles.link}>
      <img src={profileImage} alt="profile-image" style={styles.profileImage} />
    </Link>
    <div>
      <Link to="/" style={styles.name}>
        <h1 style={{ marginTop: 0 }}>Roberto Tatasciore</h1>
      </Link>
      <div style={styles.linkContainer}>
        <Link to="/blog" style={styles.link}>
          Blog
        </Link>
        <span style={styles.link}>Resume</span>
        <span style={styles.link}>Contact</span>
      </div>
    </div>
  </div>
);
