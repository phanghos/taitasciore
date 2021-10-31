import React, { useEffect } from 'react';
import { useTitle } from '@hooks/useTitle';
import { PostsList } from '@components/PostsList/PostsList';
import { MainHeader } from '@components/MainHeader/MainHeader';
import styles from './styles';
import { primaryColor } from 'consts';

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
          fontSize: 20,
          marginTop: 16,
          letterSpacing: 2,
          width: '50%',
        }}
      >
        <h1>Hi, I'm Roberto.</h1>
        I'm a Front End developer specializing in mobile apps development. I was
        working as a
        <span style={{ fontWeight: 'bold' }}>
          {' '}
          native Android developer
        </span>{' '}
        using both Java and Kotlin for 5-6 years until I switched to{' '}
        <span style={{ fontWeight: 'bold' }}>React Native</span> back in 2018.
        Nowadays, I keep deep diving into RN and occasionally sharing my
        thoughts, insights, and experiences working with these technologies. Oh,
        and yes,{' '}
        <span style={{ fontWeight: 'bold' }}>I love Typescript! :)</span>
        <p />I was born and raised in{' '}
        <span style={{ fontWeight: 'bold' }}>Valencia, Venezuela.</span>{' '}
        Currently, I'm based in beautiful{' '}
        <span style={{ fontWeight: 'bold' }}>Barcelona, Spain</span> since 2017.
      </div>
    </div>
  );
};
