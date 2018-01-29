import gql from 'graphql-tag'

export const AssociateQuery = gql`
  query AssociateQuery($name: String!) {
    associatePrograms(where: { name: $name }) {
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
