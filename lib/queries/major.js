import gql from 'graphql-tag'

export const MajorQuery = gql`
  query MajorQuery($name: String!) {
    majors(where: { name: $name }) {
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
