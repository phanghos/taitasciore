import { useStaticQuery, graphql } from 'gatsby';
import { Post } from '../models/Post';

export const useMediumPosts = (): Post[] => {
  const data = useStaticQuery(graphql`
    query {
      allMediumFeed {
        nodes {
          author
          link
          title
          date
        }
      }
    }
  `);

  return data?.allMediumFeed?.nodes || [];
};
