import gql from 'graphql-tag'

export const NewsQuery = gql`
  query NewsQuery($name: String!) {
    news(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
          excerpt
          date
        }
      }
    }
  }
`
