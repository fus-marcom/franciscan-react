import gql from 'graphql-tag'

export const SampleQuery = gql`
  query SampleQuery($name: String!) {
    faculty(where: { name: $name }) {
      edges {
        node {
          id
          title
          slug
          content
          facultyDepartments {
            edges {
              node {
                id
                name
                count
              }
            }
          }
        }
      }
    }
  }
`
