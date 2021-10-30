import React, { useEffect } from 'react';
import { PostsList } from '../components/PostsList/PostsList';
import profileImage from '../images/profile.jpg';

const containerStyle = {
  color: '#334756',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const profileSize = 350;

const headerPadding = 150;

// markup
const IndexPage = () => {
  useEffect(() => {
    document.body.style.margin = 0;
    document.title = 'taitasciore';
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{ backgroundColor: '#F3F0D7' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: headerPadding,
            paddingRight: headerPadding,
            paddingTop: 48,
            paddingBottom: 48,
          }}
        >
          <img
            src={profileImage}
            alt="profile-image"
            style={{
              width: profileSize,
              height: profileSize,
              borderRadius: profileSize / 2,
              marginRight: headerPadding,
              alignSelf: 'center',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              width: '50%',
            }}
          >
            <h1 style={{ marginBottom: 0, marginTop: 0 }}>
              Roberto Tatasciore
            </h1>
            <h3 style={{ marginBottom: 0, marginTop: 8 }}>
              Senior Mobile Engineer
            </h3>
            <div style={{ marginTop: 16, fontStyle: 'italic' }}>
              Initially, a native Android developer. Nowadays, deep diving into
              React (Native) and Typescript and occasionally sharing my
              thoughts, insights, and experiences working with these
              technologies
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: 16 }}>
        <PostsList />
      </div>
    </div>
  );
};

export default IndexPage;
