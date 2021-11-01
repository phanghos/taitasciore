import React, { useEffect } from 'react';
import { useTitle } from '@hooks/useTitle';
import { MainHeader } from '@components/MainHeader/MainHeader';
import { primaryColor } from 'consts';
import styles from './styles';
import './styles.css';

export const HomeScreen = () => {
  useTitle('taitasciore');

  useEffect(() => {
    document.body.style.margin = '0';
  }, []);

  return (
    <div style={styles.container}>
      <MainHeader />
      <div
        style={{
          color: primaryColor,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, sans-serif, serif',
          letterSpacing: 2,
          width: '50%',
        }}
      >
        <h1 className="bio-intro">Hi, I'm Roberto.</h1>
        <p className="bio">
          I'm a Front End developer specializing in mobile apps development. I
          was working as a
          <span className="highlight"> native Android developer</span> using
          both Java and Kotlin for 5-6 years until I switched to{' '}
          <span className="highlight">React Native</span> back in 2018.
          Nowadays, I keep deep diving into RN and occasionally sharing my
          thoughts, insights, and experiences working with these technologies.
          Oh, and yes, <span className="highlight">I love Typescript! :)</span>
          <p />I was born and raised in{' '}
          <span className="highlight">Valencia, Venezuela.</span> Currently, I'm
          based in beautiful <span className="highlight">Barcelona, Spain</span>{' '}
          since 2017.
          <p></p>Some of my favorite tools:{' '}
          <code>
            redux @reduxjs/toolkit redux-saga react-navigation
            react-native-gesture-handler react-native-reanimated
          </code>
        </p>
      </div>
    </div>
  );
};
