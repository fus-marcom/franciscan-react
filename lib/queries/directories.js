import gql from 'graphql-tag'

export const DirectoryQuery = gql`
  query DirectoryQuery($name: String!) {
    directories(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`
