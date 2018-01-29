import gql from 'graphql-tag'

export const MinorQuery = gql`
  query MinorQuery($name: String!) {
    minors(where: { name: $name }) {
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
