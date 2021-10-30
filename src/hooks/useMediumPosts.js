import { useStaticQuery, graphql } from 'gatsby';

export const useMediumPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumFeed {
        nodes {
          author
          link
          title
        }
      }
    }
  `);

  return data.allMediumFeed.nodes;
};
